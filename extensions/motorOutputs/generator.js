/* eslint-disable */

function registerGenerators (Blockly) {
    function ensureRuntime () {
        Blockly.Arduino.includes_.motorOutputsWire = '#include <Wire.h>\n#include <Adafruit_PWMServoDriver.h>';
        Blockly.Arduino.definitions_.motorOutputsPwm = 'Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();\n';
        Blockly.Arduino.definitions_.motorOutputsMap = 'int motorOutputsPulse(int value) { return map(min(100, max(0, value)), 0, 100, 0, 4095); }\n';
        Blockly.Arduino.setups_.motorOutputsPwm = 'pwm.begin();\npwm.setOscillatorFrequency(27000000);\npwm.setPWMFreq(50);';
    }

    function runCode (port, direction, speed) {
        const channels = {1: [2, 3], 2: [4, 5], 3: [7, 6], 4: [1, 0]}[port];
        if (direction === 'forward') return `pwm.setPWM(${channels[0]}, 0, 0);\npwm.setPWM(${channels[1]}, 0, motorOutputsPulse(${speed}));\n`;
        return `pwm.setPWM(${channels[0]}, 0, motorOutputsPulse(${speed}));\npwm.setPWM(${channels[1]}, 0, 0);\n`;
    }

    function stopCode (port) {
        const channels = {1: [2, 3], 2: [4, 5], 3: [7, 6], 4: [1, 0]}[port];
        return `pwm.setPWM(${channels[0]}, 0, 0);\npwm.setPWM(${channels[1]}, 0, 0);\n`;
    }

    Blockly.Arduino.motorOutputs_run = function (block) {
        ensureRuntime();
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
        return runCode(block.getFieldValue('PORT'), block.getFieldValue('DIRECTION'), speed);
    };

    Blockly.Arduino.motorOutputs_test = function (block) {
        ensureRuntime();
        const port = block.getFieldValue('PORT');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const seconds = Blockly.Arduino.valueToCode(block, 'SECONDS', Blockly.Arduino.ORDER_ATOMIC) || '0';
        return `${runCode(port, block.getFieldValue('DIRECTION'), speed)}delay((unsigned long)(constrain(${seconds}, 0, 10) * 1000));\n${stopCode(port)}`;
    };

    Blockly.Arduino.motorOutputs_stop = function (block) {
        ensureRuntime();
        return stopCode(block.getFieldValue('PORT'));
    };

    Blockly.Arduino.motorOutputs_led = function (block) {
        ensureRuntime();
        const port = block.getFieldValue('PORT');
        return block.getFieldValue('STATE') === 'on' ? runCode(port, 'forward', '100') : stopCode(port);
    };
}

exports = registerGenerators;
