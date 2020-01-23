export default class Timer {
    seconds: number;
    element: HTMLElement;

    constructor(seconds: number, element: HTMLElement) {
        this.seconds = seconds;
        this.element = element;
        this.hideElement();
    }

    hideElement() {
        setTimeout(function() {
            this.element.style.display = "none";
        }, this.seconds);
    }
}
