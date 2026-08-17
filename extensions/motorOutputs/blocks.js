/* eslint-disable */

function registerBlocks (Blockly) {
    const motorPorts = [['M1', '1'], ['M2', '2'], ['M3', '3'], ['M4', '4']];
    const color = '#E05A2A';

    Blockly.Blocks.motorOutputs_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOROUTPUTS_RUN,
                args0: [
                    {type: 'field_dropdown', name: 'PORT', options: motorPorts},
                    {
                        type: 'field_dropdown', name: 'DIRECTION', options: [
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_FORWARD', 'forward'), 'forward'],
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_BACKWARD', 'backward'), 'backward']
                        ]
                    },
                    {type: 'input_value', name: 'SPEED', check: 'Number'}
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motorOutputs_test = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOROUTPUTS_TEST,
                args0: [
                    {type: 'field_dropdown', name: 'PORT', options: motorPorts},
                    {
                        type: 'field_dropdown', name: 'DIRECTION', options: [
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_FORWARD', 'forward'), 'forward'],
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_BACKWARD', 'backward'), 'backward']
                        ]
                    },
                    {type: 'input_value', name: 'SPEED', check: 'Number'},
                    {type: 'input_value', name: 'SECONDS', check: 'Number'}
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motorOutputs_stop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOROUTPUTS_STOP,
                args0: [{type: 'field_dropdown', name: 'PORT', options: motorPorts}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motorOutputs_led = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOROUTPUTS_LED,
                args0: [
                    {type: 'field_dropdown', name: 'PORT', options: motorPorts},
                    {
                        type: 'field_dropdown', name: 'STATE', options: [
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_ON', 'on'), 'on'],
                            [Blockly.ScratchMsgs.translate('MOTOROUTPUTS_OFF', 'off'), 'off']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
}

exports = registerBlocks;
