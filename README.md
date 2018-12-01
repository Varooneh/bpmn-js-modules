# bpmn-js-module

[bpmn-js](https://bpmn.io/) is free, powerful and opensource library for design diagram and bpmn diagram.



By default we can not use many modules of [bpmn-js](https://bpmn.io/) like [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel) in vanillajs style, with this package



we can develop modules and requirement in node-style-app and use compiled-js file in our page.



I, created many functions for start that you can initialize bpmn designer with this options:



- bpmn modeler module

- bpmn(diagram-js) minimap module

- color-picker module

- resize-element module

- properties panel module

- camunda moddle module



You can call this modules with related functions and use in your project:



- getBpmnModule() : return bpmn modeler object.

- getEmptyBpmn() : return empty diagram pre-designed [for new/empty]

- getMiniMapModule() : return minimap for bpmn modeler (based on diagram-js)

- getColorPickerModule() : return color-picker object for each element (it's very very simple)

- getResizeElementModule() : return resize element object (based on nyan demo)

- getPropertiesPanelModule() : return properties panel object

- getPropertiesProviderModule() : return properties provider object

- getCamundaModdleDescriptorModule() : return camunda object



# Requirements



Just [NodeJS](https://nodejs.org/en/) LTS version



# How to use?



Use this package is very very simple and fast.



1. Install packages with npm install --save or yarn

2. Run npm run build:dev 

3. Dist folder created and done :-)

4. Move dist folder content to your project

5. and ...



```html

<!-- bpmn designer container -->

<div id="bpmnview" class="bpmn_view"></div>



<!-- bpmn properties panel -->

<div class="properties-panel-parent prop_view" id="js-properties-panel"></div>

```







```html

<script type="text/javascript" src="./assets/js/bpmn/modules/bpmn.development.js"></script>

```



```javascript

<script type="text/javascript">

        var modeler;



        function initializeBpmnView(container) {

            var BpmnModule = bpm.getBpmnModule();

            modeler = new BpmnModule.default({

                container: container,

                keyboard: {

                    bindTo: window

                },

                additionalModules: [
					bpmn.getMiniMapModule(),

                    bpm.getColorPickerModule(),

                    bpm.getResizeElementModule(),

                    bpm.getPropertiesPanelModule(),

                    bpm.getPropertiesProviderModule()                   
                ],

                propertiesPanel: {

                    parent: '#js-properties-panel'

                },

                moddleExtensions: {

                    camunda: bpm.getCamundaModdleDescriptorModule()

                }

            })





            createNewBpmn(bpm.getEmptyBpmn());

        }



        function createNewBpmn(xml) {

            modeler.importXML(xml, function (error) {

                if (error) {

                    return;

                }
            });

        }

        $(document).ready(function () {

            initializeBpmnView('#bpmnview');

        });

    </script>

```







and done. You have bpmn-js with popular modules in your project.







# Note:



It's free and very very simple and useful for me and I hope useful for you. Maybe many bugs appear and please tell me about it with hadi.jami@gmail.com



# We can develop/fork it?



Yes, I will be glad and it is my pleasure.



# Special thanks to

[Graph Company](http://graphinfotec.com/)

My dear friend [Mr. Ali SoleymaniFard](alisfard@gmail.com)

[bpmn-js](https://bpmn.io/)

and every node modules used in this project :-)

Have a good time and good WORLD :-) :-)
