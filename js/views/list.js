app.views.list = Backbone.View.extend({
    mode: null,

    events: {
        'click li[data-status]': 'changeVisibility'
    },

    initialize: function () {
        var handler = _.bind(this.render, this);
        this.model.bind('change', handler);
    },

    render: function () {
        var html = '<ul class="list">',
            self = this;
        this.model.each(function (property, index) {
            var template = _.template($('#tpl-list-property').html());
            html += template({
                title: property.get('title'),
                index: index
            });
        });
        this.$el.html(html);
        this.delegateEvents();
        return this;
    },

    changeVisibility: function (e) {
        var index = parseInt(e.target.getAttribute('data-index'));
        console.log(index);
    },

    setMode: function (mode) {
        this.mode = mode;
        return this;
    }

});