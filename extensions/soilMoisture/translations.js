/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */

// Sản phẩm dùng cho học sinh Việt Nam nên chữ mặc định để luôn tiếng Việt.
// Mục "en" giữ bản tiếng Anh cho người phát triển.
function getInterfaceTranslations () {
    return {
        "vi": {
            "soilMoisture.name": "Cảm biến độ ẩm đất",
            "soilMoisture.description": "Đo xem đất trong chậu đang khô hay đủ ẩm."
        },
        // App có thể đang chạy ngôn ngữ Anh, nhưng sản phẩm dành cho học sinh Việt Nam
        // nên mục "en" cũng để tiếng Việt, tránh chữ Anh lọt ra màn hình các em.
        "en": {
            "soilMoisture.name": "Cảm biến độ ẩm đất",
            "soilMoisture.description": "Đo xem đất trong chậu đang khô hay đủ ẩm."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    const viMessages = {
        "SOILMOISTURE_CATEGORY": "Độ ẩm đất",
        "SOILMOISTURE_READPERCENT": "độ ẩm đất ở cổng %1 (%)",
        "SOILMOISTURE_ISDRY": "đất ở cổng %1 đang khô? (dưới %2 %)",
        "SOILMOISTURE_READRAW": "số đo thô của cảm biến ở cổng %1",
        "SOILMOISTURE_CALIBRATE": "đặt mốc: đất khô %1 , đất ướt %2",
        "SOILMOISTURE_READSWITCH": "đèn báo khô trên cảm biến ở cổng %1 đang sáng?"
    };

    // Đặt cho cả "en" để dù app đang chạy ngôn ngữ nào, học sinh vẫn thấy tiếng Việt.
    Object.assign(Blockly.ScratchMsgs.locales["en"], viMessages);

    if (!Blockly.ScratchMsgs.locales["vi"]) {
        Blockly.ScratchMsgs.locales["vi"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["vi"], viMessages);

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
