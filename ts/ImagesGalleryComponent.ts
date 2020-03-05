export default class ImagesGalleryComponent {
    private readonly radio_buttons: HTMLCollectionOf<Element>;
    public static selectedImage: HTMLImageElement | undefined = undefined;


    constructor() {
        this.radio_buttons = document.getElementsByClassName('folders_radio_btn');
        this.initEventHandlers();
    }

    private populateShowGallery(event: MouseEvent): any {
        let folder = (event.target as HTMLInputElement).value;
        let xhrReq = new XMLHttpRequest();

        xhrReq.onreadystatechange = function (): any {
            if (this.readyState === 4 && this.status === 200) {
                let files = JSON.parse(xhrReq.responseText);
                let fragment = new DocumentFragment();
                let images_gallery: Element | null = document.getElementById('images_gallery');

                if (images_gallery === null)
                    return;

                images_gallery.innerHTML = '';

                for (let i = 0; i < files.length; i++) {
                    let img = document.createElement('img');
                    img.height = 80;
                    img.width = 80;
                    img.title = files[i];
                    img.setAttribute('data-toggle', 'tooltip');
                    img.src = '/img/' + folder + '/' + files[i];
                    img.classList.add('gallery_image');
                    fragment.appendChild(img);
                    img.addEventListener('click', ImagesGalleryComponent.imageClickEventHandler);
                }
                images_gallery.appendChild(fragment);

                $(document).ready(function () {
                    // @ts-ignore
                    $('[data-toggle="tooltip"]').tooltip();
                });
            }
        };

        xhrReq.open("GET", "/retrieve_files?folder=" + folder);
        xhrReq.send();
    }

    private static imageClickEventHandler(event: MouseEvent) {
        ImagesGalleryComponent.selectedImage = event.target as HTMLImageElement;
        ImagesGalleryComponent.colorFocusedImageBorder();
    }

    private initEventHandlers() {
        // @ts-ignore
        for (let radioBtn of this.radio_buttons) {
            radioBtn.addEventListener('click', this.populateShowGallery)
        }
    }

    private static colorFocusedImageBorder(): void {
        if (ImagesGalleryComponent.selectedImage !== undefined) {
            let galleryImages: HTMLCollectionOf<HTMLImageElement> = document.getElementsByClassName('gallery_image') as HTMLCollectionOf<HTMLImageElement>;

            // @ts-ignore
            for (let img of galleryImages) {
                img.style.borderColor = "#ced4da";
            }

            ImagesGalleryComponent.selectedImage.style.borderColor = "#da0800";
        } else {
            console.log('selectedImage is undefined');
        }
    }
}
