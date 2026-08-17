/* eslint-disable */

function registerGenerators(Blockly) {

    // Các khối ThingBot phải tự mang theo phần nền của bo mạch. Trước đây học
    // sinh phải biết kéo thêm khối "khởi động ThingBot"; nếu quên, mã tạo ra
    // có pwm.setPin(...) nhưng không có pwm/B U Z Z E R và sẽ không biên dịch.
    function ensureThingBotRuntime () {
        Blockly.Arduino.includes_.thingBot_pwmInit = `#include <Wire.h>\n#include <Adafruit_PWMServoDriver.h>`;
        Blockly.Arduino.definitions_['define_M1_A'] = '#define M1_A 2';
        Blockly.Arduino.definitions_['define_M1_B'] = '#define M1_B 3';
        Blockly.Arduino.definitions_['define_M2_A'] = '#define M2_A 4';
        Blockly.Arduino.definitions_['define_M2_B'] = '#define M2_B 5';
        Blockly.Arduino.definitions_['define_M3_A'] = '#define M3_A 7';
        Blockly.Arduino.definitions_['define_M3_B'] = '#define M3_B 6';
        Blockly.Arduino.definitions_['define_M4_A'] = '#define M4_A 1';
        Blockly.Arduino.definitions_['define_M4_B'] = '#define M4_B 0';
        Blockly.Arduino.definitions_['define_SERVO_1'] = '#define SERVO_1 12';
        Blockly.Arduino.definitions_['define_SERVO_2'] = '#define SERVO_2 11';
        Blockly.Arduino.definitions_['define_SERVO_3'] = '#define SERVO_3 10';
        Blockly.Arduino.definitions_['define_SERVO_4'] = '#define SERVO_4 9';
        Blockly.Arduino.definitions_['define_SERVO_5'] = '#define SERVO_5 8';
        Blockly.Arduino.definitions_['define_buzzer_pin'] = '#define BUZZER 14';
        Blockly.Arduino.definitions_['define_switch_pin'] = '#define SW 3';
        Blockly.Arduino.definitions_['define_LED_1_pin'] = '#define LED_1 15';
        Blockly.Arduino.definitions_['define_LED_2_pin'] = '#define LED_2 13\n';
        Blockly.Arduino.definitions_.thing_motorInit = 'Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();\n';
        Blockly.Arduino.definitions_.mapToPulse = 'int mapToPulse(int value) {\n\treturn map(min(100, max(0, value)), 0, 100, 0, 4095);\n}\n';
        Blockly.Arduino.setups_.thingBotC3_pwmInit = 'pwm.begin();\npwm.setOscillatorFrequency(27000000);\npwm.setPWMFreq(50);\npinMode(SW, INPUT);';
    }

    function mapValue(value, fromLow, fromHigh, toLow, toHigh) {
        const maxVal = 4095;
        const minVal = 0;

        mappedValue = (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;

        return Math.min(maxVal, Math.max(minVal, mappedValue)); // constrain value between 0 and 4095
    };

    Blockly.Arduino.thingBotC3_init = function () {
        ensureThingBotRuntime();
        return '';
    };

    Blockly.Arduino.thingBotC3_setMotor = function (block) {
        ensureThingBotRuntime();
        const motor = block.getFieldValue('MOTOR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('DIRECTION');

        return motorRunCode(motor, direction, speed || '0');
    };

    function motorRunCode (motor, direction, speed) {
        if (direction == 'forward') {
            return `pwm.setPWM(M${motor}_A, 0, 0);\npwm.setPWM(M${motor}_B, 0, mapToPulse(${speed}));\n`;
        }
        return `pwm.setPWM(M${motor}_A, 0, mapToPulse(${speed}));\npwm.setPWM(M${motor}_B, 0, 0);\n`;
    }

    function motorStopCode (motor) {
        return `pwm.setPWM(M${motor}_A, 0, 0);\npwm.setPWM(M${motor}_B, 0, 0);\n`;
    }

    Blockly.Arduino.thingBotC3_testMotor = function (block) {
        ensureThingBotRuntime();
        const motor = block.getFieldValue('MOTOR');
        const direction = block.getFieldValue('DIRECTION');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const seconds = Blockly.Arduino.valueToCode(block, 'SECONDS', Blockly.Arduino.ORDER_ATOMIC) || '0';

        // Khối thử luôn tự dừng. Giới hạn 10 giây là để thao tác kiểm tra ngắn,
        // không thay thế chương trình tưới ở Bài 8.
        return `${motorRunCode(motor, direction, speed)}delay((unsigned long)(constrain(${seconds}, 0, 10) * 1000));\n${motorStopCode(motor)}`;
    };

    Blockly.Arduino.thingBotC3_stopMotor = function (block) {
        ensureThingBotRuntime();
        return motorStopCode(block.getFieldValue('MOTOR'));
    };

    Blockly.Arduino.thingBotC3_setKitLed = function (block) {
        ensureThingBotRuntime();
        const motor = block.getFieldValue('MOTOR');
        return block.getFieldValue('STATE') === 'on' ? motorRunCode(motor, 'forward', '100') : motorStopCode(motor);
    };

    Blockly.Arduino.thingBotC3_setServo = function (block) {
        ensureThingBotRuntime();
        const servo = block.getFieldValue('SERVO');
        const pulse = Blockly.Arduino.valueToCode(block, 'PULSE', Blockly.Arduino.ORDER_ATOMIC);
        return `pwm.setPWM(SERVO_${servo}, 0, ${pulse});\n`;
    };

    Blockly.Arduino.thingBotC3_buzzer = function (block) {
        ensureThingBotRuntime();
        const sound = Blockly.Arduino.valueToCode(block, 'SOUND', Blockly.Arduino.ORDER_ATOMIC);

        return `pwm.setPin(BUZZER, ${sound});\n`;
    };

    Blockly.Arduino.thingBotC3_setLed = function (block) {
        ensureThingBotRuntime();
        const led = block.getFieldValue('LED');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        return `pwm.setPin(${led}, mapToPulse(${brightness}));\n`;
    };

    Blockly.Arduino.thingBotC3_initPS2 = function () {
        Blockly.Arduino.includes_.thingBot_ps2Init = `#include <PS2X_lib.h>`
        Blockly.Arduino.definitions_['define_PS2_pin'] = `#define PS2_DAT 7   // DIN\n#define PS2_CMD 2   // DOUT\n#define PS2_SEL 10  // CS\n#define PS2_CLK 6   // CLK\n#define pressures false\n#define rumble false\n`;
        Blockly.Arduino.definitions_.thing_ps2Init = `PS2X ps2x;\n`;
        Blockly.Arduino.definitions_.thing_ps2Config = `int error = 1;\nint tryNum = 1;`;

        return `while (error != 0) {\n\tdelay(1000);\n\terror = ps2x.config_gamepad(PS2_CLK, PS2_CMD, PS2_SEL, PS2_DAT, pressures, rumble);\n\tSerial.print("#try config ");\n\tSerial.println(tryNum);\n\ttryNum++;\n}\n`;
    };

    Blockly.Arduino.thingBotC3_switch = function () {
        ensureThingBotRuntime();
        const code = `!digitalRead(SW)`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
