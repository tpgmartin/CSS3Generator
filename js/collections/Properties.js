app.collections.Properties = Backbone.Collection.extend({
    initialize: function () {
        this.add({
            title: '@Font Face',
            values: [
                {
                    name: 'Font Family',
                    options: null,
                    units: null
                },
                {
                    name: 'Font Name',
                    options: null,
                    units: null
                }
            ]
        });
        this.add({
            title: 'Border Radius',
            values: [

                {
                    name: 'Top Left',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Top Right',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Bottom Right',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Bottom Left',
                    options: null,
                    units: 'px'
                }
            ]
        });
        this.add({
            title: 'Box Resize',
            values: [
                {
                    name: 'Box Resize',
                    options: [ 'None', 'Horizontal', 'Vertical', 'Both' ],
                    units: null
                }
            ]
        });
        this.add({
            title: 'Box Shadow',
            values: [
                {
                    name: 'Inset',
                    options: [ 'No', 'Inset' ],
                    units: null
                },
                {
                    name: 'Horizontal Length',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Vertical Length',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Blur Radius',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Spread',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Color Type',
                    options: [ 'RGBA', 'Hex' ],
                    units: null
                }
            ]
        });
        this.add({
            title: 'Box Sizing',
            values: [
                {
                    name: 'Box Sizing',
                    options: [ 'Border Box', 'Content Box' ],
                    units: null
                }
            ]

        });
        this.add({
            title: 'Flexbox',
            values: [
                {
                    name: 'Flex Display',
                    options: [ 'Flex', 'Inline Flex' ],
                    units: null
                },
                {
                    name: 'Flex Direction',
                    options: [ 'Row', 'Row Reverse', 'Column', 'Column Reverse' ],
                    units: null
                },
                {
                    name: 'Flex Wrap',
                    options: [ 'Wrap', 'No Wrap', 'Wrap Reverse' ],
                    units: null
                },
                {
                    name: 'Justify Content',
                    options: [ 'Flex Start', 'Flex End', 'Center', 'Space Between', 'Space Around' ],
                    units: null
                },
                {
                    name: 'Align Items',
                    options: [ 'Flex Start', 'Flex End', 'Center', 'Baseline', 'Stretch' ],
                    units: null
                },
                {
                    name: 'Align Content',
                    options: [ 'Flex Start', 'Flex End', 'Center', 'Space Between', 'Space Around', 'Stretch' ],
                    units: null
                }
            ]
        });
        this.add({ title: 'Gradient' });
        this.add({
            title: 'Multiple Columns',
            values: [
                {
                    name: 'Column Count',
                    options: null,
                    units: null
                },
                {
                    name: 'Column Gap',
                    options: null,
                    units: 'px'
                }
            ]
        });
        this.add({
            title: 'Outline',
            values: [
                {
                    name: 'Outline Thickness',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Outline',
                    options: [ 'Dotted', 'Dashed', 'Solid', 'Groove', 'Ridge', 'Inset', 'Outset', 'Double', 'Auto' ],
                    units: null
                },
                {
                    name: 'Outline Color',
                    options: null,
                    units: null
                },
                {
                    name: 'Outline Offset',
                    options: null,
                    units: 'px'
                }
            ]
        });
        this.add({
            title: 'RGBA',
            values: [
                {
                    name: 'Red',
                    options: null,
                    units: null
                },
                {
                    name: 'Green',
                    options: null,
                    units: null
                },
                {
                    name: 'Blue',
                    options: null,
                    units: null
                },
                {
                    name: 'Opacity',
                    options: null,
                    units: null
                }
            ]
        });
        this.add({
            title: 'Text Shadow',
            values: [
                {
                    name: 'Horizontal Length',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Vertical Length',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Blur Radius',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Shadow Color',
                    options: null,
                    units: null
                }
            ]
        });
        this.add({
            title: 'Transform',
            values: [
                {
                    name: 'Scale',
                    options: null,
                    units: null
                },
                {
                    name: 'Rotate',
                    options: null,
                    units: 'deg'
                },
                {
                    name: 'Translate',
                    options: null,
                    units: 'px'
                },
                {
                    name: 'Skew',
                    options: null,
                    units: 'deg'
                }
            ]
        });
        this.add({
            title: 'Transition',
            values: [
                {
                    name: 'Property',
                    options: [ 'All', 'Background', 'Color', 'Height', 'Width', 'Outline' ],
                    units: null
                },
                {
                    name: 'Duration',
                    options: [ 'Milliseconds', 'Seconds' ],
                    units: null
                },
                {
                    name: 'Function',
                    options: [ 'Ease', 'Linear', 'Ease-In', 'Ease-Out', 'Ease-In-Out' ],
                    units: null
                }
            ]
        });
    },

    changeVisibility: function (visible, index) {
        this.models[index].set('visible', visible);
    },

    model: app.models.Property
});