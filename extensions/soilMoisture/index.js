const soilMoisture = formatMessage => ({
    name: formatMessage({
        id: 'soilMoisture.name',
        default: 'Cảm biến độ ẩm đất'
    }),
    extensionId: 'soilMoisture',
    version: '1.0.0',
    supportDevice: ['deBaseKit', 'thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'ThingEdu',
    iconURL: `assets/soilMoisture.png`,
    description: formatMessage({
        id: 'soilMoisture.description',
        default: 'Đo xem đất trong chậu đang khô hay đủ ẩm.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    tags: ['sensor'],
    helpLink: ''
});

module.exports = soilMoisture;
