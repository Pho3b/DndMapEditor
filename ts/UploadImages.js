//TODO: Find a way to refactor this in typescript
export default class UploadImages {
    constructor() {
        this.submitBtn = document.getElementById('images_submit_btn');
        this.submitBtn.addEventListener('click', this.checkIfAtLeastOneImageIsSelected);
    }
    checkIfAtLeastOneImageIsSelected() {
        var _a;
        let element = (_a = document.getElementById('images_upload'), (_a !== null && _a !== void 0 ? _a : null));
        let elementVal = undefined;
        if (element)
            elementVal = element.value;
        if (elementVal === "") {
            alert('Select at least one image');
        }
        else {
            let form = document.getElementById('images_upload_form') || null;
            if (form)
                form.submit();
        }
    }
    hideElement(seconds, idString) {
        let element = document.getElementById(idString);
        if (element !== null) {
            seconds = seconds * 1000;
            setTimeout(function () {
                // @ts-ignore
                element.style.display = "none";
            }, seconds);
        }
    }
}
