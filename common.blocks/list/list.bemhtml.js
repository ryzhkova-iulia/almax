/**
 * Created by julia on 07.12.2016.
 */
block("list").content()(function(){

    var result = [];
    var items = this.ctx.items;
    var uiItems = [];

    if (this.ctx.title) {
        result.push({
            elem : "title",
            tag : 'h3',
            content : this.ctx.title
        });
    }

    items.forEach(function(item) {
        uiItems.push({
            elem : "item",
            tag : "li",
            content : item
        });
    });

    result.push({
        elem : "box",
        tag : "ul",
        content : uiItems
    });

    return result;
});
