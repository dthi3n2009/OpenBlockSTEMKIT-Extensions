// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    const translations = {
        "en": {
            "oled.description": "I2C oled display based on SSD1306 drivers."
        },
        "ru": {
            "oled.description": "OLED-дисплей I2C на основе драйверов SSD1306."
        },
        "zh-cn": {
            "oled.description": "基于 SSD1306 驱动的 I2C oled 显示屏。"
        },
        "zh-tw": {
            "oled.description": "基於 SSD1306 驅動的 I2C oled 顯示屏。"
        }
    };
    translations.vi = {
        "oled.description": "Màn hình OLED I2C dùng chip điều khiển SSD1306."
    };
    return translations;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "OLED_CATEGORY": "OLED",
            "OLED_CLEAR": "clear oled",
            "OLED_COLOR_BLACK": "black",
            "OLED_COLOR_INVERSE": "inverse",
            "OLED_COLOR_WHITE": "white",
            "OLED_DRAWCIRCLE": "oled draw circle x: %1 y: %2 radius %3 color %4",
            "OLED_DRAWLINE": "oled draw line x0: %1 y0: %2, x1: %3 y1：%4 color %5",
            "OLED_DRAWRECT": "oled draw rect x: %1 y: %2 width %3 height %4 color %5",
            "OLED_DRAWROUNDRECT": "oled draw round rect x: %1 y: %2 width %3 height %4 radius %5 color %6",
            "OLED_DRAWTRIANGLE": "oled draw triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7",
            "OLED_EOL_NOWARP": "no-warp",
            "OLED_EOL_WARP": "warp",
            "OLED_FILLCIRCLE": "oled fill circle x: %1 y: %2 radius %3 color %4",
            "OLED_FILLRECT": "oled fill rect x: %1 y: %2 width %3 height %4 color %5",
            "OLED_FILLROUNDRECT": "oled fill round rect x: %1 y: %2 width %3 height %4 radius %5 color %6",
            "OLED_FILLTRIANGLE": "oled fill triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7",
            "OLED_INIT": "init oled width %1 height %2 I2C address %3",
            "OLED_PRINT": "oled print %1 %2",
            "OLED_REFRESH": "refresh oled display",
            "OLED_SCROLL_DIAGLEFT": "diag left",
            "OLED_SCROLL_DIAGRIGHT": "diag right",
            "OLED_SCROLL_LEFT": "left",
            "OLED_SCROLL_RIGHT": "right",
            "OLED_SETCURSOR": "set oled cursor x: %1 y: %2",
            "OLED_SETTEXT": "set oled text size %1 color %2 background color %3",
            "OLED_STARTSCROLL": "oled start scroll %1 y0: %2 y1: %3",
            "OLED_STOPSCROLL": "oled stop scroll"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "OLED_CATEGORY": "OLED",
            "OLED_CLEAR": "Очистить OLED-дисплей",
            "OLED_COLOR_BLACK": "Черный",
            "OLED_COLOR_INVERSE": "Инверсия",
            "OLED_COLOR_WHITE": "Белый",
            "OLED_DRAWCIRCLE": "нарисовать окружность на OLED-дисплее из точки (x: %1 y: %2) радиус %3 цвет %4",
            "OLED_DRAWLINE": "нарисовать линию на OLED-дисплее из точки (x0: %1 y0: %2) в (x1: %3 y1:%4) цвет %5",
            "OLED_DRAWRECT": "нарисовать прямоугольник на OLED-дисплее из точки (x: %1 y: %2) ширина %3 высота %4 цвет %5",
            "OLED_DRAWROUNDRECT": "нарисовать скругленный прямоугольник на OLED-дисплее из точки (x: %1 y: %2) ширина %3 высота %4 радиус %5 цвет %6",
            "OLED_DRAWTRIANGLE": "нарисовать треугольник на OLED-дисплее с углами (x: %1 y: %2) (x1: %3 y1: %4) (x2: %5 y2: %6)  цвет %7",
            "OLED_EOL_NOWARP": "Не переносить",
            "OLED_EOL_WARP": "Переносить",
            "OLED_FILLCIRCLE": "закрасить окружность на OLED-дисплее из точки (x: %1 y: %2) радиус %3 цвет %4",
            "OLED_FILLRECT": "закрасить прямоугольник на OLED-дисплее из точки (x: %1 y: %2) ширина %3 высота %4 цвет %5",
            "OLED_FILLROUNDRECT": "закрасить скругленный прямоугольник на OLED-дисплее из точки (x: %1 y: %2) ширина %3 высота %4 радиус %5 цвет %6",
            "OLED_FILLTRIANGLE": "закрасить треугольник на OLED-дисплее с углами (x: %1 y: %2) (x1: %3 y1: %4) (x2: %5 y2: %6) цвет %7",
            "OLED_INIT": "инициализация OLED-дисплея %1 высота %2 адрес I2C %3",
            "OLED_PRINT": "напечатать %1 %2 на OLED-дисплее ",
            "OLED_REFRESH": "Обновить OLED-дисплей",
            "OLED_SCROLL_DIAGLEFT": "По диагонали налево",
            "OLED_SCROLL_DIAGRIGHT": "По диагонали направо",
            "OLED_SCROLL_LEFT": "Налево",
            "OLED_SCROLL_RIGHT": "Направо",
            "OLED_SETCURSOR": "установить курсор на OLED-дисплее в (x: %1 y: %2)",
            "OLED_SETTEXT": "установить размер текста OLED-дисплея %1 цвет %2 цвет фона %3",
            "OLED_STARTSCROLL": "oled начало прокрутки %1 y0: %2 y1: %3",
            "OLED_STOPSCROLL": "Остановить прокрутку OLED-дисплея"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "OLED_CATEGORY": "OLED",
            "OLED_CLEAR": "清空 oled",
            "OLED_COLOR_BLACK": "黑色",
            "OLED_COLOR_INVERSE": "反转",
            "OLED_COLOR_WHITE": "白色",
            "OLED_DRAWCIRCLE": "oled 绘制圆形 x: %1 y: %2 半径 %3 颜色 %4",
            "OLED_DRAWLINE": "oled 绘制直线 x0: %1 y0: %2, x1: %3 y1：%4 颜色 %5",
            "OLED_DRAWRECT": "oled 绘制矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5",
            "OLED_DRAWROUNDRECT": "oled 绘制圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6",
            "OLED_DRAWTRIANGLE": "oled 绘制三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7",
            "OLED_EOL_NOWARP": "不换行",
            "OLED_EOL_WARP": "换行",
            "OLED_FILLCIRCLE": "oled 填充圆形 x: %1 y: %2 半径 %3 颜色 %4",
            "OLED_FILLRECT": "oled 填充矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5",
            "OLED_FILLROUNDRECT": "oled 填充圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6",
            "OLED_FILLTRIANGLE": "oled 填充三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7",
            "OLED_INIT": "初始化 oled 宽度 %1 高度 %2 I2C 地址 %3",
            "OLED_PRINT": "oled 打印 %1 %2",
            "OLED_REFRESH": "刷新 oled 显示",
            "OLED_SCROLL_DIAGLEFT": "左对角",
            "OLED_SCROLL_DIAGRIGHT": "右对角",
            "OLED_SCROLL_LEFT": "向左",
            "OLED_SCROLL_RIGHT": "向右",
            "OLED_SETCURSOR": "设置 oled 光标 x: %1 y: %2",
            "OLED_SETTEXT": "设置 oled 字体大小 %1 颜色 %2 背景色 color %3",
            "OLED_STARTSCROLL": "oled 开始滚动 %1 y0: %2 y1: %3",
            "OLED_STOPSCROLL": "oled 停止滚动"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "OLED_CATEGORY": "OLED",
            "OLED_CLEAR": "清空 oled",
            "OLED_COLOR_BLACK": "黑色",
            "OLED_COLOR_INVERSE": "反轉",
            "OLED_COLOR_WHITE": "白色",
            "OLED_DRAWCIRCLE": "oled 繪製圓形 x: %1 y: %2 半徑 %3 顏色 %4",
            "OLED_DRAWLINE": "oled 繪製直線 x0: %1 y0: %2, x1: %3 y1：%4 顏色 %5",
            "OLED_DRAWRECT": "oled 繪製矩形 x: %1 y: %2 寬度 %3 高度 %4 顏色 %5",
            "OLED_DRAWROUNDRECT": "oled 繪製圓角矩形 x: %1 y: %2 寬度 %3 高度 %4 半徑 %5 顏色 %6",
            "OLED_DRAWTRIANGLE": "oled 繪製三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 顏色 %7",
            "OLED_EOL_NOWARP": "不換行",
            "OLED_EOL_WARP": "換行",
            "OLED_FILLCIRCLE": "oled 填充圓形 x: %1 y: %2 半徑 %3 顏色 %4",
            "OLED_FILLRECT": "oled 填充矩形 x: %1 y: %2 寬度 %3 高度 %4 顏色 %5",
            "OLED_FILLROUNDRECT": "oled 填充圓角矩形 x: %1 y: %2 寬度 %3 高度 %4 半徑 %5 顏色 %6",
            "OLED_FILLTRIANGLE": "oled 填充三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 顏色 %7",
            "OLED_INIT": "初始化 oled 寬度 %1 高度 %2 I2C 地址 %3",
            "OLED_PRINT": "oled 打印 %1 %2",
            "OLED_REFRESH": "刷新 oled 顯示",
            "OLED_SCROLL_DIAGLEFT": "左對角",
            "OLED_SCROLL_DIAGRIGHT": "右對角",
            "OLED_SCROLL_LEFT": "向左",
            "OLED_SCROLL_RIGHT": "向右",
            "OLED_SETCURSOR": "設置 oled 光標 x: %1 y: %2",
            "OLED_SETTEXT": "設置 oled 字體大小 %1 顏色 %2 背景色 color %3",
            "OLED_STARTSCROLL": "oled 開始滾動 %1 y0: %2 y1: %3",
            "OLED_STOPSCROLL": "oled 停止滾動"
        }
    );

    if (!Blockly.ScratchMsgs.locales["vi"]) {
        Blockly.ScratchMsgs.locales["vi"] = {};
    }
    Object.assign(Blockly.ScratchMsgs.locales["vi"],
        {
            "OLED_CATEGORY": "Màn hình OLED",
            "OLED_CLEAR": "xóa màn hình OLED",
            "OLED_COLOR_BLACK": "đen",
            "OLED_COLOR_INVERSE": "đảo màu",
            "OLED_COLOR_WHITE": "trắng",
            "OLED_DRAWCIRCLE": "OLED vẽ đường tròn tâm x: %1 y: %2 bán kính %3 màu %4",
            "OLED_DRAWLINE": "OLED vẽ đường từ x0: %1 y0: %2 đến x1: %3 y1: %4 màu %5",
            "OLED_DRAWRECT": "OLED vẽ hình chữ nhật x: %1 y: %2 rộng %3 cao %4 màu %5",
            "OLED_DRAWROUNDRECT": "OLED vẽ chữ nhật bo góc x: %1 y: %2 rộng %3 cao %4 bán kính %5 màu %6",
            "OLED_DRAWTRIANGLE": "OLED vẽ tam giác (%1, %2), (%3, %4), (%5, %6) màu %7",
            "OLED_EOL_NOWARP": "không xuống dòng",
            "OLED_EOL_WARP": "xuống dòng",
            "OLED_FILLCIRCLE": "OLED tô hình tròn tâm x: %1 y: %2 bán kính %3 màu %4",
            "OLED_FILLRECT": "OLED tô hình chữ nhật x: %1 y: %2 rộng %3 cao %4 màu %5",
            "OLED_FILLROUNDRECT": "OLED tô chữ nhật bo góc x: %1 y: %2 rộng %3 cao %4 bán kính %5 màu %6",
            "OLED_FILLTRIANGLE": "OLED tô tam giác (%1, %2), (%3, %4), (%5, %6) màu %7",
            "OLED_INIT": "khởi động OLED rộng %1 cao %2 địa chỉ I2C %3",
            "OLED_PRINT": "OLED hiện %1 %2",
            "OLED_REFRESH": "cập nhật màn hình OLED",
            "OLED_SCROLL_DIAGLEFT": "chéo trái",
            "OLED_SCROLL_DIAGRIGHT": "chéo phải",
            "OLED_SCROLL_LEFT": "sang trái",
            "OLED_SCROLL_RIGHT": "sang phải",
            "OLED_SETCURSOR": "đặt con trỏ OLED tại x: %1 y: %2",
            "OLED_SETTEXT": "đặt chữ OLED cỡ %1 màu %2 nền %3",
            "OLED_STARTSCROLL": "OLED bắt đầu cuộn %1 từ y0: %2 đến y1: %3",
            "OLED_STOPSCROLL": "OLED dừng cuộn"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
