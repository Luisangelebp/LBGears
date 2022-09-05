export default (): void => {
    let mobil = document.getElementById('menu-mobil');
    let hijos = document.querySelectorAll('#menu-mobil ul li a');
    if(mobil!.className.includes(' active')){
        mobil!.className = 'menu-mobil';
    }else{
        mobil!.className += ' active';
    }
    for(let i = 0; i < hijos.length; i++){
        hijos[i]!.addEventListener('click', (e) => {
            mobil!.className = 'menu-mobil';
        })
    
    }

}