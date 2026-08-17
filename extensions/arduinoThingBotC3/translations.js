/* eslint-disable */

function getInterfaceTranslations() {
  return {
    "en": {
      "arduinoThingBotC3.name": "Arduino ThingBot C3",
      "arduinoThingBotC3.description": "The open-source Arduino code for ThingBot is developed by Maker Viet with support from ThingEdu."
    },
    "vi": {
      "arduinoThingBotC3.name": "Arduino ThingBot C3",
      "arduinoThingBotC3.description": "Bo mạch robot giáo dục ThingBot C3 do Maker Việt phát triển với sự hỗ trợ của ThingEdu."
    }
  };
}

function registerScratchExtensionTranslations() {
  return {};
}

function registerBlocksMessages(Blockly) {
  Object.assign(Blockly.ScratchMsgs.locales["en"], {
    "THINGBOTC3_CATEGORY": "ThingBot",
    "THINGBOTC3_INIT": "init ThingBot",
    "THINGBOTC3_SET_MOTOR": "set motor %1 go %2 at %3",
    "THINGBOTC3_TEST_MOTOR": "test M port %1 %2 at speed %3 for %4 seconds, then stop",
    "THINGBOTC3_STOP_MOTOR": "stop M port %1",
    "THINGBOTC3_SET_SERVO": "set servo %1 to pulse %2",
    "THINGBOTC3_BUZZER": "set buzzer to %1 pulse",
    "THINGBOTC3_SET_LED": "set led %1 brightness %2",
    "THINGBOTC3_FORWARD": "forward",
    "THINGBOTC3_BACKWARD": "backward",
    "THINGBOTC3_INIT_PS2": "init PS2 on ThingBot",
    "THINGBOTC3_SWITCH": "read switch"
  });

  if (!Blockly.ScratchMsgs.locales["vi"]) {
    Blockly.ScratchMsgs.locales["vi"] = {};
  }
  Object.assign(Blockly.ScratchMsgs.locales["vi"], {
    "THINGBOTC3_CATEGORY": "ThingBot",
    "THINGBOTC3_INIT": "khởi động ThingBot",
    "THINGBOTC3_SET_MOTOR": "cho động cơ %1 chạy %2 với tốc độ %3",
    "THINGBOTC3_TEST_MOTOR": "thử cổng M%1 chạy %2 với tốc độ %3 trong %4 giây rồi dừng",
    "THINGBOTC3_STOP_MOTOR": "dừng cổng M%1",
    "THINGBOTC3_SET_SERVO": "đặt servo %1 ở độ rộng xung %2",
    "THINGBOTC3_BUZZER": "đặt còi với độ rộng xung %1",
    "THINGBOTC3_SET_LED": "đặt đèn LED %1 độ sáng %2",
    "THINGBOTC3_FORWARD": "tiến",
    "THINGBOTC3_BACKWARD": "lùi",
    "THINGBOTC3_INIT_PS2": "khởi động tay cầm PS2 trên ThingBot",
    "THINGBOTC3_SWITCH": "đọc công tắc"
  });

  return Blockly;
}

if (typeof module !== 'undefined') {
  module.exports = { getInterfaceTranslations };
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
