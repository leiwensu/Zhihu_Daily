export default function setRem() {
    var designWidth = 750;
    var rem2px = 100;
    var $html = document.querySelector("html");
    var width = $html.getBoundingClientRect().width;
    document.documentElement.style.fontSize = width * rem2px / designWidth + 'px';
}