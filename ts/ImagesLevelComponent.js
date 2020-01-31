export var ImagesLevel;
(function (ImagesLevel) {
    ImagesLevel[ImagesLevel["level1"] = 0] = "level1";
    ImagesLevel[ImagesLevel["level2"] = 1] = "level2";
    ImagesLevel[ImagesLevel["level3"] = 2] = "level3";
})(ImagesLevel || (ImagesLevel = {}));
export default class ImagesLevelComponent {
}
ImagesLevelComponent.levelRadioBtns = document.getElementsByClassName('level_radio_btn');
ImagesLevelComponent.selectedLevel = ImagesLevel.level1;
