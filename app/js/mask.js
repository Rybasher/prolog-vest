import IMask from 'imask';


let element = document.getElementById('number-mask');
let maskOptions = {
    mask: '+{38}(000)00-00-000',
    lazy: false
};
var mask = IMask(element, maskOptions);