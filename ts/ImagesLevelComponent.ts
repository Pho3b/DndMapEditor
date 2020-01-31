export enum ImagesLevel {
    level1 ,
    level2,
    level3
}

export default class ImagesLevelComponent {
    public static levelRadioBtns: HTMLCollectionOf<Element> = document.getElementsByClassName('level_radio_btn');
    public static selectedLevel: number = ImagesLevel.level1;

}
