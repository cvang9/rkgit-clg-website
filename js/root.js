let whatsNewCardOpenState = false;


function admissionCardListener() {
    const card = document.getElementById('admissionCard');
    if (whatsNewCardOpenState) {
        card.style.animation = 'slideToRight 0.2s linear forwards';
        whatsNewCardOpenState = false;
    } else {
        card.style.animation = 'slideToLeft 0.2s linear forwards';
        whatsNewCardOpenState = true;
    }
}

function listToggle(id){
    let listElement = document.getElementById(id);
    if(listElement.dataset.toggle === 'off'){
        listElement.childNodes[1].style.display = 'block';
        listElement.style.setProperty('--toggle-icon',"'~ '");
        listElement.style.setProperty('--icon-color',"green");
        listElement.dataset.toggle ='on';
    }
    else {
        listElement.childNodes[1].style.display = 'none';
        listElement.style.setProperty('--toggle-icon',"'+ '");
        listElement.style.setProperty('--icon-color',"rgb(33, 33, 156)");
        listElement.dataset.toggle = 'off';
    }
}