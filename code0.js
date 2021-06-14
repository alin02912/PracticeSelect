gdjs._49Code = {};
gdjs._49Code.repeatCount2 = 0;

gdjs._49Code.repeatIndex2 = 0;

gdjs._49Code.GDBook2Objects1= [];
gdjs._49Code.GDBook2Objects2= [];
gdjs._49Code.GDBook2Objects3= [];
gdjs._49Code.GDBook2Objects4= [];
gdjs._49Code.GDPhoneObjects1= [];
gdjs._49Code.GDPhoneObjects2= [];
gdjs._49Code.GDPhoneObjects3= [];
gdjs._49Code.GDPhoneObjects4= [];
gdjs._49Code.GDGreenObjects1= [];
gdjs._49Code.GDGreenObjects2= [];
gdjs._49Code.GDGreenObjects3= [];
gdjs._49Code.GDGreenObjects4= [];
gdjs._49Code.GDBlueObjects1= [];
gdjs._49Code.GDBlueObjects2= [];
gdjs._49Code.GDBlueObjects3= [];
gdjs._49Code.GDBlueObjects4= [];
gdjs._49Code.GDTextObjects1= [];
gdjs._49Code.GDTextObjects2= [];
gdjs._49Code.GDTextObjects3= [];
gdjs._49Code.GDTextObjects4= [];
gdjs._49Code.GDInstructionObjects1= [];
gdjs._49Code.GDInstructionObjects2= [];
gdjs._49Code.GDInstructionObjects3= [];
gdjs._49Code.GDInstructionObjects4= [];
gdjs._49Code.GDPlayerObjects1= [];
gdjs._49Code.GDPlayerObjects2= [];
gdjs._49Code.GDPlayerObjects3= [];
gdjs._49Code.GDPlayerObjects4= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};
gdjs._49Code.condition2IsTrue_0 = {val:false};
gdjs._49Code.condition3IsTrue_0 = {val:false};
gdjs._49Code.condition4IsTrue_0 = {val:false};
gdjs._49Code.condition5IsTrue_0 = {val:false};
gdjs._49Code.conditionTrue_1 = {val:false};
gdjs._49Code.condition0IsTrue_1 = {val:false};
gdjs._49Code.condition1IsTrue_1 = {val:false};
gdjs._49Code.condition2IsTrue_1 = {val:false};
gdjs._49Code.condition3IsTrue_1 = {val:false};
gdjs._49Code.condition4IsTrue_1 = {val:false};
gdjs._49Code.condition5IsTrue_1 = {val:false};


