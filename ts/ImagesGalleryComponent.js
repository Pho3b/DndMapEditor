export default class ImagesGalleryComponent {
    constructor() {
        this.visibleImages = undefined;
        this.radio_buttons = document.getElementsByClassName('folders_radio_btn');
        this.initEventHandlers();
    }
    static imageClickEventHandler(event) {
        let imgGalleyComponent = new ImagesGalleryComponent();
        ImagesGalleryComponent.selectedImage = event.target;
        imgGalleyComponent.colorFocusedImageBorder();
    }
    populateShowGallery(event) {
        let folder = event.target.value;
        let xhrReq = new XMLHttpRequest();
        xhrReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let files = JSON.parse(xhrReq.responseText);
                let fragment = new DocumentFragment();
                let images_gallery = document.getElementById('images_gallery');
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
    initEventHandlers() {
        // @ts-ignore
        for (let radioBtn of this.radio_buttons) {
            radioBtn.addEventListener('click', this.populateShowGallery);
        }
    }
    colorFocusedImageBorder() {
        if (ImagesGalleryComponent.selectedImage !== undefined) {
            let galleryImages = document.getElementsByClassName('gallery_image');
            // @ts-ignore
            for (let img of galleryImages) {
                img.style.borderColor = "#ced4da";
            }
            ImagesGalleryComponent.selectedImage.style.borderColor = "red";
        }
        else {
            console.log('selectedImage is undefined');
        }
    }
}
