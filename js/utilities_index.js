"use strinct";

let radio_btns = document.getElementsByClassName('folders_radio_btn');

for (let i = 0; i < radio_btns.length; i++) {
    radio_btns[i].addEventListener('click', populateShowGallery)
}

function populateShowGallery() {
    let folder = this.value;
    let xhrReq = new XMLHttpRequest();

    xhrReq.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let files = JSON.parse(xhrReq.responseText);
            let fragment = new DocumentFragment();
            let images_gallery = document.getElementById('images_gallery');

            for (let i = 0; i < files.length; i++) {
                let img = document.createElement('img');
                img.height = 100;
                img.width = 100;
                img.src = '/img/' + folder + '/' + files[i];
                fragment.appendChild(img);
            }

            images_gallery.appendChild(fragment);
        }
    };
    xhrReq.open("GET", "/retrieve_files?folder=" + folder);
    xhrReq.send();
}