gdjs._49Code.eventsList0 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getVariables().get("Shape").add(1);
}{runtimeScene.getVariables().getFromIndex(2).getChild("StartX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(2).getChild("StartY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().getFromIndex(2).getChild("EndX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(2).getChild("EndY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


};gdjs._49Code.eventsList2 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8334980);
}
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList3 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


};gdjs._49Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs._49Code.GDBlueObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getX() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX"));
}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getY() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY")) ) {
        gdjs._49Code.condition2IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY"));
}}
}
}
if (gdjs._49Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Success", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs._49Code.GDBlueObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getX() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getY() <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX"));
}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY"));
}}
}
}
if (gdjs._49Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Success", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs._49Code.GDBlueObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getX() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects2[i].getY() <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects2[k] = gdjs._49Code.GDBlueObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects2.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX"));
}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY"));
}}
}
}
if (gdjs._49Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Success", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs._49Code.GDBlueObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects1[i].getX() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects1[k] = gdjs._49Code.GDBlueObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects1.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBlueObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDBlueObjects1[i].getY() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDBlueObjects1[k] = gdjs._49Code.GDBlueObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDBlueObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX"));
}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY"));
}}
}
}
if (gdjs._49Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Success", false);
}}

}


};gdjs._49Code.eventsList5 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 600);
}}

}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 400, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs._49Code.GDBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs._49Code.GDTextObjects1);
{for(var i = 0, len = gdjs._49Code.GDBlueObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBlueObjects1[i].drawRectangle(0, 0, (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getWidth()) + 60, (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getHeight()) + 44);
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber((( gdjs._49Code.GDBlueObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBlueObjects1[0].getX()) + (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getWidth()) + 60);
}{runtimeScene.getVariables().getFromIndex(5).setNumber((( gdjs._49Code.GDBlueObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBlueObjects1[0].getY()) + (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getHeight()) + 44);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs._49Code.GDGreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs._49Code.GDTextObjects1);
{for(var i = 0, len = gdjs._49Code.GDGreenObjects1.length ;i < len;++i) {
    gdjs._49Code.GDGreenObjects1[i].drawRectangle(0, 0, (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getWidth()) + 200, (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getHeight()) + 200);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber((( gdjs._49Code.GDGreenObjects1.length === 0 ) ? 0 :gdjs._49Code.GDGreenObjects1[0].getX()) + (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getWidth()) + 200);
}{runtimeScene.getVariables().getFromIndex(7).setNumber((( gdjs._49Code.GDGreenObjects1.length === 0 ) ? 0 :gdjs._49Code.GDGreenObjects1[0].getY()) + (( gdjs._49Code.GDTextObjects1.length === 0 ) ? 0 :gdjs._49Code.GDTextObjects1[0].getHeight()) + 200);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8338836);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs._49Code.repeatCount2 = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("Size")) + 1;
for(gdjs._49Code.repeatIndex2 = 0;gdjs._49Code.repeatIndex2 < gdjs._49Code.repeatCount2;++gdjs._49Code.repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);

if (true)
{
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].drawRectangle(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY")));
}
}
{ //Subevents: 
gdjs._49Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Green"), gdjs._49Code.GDGreenObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
gdjs._49Code.condition4IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDGreenObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDGreenObjects1[i].getX() <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartX")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDGreenObjects1[k] = gdjs._49Code.GDGreenObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDGreenObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDGreenObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDGreenObjects1[i].getY() <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("StartY")) ) {
        gdjs._49Code.condition2IsTrue_0.val = true;
        gdjs._49Code.GDGreenObjects1[k] = gdjs._49Code.GDGreenObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDGreenObjects1.length = k;}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndX"));
}if ( gdjs._49Code.condition3IsTrue_0.val ) {
{
gdjs._49Code.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("EndY"));
}}
}
}
}
if (gdjs._49Code.condition4IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs._49Code.condition0IsTrue_0.val) {
}

}


{


{
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDBook2Objects1.length = 0;
gdjs._49Code.GDBook2Objects2.length = 0;
gdjs._49Code.GDBook2Objects3.length = 0;
gdjs._49Code.GDBook2Objects4.length = 0;
gdjs._49Code.GDPhoneObjects1.length = 0;
gdjs._49Code.GDPhoneObjects2.length = 0;
gdjs._49Code.GDPhoneObjects3.length = 0;
gdjs._49Code.GDPhoneObjects4.length = 0;
gdjs._49Code.GDGreenObjects1.length = 0;
gdjs._49Code.GDGreenObjects2.length = 0;
gdjs._49Code.GDGreenObjects3.length = 0;
gdjs._49Code.GDGreenObjects4.length = 0;
gdjs._49Code.GDBlueObjects1.length = 0;
gdjs._49Code.GDBlueObjects2.length = 0;
gdjs._49Code.GDBlueObjects3.length = 0;
gdjs._49Code.GDBlueObjects4.length = 0;
gdjs._49Code.GDTextObjects1.length = 0;
gdjs._49Code.GDTextObjects2.length = 0;
gdjs._49Code.GDTextObjects3.length = 0;
gdjs._49Code.GDTextObjects4.length = 0;
gdjs._49Code.GDInstructionObjects1.length = 0;
gdjs._49Code.GDInstructionObjects2.length = 0;
gdjs._49Code.GDInstructionObjects3.length = 0;
gdjs._49Code.GDInstructionObjects4.length = 0;
gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;
gdjs._49Code.GDPlayerObjects3.length = 0;
gdjs._49Code.GDPlayerObjects4.length = 0;

gdjs._49Code.eventsList5(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;
