(function (){
    function resize() {
        // ui 给的原型稿的宽度
        let uiwidth = 750;
        // 最小的是375,10/16=62.5%=1rem = 10px
        let uifontSize = 20;
        // 计算一下html根元素的 字体大小
        // 获取 当前的设备的宽度
        let clientWidth = document.documentElement.clientWidth;
        // 通过改动html根字体的大小来改变整个页面根据不同手机页面的字体大小
        // html跟字体设htmlFontsize
        htmlFontSize = (uifontSize / uiwidth) * clientWidth;
        document.documentElement.style.fontSize = htmlFontSize + "px";
        console.log(htmlFontSize);
    }
    // 屏幕大小发生变化
    window.addEventListener("resize",resize)
    // 横屏事件
    window.addEventListener("orientationchange",resize);

    resize();
})