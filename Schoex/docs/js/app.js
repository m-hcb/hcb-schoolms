//affix
$('.affix-top').affix()


//activ li
! function($) {
    $(function() {
        var $window = $(window)
        var $body = $(document.body)
        var navHeight = $('.navbar').outerHeight(true) + 10
        $body.scrollspy({
            target: '.bs-sidebar',
            offset: navHeight
        })
        $window.on('load', function() {
            $body.scrollspy('refresh')
        })
        $('.bs-docs-container [href=#]').click(function(e) {
            e.preventDefault()
        })
        setTimeout(function() {
            var $sideBar = $('.bs-sidebar')
            $sideBar.affix({
                offset: {
                    top: function() {
                        return $window.width() <= 980 ? 290 : 210
                    },
                    bottom: 270
                }
            })
        }, 100)
        setTimeout(function() {
            $('.bs-top').affix()
        }, 100)
        $('.tooltip-demo').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })
        $('.tooltip-test').tooltip()
        $('.popover-test').popover()
        $('.bs-docs-navbar').tooltip({
            selector: "a[data-toggle=tooltip]",
            container: ".bs-docs-navbar .nav"
        })
        $("[data-toggle=popover]").popover()
        $('#fat-btn').click(function() {
            var btn = $(this)
            btn.button('loading')
            setTimeout(function() {
                btn.button('reset')
            }, 3000)
        })
        $('.bs-docs-carousel-example').carousel()
    })
}(window.jQuery)