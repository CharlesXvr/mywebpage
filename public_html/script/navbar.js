const displayMenu = () => {
    let myLinks = document.querySelector('.nav-left');
    if (myLinks.style.display === 'flex') {
        myLinks.style.display = 'none';
    } else {
        myLinks.style.display = 'flex';
    }
};
const rotateBarNav = (hamburguer) => {
    hamburguer.classList.toggle("change");
};