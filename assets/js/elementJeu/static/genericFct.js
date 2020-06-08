class GenericFct {


    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    static clearBody(){
        let body = document.querySelector("body")
        body.innerHTML="";
    }

}