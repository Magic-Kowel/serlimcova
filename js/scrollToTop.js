/*!
 * ScrollToTop v2.0.0
 * Copyright 2019 zkreations
 * Daniel Abel M. (fb.com/danieI.abel)
 * Licensed under MIT (github.com/zkreations/plugins/blob/master/LICENSE)
 */
var scrollToTop = function () {
    function o(o) {
        function n(t) {
            e += Math.PI / (o / (t - l)), e >= Math.PI && window.scrollTo(0, 0), 0 !== window.scrollY && (window.scrollTo(0, Math.round(s + s * Math.cos(e))), l = t, window.requestAnimationFrame(n))
        }
        var s = window.scrollY / 2,
            e = 0,
            l = performance.now();
        window.requestAnimationFrame(n)
    }
    var n = document.getElementById("scrollToTop");
    showButton = n.dataset.upshow || 600, scrollSpeed = n.dataset.upspeed || 1e3;
    var s = window.scrollY;
    window.addEventListener("scroll", function () {
        s = window.scrollY, showButton < s ? n.classList.add("show") : n.classList.remove("show")
    }), n.onclick = function () {
        o(scrollSpeed)
    }
}();