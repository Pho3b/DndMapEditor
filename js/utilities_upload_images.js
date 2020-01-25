"use strinct";

document.getElementById('images_submit_btn').addEventListener('click', checkIfSelectedValues);

function hideElement(seconds, idString) {
    let element = document.getElementById(idString);

    if (element !== null) {
        seconds = seconds * 1000;

        setTimeout(function () {
            element.style.display = "none";
        }, seconds);
    }
}

hideElement(2, 'success_alert');


function checkIfSelectedValues() {
    if (document.getElementById('images_upload').value === "") {
        alert('Select at least one image');
    } else {
        document.getElementById('images_upload_form').submit();
    }
}