const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const fs = require('fs-extra')

const outputDirectory = './src/generated'

gulp.task('cleanSprites', () => fs.emptyDir(`${outputDirectory}/css`))

const config = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 48,
            maxHeight: 48
        }
    },
    mode: {
        view: { // Activate the «view» mode
            bust: false,
            sprite : "../assets/images/svg/sprite.view.svg",
            render: {
                scss: true // Activate Sass output (with default options)
            }
        },
    }
};

gulp.task('createSprites', gulp.series('cleanSprites', function createSVGSprite(){
    return gulp.src('./src/assets/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest(outputDirectory))
}))