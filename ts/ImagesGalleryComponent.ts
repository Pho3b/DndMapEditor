export default class ImagesGalleryComponent {
    private visibleImages: HTMLCollectionOf<Element> | undefined = undefined;
    private readonly radio_buttons: HTMLCollectionOf<Element>;
    public static selectedImage: HTMLImageElement | undefined;


    constructor() {
        this.radio_buttons = document.getElementsByClassName('folders_radio_btn');
        this.initEventHandlers();
    }

    private static imageClickEventHandler(event: MouseEvent) {
        let imgGalleyComponent: ImagesGalleryComponent = new ImagesGalleryComponent();
        ImagesGalleryComponent.selectedImage = event.target as HTMLImageElement;

        imgGalleyComponent.colorFocusedImageBorder();

    }

    private populateShowGallery(event: MouseEvent) : any {
        let folder = (event.target as HTMLInputElement).value;
        let xhrReq = new XMLHttpRequest();

        xhrReq.onreadystatechange = function () : any {
            if (this.readyState === 4 && this.status === 200) {
                let files = JSON.parse(xhrReq.responseText);
                let fragment = new DocumentFragment();
                let images_gallery: Element | null = document.getElementById('images_gallery');

                if (images_gallery === null)
                    return;

                images_gallery.innerHTML = '';

                for (let i = 0; i < files.length; i++) {
                    let img = document.createElement('img');
                    img.height = 100;
                    img.width = 100;
                    img.src = '/img/' + folder + '/' + files[i];
                    img.classList.add('gallery_image');
                    fragment.appendChild(img);
                    img.addEventListener('click', ImagesGalleryComponent.imageClickEventHandler);
                }
                images_gallery.appendChild(fragment);
            }
        };

        xhrReq.open("GET", "/retrieve_files?folder=" + folder);
        xhrReq.send();
    }

    private initEventHandlers() {
        // @ts-ignore
        for (let radioBtn of this.radio_buttons) {
            radioBtn.addEventListener('click', this.populateShowGallery)
        }
    }

    private colorFocusedImageBorder() : void {
        if (ImagesGalleryComponent.selectedImage !== undefined) {
            let galleryImages: HTMLCollectionOf<HTMLImageElement> = document.getElementsByClassName('gallery_image') as HTMLCollectionOf<HTMLImageElement>;

            // @ts-ignore
            for (let img of galleryImages) {
                img.style.borderColor = "#ced4da";
            }

            ImagesGalleryComponent.selectedImage.style.borderColor = "red";
        } else {
            console.log('selectedImage is undefined');
        }
    }
}