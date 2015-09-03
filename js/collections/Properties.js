app.collections.Properties = Backbone.Collection.extend({
    initialize: function () {
        this.add({ title: '@Font Face' });
        this.add({ title: 'Border Radius' });
        this.add({ title: 'Box Resize' });
        this.add({ title: 'Box Shadow' });
        this.add({ title: 'Box String' });
        this.add({ title: 'Flexbox' });
        this.add({ title: 'Gradient' });
        this.add({ title: 'Multiple Columns' });
        this.add({ title: 'Outline' });
        this.add({ title: 'RGBA' });
        this.add({ title: 'Text Shadow' });
        this.add({ title: 'Transform' });
        this.add({ title: 'Transition' });
    },

    changeVisibility: function () {

    },

    model: app.models.Property
});