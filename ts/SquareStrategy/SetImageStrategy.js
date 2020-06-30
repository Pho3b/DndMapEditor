import ImagesGalleryComponent from "../ImagesGalleryComponent";
import ImagesLevelComponent, { ImagesLevel } from "../ImagesLevelComponent";
import Main from "../Main";
export class SetImageStrategy {
    onMouseDown(square) {
        if (ImagesGalleryComponent.selectedImage === undefined)
            alert('Select an Image');
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (square.levelImages[0].src.length === Main.urlLength) {
                // @ts-ignore
                square.levelImages[0].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                square.levelImages[0].src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (square.levelImages[1].src.length === Main.urlLength) {
                // @ts-ignore
                square.levelImages[1].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                square.levelImages[1].src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (square.levelImages[2].src.length === Main.urlLength) {
                // @ts-ignore
                square.levelImages[2].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                square.levelImages[2].src = Main.url;
            }
        }
        square.drawImages();
    }
}
