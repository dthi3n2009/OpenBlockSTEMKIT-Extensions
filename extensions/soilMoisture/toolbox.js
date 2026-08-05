/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_SOILMOISTURE_CATEGORY}" id="SOILMOISTURE_CATEGORY" colour="#2E8B57" secondaryColour="#256F46">
    <block type="soilMoisture_readPercent" id="soilMoisture_readPercent">
        <field name="PORT">0</field>
    </block>
    <block type="soilMoisture_isDry" id="soilMoisture_isDry">
        <field name="PORT">0</field>
        <value name="THRESHOLD">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
    </block>
    <block type="soilMoisture_readRaw" id="soilMoisture_readRaw">
        <field name="PORT">0</field>
    </block>
    <block type="soilMoisture_calibrate" id="soilMoisture_calibrate">
        <value name="DRY">
            <shadow type="math_number">
                <field name="NUM">3000</field>
            </shadow>
        </value>
        <value name="WET">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="soilMoisture_readSwitch" id="soilMoisture_readSwitch">
        <field name="PORT">0</field>
    </block>
</category>`;
}

exports = registerToolboxs;
