"use strinct";
//TODO: Incorporate that piece of code with the ImagesGalleryComponent class

// init();
//
// function populateShowGallery() {
//     let folder = this.value;
//     let xhrReq = new XMLHttpRequest();
//
//     xhrReq.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             let files = JSON.parse(xhrReq.responseText);
//             let fragment = new DocumentFragment();
//             let images_gallery = document.getElementById('images_gallery');
//
//             images_gallery.innerHTML = '';
//
//             for (let i = 0; i < files.length; i++) {
//                 let img = document.createElement('img');
//                 img.height = 100;
//                 img.width = 100;
//                 img.src = '/img/' + folder + '/' + files[i];
//                 img.classList.add('gallery_image');
//                 fragment.appendChild(img);
//             }
//
//             images_gallery.appendChild(fragment);
//         }
//     };
//     xhrReq.open("GET", "/retrieve_files?folder=" + folder);
//     xhrReq.send();
// }
//
// function init() {
//     let radio_buttons = document.getElementsByClassName('folders_radio_btn');
//
//     for (let i = 0; i < radio_buttons.length; i++) {
//         radio_buttons[i].addEventListener('click', populateShowGallery)
//     }
// }
