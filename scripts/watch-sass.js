const { execSync } = require('child_process');
const fs = require('fs');
const glob = require('glob');

const regexp  = /\.scss$/;
const sassDir = "src/assets/scss/";
let sassFiles = "";

new glob.Glob(`${sassDir}**/*.scss`, {}, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            if (regexp.test(file) && file != `${sassDir}style.scss`) {
                sassFiles += `@use "${file.replace(sassDir, '')}";\n`;
            }
        });

        fs.writeFileSync(`${sassDir}style.scss`, sassFiles);

        execSync('npm run sass');
    }
});