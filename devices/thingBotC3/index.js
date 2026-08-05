const thingBot = formatMessage => ({
    name: formatMessage({
        id: 'thingbot.name',
        default: 'ThingBot'
    }),
    deviceId: 'thingBot_esp32C3',
    manufactor: 'ThingEdu',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/thingbot.png',
    description: formatMessage({
        id: 'thingbot.description',
        default: 'ThingBot by ThingEdu'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_303A&PID_1001'
    ],
    connectionIconURL: 'assets/thingbot-illustration.svg',
    connectionSmallIconURL: 'assets/thingbot-small.svg',
    translations: 'translations.js',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    // Nhãn riêng của bộ Dế Base KIT: chỉ linh kiện có trong hộp mới hiện ở kho khối lệnh.
    // Phải đặt ở CẢ hai biến thể thiết bị, vì giao diện lọc theo biến thể đang chọn.
    deviceExtensionsCompatible: 'deBaseKit',
    helpLink: 'https://github.com/makerviet/cobot-arduino'
});

const thingBotArduino = formatMessage => {
    const device = thingBot(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'thingBot_arduinoEsp32C3';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoThingBotC3'];
    // Nhãn riêng của bộ Dế Base KIT.
    // Trước đây để 'arduinoEsp32' nên MỌI khối lệnh dành cho ESP32 đều lọt vào kho
    // (RFID, cảm biến nhịp tim, sóng radio...), làm học sinh rối.
    // Đổi sang nhãn riêng thì chỉ linh kiện có trong kit mới hiện ra.
    device.deviceExtensionsCompatible = 'deBaseKit';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    thingBot(formatMessage),
    thingBotArduino(formatMessage)
]);
