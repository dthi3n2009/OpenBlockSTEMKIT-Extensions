/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // Mốc hiệu chuẩn dùng chung cho mọi khối phần trăm.
    // Giá trị mặc định hợp với cảm biến điện dung phổ thông cắm vào ESP32-C3 (ADC 12 bit, 0-4095).
    // Học sinh đo được số thật thì dùng khối "đặt mốc đất khô ... đất ướt ..." để chỉnh lại.
    function defineSoilHelpers (Blockly) {
        Blockly.Arduino.definitions_.soilMoisture_calibration =
            `int mocDatKho = 3000;\nint mocDatUot = 1300;`;

        Blockly.Arduino.definitions_.soilMoisture_percentFn =
            `int doAmDat(int chan) {\n` +
            `\tint phanTram = map(analogRead(chan), mocDatKho, mocDatUot, 0, 100);\n` +
            `\treturn constrain(phanTram, 0, 100);\n` +
            `}\n`;
    }

    Blockly.Arduino.soilMoisture_readPercent = function (block) {
        const port = block.getFieldValue('PORT');

        defineSoilHelpers(Blockly);

        return [`doAmDat(${port})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.soilMoisture_isDry = function (block) {
        const port = block.getFieldValue('PORT');
        const threshold = Blockly.Arduino.valueToCode(block, 'THRESHOLD', Blockly.Arduino.ORDER_ATOMIC);

        defineSoilHelpers(Blockly);

        return [`(doAmDat(${port}) < ${threshold})`, Blockly.Arduino.ORDER_RELATIONAL];
    };

    Blockly.Arduino.soilMoisture_readRaw = function (block) {
        const port = block.getFieldValue('PORT');

        return [`analogRead(${port})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.soilMoisture_calibrate = function (block) {
        const dry = Blockly.Arduino.valueToCode(block, 'DRY', Blockly.Arduino.ORDER_ATOMIC);
        const wet = Blockly.Arduino.valueToCode(block, 'WET', Blockly.Arduino.ORDER_ATOMIC);

        defineSoilHelpers(Blockly);

        return `mocDatKho = ${dry};\nmocDatUot = ${wet};\n`;
    };

    Blockly.Arduino.soilMoisture_readSwitch = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.setups_[`soilMoisture_switch_${port}`] = `pinMode(${port}, INPUT);`;

        // Module cảm biến kéo chân D0 xuống mức thấp khi đất đủ ẩm,
        // nên "đất khô" tương ứng với mức cao.
        return [`(digitalRead(${port}) == HIGH)`, Blockly.Arduino.ORDER_RELATIONAL];
    };

    return Blockly;
}

exports = registerGenerators;
