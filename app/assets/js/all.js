"use strict"
// AOS 套件
AOS.init();
// swiper套件
const swiper = new Swiper(".renderSwiper", {
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
        clickable: true,
    },
})
/**
 * header區域
 */

// 滾輪條大於0觸發，改變navbar字體顏色
function changeHeaderNavColor() {
    $(window).scrollTop() > 0 ?
        $('nav').removeClass('text-light') : $('nav').addClass('text-light')
}
// 滾輪條大於0觸發，改變header背景顏色
function changeHeaderBgColor() {
    $(window).scrollTop() > 0 ?
        $('header').addClass('bg-light').addClass('shadow-c') : $('header').removeClass('bg-light').removeClass('shadow-c')
}
// 滾輪條大於0觸發，改變logo顏色
function changeHeaderLogoColor() {
    $(window).scrollTop() > 0 ?
        $('.logo').attr('src', './assets/images/Motorola_Logo_Black.png') : $('.logo').attr('src', './assets/images/Motorola_Logo_White.png')
}
// 滾輪條大於0觸發，改變漢堡選單的bar顏色
function changeHamColor() {
    $(window).scrollTop() > 0 ?
        $('.ham-bar').css('background-color', '#212529') : $('.ham-bar').css('background-color', '#f8f9fa')
}
// header區域的轉場時間
function headerTransition() {
    $('header').css('transition', '0.8s')
}

// 側邊欄樣式
// 開啟側邊欄子選單
function offcanvasOpen(e) {
    e.preventDefault()
    $('.offcanvas-right-child').toggleClass('d-none')
    $('header .offcanvas-right .chevron_right').toggleClass('js-rotate')
}
// click側邊欄子選單觸發
function clickOffcanvas() {
    $('.offcanvas-parent').on('click', offcanvasOpen)
}
// 關閉側邊欄子選單
function offcanvasClose() {
    $('.offcanvas-right-child').addClass('d-none')
    $('header .offcanvas-right .chevron_right').removeClass('js-rotate')
}
// click漢堡選單觸發
function clickHamMenu() {
    $('.ham-menu').on('click', offcanvasClose)
}

/**
 * 個別body區域
 */
// 滾輪條遇到各元素在視窗中間觸發，由不透明轉透明
function fadeIn() {
    $('.js-fadeIn').each((index, item) => {
        let cardOffset = $(item).offset().top;
        $(window).scrollTop() > cardOffset - ($(window).height() * 0.5) ? $(item).css('opacity', '1') : $(item).css('opacity', '0.5')
    })
}
// 滾輪條遇到各元素在視窗中間觸發，往上移動30px
function upPosition() {
    $('.js-upPosition').each((index, item) => {
        let cardOffset = $(item).offset().top;
        $(window).scrollTop() > cardOffset - ($(window).height() * 0.5) ? $(item).css('transform', 'translateY(-30px)') : ''
    })
}
// 滾輪條遇到各元素在視窗中間觸發，圖片放大
function scaleBig() {
    $('.js-scaleBig').each((index, item) => {
        let scaleBig = $(item).offset().top;
        $(window).scrollTop() > scaleBig - ($(window).height() * 0.5) ? $(item).css('transform', 'scale(2)') : $(item).css('transform', 'scale(1.2)')
    })
}
// 滾輪條遇到各元素在視窗中間觸發，圖片縮小
function scaleSmall() {
    $('.js-scaleSmall').each((index, item) => {
        let scaleSmall = $(item).offset().top;
        $(window).scrollTop() > scaleSmall - ($(window).height() * 0.5) ? $(item).css('transform', 'scale(0.8)') : $(item).css('transform', 'scale(1)')
    })
}
// click事件，從PhoneData物件篩選不同機型
function filterPhoneDataClick() {
    $('.header').on('click', e => {
        e.preventDefault()
        switch (e.target.dataset.series) {
            case 'edge':
                const edgeData = this.data.filter(item => item.name.includes("edge"))
                this.productToHTML(edgeData)
                break;
            case 'razr':
                const razrData = this.data.filter(item => item.name.includes("razr"))
                this.productToHTML(razrData)
                break;
            case 'one':
                const oneData = this.data.filter(item => item.name.includes("motorola one"))
                this.productToHTML(oneData)
                break;
            case 'e':
                const eData = this.data.filter(item => item.name.includes("moto e"))
                this.productToHTML(eData)
                break;
            case 'g':
                const gData = this.data.filter(item => item.name.includes("moto g"))
                this.productToHTML(gData)
                break;
            case 'all':
                this.productToHTML(this.data)
                break;
            default:
                break;
        }
    })
}

// 回到頂端圖標
function showArrowUp() {
    $(window).scrollTop() > 0 ? $('.arrow-up').css('display', 'block') : $('.arrow-up').css('display', 'none')
}
function upTop() {
    $('html, body').scrollTop(0);
}

// 滾輪條事件
$(window).scroll(() => {

    // header區域
    changeHeaderNavColor()
    changeHeaderBgColor()
    changeHeaderLogoColor()
    changeHamColor()
    headerTransition()

    // body個別區域
    fadeIn()
    upPosition()
    scaleSmall()
    scaleBig()

    // 回到頂端圖標的顯示與否
    $(window).on('scroll', showArrowUp)

});

$(document).ready(function () {
    clickOffcanvas()
    clickHamMenu()
    // 點擊圖標回到頁面上方
    $('.arrow-up').on('click', upTop)
});
