const gulp = require('gulp')
const fs = require('fs-extra')
const sharp = require('sharp')

const outputDirectory = './src/generated/images'

gulp.task('createImageJSON', () => (
    fs.emptyDir(outputDirectory)
        .then(() => fs.emptyDir('./src/generated/data'))
        .then(() => fs.readdir('./gulp/templates/data'))
        .then(dataFolders => createJSONFolders(dataFolders, true))
))

gulp.task('createDataJSON', () => (
    fs.ensureDir(outputDirectory)
        .then(() => fs.emptyDir('./src/generated/data'))
        .then(() => fs.readdir('./gulp/templates/data'))
        .then(dataFolders => createJSONFolders(dataFolders, false))
))

function createJSONFolders(dataFolders, saveImages) {
    dataFolders.forEach(folder => 
        fs.readdir(`./gulp/templates/data/${folder}`)
            .then(dataFiles => createDataJSON(folder, dataFiles, saveImages))
            .then(json => fs.writeJSON(`./src/generated/data/${folder}.json`, json)))
}

function createDataJSON(folder, dataFiles, saveImages){
    return new Promise((resolve, reject) => {
        const combinedJSON = {}
        let count = -1;
        const incrementCount = () => {
            count += 1
            if (count === dataFiles.length) {
                resolve(combinedJSON)
            }
        }

        incrementCount()
        dataFiles.forEach(file => {
            const filename = file.substring(1, file.indexOf('.'))

            fs.readJSON(`./gulp/templates/data/${folder}/${file}`)
                .then(data => {
                    if (fs.existsSync(`./gulp/templates/images/${folder}/${file}`)){
                        fs.readJSON(`./gulp/templates/images/${folder}/${file}`).then(images => {
                            combinedJSON[filename] = insertJSONPictureResultsIntoData(data, images, saveImages)
                            incrementCount()
                        })
                    } else {
                        combinedJSON[filename] = data
                        incrementCount()
                    }
            }).catch(err => reject(err))
        })
    })
}

function createPictureSources(item, entry, saveImages) {
    if (entry.imageTemplate.sources) {
        const newImageSet = entry.imageTemplate.sources.map(source => ({
            media: source.media,
            sizes: source.sizes,
            src: source.src,
            srcset: source.srcset.map(srcItem => ({
                src: srcItem.src.replace('[name]', item.name).replace('[extension]', item.extension),
                size: srcItem.size
            }))
        }))

        if (saveImages) {
            newImageSet.forEach(source => {
                source.srcset.forEach(srcItem => {
                    fs.pathExists(`${outputDirectory}/${srcItem.src}`)
                        .then(exists => {
                            if (!exists) {
                                sharp(`./src/assets/images/${source.src}`)
                                    .resize(srcItem.size)
                                    .toFile(`${outputDirectory}/${srcItem.src}`)
                            }
                        })
                })
            })
        }
        
        return newImageSet
    }
}

function createPictureImg(item, entry, saveImages){
    if (entry.imageTemplate.img) { //img
        const imageTemplate = entry.imageTemplate.img
        const newImageSet = {
            src: imageTemplate.src.replace('[name]', item.name).replace('[extension]', item.extension),
            sizes: imageTemplate.sizes,
            alt: entry.alt,
            srcset: imageTemplate.srcset.map(srcItem => ({
                src: srcItem.src.replace('[name]', item.name).replace('[extension]', item.extension),
                size: srcItem.size
            }))
        }

        if (saveImages){
            newImageSet.srcset.forEach(srcItem => {
                fs.pathExists(`${outputDirectory}/${srcItem.src}`)
                    .then(exists => {
                        if (!exists) {
                            sharp(`./src/assets/images/${item.path}`)
                                .resize(srcItem.size)
                                .toFile(`${outputDirectory}/${srcItem.src}`)
                        }
                    })
            })
        }

        return newImageSet
    }
}

function createPictureResultPortion(entry, item, saveImages){
    const resultPortion = {
        src: item.name + item.extension,
        alt: entry.alt + (item.index ? " " + item.index : "")
    }

    if (entry.imageTemplate){
        resultPortion.sources = createPictureSources(item, entry, saveImages)
        resultPortion.img = createPictureImg(item, entry, saveImages)
    }

    if (saveImages) {
        fs.pathExists(`${outputDirectory}/${resultPortion.src}`)
            .then(exists => { 
                if(!exists){
                    sharp(`./src/assets/images/${item.path}`).toFile(`${outputDirectory}/${resultPortion.src}`) 
                }
            })            
    }

    return resultPortion
}

function createResultPortions(resultPortion, entry, saveImages){
    if (Array.isArray(entry.files)) {
        resultPortion.images = []
        entry.files.forEach((item, index) => {
            const source = { 
                index: index + 1,
                path: item,
                name: item.slice(item.indexOf('/') + 1, item.indexOf('.')), 
                extension: item.slice(item.indexOf('.')) 
            }
            resultPortion.images.push(createPictureResultPortion(entry, source, saveImages))
        })
    } else {
        const source = { 
            path: entry.files,
            name: entry.files.slice(entry.files.indexOf('/') + 1, entry.files.indexOf('.')), 
            extension: entry.files.slice(entry.files.indexOf('.')) 
        }
        resultPortion.images = createPictureResultPortion(entry, source, saveImages)
    }
    return resultPortion
}

function createJSONPictureResults(images, saveImages) {
    const result = []
    images.items.forEach(entry => {
        if (entry.set) {
            entry.set.forEach((setItem, index) => {
                result.push(createResultPortions(
                    { path: entry.path.replace('[]', index) },
                    setItem, saveImages))
            })
        } else {
            result.push(createResultPortions(
                { path: entry.path }, 
                entry, saveImages))
        }
    })

    return result
}

function insertJSONPictureResultsIntoData(dataJSON, imageJSON, saveImages){
    const images = createJSONPictureResults(imageJSON, saveImages)
    images.forEach(item => {
        index(dataJSON, item.path, item.images)
    })
    return dataJSON
}

function index(obj, is, value) {
    if (typeof is == 'string')
        return index(obj, is.split('.'), value);
    else if (is.length == 1 && value !== undefined)
        return obj[is[0]] = value;
    else if (is.length == 0)
        return obj;
    else
        return index(obj[(isNaN(is[0]) ? is[0] : parseInt(is[0]))], is.slice(1), value);
}