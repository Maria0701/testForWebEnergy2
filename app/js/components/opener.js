export class Opener {
    constructor(opener) {
        this.opener = opener;
        this.oppenedClass = 'oppened';
        this.parent = this.opener.parentElement;
        this.openHandler = this.openHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.outOfAreaHandler = this.outOfAreaHandler.bind(this);
        this.setListeners();
    }

    setListeners() {
        this.opener.addEventListener('click', this.openHandler);
    }

    openHandler(evt) {
        evt.preventDefault();
        this.parent.classList.add(this.oppenedClass);
        document.addEventListener('click', this.outOfAreaHandler);
    }

    closeHandler() {
        this.parent.classList.remove(this.oppenedClass);
        document.removeEventListener('click', this.outOfAreaHandler);
    }

    outOfAreaHandler(evt) {
        const activeElement = document.querySelector(`.${this.oppenedClass}`);
        if (activeElement && !activeElement.contains(evt.target)) {
            this.closeHandler();        
        } 
    }
}