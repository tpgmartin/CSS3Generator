var app = (function () {

    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        properties: null,
        init: function () {
            this.content = $('#content');
            ViewsFactory.menu();
            this.properties = new api.collections.Properties();
            Backbone.history.start();
            return this;
        },
        changeContent: function (el) {
            this.content.empty().append(el);
            return this;
        },
        title: function (str) {
            $('#sub-heading').text(str);
            return this;
        }
    };

    var ViewsFactory = {
        menu: function () {
            if (!this.menuView) {
                this.menuView = new api.views.menu({
                    el: $('#menu')
                })
            }
            return this.menuView;
        },
        list: function () {
            if (!this.listView) {
                this.listView = new api.views.list({
                    model: api.properties
                })
            }
            return this.listView;
        }
    };

    var Router = Backbone.Router.extend({
       routes: {
           '': 'list'
       },
        list: function () {
            var view = ViewsFactory.list();
            api.title()
        }
    });

    api.router = new Router();

    return api;

})();