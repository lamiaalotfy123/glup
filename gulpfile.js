const { src, dest, series } = require("gulp");
const htmlmin = require("gulp-html-minifier-terser");
const terser = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const globs = {
    html: "./**/*.html",
    css: "./*.css",
    js: "./*.js",
};

function html() {
    return src(globs.html)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist"));
}
exports.html = html;

function css() {
    return src(globs.css).pipe(cleanCSS()).pipe(dest("dist/styles"));
}
exports.css = css;

function js() {
    return src(globs.js).pipe(terser()).pipe(dest("dist/scripts"));
}
exports.js = js;
exports.default = series(html, css, js);