/* eslint-disable */

function getInterfaceTranslations () {
    return {
        en: {'motorOutputs.name': 'M outputs: pump, fan, 5V LED', 'motorOutputs.description': 'Control a pump, fan, or 5V LED module through any M port.'},
        vi: {'motorOutputs.name': 'Đầu ra M: bơm, quạt, đèn 5V', 'motorOutputs.description': 'Thử và điều khiển bơm, quạt hoặc module đèn 5V qua bất kỳ cổng M nào.'}
    };
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOROUTPUTS_CATEGORY: 'M outputs · pump, fan, 5V LED',
        MOTOROUTPUTS_RUN: 'run M port %1 %2 at speed %3',
        MOTOROUTPUTS_TEST: 'test M port %1 %2 at speed %3 for %4 seconds, then stop',
        MOTOROUTPUTS_STOP: 'stop M port %1',
        MOTOROUTPUTS_LED: 'set 5V LED module at M port %1 %2',
        MOTOROUTPUTS_FORWARD: 'forward', MOTOROUTPUTS_BACKWARD: 'backward', MOTOROUTPUTS_ON: 'on', MOTOROUTPUTS_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales.vi || (Blockly.ScratchMsgs.locales.vi = {}), {
        MOTOROUTPUTS_CATEGORY: 'Đầu ra M · bơm, quạt, đèn 5V',
        MOTOROUTPUTS_RUN: 'cho cổng M%1 chạy %2 với tốc độ %3',
        MOTOROUTPUTS_TEST: 'thử cổng M%1 chạy %2 với tốc độ %3 trong %4 giây rồi dừng',
        MOTOROUTPUTS_STOP: 'dừng cổng M%1',
        MOTOROUTPUTS_LED: 'đặt module đèn LED 5V ở cổng M%1 thành %2',
        MOTOROUTPUTS_FORWARD: 'tiến', MOTOROUTPUTS_BACKWARD: 'lùi', MOTOROUTPUTS_ON: 'bật', MOTOROUTPUTS_OFF: 'tắt'
    });
    return Blockly;
}

if (typeof module !== 'undefined') module.exports = {getInterfaceTranslations};
exports = registerBlocksMessages;
