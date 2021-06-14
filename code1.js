gdjs.SuccessCode = {};
gdjs.SuccessCode.GDNewObjectObjects1= [];
gdjs.SuccessCode.GDNewObjectObjects2= [];
gdjs.SuccessCode.GDNewObjectObjects3= [];
gdjs.SuccessCode.GDNextLevelObjects1= [];
gdjs.SuccessCode.GDNextLevelObjects2= [];
gdjs.SuccessCode.GDNextLevelObjects3= [];
gdjs.SuccessCode.GDNewObject2Objects1= [];
gdjs.SuccessCode.GDNewObject2Objects2= [];
gdjs.SuccessCode.GDNewObject2Objects3= [];
gdjs.SuccessCode.GDRetryObjects1= [];
gdjs.SuccessCode.GDRetryObjects2= [];
gdjs.SuccessCode.GDRetryObjects3= [];
gdjs.SuccessCode.GDPreviousLevelObjects1= [];
gdjs.SuccessCode.GDPreviousLevelObjects2= [];
gdjs.SuccessCode.GDPreviousLevelObjects3= [];

gdjs.SuccessCode.conditionTrue_0 = {val:false};
gdjs.SuccessCode.condition0IsTrue_0 = {val:false};
gdjs.SuccessCode.condition1IsTrue_0 = {val:false};
gdjs.SuccessCode.condition2IsTrue_0 = {val:false};


gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDNextLevelObjects1Objects = Hashtable.newFrom({"NextLevel": gdjs.SuccessCode.GDNextLevelObjects1});gdjs.SuccessCode.eventsList0 = function(runtimeScene) {

{


gdjs.SuccessCode.condition0IsTrue_0.val = false;
gdjs.SuccessCode.condition1IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 3;
}if ( gdjs.SuccessCode.condition0IsTrue_0.val ) {
{
gdjs.SuccessCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SuccessCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


};gdjs.SuccessCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.SuccessCode.GDNextLevelObjects1 */

gdjs.SuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDNextLevelObjects1Objects, runtimeScene, true, false);
}if (gdjs.SuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SuccessCode.GDNextLevelObjects1 */
{for(var i = 0, len = gdjs.SuccessCode.GDNextLevelObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDNextLevelObjects1[i].setAnimation(2);
}
}
{ //Subevents
gdjs.SuccessCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDPreviousLevelObjects2Objects = Hashtable.newFrom({"PreviousLevel": gdjs.SuccessCode.GDPreviousLevelObjects2});gdjs.SuccessCode.eventsList2 = function(runtimeScene) {

{


gdjs.SuccessCode.condition0IsTrue_0.val = false;
gdjs.SuccessCode.condition1IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 1;
}if ( gdjs.SuccessCode.condition0IsTrue_0.val ) {
{
gdjs.SuccessCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SuccessCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


};gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDPreviousLevelObjects1Objects = Hashtable.newFrom({"PreviousLevel": gdjs.SuccessCode.GDPreviousLevelObjects1});gdjs.SuccessCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PreviousLevel"), gdjs.SuccessCode.GDPreviousLevelObjects2);

gdjs.SuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDPreviousLevelObjects2Objects, runtimeScene, true, false);
}if (gdjs.SuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SuccessCode.GDPreviousLevelObjects2 */
{for(var i = 0, len = gdjs.SuccessCode.GDPreviousLevelObjects2.length ;i < len;++i) {
    gdjs.SuccessCode.GDPreviousLevelObjects2[i].setAnimation(2);
}
}
{ //Subevents
gdjs.SuccessCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PreviousLevel"), gdjs.SuccessCode.GDPreviousLevelObjects1);

gdjs.SuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDPreviousLevelObjects1Objects, runtimeScene, true, true);
}if (gdjs.SuccessCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SuccessCode.GDPreviousLevelObjects1 */
{for(var i = 0, len = gdjs.SuccessCode.GDPreviousLevelObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDPreviousLevelObjects1[i].setAnimation(1);
}
}}

}


};gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.SuccessCode.GDRetryObjects1});gdjs.SuccessCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.SuccessCode.GDRetryObjects1);

gdjs.SuccessCode.condition0IsTrue_0.val = false;
gdjs.SuccessCode.condition1IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SuccessCode.mapOfGDgdjs_46SuccessCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SuccessCode.condition0IsTrue_0.val ) {
{
gdjs.SuccessCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SuccessCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))), false);
}}

}


};gdjs.SuccessCode.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NextLevel"), gdjs.SuccessCode.GDNextLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PreviousLevel"), gdjs.SuccessCode.GDPreviousLevelObjects1);
{for(var i = 0, len = gdjs.SuccessCode.GDNextLevelObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDNextLevelObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.SuccessCode.GDPreviousLevelObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDPreviousLevelObjects1[i].pauseAnimation();
}
}}

}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 400, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 600);
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


gdjs.SuccessCode.condition0IsTrue_0.val = false;
{
gdjs.SuccessCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 3;
}if (gdjs.SuccessCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NextLevel"), gdjs.SuccessCode.GDNextLevelObjects1);
{for(var i = 0, len = gdjs.SuccessCode.GDNextLevelObjects1.length ;i < len;++i) {
    gdjs.SuccessCode.GDNextLevelObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.SuccessCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.SuccessCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.SuccessCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.SuccessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SuccessCode.GDNewObjectObjects1.length = 0;
gdjs.SuccessCode.GDNewObjectObjects2.length = 0;
gdjs.SuccessCode.GDNewObjectObjects3.length = 0;
gdjs.SuccessCode.GDNextLevelObjects1.length = 0;
gdjs.SuccessCode.GDNextLevelObjects2.length = 0;
gdjs.SuccessCode.GDNextLevelObjects3.length = 0;
gdjs.SuccessCode.GDNewObject2Objects1.length = 0;
gdjs.SuccessCode.GDNewObject2Objects2.length = 0;
gdjs.SuccessCode.GDNewObject2Objects3.length = 0;
gdjs.SuccessCode.GDRetryObjects1.length = 0;
gdjs.SuccessCode.GDRetryObjects2.length = 0;
gdjs.SuccessCode.GDRetryObjects3.length = 0;
gdjs.SuccessCode.GDPreviousLevelObjects1.length = 0;
gdjs.SuccessCode.GDPreviousLevelObjects2.length = 0;
gdjs.SuccessCode.GDPreviousLevelObjects3.length = 0;

gdjs.SuccessCode.eventsList5(runtimeScene);
return;

}

gdjs['SuccessCode'] = gdjs.SuccessCode;
