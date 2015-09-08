app.views.menu = Backbone.View.extend({
    template: _.template($('#tpl-menu').html()),

    events: {
        'click h2#sub-heading': 'showProperties'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template({}));
    },

    showProperties: function (e) {
        $('.item-property.hide').toggleClass('hide');
        $('.item-dashboard').not('.hide').toggleClass('hide');
    }

});