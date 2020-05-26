const modalMain = document.querySelector('.div-modal-main');
const gridCards = document.querySelectorAll('.div-grids');

for(let grid of gridCards) {
    grid.addEventListener("click", function(){

        const imgId = grid.getAttribute('id')
        const contentText = grid.querySelector('span').innerHTML;
        const contentTextP = grid.querySelector('p').innerHTML;

        modalMain.classList.add('active')

        modalMain.querySelector('img').src = `./assets/${imgId}`
        modalMain.querySelector('h1').textContent = `${contentText}`
        modalMain.querySelector('p').textContent = `${contentTextP}`
    })
}
document.querySelector('.closeModal')
.addEventListener("click", function(){
    modalMain.classList.remove('active')
})
