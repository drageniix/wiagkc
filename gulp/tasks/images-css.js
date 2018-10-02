const gulp = require('gulp')
const fs = require('fs-extra')
const sharp = require('sharp')

const outputDirectory = './src/generated/images-css'

gulp.task('createImageCSSJSON', () => fs.emptyDir(outputDirectory)
    .then(() => fs.readJSON('./gulp/templates/styles/_images-css.json'))
    .then(json => createCSSImageFiles(json)))

function createCSSImageFiles(json) {
    return new Promise((resolve, reject) => {
        json.items.forEach(item => {
            item.files.forEach(src => {
                const source = { 
                    name: src.slice(src.indexOf('/') + 1, src.indexOf('.')), 
                    extension: src.slice(src.indexOf('.')) 
                }

                fs.pathExists(`${outputDirectory}/${source.name}${source.extension}`).then(exists => {
                    if (!exists) {
                        sharp(`./src/assets/images-css/${src}`)
                            .toFile(`${outputDirectory}/${source.name}${source.extension}`)
                    }
                }).then(() => {
                    if (item.alternates) {
                        item.alternates.forEach(alter => {
                            sharp(`./src/assets/images-css/${src}`)
                                .resize(alter.size)
                                .toFile(`${outputDirectory}/${alter.filename.replace('[name]', source.name).replace('[extension]', source.extension)}`)
                        })
                    }
                }).catch(err => reject(err))
            })
        })
        resolve()
    })
}