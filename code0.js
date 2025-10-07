gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDGoonObjects1= [];
gdjs.Untitled_32sceneCode.GDGoonObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects2= [];


gdjs.Untitled_32sceneCode.asyncCallback8008268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.window.openURL("https://music.youtube.com/watch?v=wjZMcWaniA4&list=RDAMVMwjZMcWaniA4", runtimeScene);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8008268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGoonObjects1Objects = Hashtable.newFrom({"Goon": gdjs.Untitled_32sceneCode.GDGoonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{gdjs.screenshot.takeScreenshot(runtimeScene, "Desktop");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goon"), gdjs.Untitled_32sceneCode.GDGoonObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGoonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGoonObjects1[i].setPosition(0,320);
}
}{gdjs.screenshot.takeScreenshot(runtimeScene, "Desktop");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(10000000000000);
}{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=E_u0crsui9g", runtimeScene);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goon"), gdjs.Untitled_32sceneCode.GDGoonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGoonObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtu.be/AFA-rOls8YA?si=ZfkNkuDOCk7aUrZy", runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", true, 30, 46);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
