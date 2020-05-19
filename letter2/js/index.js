// DOM中的内容加载完毕之后，调用函数
document.addEventListener('DOMContentLoaded', musicInWeixinHandler);

function musicInWeixinHandler() {
    musicPlay(true);
    document.addEventListener("WeixinJSBridgeReady", function () {
        musicPlay(true);
    }, false);
    document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}