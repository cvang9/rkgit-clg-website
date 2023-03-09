function showMenu(flag) {
    let menu = document.querySelector('.mob-sub-menu')
    if (flag) {
        menu.classList.remove('close-animation');
        menu.style.display = 'flex';
    }
    else menu.classList.add('close-animation');
}