/**
 * Created by julia on 07.12.2016.
 */
modules.define('slider', ['i-bem__dom', 'owl-carousel'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function () {
                        $(this.domElem).owlCarousel({
                            autoPlay: false,
                            items : 1,
                            itemsDesktop : [1000,1], //5 items between 1000px and 901px
                            itemsDesktopSmall : [900,1], // betweem 900px and 601px
                            itemsTablet: [600,1], //2 items between 600 and 0
                            itemsMobile : [500,1] // itemsMobile disabled - inherit from itemsTablet option
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
