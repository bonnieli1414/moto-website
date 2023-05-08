"use strict"; // AOS 套件

AOS.init(); // swiper套件

var swiper = new Swiper(".renderSwiper", {
  // 每個視圖的幻燈片數
  slidesPerView: "auto",
  // 移動幻燈片之間的距離
  // 與margin的css屬性衝突
  spaceBetween: 1,
  // 當滑鼠懸停在 Swiper 上時，
  // 將顯示"抓取"光標
  grabCursor: true,
  // 分頁 
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/**
 * header區域
 */
// 滾輪條大於0觸發，改變navbar字體顏色

function changeHeaderNavColor() {
  $(window).scrollTop() > 0 ? $('nav').removeClass('text-light') : $('nav').addClass('text-light');
} // 滾輪條大於0觸發，改變header背景顏色


function changeHeaderBgColor() {
  $(window).scrollTop() > 0 ? $('header').addClass('bg-light').addClass('shadow-c') : $('header').removeClass('bg-light').removeClass('shadow-c');
} // 滾輪條大於0觸發，改變logo顏色


function changeHeaderLogoColor() {
  $(window).scrollTop() > 0 ? $('.logo').attr('src', './assets/images/Motorola_Logo_Black.png') : $('.logo').attr('src', './assets/images/Motorola_Logo_White.png');
} // 滾輪條大於0觸發，改變漢堡選單的bar顏色


function changeHamColor() {
  $(window).scrollTop() > 0 ? $('.ham-bar').css('background-color', '#212529') : $('.ham-bar').css('background-color', '#f8f9fa');
} // header區域的轉場時間


function headerTransition() {
  $('header').css('transition', '0.8s');
} // 側邊欄樣式
// 開啟側邊欄子選單


function offcanvasOpen(e) {
  e.preventDefault();
  $('.offcanvas-right-child').toggleClass('d-none');
  $('header .offcanvas-right .chevron_right').toggleClass('js-rotate');
} // click側邊欄子選單觸發


function clickOffcanvas() {
  $('.offcanvas-parent').on('click', offcanvasOpen);
} // 關閉側邊欄子選單


function offcanvasClose() {
  $('.offcanvas-right-child').addClass('d-none');
  $('header .offcanvas-right .chevron_right').removeClass('js-rotate');
} // click漢堡選單觸發


function clickHamMenu() {
  $('.ham-menu').on('click', offcanvasClose);
}
/**
 * 個別body區域
 */
// 滾輪條遇到各元素在視窗中間觸發，由不透明轉透明


function fadeIn() {
  $('.js-fadeIn').each(function (index, item) {
    var cardOffset = $(item).offset().top;
    $(window).scrollTop() > cardOffset - $(window).height() * 0.5 ? $(item).css('opacity', '1') : $(item).css('opacity', '0.5');
  });
} // 滾輪條遇到各元素在視窗中間觸發，往上移動30px


function upPosition() {
  $('.js-upPosition').each(function (index, item) {
    var cardOffset = $(item).offset().top;
    $(window).scrollTop() > cardOffset - $(window).height() * 0.5 ? $(item).css('transform', 'translateY(-30px)') : '';
  });
} // 滾輪條遇到各元素在視窗中間觸發，圖片放大


function scaleBig() {
  $('.js-scaleBig').each(function (index, item) {
    var scaleBig = $(item).offset().top;
    $(window).scrollTop() > scaleBig - $(window).height() * 0.5 ? $(item).css('transform', 'scale(2)') : $(item).css('transform', 'scale(1.2)');
  });
} // 滾輪條遇到各元素在視窗中間觸發，圖片縮小


function scaleSmall() {
  $('.js-scaleSmall').each(function (index, item) {
    var scaleSmall = $(item).offset().top;
    $(window).scrollTop() > scaleSmall - $(window).height() * 0.5 ? $(item).css('transform', 'scale(0.8)') : $(item).css('transform', 'scale(1)');
  });
} // click事件，從PhoneData物件篩選不同機型


function filterPhoneDataClick() {
  var _this = this;

  $('.header').on('click', function (e) {
    e.preventDefault();

    switch (e.target.dataset.series) {
      case 'edge':
        var edgeData = _this.data.filter(function (item) {
          return item.name.includes("edge");
        });

        _this.productToHTML(edgeData);

        break;

      case 'razr':
        var razrData = _this.data.filter(function (item) {
          return item.name.includes("razr");
        });

        _this.productToHTML(razrData);

        break;

      case 'one':
        var oneData = _this.data.filter(function (item) {
          return item.name.includes("motorola one");
        });

        _this.productToHTML(oneData);

        break;

      case 'e':
        var eData = _this.data.filter(function (item) {
          return item.name.includes("moto e");
        });

        _this.productToHTML(eData);

        break;

      case 'g':
        var gData = _this.data.filter(function (item) {
          return item.name.includes("moto g");
        });

        _this.productToHTML(gData);

        break;

      case 'all':
        _this.productToHTML(_this.data);

        break;

      default:
        break;
    }
  });
} // 回到頂端圖標


function showArrowUp() {
  $(window).scrollTop() > 0 ? $('.arrowUp').css('display', 'block') : $('.arrowUp').css('display', 'none');
}

function upTop() {
  $('html, body').scrollTop(0);
} // 滾輪條事件


$(window).scroll(function () {
  // header區域
  changeHeaderNavColor();
  changeHeaderBgColor();
  changeHeaderLogoColor();
  changeHamColor();
  headerTransition(); // body個別區域

  fadeIn();
  upPosition();
  scaleSmall();
  scaleBig(); // 回到頂端圖標的顯示與否

  $(window).on('scroll', showArrowUp);
});
$(document).ready(function () {
  clickOffcanvas();
  clickHamMenu(); // 點擊圖標回到頁面上方

  $('.arrowUp').on('click', upTop);
});
"use strict"; // 備份檔，以防止ajax失敗仍可顯示商品至畫面

var phoneBackupData = [{
  "buildTime": 1674631661.376766,
  "category": "手機類",
  "description": "拍出絕佳美照。用 EDGE 秀出真本領。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 400,
  "name": "motorola edge 30",
  "no": "P00001",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155679/Motorola-edge-30-pdp-render-Silence-12-bcxm87y2.png?v=637879325266470000",
  "price": 11990,
  "sale": 9900,
  "supplier": "S00001",
  "updateTime": 1674631661.376766
}, {
  "buildTime": 1674631772.4870412,
  "category": "手機類",
  "description": "盡情發揮超群效能。用 EDGE 秀出真本領。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 200,
  "name": "motorola edge 30 pro",
  "no": "P00002",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155673/motorola-edge30-pro-pdp-render-Cosmos-3-we9qp5nm--1-.png?v=637879314056400000",
  "price": 21990,
  "sale": 19100,
  "supplier": "S00001",
  "updateTime": 1674631772.4870412
}, {
  "buildTime": 1674631888.1831582,
  "category": "手機類",
  "description": "創新，永不停歇。用 EDGE 秀出真本領。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "motorola edge 20 pro",
  "no": "P00003",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155585/motorola-edge-20-pro-pdp-kv-render-1-Thunder-black-7n9thtne.png?v=637656108041370000",
  "price": 17990,
  "sale": 13290,
  "supplier": "S00001",
  "updateTime": 1674631888.1831582
}, {
  "buildTime": 1674631980.2898138,
  "category": "手機類",
  "description": "永不停止探索。用 EDGE 秀出真本領。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "motorola edge 20 fusion",
  "no": "P00004",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155586/motorola-edge-20-lite-fusion-pdp-ecom-render-1-rrfe2an6.png?v=637656109520270000",
  "price": 9990,
  "sale": 7800,
  "supplier": "S00001",
  "updateTime": 1674631980.2898138
}, {
  "buildTime": 1674632323.0882797,
  "category": "手機類",
  "description": "6.5吋真全視界FHD+螢幕\n6400萬畫素超高解析度主相機",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "motorola one hyper",
  "no": "P00005",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155410/155396.png?v=637225354455530000",
  "price": 8900,
  "sale": 7100,
  "supplier": "S00001",
  "updateTime": 1674632323.0882797
}, {
  "buildTime": 1674632452.1177979,
  "category": "手機類",
  "description": "使用4800萬畫素主相機搭配夜視功能，可以在低光源環境下拍攝出鮮明生動逼真的照片和影片。\n隨時捕捉最微小的細節，並享受4倍低光源敏感度帶來的完美自拍照。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "motorola one vision plus",
  "no": "P00006",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155444/155934-800-auto.png?v=637291003785830000",
  "price": 6900,
  "sale": 2760,
  "supplier": "S00001",
  "updateTime": 1674632452.1177979
}, {
  "buildTime": 1674632676.6531076,
  "category": "手機類",
  "description": "10W 快速充電盒\n體驗比普通相機近 5 倍的拍攝效果，捕捉最精細的細節。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "motorola one macro",
  "no": "P00007",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155395/155396.png?v=637206369847930000",
  "price": 6990,
  "sale": 6990,
  "supplier": "S00001",
  "updateTime": 1674632676.6531076
}, {
  "buildTime": 1674632843.8148088,
  "category": "手機類",
  "description": "隆重推出 moto e32 - 擁有它，即擁有最時尚的手機。除了設計簡潔之外，還配備驚艷動人的螢幕顯示，以及可快速對焦的三相機系統。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto e32 4g",
  "no": "P00008",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155713/moto-E32-pdp-kv-render6bcn0ere--1-.png?v=637987854170230000",
  "price": 3990,
  "sale": 3990,
  "supplier": "S00001",
  "updateTime": 1674632843.8148088
}, {
  "buildTime": 1674647545.9023774,
  "category": "手機類",
  "description": "擴大您的想像力",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto e40",
  "no": "P00009",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155622/Moto-E40-pdp-kv-renderllg4f55o.png?v=637715494477500000",
  "price": 3990,
  "sale": 3192,
  "supplier": "S00001",
  "updateTime": 1674647545.9023774
}, {
  "buildTime": 1674647607.372374,
  "category": "手機類",
  "description": "日以繼夜的超長續航力。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto e7i power",
  "no": "P00010",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155618/Moto-e7-Power-pdp-kv-render-1-%E2%80%93-1.png?v=637677158989130000",
  "price": 2990,
  "sale": 2990,
  "supplier": "S00001",
  "updateTime": 1674647607.372374
}, {
  "buildTime": 1674647682.9313316,
  "category": "手機類",
  "description": "6.1吋Max Vision超大視界螢幕\n疾速對焦1300萬畫素相機與景深感應器\n快速反應的2.0 GHz 八核心處理器",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto e6s",
  "no": "P00011",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155414/moto-E6S-pdp-render-3.png?v=637262467348130000",
  "price": 3990,
  "sale": 3192,
  "supplier": "S00001",
  "updateTime": 1674647682.9313316
}, {
  "buildTime": 1674647756.5956428,
  "category": "手機類",
  "description": "1300 萬畫素後置雙鏡頭相機能讓你輕鬆拍攝照片與發揮創造力在6.1吋超大視界 (19.5:9) 螢幕上觀看您所拍攝的作品。\n小巧到可單手操作，超大寬螢幕，觀看時可以減少滑動次數。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto e6 plus",
  "no": "P00012",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155409/155403.png?v=637209145256270000",
  "price": 6990,
  "sale": 6990,
  "supplier": "S00001",
  "updateTime": 1674647756.5956428
}, {
  "buildTime": 1674647862.2263422,
  "category": "手機類",
  "description": "外型搶眼，音效驚艷。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g62 5g",
  "no": "P00013",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155664/Moto-G62-5G-pdp-render-Midnight-4-1mriwslv.png?v=637874591067500000",
  "price": 6990,
  "sale": 5500,
  "supplier": "S00001",
  "updateTime": 1674647862.2263422
}, {
  "buildTime": 1674647917.7434926,
  "category": "手機類",
  "description": "想要一支擁有強大相機的 OLED 智慧型手機嗎?moto g82 5G 就是最佳選擇。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "motorola moto g82 5g",
  "no": "P00014",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155669/Moto-G82-5G-pdp-render-Electro-Optic-White-4-w6q5a2js.png?v=637877114398530000",
  "price": 9990,
  "sale": 8290,
  "supplier": "S00001",
  "updateTime": 1674647917.7434926
}, {
  "buildTime": 1674647985.9222944,
  "category": "手機類",
  "description": "全新體驗大躍進",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g51 5g",
  "no": "P00015",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155643/Moto-G51-5G-pdp-render-Horizon-Blue-4-wvl55ysl.png?v=637781312183730000",
  "price": 6990,
  "sale": 5500,
  "supplier": "S00001",
  "updateTime": 1674647985.9222944
}, {
  "buildTime": 1674648056.5799332,
  "category": "手機類",
  "description": "照亮你的視野",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g31",
  "no": "P00016",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155640/Moto-G31-pdp-kv-rendern129pb1w.png?v=637773924430530000",
  "price": 5990,
  "sale": 4792,
  "supplier": "S00001",
  "updateTime": 1674648056.5799332
}, {
  "buildTime": 1674648101.3721573,
  "category": "手機類",
  "description": "想試試 5G 極速狂飆嗎？沒問題！",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto g50 5g",
  "no": "P00017",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155587/moto-G50-5G-pdp-kv-render-MeteoriteGrey-1-q9l1lp3z.png?v=637656759683670000",
  "price": 5990,
  "sale": 5990,
  "supplier": "S00001",
  "updateTime": 1674648101.3721573
}, {
  "buildTime": 1674648164.9241116,
  "category": "手機類",
  "description": "您想要的是卓越的性能嗎？\n那就一次滿足您所要的卓越。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g30",
  "no": "P00018",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155575/Moto-G30-pdp-kv-render-1-b1poazig.png?v=637521699226030000",
  "price": 7990,
  "sale": 6090,
  "supplier": "S00001",
  "updateTime": 1674648164.9241116
}, {
  "buildTime": 1674648226.930363,
  "category": "手機類",
  "description": "您想要做更多的探索嗎？\n有了 moto g10 就可無限地探索！",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g10",
  "no": "P00019",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155567/moto-g-10-ecom-card-pdp-render-kv-1-qikzw2ze.png?v=637511341930300000",
  "price": 5990,
  "sale": 3990,
  "supplier": "S00001",
  "updateTime": 1674648226.930363
}, {
  "buildTime": 1674648288.739655,
  "category": "手機類",
  "description": "盡享高速體驗",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g 5g plus",
  "no": "P00020",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155545/moto-g5g-plus-pdp-kv-render-1zahzkwib.png?v=637405045141130000",
  "price": 13990,
  "sale": 5596,
  "supplier": "S00001",
  "updateTime": 1674648288.739655
}, {
  "buildTime": 1674648345.0772827,
  "category": "手機類",
  "description": "您的需求、一次滿足",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g9 play",
  "no": "P00021",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155526/moto-G9-Play-pdp-kv-render-1l3p7u68p.png?v=637396532810570000",
  "price": 4990,
  "sale": 3992,
  "supplier": "S00001",
  "updateTime": 1674648345.0772827
}, {
  "buildTime": 1674648400.4201846,
  "category": "手機類",
  "description": "您的需求、一次滿足",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g⁹ plus",
  "no": "P00022",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155531/moto-g9-plus-pdp-kv-render-13fn1y1kf.png?v=637398993408130000",
  "price": 9900,
  "sale": 3996,
  "supplier": "S00001",
  "updateTime": 1674648400.4201846
}, {
  "buildTime": 1674648493.056299,
  "category": "手機類",
  "description": "g8P更豐富充沛的娛樂內容\n超大容量的 5000 mAh 電池只要充電一次，就能擁有滿滿 2天的電力*\n多元的1600萬畫素三相機系統搭配快速對焦、微距鏡頭及景深感應鏡頭，拿起手機就能拍出絕佳美照。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "moto g8 power lite",
  "no": "P00023",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155441/155832-800-auto.png?v=637265881040630000",
  "price": 5990,
  "sale": 4400,
  "supplier": "S00001",
  "updateTime": 1674648493.056299
}, {
  "buildTime": 1674648542.8763907,
  "category": "手機類",
  "description": "採用業界領先的5000mAh大容量電池，充滿電後最長可享有60小時的使用時間。此外，透過15W turbopower充電，只需15分鐘就可以使用9小時。\n親身體驗Qualcomm Snapdragon 632 八核心處理器、搭配4GB RAM和Android 9 Pie所帶來的極致效能。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto g7 power",
  "no": "P00024",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155401/155412.png?v=637206409926930000",
  "price": 7490,
  "sale": 7490,
  "supplier": "S00001",
  "updateTime": 1674648542.8763907
}, {
  "buildTime": 1674648615.9135392,
  "category": "手機類",
  "description": "任何光源下都能拍出無比清晰的相片，更內建 AI 智慧，能夠辨識地標以及用臉孔將手機解鎖。\n在精緻的全新窄邊框 5.9 吋 Max Vision 超大視界螢幕上，以 18:9 長寬比享受您最喜愛的內容。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto g6 plus",
  "no": "P00025",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155405/155417.png?v=637206424197730000",
  "price": 9990,
  "sale": 9990,
  "supplier": "選擇",
  "updateTime": 1674648615.9135392
}, {
  "buildTime": 1674648675.2573764,
  "category": "手機類",
  "description": "在長寬比為 18:9 的 5.7 吋 Full HD+ 螢幕上享受無邊際的瀏覽體驗。\n有了雙鏡頭後置相機和包羅萬象的各種工具 (從精緻的人像到逗趣的臉部濾鏡)，您可以盡情揮灑創意。",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 0,
  "name": "moto g6",
  "no": "P00026",
  "online": false,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155407/158161.png?v=637206436195570000",
  "price": 7990,
  "sale": 7990,
  "supplier": "S00001",
  "updateTime": 1674648675.2573764
}, {
  "buildTime": 1674648841.3060968,
  "category": "手機類",
  "description": "小小機身，大大威力",
  "finishDegree": "成品",
  "haveBOM": [],
  "inventory": 100,
  "name": "razr 5g",
  "no": "P00027",
  "online": true,
  "picture": "https://motorolatw.vtexassets.com/arquivos/ids/155554/odyssey-razr-5g-pdp-kv-render-1topuupn8.png?v=637405120954500000",
  "price": 49888,
  "sale": 29990,
  "supplier": "S00001",
  "updateTime": 1674648841.3060968
}]; // 進入網站時，先載入資料並賦予至PhoneData物件儲存

var PhoneData = {
  "data": '',
  "apiUrl": "http://127.0.0.1:5000/api/user/products/all",
  "ajaxDataFn": function ajaxDataFn() {
    var _this = this;

    $.ajax({
      "url": this.apiUrl,
      "method": "GET"
    }).done(function (res) {
      _this.data = res.message;
      console.log('資料取得成功', _this.data); // 篩選資料

      var phone_razr = _this.data.filter(function (item) {
        return item.name.includes('razr');
      });

      var phone_edge = _this.data.filter(function (item) {
        return item.name.includes('edge');
      });

      var phone_one = _this.data.filter(function (item) {
        return item.name.includes('motorola one');
      });

      var phone_moto_e = _this.data.filter(function (item) {
        return item.name.includes('moto e');
      });

      var phone_moto_g = _this.data.filter(function (item) {
        return item.name.includes('moto g');
      });

      _this.filterPhoneDataClick('.phone .section-top'); // 因為以下都會跳轉，所以需一一呼叫


      _this.productToHTML(_this.data, '.phone_all .allPhone');

      _this.productToHTML(phone_razr, '.phone_razr .allPhone');

      _this.productToHTML(phone_edge, '.phone_edge .allPhone');

      _this.productToHTML(phone_one, '.phone_one .allPhone');

      _this.productToHTML(phone_moto_e, '.phone_moto_e .allPhone');

      _this.productToHTML(phone_moto_g, '.phone_moto_g .allPhone'); // filterProductToHTML(this.data)


      clickBuy(_this.data);
    }).fail(function (jqXHR, errorMsg) {
      _this.data = phoneBackupData;
      console.log('錯誤', jqXHR.responseJSON, errorMsg);
      console.log('備份檔案', _this.data); // 篩選資料

      var phone_razr = _this.data.filter(function (item) {
        return item.name.includes('razr');
      });

      var phone_edge = _this.data.filter(function (item) {
        return item.name.includes('edge');
      });

      var phone_one = _this.data.filter(function (item) {
        return item.name.includes('motorola one');
      });

      var phone_moto_e = _this.data.filter(function (item) {
        return item.name.includes('moto e');
      });

      var phone_moto_g = _this.data.filter(function (item) {
        return item.name.includes('moto g');
      });

      _this.filterPhoneDataClick('.phone .section-top'); // 因為以下都會跳轉，所以需一一呼叫


      _this.productToHTML(_this.data, '.phone_all .allPhone');

      _this.productToHTML(phone_razr, '.phone_razr .allPhone');

      _this.productToHTML(phone_edge, '.phone_edge .allPhone');

      _this.productToHTML(phone_one, '.phone_one .allPhone');

      _this.productToHTML(phone_moto_e, '.phone_moto_e .allPhone');

      _this.productToHTML(phone_moto_g, '.phone_moto_g .allPhone'); // filterProductToHTML(this.data)


      clickBuy(_this.data);
    });
  }
}; // 手機機型初始化

PhoneData.stateInit = function () {
  // 取得資料
  this.ajaxDataFn();
}; // 畫面，商品資料渲染


PhoneData.productToHTML = function (data, ouptputEl) {
  if (typeof data === 'string') {
    console.log('資料尚未取完');
    return;
  }

  var str = '';
  data.forEach(function (item) {
    var text = item.description.length > 32 ? item.description.substr(0, 32) + ' ...' : item.description;
    str += "<div class=\"card\">\n                <div class=\"card-frame\" style=\"max-width: 400px;\">\n                    <a href=\"#\"><img class=\"card-img-top\"\n                            src=\"".concat(item.picture, "\"\n                            alt=\"").concat(item.name, "\"></a>\n                </div>\n                <div class=\"card-body\">\n                    <h3 class=\"text-center\" style=\"height: 65px;\">").concat(item.name, "</h3>\n                    <p class=\"card-text my-3\" style=\"height: 65px;\">").concat(text, "</p>\n                    <a href=\"../../products.html\" class=\"btn btn-primary w-100 py-2\" data-btn=\"").concat(item.name, "\">\u8CFC\u8CB7</a>\n                </div>\n            </div>");
  });
  $(ouptputEl).html(str);
}; // 手機頁面的click事件，從PhoneData物件篩選不同機型


PhoneData.filterPhoneDataClick = function (el) {
  var _this2 = this;

  $(el).on('click', function (e) {
    e.preventDefault();

    switch (e.target.dataset.series) {
      case 'edge':
        var edgeData = _this2.data.filter(function (item) {
          return item.name.includes("edge");
        });

        _this2.productToHTML(edgeData, '.phone .allPhone');

        break;

      case 'razr':
        var razrData = _this2.data.filter(function (item) {
          return item.name.includes("razr");
        });

        _this2.productToHTML(razrData, '.phone .allPhone');

        break;

      case 'one':
        var oneData = _this2.data.filter(function (item) {
          return item.name.includes("motorola one");
        });

        _this2.productToHTML(oneData, '.phone .allPhone');

        break;

      case 'e':
        var eData = _this2.data.filter(function (item) {
          return item.name.includes("moto e");
        });

        _this2.productToHTML(eData, '.phone .allPhone');

        break;

      case 'g':
        var gData = _this2.data.filter(function (item) {
          return item.name.includes("moto g");
        });

        _this2.productToHTML(gData, '.phone .allPhone');

        break;

      case 'all':
        _this2.productToHTML(_this2.data, '.phone .allPhone');

        break;

      default:
        break;
    }
  });
}; // 點選購買按鈕事件


function clickBuy(data) {
  $('.allPhone .card-body .btn').on('click', function (e) {
    getDataset(e, data);
  });
} // 取得dataset


function getDataset(e, data) {
  e.preventDefault();
  filterProductToHTML(e, data, e.target.dataset.btn);
  backTotop();
} // 將dataset資料比對後，選染在畫面上


function filterProductToHTML(e, data, dataset) {
  var str = "";
  data.forEach(function (item) {
    if (dataset === item.name) {
      str += "\n            <div id=\"products\" class=\"product bg-theme101-color text-light\" style=\"padding: 140px 0px;\">\n            <!-- backToTop\u5716\u6A19 -->\n    <div class=\"arrowUp bg-light\"></div>\n    <main id=\"top\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-lg-7\"><img src=\"".concat(item.picture, "\" alt=\"\"></div>\n                <ul class=\"col-10 col-lg-5\">\n                    <li>\n                        <h3 class=\"pb-3\" style=\"padding-top: 4rem;\">").concat(item.name, "</h3>\n                    </li>\n                    <li>\n                        <p class=\"py-2\">").concat(item.description, "</p>\n                    </li>\n                    <li>\n                        <p class=\"py-2\">\u539F\u50F9\uFF1A").concat(item.price, "\u5143</p>\n                    </li>\n                    <li>\n                        <p class=\"py-2\">\u512A\u60E0\u50F9\uFF1A").concat(item.sale, "</p>\n                    </li>\n                    <hr>\n                    <li>\n                        <input class=\"py-1 my-2\" type=\"number\" class=\"form-control shadow-none\" value=\"1\">\n                        <input class=\"btn btn-dark mx-2 my-5\" type=\"button\" value=\"\u52A0\u5165\u8CFC\u7269\u8ECA\">\n                    </li>\n                </ul>\n            </div>\n            <div class=\"row\">\n                <nav>\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n                        <button class=\"nav-link active\" id=\"nav-detail-tab\" data-bs-toggle=\"tab\"\n                            data-bs-target=\"#nav-detail\" type=\"button\" role=\"tab\" aria-controls=\"nav-detail\"\n                            aria-selected=\"true\">\u7522\u54C1\u7D30\u7BC0</button>\n                    </div>\n                </nav>\n                <div class=\"tab-content py-2\" id=\"nav-tabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"nav-detail\" role=\"tabpanel\"\n                        aria-labelledby=\"nav-detail-tab\">\n                        Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut\n                        enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n                        in voluptate velit esse cillum dolore eu fugiat nulla paExcepteur sint occaecat cupidatat non\n                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. iatis unde omnis iste\n                        natus error sit voluptatem accusantium\n\n                        Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut\n                        enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n</div>\n    ");
    }
  });
  $('.phone').html(str);
} // 回到頁面頂端


function backTotop() {
  Number($(window).scrollTop()) > 0 ? $('html, body').scrollTop(0) : "";
}

PhoneData.stateInit();
"use strict"; // 門市資料物件

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StoreData = {
  "Motorola 掛招經銷商門市": {
    "縣市": ["台北市", "新北市", "台中市", "台南市", "高雄市"],
    "門市": ["京鑫通訊 - 台北市士林區天母西路77號 / 02-2876-8966", "全民通信 - 新北市三重區正義北路360號 / 02-8981-8989", "佶事通訊 - 新北市新店區北新路三段140號 / 02-2915-0000", "巨將通訊器材行 - 新北市新莊區民安路162號 / 02-2202-9898", "欣通電話器材行 - 新北市新店區北新路二段161號 / 02-2917-6655", "龍昇通訊社 - 新北市三重區三和路二段2號 / 02-2977-8277", "勁宇通信行 - 台中市西區民生路37-1號 / 04-2227-7118", "尚欣通訊行 - 台南市中西區永華路一段54號 / 06-2281826", "大志通訊有限公司 - 高雄市仁武區鳳仁路42號 / 07-3723758", "寶碁有限公司 - 高雄市鳳山區五甲二路598之1號 / 07-8412858", "大中通信科技有限公司 - 高雄市鳳山區光復路一段69號 / 07-7470622", "南站通信 - 高雄市前金區成功一路435號 / 07-2619777"]
  },
  "全省": ["台灣大哥大 掛招門市 / 0809-000-852 / 02-6606-2999"],
  "經銷門市": {
    "北區": ["六角通訊 - 新竹縣竹東鎮東寧路三段81號一樓 / 0973-629-168", "手機屋 - 新竹縣竹東鎮東寧路三段92號一樓 / 0968-901-399", "台灣行動屋 - 管理部 - 桃園市中壢區忠孝路52號 / 0908-951-988", "台灣行動屋 - 莊敬一店 - 桃園市中壢區莊敬路125號 / 03-4512275", "台灣行動屋 - 莊敬二店 - 桃園市中壢區莊敬路900號 / 03-4631959", "台灣行動屋 - 莊敬三店 - 桃園市中壢區莊敬路122-1號 / 03-4553969", "台灣行動屋 - 榮民店 - 桃園市中壢區榮民路99號 / 03-4357666", "台灣行動屋 - 忠孝一店 - 桃園市中壢區忠孝路63號 / 03-4625158", "台灣行動屋 - 忠孝二店 - 桃園市中壢區忠孝路52號 / 03-4615331", "台灣行動屋 - 忠孝三店 - 桃園市中壢區忠孝路59號 / 03-4631035", "台灣行動屋 - 中華店 - 桃園市中壢區中華路一段178號 / 03-4525595", "台灣行動屋 - 龍東 - 桃園市中壢區龍東里龍東路315號1樓 / 0985-466-433", "台灣行動屋 - 龍東店 - 桃園市中壢區龍東路317號 / 03-4659299", "台灣行動屋 - 過嶺店 - 桃園市中壢區松義路116號 / 03-4200996", "台灣行動屋 - 中山東店 - 桃園市中壢區中山東路三段206號 / 03-4561303", "台灣行動屋 - 桃園中山店 - 桃園市桃園區中山路939號 (櫃號：D04) / 03-3692066", "台灣行動屋 - 龍安店 - 桃園市桃園區龍安街83號 / 03-2170505", "台灣行動屋 - 永安一店 - 桃園市桃園區永安路335號 / 0908-153-525", "台灣行動屋 - 廣福店 - 桃園市八德區廣福路73號 / 03-3611515", "台灣行動屋 - 福國店 - 桃園市八德區大同里福國北街82號1樓 / 03-3760696", "台灣行動屋 - 義勇店 - 桃園市八德區大義里義勇街112號1樓 / 03-3777119", "台灣行動屋 - 大江店 - 桃園市中壢區中園路二段501號GB樓 / 03-4680555", "台灣行動屋 - 平鎮店 - 桃園市平鎮區南東路57-1號1 / 0908-169-556", "向東通訊 - 萬隆店 - 台北市文山區羅斯福路五段206-3號 / 0983-884-158", "向東通訊 - 南港店 - 台北市南港區忠孝東路六段36號 / 0968-417-157", "向東通訊 - 光華店 - 台北市中山區松江路9之1號 / 0908-622-628", "向東通訊 - 板橋店 - 新北市板橋區民族路75號 / 0908-951-391", "向東通訊 - 蘆洲店 - 新北市蘆洲區三民路595號 / 0963-271-115", "向東通訊 - 三重店 - 新北市三重區新路三段18號之1 / 0908-282-957", "向東通訊 - 中壢店 - 桃園市中壢區中正路331號 / 0973-588-686", "向東通訊 - 新竹店 - 新竹市北區西大路463號 / 0917-898-090", "凱盛通訊 - 新北市鶯歌區永明街73-2號 / 0966-833-553", "聯強國際 - 新北市三峽區文化路4號 / 02-86743154", "祥辰通訊 - 新竹縣竹東鎮東寧路三段94號一樓 / 0968-895-988", "凱一科技 - 台北市萬華區桂林路119號 / 02-23831551", "凱一科技 - 桃園市大園區大園村中華路67號 / 03-3869111", "凱旋科技 - 新北市樹林區中山路一段200號 / 02-26810668", "凱誠通訊 - 桃園市龜山區文化二路88號 / 02-24625053", "凱誠通訊 - 新竹市北區西大路522號 / 03-5245111", "撼動通訊 - 永和中山店 - 新北市永和區中正路1號 / 02-29291863", "撼動通訊 - 永和中正店 - 新北市永和區中正路1號 / 02-89418915", "撼動通訊 - 永和成功店 - 新北市永和區成功路二段80號 / 02-29431234", "撼動通訊 - 新莊幸福店 - 新北市新莊區幸福路19號 / 02-22777599", "撼動通訊 - 中和員山店 - 新北市中和區員山路213號 / 02-22256611", "撼動通訊 - 中和景平店 - 新北市中和區景平路537號  / 02-22498811", "撼動通訊 - 中和景新店 - 新北市中和區景新街398號 / 02-29436600", "撼動通訊 - 中和興南店 - 新北市中和區興南路一段187號 / 02-29492211", "飆手機 - 新北樹林店 - 新北市樹林區太原街13號 / 02-86868111", "飆手機 - 板橋板新店 - 新北去板橋區板新路106號 / 02-89535551", "飆手機 - 中壢中正店 - 桃園市中壢區中正路341號 / 03-2811588", "飆手機 - 內立環中東店 - 桃園區中壢區環中東路39號 / 03-4612171", "飆手機 - 桃園中正店 - 桃園市桃園區中正路618號 / 03-3253377", "扣扣打手機店 - 宜蘭市光復路67-1號 / 0923-288-269", "中華通信 - 宜蘭縣羅東鎮中正路5號 / 03-9543808", "宜蘭神農大哥大 - 宜蘭縣宜蘭市神農路1段240號 / 03-9367789", "神腦通訊 - 宜蘭市中山路三段292號 / 03-9313788", "大呼小叫 - 宜蘭市東港路二段385號 / 03-9386860", "台灣行動星 - 桃園市桃園區桃鶯路193號 / 03-3637713", "手機網通中正店 - 桃園市中壢區中正路379號 / 03-4920880", "震旦通訊 - 台北成功店 - 台北市內湖區成功路四段59之1號 / (02)8792-1688", "震旦通訊 - 北投光明店 - 台北市北投市光明路132之5號 / (02)2894-9281", "震旦通訊 - 新莊民安店 - 新北市新莊區民安路145號 / (02)2208-0828", "震旦通訊 - 新莊公園店 - 新北市新莊區公園路9號 / (02)8993-5178", "震旦通訊 - 淡水中正店 - 新北市淡水區中正東路53號1樓 / (02)2629-5500", "震旦通訊 - 淡水竹圍店 - 新北市淡水區民族路18號 / (02)2808-3225", "震旦通訊 - 台北北安店 - 台北市中山區北安路618號 / (02)2532-2345", "震旦通訊 - 台北松山店 - 台北市信義區松山路477號1樓 / (02)2759-5608", "震旦通訊 - T和平旗艦 - 台北市中正區和平西路一段13號2樓 / (02)2321-1716", "震旦通訊 - 台北康寧店 - 台北市內湖區康寧路三段217巷1號 / (02)2631-4499", "震旦通訊 - 汐止忠孝店 - 新北市汐止區忠孝東路五段227號1樓 / (02)2649-9293", "震旦通訊 - 基隆義二店 - 基隆市中正區義二路37號 / (02)2426-5686", "震旦通訊 - 新大坪林店 - 新北市新店區北新路3段132號 / (02)2918-9988", "震旦通訊 - 板橋中山二店 - 新北市板橋區中山路二段7號 / (02)2952-8949", "震旦通訊 - 中和中山店 - 新北市中和區景平路665號 / (02)2244-5211", "震旦通訊 - 基隆愛三店 - 基隆市仁愛區愛三路24號1樓 / (02)2426-5459", "震旦通訊 - 泰山明志店 - 新北市泰山區明志路一段157號 / (02)2296-0209", "震旦通訊 - 台北松仁店 - 台北市信義區松仁路216號 / (02)2758-8289", "震旦通訊 - 汐止康寧店 - 新北市汐止區康寧街399號 / (02)2693-3527", "震旦通訊 - 基隆七堵店 - 基隆市七堵區明德一路202號 / (02)2455-6898", "震旦通訊 - 世貿旗艦店 - 台北市信義區信義路五段2號 / (02)8786-6518", "震旦通訊 - 羅東公正店 - 宜蘭縣羅東鎮公正路83-1號1.2樓 / (03)955-2679", "震旦通訊 - 羅東興東店 - 宜蘭縣羅東鎮興東路151號1樓 / (03)953-1133", "震旦通訊 - 羅東中正店 - 宜蘭縣羅東鎮中正路22號 / (03)956-5126", "震旦通訊 - 宜蘭中山店 - 宜蘭縣宜蘭市中山路三段60號1樓 / (03)936-5367", "震旦通訊 - 宜蘭礁溪店 - 宜蘭縣礁溪鄉中山路一段177號 / (03)987-3791", "震旦通訊 - 湖口中正店 - 新竹縣湖口鄉中正路一段41號 / (03)599-0499", "震旦通訊 - 新竹西大店 - 新竹市北區西大路445號 / (03)528-4308", "震旦通訊 - 桃園中華店 - 桃園市中華路36號1樓 / (03)335-9119", "震旦通訊 (大潤發門市) - 新北景平店 - 新北市中和區景平路182號B2 / (02)2949-2051", "震旦通訊 (大潤發門市) - 台北南湖店 - 台北市內湖區舊宗路一段188號 / (02)2794-0997", "震旦通訊 (大潤發門市) - 台北中崙店 - 台北市中山區八德路2段306號B2 / (02)8772-7829", "震旦通訊 (大潤發門市) - 新北土城店 - 新北市土城區永安街25號 / (02)8076-3155", "震旦通訊 (大潤發門市) - 新北中和店 - 新北市中和區中山路二段228號 / (02)8241-2777", "震旦通訊 (大潤發門市) - 新北碧潭店 - 新北市新店區環河路22號B1 / (02)8914-7367", "震旦通訊 (大潤發門市) - 新竹忠孝店 - 新竹市東區忠孝路300號 / (03)561-8166", "震旦通訊 (大潤發門市) - 新竹湳雅店 - 新竹市北區湳雅街97號 / (03)535-2866", "震旦通訊 (大潤發門市) - 桃園八德店 - 桃園市八德區介壽路二段148號 / (03)377-6977", "震旦通訊 (大潤發門市) - 桃園中壢店 - 桃園市中壢區中北路二段468號 / (03)437-9666", "震旦通訊 (大潤發門市) - 桃園平鎮店 - 桃園市平鎮區南東路57-1號 / (03)439-9318", "ANTNEX - 新光三越信義A9門市(法雅客內) - 台北市信義區松壽路9號地下2樓 / (02)2720-5021", "ANTNEX - 新光三越南西門市(法雅客內) - 台北市南京西路12號9F / 0907-279-859", "ANTNEX - 新光三越台北站前(法雅客內) - 台北市忠孝西路一段66號10樓 / (02)2311-3756"],
    "中區": ["Yes通訊 - 台中市大雅區民生路一段123號 / 04-25687123", "Yes通訊 - 台中市豐原區向陽路116號 / 04-25291717", "天贊通訊 - 總店 - 台中市大甲區蔣公路308號 / 04-26802188", "天贊通訊 - 梧棲店 - 台中市梧棲區文化路二段137號 / 04-26582969", "天贊通訊 - 中山店 - 台中市大甲區中山路1段993-3號 / 04-26760268", "天贊通訊 - 899手機館 - 台中市沙鹿區北勢東路533號 / 04-26322808", "向東通訊 - 苗栗店 - 苗栗市中正路513號 / 0963-216-006", "向東通訊 - 一中店 - 台中市北區錦南街19-16號 / 0983-921-908", "向東通訊 - 向上店 - 台中市西區向上路一段370號 / 0980-614-778", "向東通訊 - 河南店 - 台中市西屯區河南路二段492號 / 0979-055-948", "向東通訊 - 中清店 - 台中市北屯區中清路二段110號 / 0909-626-245", "向東通訊 - 彰化店 - 彰化市曉陽路51號 / 0909-467-673", "東東通信 - 台中市大甲區順天路225號 / 04-26887662", "揚昇通訊 - 台中市大甲區光明路17號 / 04-26879200", "智慧王 - 台中市南屯區黎明路2段313號1樓 / 04-22555288", "智慧王 - 台中市外埔區甲后路369號1樓 / 04-26839955", "智慧王 - 台中市南屯區黎明路二段311號1樓 / 0908-612-655", "智慧王 - 彰化縣埔心鄉員鹿路2段368號1樓 / 04829-5555", "智慧王 - 彰化縣田中鎮中州路1段72號1樓 / 04875-6655", "智慧王 - 南投縣南投市三合三路61號1樓 / 049-2205789", "智慧王 - 南投縣名間鄉南雅街149之3號1樓 / 049-2738558", "智慧王 - 南投縣竹山鎮集山路3段846號1樓 / 049-2655777", "智慧王 - 南投縣水里鄉中正路70號1樓 / 049-2871193", "嘉新通訊 - 中正門市 - 台中市霧峰區中正路925號 / 04-23391115", "嘉新通訊 - 草屯旗艦店 - 南投縣草屯鎮中山街163號 / 04-92318158", "嘉新通訊 - 民族門市 - 南投是民族路133號 / 049-2245606", "嘉新通訊 - 復興門市 - 南投市復興路201號 / 049-2220006", "嘉新通訊 - 埔里門市 - 南投縣埔里鎮忠孝路145號 / 049-2423080", "嘉新通訊 - 草屯中正門市 - 南投縣草屯鎮中正路863號1樓 / 049-2362656", "瀧盈通訊 - 中正一店 - 彰化縣員林市中正路546號 / 04-8327588", "瀧盈通訊 - 中正二店 - 彰化縣員林市中正路561號 / 04-8392666", "瀧盈通訊 - 中正三店 - 彰化縣員林市中正路451號 / 04-8357290", "瀧盈通訊 - 靜修店 - 彰化縣員林市靜修路65號 / 04-8337586", "瀧盈通訊 - 彰水店 - 彰化縣溪湖鎮彰水路三段477號 / 04-8819183", "瀧盈通訊 - 星手機店 - 彰化縣員林市中正路563號 / 04-8392666", "震旦通訊 - 豐原三民店 - 台中市豐原區三民路152號 / (04)2523-0695", "震旦通訊 - 豐原向陽店 - 台中市豐原區向陽路290號1樓 / (04)2512-0939", "震旦通訊 - 草屯中正店 - 南投縣草屯鎮中正路749號 / (049)230-4808", "震旦通訊 - 員林民族店 - 彰化縣員林鎮民族街1號 / (04)832-9040", "震旦通訊 - 彰化曉陽店 - 彰化縣彰化市曉陽路19號 / (04)728-9649", "震旦通訊 - 田中員集店 - 彰化縣田中鎮員集路二段350號1樓 / (04)875-8855", "震旦通訊 - 沙鹿中山店 - 台中市沙鹿區中山路427號 / (04)2663-0516", "震旦通訊 - 北斗中華店 - 彰化縣北斗鎮中華路290號1樓 / (04)878-2055", "震旦通訊 - 台中中清店 - 台中市北屯區中清路二段670號1樓 / (04)2295-6797", "震旦通訊 - 大里塗城店 - 台中市大里區中興路一段318-1號1樓 / (04)2493-2280", "震旦通訊 - 太平中興店 - 台中市太平區中興路132.134號 / (04)2279-6688", "震旦通訊 - 台中建成店 - 台中市南區台中路230號1樓 / (04)2287-0538", "震旦通訊 - 斗六中山店 - 雲林縣斗六市太平路245號1樓 / (05)537-2050", "震旦通訊 - 斗南延平店 - 雲林縣斗南鎮新興街228號 / (05)595-4949", "震旦通訊 - 虎尾光復店 - 雲林縣虎尾鎮光復路330號1樓 / (05)631-3198", "震旦通訊 - 斗六民生店 - 雲林縣斗六市民生南路33號 / (05)537-7625", "震旦通訊 - 西螺建興店 - 雲林縣西螺鎮建興路257號1樓 / (05)587-9377", "震旦通訊 - 虎尾中正店 - 雲林縣虎尾鎮中正路292號1樓 / (05)633-1036", "震旦通訊 - 北港文化店 - 雲林縣北港鎮文化路75號 / (05)782-5307", "震旦通訊 (大潤發門市) - 苗栗頭份店 - 苗栗縣頭份市自強路230號 / (037)590-797", "震旦通訊 (大潤發門市) - 彰化員林店 - 彰化縣埔心鄉瓦南村中山路319號 / (04)838-5358", "震旦通訊 (大潤發門市) - 台中忠明店 - 台中市北區忠明路499號 / (04)2202-8868", "震旦通訊 (大潤發門市) - 雲林斗南店 - 雲林縣斗南鎮西岐里文化街119巷21號 / (05)596-3321", "ANTNEX - 新光三越中港門市(法雅客內) - 台中市西屯區台灣大道三段301號9樓 / (04)2252-1152"],
    "南區": ["KH高飛網通 - KH覺民 - 高雄市三民區覺民路168號1樓 / 07-3983308", "KH高飛網通 - KH自由 - 高雄市三民區自由一路119號1樓 / 07-3113119", "Miko 米可3C - 國華門市 - 嘉義市西區國華街322-10號 / 05-2277269", "Miko 米可3C - 和意門市 - 台南市中西區和意路62號 / 06-2159990", "Miko 米可3C - 仁德門市 - 台南市仁德區中正路二段1257號 / 06-2493888", "Miko 米可3C - 永康門市 - 台南市永康區中華二路336號 / 06-2528898", "Miko 米可3C - 海佃門市 - 台南市安南區海佃路一段203號 / 06-3508666", "Miko 米可3C - 佳里門市 - 台南市佳里區光復路194號 / 06-7220355", "Miko 米可3C - 中華東門市 - 台南市東區中華東路三段12號1樓 / 06-2905123", "Miko 米可3C - 五甲門市 - 高雄市鳳山區五甲三路58號 / 07-8230555", "Miko 米可3C - 巨蛋門市 - 高雄市左營區博愛二路672號 / 07-5589688", "Miko 米可3C - 楠梓德賢門市 - 高雄市楠梓區德賢路236-2號1樓 / 07-3646088", "Miko 米可3C - 大昌門市 - 高雄市三民區大昌二路495號1樓 / 07-3983665", "巨寶通訊 - 和平店 - 高雄市新興區和平一路195號 / 07-2256967", "巨寶通訊 - 自由店 - 高雄市左營區新庄仔路734號 / 07-5560983", "巨寶通訊 - 楠梓店 - 高雄市楠梓區建楠路230號 / 07-3550697", "巨寶通訊 - 五甲店 - 高雄市鳳山區五甲三路173號 / 07-8126563", "巨寶通訊 - 陽明店 - 高雄市三民區陽明路75號 / 07-3855905", "巨寶通訊 - 小港店 - 高雄市小港區漢民路707號 / 07-8069656", "巨寶通訊 - 一心店 - 高雄市前鎮區一心二路77號 / 07-5366005", "尚欣通訊行 - 台南市中西區永華路一段54號 / 06-2281826", "帝谷通信 - 嘉義市東區嘉義市東洋新村9號 / 05-2784023", "帝泰通信 - 嘉義吳鳳南路135號 / 05-2254676", "飛訊電訊 - 嘉義市東區吳鳳北路84號 / 05-2251888", "飛訊電訊 - 嘉義市東區林森東路251號 / 05-2751888", "飛訊電訊 - 嘉義市西區民族路531號 / 05-2251888", "展晟通信 - 嘉義仁愛路460號 / 05-2166088", "翔宇通訊 - 嘉義新生門市 - 嘉義市東區新生路325號 / 05-2765299", "震旦通訊 - 嘉義吳鳳店 - 嘉義市東區光華路57號 / (05)225-5758", "震旦通訊 - 嘉義民生店 - 嘉義市西區民生北路192號 / (05)225-0551", "震旦通訊 - 嘉義垂楊店 - 嘉義市西區垂楊路479號1樓 / (05)227-4188", "震旦通訊 - 嘉義頭橋店 - 嘉義縣民雄鄉福樂村建國路三段126-1號 / (05)220-6686", "震旦通訊 - 民雄文化店 - 嘉義縣民雄鄉文化路30之4號1-3樓 / (05)206-2622", "震旦通訊 - 嘉義新民店 - 嘉義市西區新民路816號1樓 / (05)286-9840", "震旦通訊 - 朴子山通店 - 嘉義縣朴子市山通路210、212號1樓 / (05)370-8071", "震旦通訊 - 新營延平店 - 台南市新營區延平路74號 / (06)633-5883", "震旦通訊 - 新營民治店 - 台南市新營區民治路61-1號 / (06)635-1918", "震旦通訊 - 嘉義民族店 - 嘉義市西區民族路514號 / (05)222-4121", "震旦通訊 - 嘉義新生店 - 嘉義市東區新生路794號 / (05)275-5506", "震旦通訊 - 嘉義民族二店 - 嘉義市東區民族路188號1樓 / (05)227-0580", "震旦通訊 - 學甲中山店 - 台南市學甲區中山路108-4號1.2.3樓 / (06)783-0380", "震旦通訊 - 嘉義中埔店 - 嘉義縣中埔鄉和興村中山路五段887號1樓 / (05)239-6996", "震旦通訊 - 新營民治二店 - 台南市新營區民治路368號1樓 / (06)656-6711", "震旦通訊 - 佳里光復店 - 台南市佳里區光復路319號1樓 / (06)723-7072", "震旦通訊 - 佳里延平店 - 台南市佳里區延平路305號 / (06)721-5257", "震旦通訊 - 麻豆興中店 - 台南市麻豆區興中路119號 / (06)571-0359", "震旦通訊 - 新營三民店 - 台南市新營區三民路88之1號1樓 / (06)632-4079", "震旦通訊 - 台南文賢店 - 台南市北區文賢路265.267號 / (06)259-6299", "震旦通訊 - 歸仁中山店 - 台南市歸仁區中山路一段524號 / (06)230-7419", "震旦通訊 - 新市中正店 - 台南市新市區中正路143之5號 / (06)589-1015", "震旦通訊 - 台南林森店 - 台南市東區林森路二段50號 / (06)276-0525", "震旦通訊 - 善化中山店 - 台南市善化區中山路209號 / (06)583-0281", "震旦通訊 - 永康二王店 - 台南市永康區中山南路570號1樓 / (06)204-4286", "震旦通訊 - 仁德中山店 - 台南市仁德區中山路629號1樓 / (06)279-1389", "震旦通訊 - 台南西門二店 - 台南市中西區西門路一段709號 / (06)228-4938", "震旦通訊 - 台南金華店 - 台南市南區金華路二段198號 / (06)263-6007", "震旦通訊 - 永康大灣店 - 台南市永康區大灣路518號 / (06)272-7187", "震旦通訊 - 台南海佃店 - 台南市安南區海佃路一段136號1-3樓 / (06)280-1001", "震旦通訊 - 台南西門店 - 台南市中西區西門路二段138號 / (06)226-2626", "震旦通訊 - 岡山仁壽店 - 高雄市岡山區仁壽路27號1樓 / (07)625-8466", "震旦通訊 - 岡山岡山店 - 高雄市岡山區岡山路316號 / (07)622-8197", "震旦通訊 - 台南崇學店 - 台南市東區崇學路103號1~3樓 / (06)260-4269", "震旦通訊 - 岡山前峰店 - 高雄市岡山區前峰路124-126號 / (07)625-6355", "震旦通訊 - 高雄林森店 - 高雄市新興區林森一路243-1號 / (07)235-0911", "震旦通訊 - 高雄河東店 - 高雄市前金區河東路305號1樓 / (07)291-7355", "震旦通訊 - 高雄三多店 - 高雄市前鎮區三多三路173號 / (07)339-4451", "震旦通訊 - 高雄覺民店 - 高雄市三民區覺民路164號 / (07)380-2076", "震旦通訊 - 高雄瑞隆店 - 高雄市前鎮區瑞隆路413號1樓 / (07)715-1536", "震旦通訊 - 高雄文信店 - 高雄市鼓山區文信路343號 / (07)550-5538", "震旦通訊 - 高雄楠梓店 - 高雄市楠梓區鳳楠路270-1號 / (07)351-1336", "震旦通訊 - 高雄加昌店 - 高雄市楠梓區加昌路837號1F / (07)360-0756", "震旦通訊 - 內埔廣濟店 - 屏東縣內埔鄉內田村廣濟路241號1樓 / (08)769-2960", "震旦通訊 - 東港中正店 - 屏東縣東港鎮中正路196號1樓 / (08)833-1036", "震旦通訊 - 屏東復興店 - 屏東縣屏東市復興路120號 / (08)751-6289", "震旦通訊 - 屏東廣東二店 - 屏東縣屏東市廣東路53號 / (08)723-5399", "震旦通訊 - 澎湖馬公店 - 澎湖縣馬公市中華路49號1樓 / (06)927-4875", "震旦通訊 - 澎湖中正店 - 澎湖縣馬公市中正路79號1樓 / (06)926-9676", "震旦通訊 - 屏東廣東店 - 屏東縣屏東市廣東路690-1號1樓 / (08)738-0200", "震旦通訊 - 潮州新生店 - 屏東縣潮州鎮新生路34號 / (08)789-7188", "震旦通訊 (大潤發門市) - 嘉義嘉義店 - 嘉義市西區博愛路二段281號 / (05)233-8300", "震旦通訊 (大潤發門市) - 台南佳里店 - 台南市佳里區民安里同安寮80之2號 / (06)723-8980", "震旦通訊 (大潤發門市) - 台南台南店 - 台南市北區臨安路二段310號 / (06)228-2168", "震旦通訊 (大潤發門市) - 高雄鳳山店 - 高雄市鳳山區文化路59號 / (07)799-6980", "ANTNEX - SOGO門市 - 高雄市前鎮區三多三路217號10樓 / (07)335-1281"],
    "東區": ["震旦通訊 - 花蓮建國店 - 花蓮縣吉安鄉建國路一段40之6號1樓 / (03)846-5588", "震旦通訊 - 台東新生店 - 台東縣台東市新生路253號 / (089)342-393", "震旦通訊(大潤發門市) - 台東台東店 - 台東縣台東市中興路三段592號 / (089)233-809"]
  }
}; // 建立門市據點的物件樣板，建構式

function StoreTemplate(selectEl, showEl, selectData, showData) {
  this.selectEl = selectEl;
  this.showEl = showEl;
  this.selectData = selectData;
  this.showData = showData;
} // 資料，依照選單篩選資料


StoreTemplate.prototype.filterData = function (value) {
  var filterInfo = this.showData.filter(function (item) {
    return item.includes(value);
  });
  this.showElToHTML(filterInfo);
}; // 畫面：下拉選單


StoreTemplate.prototype.selectElToHTML = function () {
  var str;
  this.selectData.forEach(function (item) {
    str += "<option value=\"".concat(item, "\">").concat(item, "</option>");
  });
  this.selectEl.html(str);
}; // 畫面，資訊顯示


StoreTemplate.prototype.showElToHTML = function (output) {
  var str = "";
  output.forEach(function (item) {
    var words = item.split('/'); // "\("：匹配英文小括號，將()去除

    var tel = words[1].replace(/\(|\（|/g, '');
    tel = tel.replace(/\)|\）/g, '-'); // 刪除電話號碼開頭的0

    tel = tel.substring(1);
    str += "<li>".concat(words[0], "/<a href=\"tel:+886-").concat(tel, "\" style=\"display: inline;\">").concat(words[1], "</a></li>");
  });
  this.showEl.html(str);
}; // change事件，變更篩選地區


StoreTemplate.prototype.storeChange = function () {
  var _this = this;

  $(this.selectEl).change(function (e) {
    var value = e.target.value;

    _this.filterData(value);
  });
}; // new出motoStore實體物件


var motoStore = new StoreTemplate($('#countySelect'), $('#countyData'), StoreData["Motorola 掛招經銷商門市"]["縣市"], StoreData["Motorola 掛招經銷商門市"]["門市"]);
motoStore.selectElToHTML();
motoStore.filterData('台北市');
motoStore.storeChange(); // 先做資料處理，物件轉陣列

var objData = {
  key: [],
  value: []
};

for (var _i = 0, _Object$entries = Object.entries(StoreData["經銷門市"]); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  objData.key.push(key);
  objData.value.push(value);
} // new出phoneStore實體物件


var phoneStore = new StoreTemplate($('#areaSelect'), $('#areaData'), objData.key, objData.value);
phoneStore.selectElToHTML();

phoneStore.filterData = function () {
  var _this2 = this;

  this.selectData.forEach(function (item, index) {
    if (item === _this2.selectEl.val()) {
      phoneStore.showElToHTML(_this2.showData[index]);
    }
  });
};

phoneStore.filterData();

phoneStore.storeChange = function () {
  var _this3 = this;

  this.selectEl.change(function (e) {
    var value = e.target.value;

    _this3.filterData(value);
  });
};

phoneStore.storeChange();
"use strict";

var showMap = function showMap(e) {
  var mapSrc = '';

  switch (e.target.value.trim()) {
    case '台北':
      {
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.792760517513!2d121.55221297386313!3d25.04110613800818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc6703ae44d%3A0xa75427686dc43858!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b-g5a2d5p2x6Lev5Zub5q61Mjcw6JmfM-iZn-aok-S5izI!5e0!3m2!1szh-TW!2stw!4v1682510591153!5m2!1szh-TW!2stw';
        break;
      }

    case '新竹':
      {
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.03480652235!2d120.99791637385334!3d24.79426164790615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468361294d81e91%3A0x3bf23fa1b88b2268!2zMzAw5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LqM5q61MjAw6JmfM-aokw!5e0!3m2!1szh-TW!2stw!4v1682507859817!5m2!1szh-TW!2stw';
        break;
      }

    case '台中':
      {
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.592346662642!2d120.66237207382804!3d24.150950373283997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9de3e14983%3A0x1bee6436cb7a9cb9!2zNDAzNjHlj7DkuK3luILopb_ljYDoi7HmiY3ot681MTDomZ8zRg!5e0!3m2!1szh-TW!2stw!4v1682508440705!5m2!1szh-TW!2stw';
        break;
      }

    case '高雄':
      {
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.664942265792!2d120.29371927377127!3d22.62898383090434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0462be1ccfdd%3A0x1e7522779270a51f!2zODAx6auY6ZuE5biC5YmN6YeR5Y2A5Lit6I-v5LiJ6LevMTA46JmfOCBi!5e0!3m2!1szh-TW!2stw!4v1682508504697!5m2!1szh-TW!2stw';
        break;
      }

    default:
      {
        break;
      }
  }

  $('.support iframe').attr('src', mapSrc);
};

$('.support aside').on('click', showMap);
//# sourceMappingURL=all.js.map
