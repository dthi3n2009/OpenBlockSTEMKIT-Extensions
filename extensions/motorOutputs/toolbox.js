/* eslint-disable */

function registerToolboxs () {
    return `
<category name="%{BKY_MOTOROUTPUTS_CATEGORY}" id="MOTOROUTPUTS_CATEGORY" colour="#E05A2A" secondaryColour="#C7471B">
    <block type="motorOutputs_run"><field name="PORT">1</field><field name="DIRECTION">forward</field><value name="SPEED"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block>
    <block type="motorOutputs_test"><field name="PORT">1</field><field name="DIRECTION">forward</field><value name="SPEED"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="SECONDS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block>
    <block type="motorOutputs_stop"><field name="PORT">1</field></block>
    <block type="motorOutputs_led"><field name="PORT">1</field><field name="STATE">on</field></block>
</category>`;
}

exports = registerToolboxs;
