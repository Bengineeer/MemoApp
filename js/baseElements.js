
class divElement{
    constructor(id, className){
        this.element = document.createElement('div');
        this.element.setAttribute('id', id);
        this.element.setAttribute('class', className);
    }
    setText(position, text){
        /*
        position: 
            'beforebegin'
            'afterbegin'
            'beforeend'
            'afterend'
        */
        this.element.insertAdjacentHTML(position, text);
    }
    getText(){
        return this.element.innerHTML;
    }
    setId(id){
        this.element.setAttribute('id', id);
    }
    setClassName(className){
        this.element.setAttribute('class', className);
    }
    hide(){
        this.element.style.display = "none";
    }
    show(){
        this.element.style.display = "block";
    }
}

// class inputElement{
//     constructor(id, className){
//         this.element = document.createElement('input');
//     }
// }