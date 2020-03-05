export enum ImagesLevel {
    level1 = 1,
    level2,
    level3
}

export default class ImagesLevelComponent {
    public static levelRadioBtns: HTMLCollectionOf<Element> = document.getElementsByClassName('level_radio_btn');
    public static selectedLevel: number = ImagesLevel.level1;


    constructor() {
        // @ts-ignore
        for (let radioBtn of ImagesLevelComponent.levelRadioBtns) {
            radioBtn.addEventListener("click", this.clickEventHandler);
        }
    }

    private clickEventHandler = (event: MouseEvent): void => {
        // @ts-ignore
        ImagesLevelComponent.selectedLevel = parseInt((event.target as HTMLInputElement).value);
    };
}
