import { is } from 'bpmn-js/lib/util/ModelUtil';

export default function ColorPicker(eventBus, contextPad, commandStack) {

    contextPad.registerProvider(this);

    commandStack.registerHandler('shape.updateColor', UpdateColorHandler);

    function changeColor(event, element) {

        var color = window.prompt('type a color code');

        commandStack.execute('shape.updateColor', {
            element: element,
            color: color
        });
    }

    this.getContextPadEntries = function (element) {
        return {
            'changeColor': {
                group: 'edit',
                className: 'cp-icon',
                title: 'Change element color',
                action: {
                    click: changeColor
                }
            }
        };        
    };
}

function UpdateColorHandler() {

    this.execute = function (context) {
        context.oldColor = context.element.color;
        context.element.color = context.color;

        return context.element;
    };

    this.revert = function (context) {
        context.element.color = context.oldColor;

        return context.element;
    };

}