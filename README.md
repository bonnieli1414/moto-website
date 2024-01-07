# 專案名稱：手機購物網站

## 該專案使用 Gulp 任務自動化管理工具

### 取得專案

```bash
git clone https://github.com/bonnieli1414/project-motoWeb.git
```

### 移動到專案內

```bash
cd project-motoWeb
```

### 安裝套件

需先安裝node.js（node 版本建議安裝 [v14.17.5](https://nodejs.org/en/blog/release/v14.17.5) 版本）。 cmd查看版本指令：node -v

### 安裝指令

```bash
npm install
```

### 運行專案
若沒有安裝過，需要先在本地全局安裝 gulp
```bash
npm i -g gulp
```
請在終端機輸入gulp，執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)。

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:8081
```

## 資料夾說明

該專案預設載入 Bootstrap5 與 jQuery 等。

Gulp 核心原始碼，設置於 `gulpfile.js` 資料夾下的 `index.js`。

相關路徑參數可在 `envOptions.js` 中調整。

## 資料夾結構

```text
app # 原始碼
  ├── assets # 靜態資料
  |     ├── images # 圖片檔案
  |     ├── style # Sass檔案
  |     └── js # JavaScript 檔案
  ├── index.html # 首頁 HTML
  ├── layout.ejs # Layout ejs
gulpfile.js # Gulp 設置
  ├── envOptions.js # Gulp 路徑變數
  └── index.js # Gulp 核心原始碼
```

### gulp打包工具指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
  - 若沒有自動開啟瀏覽器則可手動在瀏覽器上輸入 `http://localhost:8081/`
  - 假使監聽功能無效的話，可以檢查一下是否修改到資料夾的名稱等。
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
  - 若無法部署到 GitHub Pages 的話，可以確定一下是否已經初始化專案等。

### 注意事項

`assets` 底下的資料夾名稱建議不要任意修改，例如：`stlye` 改成 `styles` 又或者是 `scss` 等非原始資料夾名稱。

最主要原因是 Gulp 預設是監聽 `style`、`js`、 `images` 這幾個資料夾路徑底下的檔案，因此若任意修改名稱將可能導致 Gulp 的監聽功能失效或其他不可預期之問題發生。

若對於 Gulp 有一定掌握度則可進入 `gulpfile.js/envOptions.js` 修改相關路徑。

Gulp 的自動更新行為是必須持續開著終端機的，因此若關閉終端機則會失去監聽與自動更新效果，因此在開專案時，請不要關閉運行中的終端機。

## 支援的監聽

目前支援 HTML、ejs、JavaScript、Images、SCSS 監聽並自動重新刷新。

圖片新增時也會自動刷新。

因此是不用使用 `Live Sass Compiler` 的 `Watch SCSS` 功能或是 `Prepros` 等工具來編譯 SCSS。

除此之外 Gulp 本身有支援模擬伺服器，因此不用再次使用一些模擬伺服器的套件，例如：`Preview on Web Server` 套件等。
