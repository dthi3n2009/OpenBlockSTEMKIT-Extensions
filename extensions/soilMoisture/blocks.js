/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    // Màu nhóm CẢM BIẾN của bộ Dế Base KIT (xanh lá thương hiệu)
    const color = '#2E8B57';
    const secondaryColour = '#256F46';

    // Cổng cắm thật trên bo ThingBot Shield.
    // Chỉ IO0/IO1/IO4 đọc được giá trị analog (ESP32-C3 dùng ADC1 ở GPIO0-4).
    // IO5 nằm trên ADC2 nên đọc analog không ổn định -> chỉ dùng cho khối bật/tắt.
    const analogPorts = [
        ['IO0', '0'],
        ['IO1', '1'],
        ['IO4', '4']
    ];

    const allPorts = analogPorts.concat([['IO5', '5']]);

    Blockly.Blocks.soilMoisture_readPercent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READPERCENT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: analogPorts
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_isDry = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_ISDRY,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: analogPorts
                    },
                    {
                        type: 'input_value',
                        name: 'THRESHOLD'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readRaw = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READRAW,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: analogPorts
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.soilMoisture_calibrate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_CALIBRATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DRY'
                    },
                    {
                        type: 'input_value',
                        name: 'WET'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.soilMoisture_readSwitch = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOILMOISTURE_READSWITCH,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: allPorts
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
