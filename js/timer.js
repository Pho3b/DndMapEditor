"use strinct";

function hideElement(seconds, idString) {
    seconds = seconds * 1000;

    setTimeout(function() {
        let element = document.getElementById(idString);
        element.style.display = "none";
    }, seconds);
}

// hideElement(2, 'success_alert');