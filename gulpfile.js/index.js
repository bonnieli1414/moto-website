// gulp 套件
const gulp = require('gulp');
// 整合可支援開頭是 gulp-XX 套件
const $ = require('gulp-load-plugins')({ lazy: false });
// 自動幫CSS加上前輟詞套件
const autoprefixer = require('autoprefixer');
// 解析命令行傳遞參數用套件
// 區分出 development 與 production 環境分別運行那些套件
const minimist = require('minimist');
// 瀏覽器同步檢視(自動刷新)套件
const browserSync = require('browser-sync').create();
// envOptions檔案
const { envOptions } = require('./envOptions');

// 取得命令行傳遞參數
let options = minimist(process.argv.slice(2), envOptions);

//現在開發狀態
console.log(`Current mode：${options.env}`);

function copyFile() {
  // 來源檔案
  return gulp.src(envOptions.copyFile.src)
    // 輸出位置
    .pipe(gulp.dest(envOptions.copyFile.path))
    // 監控檔案變動，執行完編譯工作，最後重整網頁
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

// 將前端模板引擎轉為HTML，自動渲染畫面
function layoutHTML() {
  return gulp.src(envOptions.html.src)
    // 捕獲錯誤訊息，防止 Gulp 因錯誤中斷
    .pipe($.plumber())
    // 將 front-matter (yaml 格式)轉成 轉成 JS 物件
    .pipe($.frontMatter())
    // 組合 JS 物件和 ejs 模板，產生HTML文件
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      })
    )
    .pipe(gulp.dest(envOptions.html.path))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

// 生成編譯後的CSS，自動更新樣式
function sass() {
  const plugins = [
    autoprefixer(),
  ];
  return gulp.src(envOptions.style.src)
    // 使用 Gulp 插件 gulp-sourcemaps 生成 sourcemap
    .pipe($.sourcemaps.init())
    // 將 Sass 編譯成CSS
    .pipe($.sass().on('error', $.sass.logError))
    // 自動添加 CSS 前綴 
    .pipe($.postcss(plugins))
    // 將 sourcemap 寫入 css.map
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(envOptions.style.path))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

// 將ES6轉為瀏覽器可運行代碼
function babel() {
  return gulp.src(envOptions.javascript.src)
    // 初始化 sourcemaps
    .pipe($.sourcemaps.init())
    // 編譯 ES6 
    .pipe($.babel({
      presets: ['@babel/env'],
    }))
    // 為提升效能，將所有javascript合併在一起
    .pipe($.concat(envOptions.javascript.concat))
    // 將 sourcemap 寫入 javascript.map
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(envOptions.javascript.path))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

// 合併輸出 JavaScript 函式庫和插件
function vendorsJs() {
  return gulp.src(envOptions.vendors.src)
    .pipe($.concat(envOptions.vendors.concat))
    .pipe(gulp.dest(envOptions.vendors.path));
}

// 啟動伺服器
function browser() {
  browserSync.init({
    server: {
      baseDir: envOptions.browserDir,
    },
    port: 8080,
  });
}

// 刪除指定的檔案
function clean() {
  return gulp.src(envOptions.clean.src, {
    read: false,
    allowEmpty: true,
  })
    .pipe($.clean());
}

// 將指定的檔案發佈到 GitHub Pages
function deploy() {
  return gulp.src(envOptions.deploySrc)
    .pipe($.ghPages());
}

// 監聽指定的檔案，將對應的任務與其綁定起來。
function watch() {
  gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
  gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
  gulp.watch(envOptions.javascript.src, gulp.series(babel));
  gulp.watch(envOptions.img.src, gulp.series(copyFile));
  gulp.watch(envOptions.style.src, gulp.series(sass));
}

exports.deploy = deploy;

exports.clean = clean;

exports.build = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs);

exports.default = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs, gulp.parallel(browser, watch));
