import gulp from "gulp";
import del from "del";

// PATH variables
const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss"
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js"
  }
};

// This cleans the build static JS / CSS files before building
const clean = () => del([paths.js.dest, paths.styles.dest]);

// TODO Create Build Flow for Styles
// const styles = () =>
//   gulp
//     .src(paths.styles.src)
//     .pipe(sass())
//     .pipe(
//       autoprefixer({
//         cascade: false
//       })
//     )
//     .pipe(minifyCSS())
//     .pipe(gulp.dest(paths.styles.dest));

// TODO Create Build Flow for JS
// const js = () =>
//   gulp
//     .src(paths.js.src)
//     .pipe(
//       bro({
//         entries: paths.js.src,
//         debug: true,
//         transform: [
//           babelify.configure({
//             presets: ["@babel/preset-env"]
//           })
//         ]
//       })
//     )
//     .pipe(gulp.dest(paths.js.dest));

// const watchFiles = () => {
//   gulp.watch(paths.styles.watch, styles);
//   gulp.watch(paths.js.watch, js);
// };

// const dev = gulp.series([clean, styles, js, watchFiles]);

// export const build = gulp.series(clean, styles, js);

// export default dev;
