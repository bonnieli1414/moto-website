"use strict"
const showMap = function (e) {
    let mapSrc = ''
    switch (e.target.value.trim()) {
        case '台北': {
            mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.792760517513!2d121.55221297386313!3d25.04110613800818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc6703ae44d%3A0xa75427686dc43858!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b-g5a2d5p2x6Lev5Zub5q61Mjcw6JmfM-iZn-aok-S5izI!5e0!3m2!1szh-TW!2stw!4v1682510591153!5m2!1szh-TW!2stw'
            break
        }
        case '新竹': {
            mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.03480652235!2d120.99791637385334!3d24.79426164790615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468361294d81e91%3A0x3bf23fa1b88b2268!2zMzAw5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LqM5q61MjAw6JmfM-aokw!5e0!3m2!1szh-TW!2stw!4v1682507859817!5m2!1szh-TW!2stw'
            break
        }
        case '台中': {
            mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.592346662642!2d120.66237207382804!3d24.150950373283997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9de3e14983%3A0x1bee6436cb7a9cb9!2zNDAzNjHlj7DkuK3luILopb_ljYDoi7HmiY3ot681MTDomZ8zRg!5e0!3m2!1szh-TW!2stw!4v1682508440705!5m2!1szh-TW!2stw'
            break
        }
        case '高雄': {
            mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.664942265792!2d120.29371927377127!3d22.62898383090434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0462be1ccfdd%3A0x1e7522779270a51f!2zODAx6auY6ZuE5biC5YmN6YeR5Y2A5Lit6I-v5LiJ6LevMTA46JmfOCBi!5e0!3m2!1szh-TW!2stw!4v1682508504697!5m2!1szh-TW!2stw'
            break
        }
        default: {
            break
        }
    }
    $('.support iframe').attr('src', mapSrc)
}

$('.support aside').on('click', showMap)