class CustomCollection {
    constructor() {
        this.elements = arguments;
    }
    ForEachCustom = (callback) => {
        for (let i = 0; i < this.elements.length; i++) {
            callback(this.elements[i]);
        }
    }
    EveryCustom = (callback) => {
        for (let i = 0; i < this.elements.length; i++) {
            if (!callback(this.elements[i])) {
                return false;
            }
        }
        return true;
    }
    SomeCustom = (callback) => {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                return true;
            }
        }
        return false;
    }
    IndexOfCustom = (item) => {
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i] == item) return i;
        }
        return -1;
    }
    LastIndexOfCustom = (item) => {
        for (let i = this.elements.length - 1; i > 0; i--) {
            if (this.elements[i] == item) {
                return i;
            }
        }
        return -1;
    }
    FindCustom = (callback) => {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                return this.elements[i];
            }
        }
        return -1;
    }
    findIndexCustom = (callback) => {
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                return i;
            }
        }
        return -1;
    }
    IncludesCustom = (item) => {
        for (let i = 0; i < this.elements.length; i++){
            if(this.elements[i] == item){
                return true;
            }
        }
        return false;
    }
}