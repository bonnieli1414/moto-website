"use strict";
// 備份檔，以防止ajax失敗仍可顯示商品至畫面
const phoneBackupData = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
]

// 進入網站時，先載入資料並賦予至PhoneData物件儲存
const PhoneData = {
    "data": '',
    "apiUrl": "http://127.0.0.1:5000/api/user/products/all",
    "ajaxDataFn": function () {
        $.ajax({
            "url": this.apiUrl,
            "method": "GET"
        })
            .done((res) => {
                this.data = res.message
                console.log('資料取得成功', this.data)

                // 篩選資料
                const phone_razr = this.data.filter(item => item.name.includes('razr'))
                const phone_edge = this.data.filter(item => item.name.includes('edge'))
                const phone_one = this.data.filter(item => item.name.includes('motorola one'))
                const phone_moto_e = this.data.filter(item => item.name.includes('moto e'))
                const phone_moto_g = this.data.filter(item => item.name.includes('moto g'))

                this.filterPhoneDataClick('.phone .section-top')

                // 因為以下都會跳轉，所以需一一呼叫
                this.productToHTML(this.data, '.phone_all .allPhone')
                this.productToHTML(phone_razr, '.phone_razr .allPhone')
                this.productToHTML(phone_edge, '.phone_edge .allPhone')
                this.productToHTML(phone_one, '.phone_one .allPhone')
                this.productToHTML(phone_moto_e, '.phone_moto_e .allPhone')
                this.productToHTML(phone_moto_g, '.phone_moto_g .allPhone')
                // filterProductToHTML(this.data)
                clickBuy(this.data)
            })
            .fail((jqXHR, errorMsg) => {
                this.data = phoneBackupData
                console.log('錯誤', jqXHR.responseJSON, errorMsg)
                console.log('備份檔案', this.data)

                // 篩選資料
                const phone_razr = this.data.filter(item => item.name.includes('razr'))
                const phone_edge = this.data.filter(item => item.name.includes('edge'))
                const phone_one = this.data.filter(item => item.name.includes('motorola one'))
                const phone_moto_e = this.data.filter(item => item.name.includes('moto e'))
                const phone_moto_g = this.data.filter(item => item.name.includes('moto g'))

                this.filterPhoneDataClick('.phone .section-top')

                // 因為以下都會跳轉，所以需一一呼叫
                this.productToHTML(this.data, '.phone_all .allPhone')
                this.productToHTML(phone_razr, '.phone_razr .allPhone')
                this.productToHTML(phone_edge, '.phone_edge .allPhone')
                this.productToHTML(phone_one, '.phone_one .allPhone')
                this.productToHTML(phone_moto_e, '.phone_moto_e .allPhone')
                this.productToHTML(phone_moto_g, '.phone_moto_g .allPhone')
                // filterProductToHTML(this.data)
                clickBuy(this.data)
            })
    }
}

// 手機機型初始化
PhoneData.stateInit = function () {
    // 取得資料
    this.ajaxDataFn()
}

// 畫面，商品資料渲染
PhoneData.productToHTML = function (data, ouptputEl) {
    if (typeof data === 'string') {
        console.log('資料尚未取完')
        return
    }
    let str = ''
    data.forEach(item => {
        const text = item.description.length > 32 ? item.description.substr(0, 32) + ' ...' : item.description
        str +=
            `<div class="card">
                <div class="card-frame" style="max-width: 400px;">
                    <a href="#"><img class="card-img-top"
                            src="${item.picture}"
                            alt="${item.name}"></a>
                </div>
                <div class="card-body">
                    <h3 class="text-center" style="height: 65px;">${item.name}</h3>
                    <p class="card-text my-3" style="height: 65px;">${text}</p>
                    <a href="../../products.html" class="btn btn-primary w-100 py-2" data-btn="${item.name}">購買</a>
                </div>
            </div>`
    });
    $(ouptputEl).html(str)
}

// 手機頁面的click事件，從PhoneData物件篩選不同機型
PhoneData.filterPhoneDataClick = function (el) {
    $(el).on('click', e => {
        e.preventDefault()
        switch (e.target.dataset.series) {
            case 'edge':
                const edgeData = this.data.filter(item => item.name.includes("edge"))
                this.productToHTML(edgeData, '.phone .allPhone')
                break;
            case 'razr':
                const razrData = this.data.filter(item => item.name.includes("razr"))
                this.productToHTML(razrData, '.phone .allPhone')
                break;
            case 'one':
                const oneData = this.data.filter(item => item.name.includes("motorola one"))
                this.productToHTML(oneData, '.phone .allPhone')
                break;
            case 'e':
                const eData = this.data.filter(item => item.name.includes("moto e"))
                this.productToHTML(eData, '.phone .allPhone')
                break;
            case 'g':
                const gData = this.data.filter(item => item.name.includes("moto g"))
                this.productToHTML(gData, '.phone .allPhone')
                break;
            case 'all':
                this.productToHTML(this.data, '.phone .allPhone')
                break;
            default:
                break;
        }
    })
}

// 點選購買按鈕事件
function clickBuy(data) {
    $('.allPhone .card-body .btn').on('click', function (e) {
        getDataset(e, data)
    })
}

// 取得dataset
function getDataset(e, data) {
    e.preventDefault();
    filterProductToHTML(e, data, e.target.dataset.btn)
    backTotop();
}

// 將dataset資料比對後，選染在畫面上
function filterProductToHTML(e, data, dataset) {
    let str = "";
    data.forEach(item => {
        if (dataset === item.name) {
            console.log(dataset, item.name, dataset === item.name)
            str += `
            <div id="products" class="product bg-theme101-color text-light" style="padding: 140px 0px;">
    <main id="top">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7"><img src="${item.picture}" alt=""></div>
                <ul class="col-10 col-lg-5">
                    <li>
                        <h3 class="pb-3" style="padding-top: 4rem;">${item.name}</h3>
                    </li>
                    <li>
                        <p class="py-2">${item.description}</p>
                    </li>
                    <li>
                        <p class="py-2">原價：${item.price}元</p>
                    </li>
                    <li>
                        <p class="py-2">優惠價：${item.sale}</p>
                    </li>
                    <hr>
                    <li class="py-5">
                        <input class="py-1 my-2" type="number" class="form-control shadow-none" value="1">
                        <input class="btn btn-dark mx-2" type="button" value="加入購物車">
                    </li>
                </ul>
            </div>
            <div class="row">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-detail-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-detail" type="button" role="tab" aria-controls="nav-detail"
                            aria-selected="true">產品細節</button>
                    </div>
                </nav>
                <div class="tab-content py-2" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-detail" role="tabpanel"
                        aria-labelledby="nav-detail-tab">
                        Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla paExcepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. iatis unde omnis iste
                        natus error sit voluptatem accusantium

                        Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco.
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
    `
        }
    });
    $('.phone').html(str);
}

function backTotop() {
    console.log(Number($(window).scrollTop()) > 0)
    Number($(window).scrollTop()) > 0 ? $('html, body').scrollTop(0) : "";
}

PhoneData.stateInit()
