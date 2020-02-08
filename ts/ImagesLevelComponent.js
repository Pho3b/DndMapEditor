export var ImagesLevel;
(function (ImagesLevel) {
    ImagesLevel[ImagesLevel["level1"] = 1] = "level1";
    ImagesLevel[ImagesLevel["level2"] = 2] = "level2";
    ImagesLevel[ImagesLevel["level3"] = 3] = "level3";
})(ImagesLevel || (ImagesLevel = {}));
export default class ImagesLevelComponent {
    constructor() {
        this.clickEventHandler = (event) => {
            // @ts-ignore
            ImagesLevelComponent.selectedLevel = parseInt(event.target.value);
        };
        // @ts-ignore
        for (let radioBtn of ImagesLevelComponent.levelRadioBtns) {
            radioBtn.addEventListener("click", this.clickEventHandler);
        }
    }
}
ImagesLevelComponent.levelRadioBtns = document.getElementsByClassName('level_radio_btn');
ImagesLevelComponent.selectedLevel = ImagesLevel.level1;
