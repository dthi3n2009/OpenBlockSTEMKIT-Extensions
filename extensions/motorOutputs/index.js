const motorOutputs = formatMessage => ({
    name: formatMessage({
        id: 'motorOutputs.name',
        default: 'Đầu ra M: bơm, quạt, đèn 5V'
    }),
    extensionId: 'motorOutputs',
    version: '1.0.0',
    supportDevice: ['thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'Dế Base KIT',
    description: formatMessage({
        id: 'motorOutputs.description',
        default: 'Thử và điều khiển bơm, quạt hoặc module đèn 5V qua bất kỳ cổng M nào.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    tags: ['actuator'],
    helpLink: ''
});

module.exports = motorOutputs;
