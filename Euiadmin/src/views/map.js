export default function  loadBMap() {
    let ak = 'c6y5cuA0x3WIpAREGA6e4K7sRz8U7P0X'
    return new Promise(function (resolve, reject) {
        if (typeof window.BMap !== 'undefined') {
            resolve(window.BMap)
            return true
        }
        window.onBMapCallback = function () { resolve(window.BMap) }
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'http://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=onBMapCallback'
        script.onerror = reject
        document.head.appendChild(script)
    })
}