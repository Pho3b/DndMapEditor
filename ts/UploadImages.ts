//TODO: Find a way to refactor this in typescript

// export default class UploadImages {
//     private submitBtn: HTMLButtonElement = document.getElementById('images_submit_btn') as HTMLButtonElement;
//
//
//     constructor() {
//         this.submitBtn.addEventListener('click', this.checkIfAtLeastOneImageIsSelected);
//     }
//
//     private checkIfAtLeastOneImageIsSelected(): void {
//         let element : HTMLInputElement | null = document.getElementById('images_upload') as HTMLInputElement ?? null;
//         let elementVal = undefined;
//         if (element)
//             elementVal = element.value;
//
//         if (elementVal === "") {
//             alert('Select at least one image');
//         } else {
//             let form : HTMLFormElement | null = document.getElementById('images_upload_form') as HTMLFormElement || null;
//             if (form)
//                 form.submit();
//         }
//     }
//
//     private hideElement(seconds : number, idString : string) {
//         let element = document.getElementById(idString);
//
//         if (element !== null) {
//             seconds = seconds * 1000;
//
//             setTimeout(function () {
//                 // @ts-ignore
//                 element.style.display = "none";
//             }, seconds);
//         }
//     }
// }
