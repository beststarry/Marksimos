﻿$axure.loadCurrentPage({
  "url":"login.html",
  "generationDate":new Date(1398842904277.56),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"306c71ac815a48cc80c0f89c4d761934",
    "type":"Axure:Page",
    "name":"Login",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"396977fbdc1d4c6aae2a6023b5a3547c",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":510,
              "y":18},
            "size":{
              "width":540,
              "height":510}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5f99f0d42a43471cb79a6abe0ba5e84c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":510,
                  "y":18},
                "size":{
                  "width":540,
                  "height":510}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/login/u0.png"}},
{
          "id":"36e94413e4384108afe60d5b850c3363",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"20px",
            "location":{
              "x":560,
              "y":63},
            "size":{
              "width":50,
              "height":23}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8dcfa6c9d6f0470998ed6a607f58b28b",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"20px",
                "location":{
                  "x":560,
                  "y":63},
                "size":{
                  "width":50,
                  "height":23}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5179b4602621406fa22e45fe4e389f96",
          "label":"",
          "type":"radioButton",
          "styleType":"radioButton",
          "visible":true,
          "style":{
            "location":{
              "x":560,
              "y":148},
            "size":{
              "width":210,
              "height":15}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"47c92e8c3c3d4c84bf4679abd81568eb",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":560,
                  "y":148},
                "size":{
                  "width":210,
                  "height":15}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onCheckedChange":{
              "description":"OnCheckedChange",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"Set (Dynamic Panel) to student fade out 500ms fade in 500ms",
                      "panelsToStates":[{
                          "panelPath":["7e5d735704504a469ce39182573169bc"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":1,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "animateOut":{
                                "easing":"fade",
                                "duration":500},
                              "animateIn":{
                                "easing":"fade",
                                "duration":500},
                              "compress":false}}}]}]}]}}},
{
          "id":"a698e34ff87d46e6afb56b3e8fd09a0c",
          "label":"",
          "type":"radioButton",
          "styleType":"radioButton",
          "visible":true,
          "style":{
            "location":{
              "x":820,
              "y":148},
            "size":{
              "width":210,
              "height":15}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"aa3ea85bed9b4d94ba4feeee4aa9af4e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":820,
                  "y":148},
                "size":{
                  "width":210,
                  "height":15}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onCheckedChange":{
              "description":"OnCheckedChange",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"Set (Dynamic Panel) to facilitator fade out 500ms fade in 500ms",
                      "panelsToStates":[{
                          "panelPath":["7e5d735704504a469ce39182573169bc"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":2,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "animateOut":{
                                "easing":"fade",
                                "duration":500},
                              "animateIn":{
                                "easing":"fade",
                                "duration":500},
                              "compress":false}}}]}]}]}}},
{
          "id":"7e5d735704504a469ce39182573169bc",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":560,
              "y":208},
            "size":{
              "width":390,
              "height":240}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"45ac73dd1b274762966af06ec90d1b95",
              "label":"student",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"d5a9b4e2ee6b4fe185218e8f27adf466",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":0,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":14},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}},
{
                  "id":"5c7058d9b731492b9e731c523411cbd4",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":0,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":60},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}},
{
                  "id":"d76164c2d4af433cba98e4bac9c3b44b",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":0,
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":120},
                    "size":{
                      "width":200,
                      "height":22}},
                  "adaptiveStyles":{
}},
{
                  "id":"6314a4d407d54e488da762b7d4e5f6e2",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":0,
                  "type":"button",
                  "styleType":"button",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":195},
                    "size":{
                      "width":100,
                      "height":25}},
                  "adaptiveStyles":{
},
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"Case 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"Open Introduction in Current Window",
                              "target":{
                                "targetType":"page",
                                "url":"introduction.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true},
{
                  "id":"c39c5c9b4152442ba4fe27e02bbe73c5",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":0,
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":152},
                    "size":{
                      "width":200,
                      "height":22}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}},
{
              "id":"04557fee91d24c039e2397fefb524e19",
              "label":"facilitator",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"fe85db10817d4182ae5046fe9b920805",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":1,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":14},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}},
{
                  "id":"d4846e32fe174250b70c7b8e6715a22f",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":1,
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":60},
                    "size":{
                      "width":200,
                      "height":25}},
                  "adaptiveStyles":{
}},
{
                  "id":"b200120a076b4a30b99307a16e9b9875",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":1,
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":120},
                    "size":{
                      "width":200,
                      "height":22}},
                  "adaptiveStyles":{
}},
{
                  "id":"222aa8b0bbce43929a14784c72cb2d93",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":1,
                  "type":"button",
                  "styleType":"button",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":190},
                    "size":{
                      "width":100,
                      "height":25}},
                  "adaptiveStyles":{
},
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"Case 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"Open Introduction in Current Window",
                              "target":{
                                "targetType":"page",
                                "url":"introduction.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true},
{
                  "id":"6a325cce0ea749ef936c2db9bf596c4b",
                  "label":"",
                  "parentDynamicPanel":"7e5d735704504a469ce39182573169bc",
                  "panelIndex":1,
                  "type":"comboBox",
                  "styleType":"comboBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":28,
                      "y":152},
                    "size":{
                      "width":200,
                      "height":22}},
                  "adaptiveStyles":{
}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"4c44de05385f4727aef67ec6aaf83c16",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":4,
              "y":0},
            "size":{
              "width":496,
              "height":546}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"77bcbd6c424c41f48f73f00dd1d2d50d",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":4,
                  "y":0},
                "size":{
                  "width":496,
                  "height":546}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/login/u19.jpg"}}]}},
  "masters":{
},
  "objectPaths":{
    "396977fbdc1d4c6aae2a6023b5a3547c":{
      "scriptId":"u0"},
    "5f99f0d42a43471cb79a6abe0ba5e84c":{
      "scriptId":"u1"},
    "36e94413e4384108afe60d5b850c3363":{
      "scriptId":"u2"},
    "8dcfa6c9d6f0470998ed6a607f58b28b":{
      "scriptId":"u3"},
    "5179b4602621406fa22e45fe4e389f96":{
      "scriptId":"u4"},
    "47c92e8c3c3d4c84bf4679abd81568eb":{
      "scriptId":"u5"},
    "a698e34ff87d46e6afb56b3e8fd09a0c":{
      "scriptId":"u6"},
    "aa3ea85bed9b4d94ba4feeee4aa9af4e":{
      "scriptId":"u7"},
    "7e5d735704504a469ce39182573169bc":{
      "scriptId":"u8"},
    "d5a9b4e2ee6b4fe185218e8f27adf466":{
      "scriptId":"u9"},
    "5c7058d9b731492b9e731c523411cbd4":{
      "scriptId":"u10"},
    "d76164c2d4af433cba98e4bac9c3b44b":{
      "scriptId":"u11"},
    "6314a4d407d54e488da762b7d4e5f6e2":{
      "scriptId":"u12"},
    "c39c5c9b4152442ba4fe27e02bbe73c5":{
      "scriptId":"u13"},
    "fe85db10817d4182ae5046fe9b920805":{
      "scriptId":"u14"},
    "d4846e32fe174250b70c7b8e6715a22f":{
      "scriptId":"u15"},
    "b200120a076b4a30b99307a16e9b9875":{
      "scriptId":"u16"},
    "222aa8b0bbce43929a14784c72cb2d93":{
      "scriptId":"u17"},
    "6a325cce0ea749ef936c2db9bf596c4b":{
      "scriptId":"u18"},
    "4c44de05385f4727aef67ec6aaf83c16":{
      "scriptId":"u19"},
    "77bcbd6c424c41f48f73f00dd1d2d50d":{
      "scriptId":"u20"}}});