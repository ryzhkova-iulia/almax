/**
 * Created by julia on 07.12.2016.
 */
modules.define('owl-carousel', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    window.jQuery = $;
    /* borschik:include:../../libs/owl-carousel/owl-carousel/owl.carousel.js */
    provide($);
});
