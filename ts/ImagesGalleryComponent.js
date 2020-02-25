export default class ImagesGalleryComponent {
    constructor() {
        this.radio_buttons = document.getElementsByClassName('folders_radio_btn');
        this.initEventHandlers();
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
    static imageClickEventHandler(event) {
        ImagesGalleryComponent.selectedImage = event.target;
        ImagesGalleryComponent.colorFocusedImageBorder();
    }
    initEventHandlers() {
        // @ts-ignore
        for (let radioBtn of this.radio_buttons) {
            radioBtn.addEventListener('click', this.populateShowGallery);
        }
    }
    static colorFocusedImageBorder() {
        if (ImagesGalleryComponent.selectedImage !== undefined) {
            let galleryImages = document.getElementsByClassName('gallery_image');
            // @ts-ignore
            for (let img of galleryImages) {
                img.style.borderColor = "#ced4da";
            }
            ImagesGalleryComponent.selectedImage.style.borderColor = "#da0800";
        }
        else {
            console.log('selectedImage is undefined');
        }
    }
}
ImagesGalleryComponent.selectedImage = undefined;
