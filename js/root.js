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