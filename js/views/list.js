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
                values: property.get('values'),
                index: index,
                visible: property.get('visible') ? 'visible' : 'hidden',
                isVisible: property.get('visible') ? 'visible=="visible"' : ''

            });
        });
        this.$el.html(html);
        this.delegateEvents();
        return this;
    },

    changeVisibility: function (e) {
        var index = parseInt(e.target.getAttribute('data-index'));
        //this.model.changeVisibility($(e.target).next().visible, index);

        // Don't like doing this with jquery
        $('.item-property').toggleClass('hide');
        $(e.target).next().toggleClass('hide');

    },

    setMode: function (mode) {
        this.mode = mode;
        return this;
    }

});