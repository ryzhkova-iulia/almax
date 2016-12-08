/**
 * Created by julia on 08.12.2016.
 */
modules.define('slider-one', ['i-bem__dom', 'owl-carousel'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function () {
                        this.elem("slider").owlCarousel({
                            autoPlay: false,
                            items : 1,
                            itemsDesktop : [1000,3], //5 items between 1000px and 901px
                            itemsDesktopSmall : [900,3], // betweem 900px and 601px
                            itemsTablet: [600,3], //2 items between 600 and 0
                            itemsMobile : [500,3], // itemsMobile disabled - inherit from itemsTablet option
                            navigation : true,
                            pagination: false,
                            navigationText : ["&#8592;", "&#8594;"]
                        });
                    }
                }
            }
        },
        {
            live: function () {
                return false;
            }
        })
    );
});
