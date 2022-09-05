// let imgs:[string, string, string, string, string, string, string, string] = ['img/guadaña.jpeg', 'img/guadaña 2.jpeg', 'img/motosierra-stihl-ms210-nogalpark-1502373804.jpg', 'img/cierra2x.jpg', 'img/hidrolimpiadora-1600psi-elect-semi-prof-domosa-33-hl-1600i.jpg', 'img/D_NQ_NP_815452-MLV50325596608_062022-V.jpg', 'img/bomba-periferica-1-2-hp-truper-expert-589.jpg', 'img/x750_studio_r4a032288_large_ab59c71afab97f73857f5dfd150eaa9255ead06e.jpg']


const d = document, 
info_button = d.querySelectorAll('.info');
const body:any = d.querySelector('body'), url:string = '../js/json/productos.json'
let modal:{modal:any, img_modal:any, title:any, body:any, close:any,} = {
    modal: d.querySelector('#modal-info'),
    img_modal: d.getElementById('image-modal'),
    title: d.getElementById('title'),
    body: d.getElementById('info-body'),
    close: d.getElementById('modal-close')
};

export async function crear_modal(this: any){
    let res = await fetch(url);
    let data = await res.json();
    let prod = await data.productos;
    let id = this.id
    let text = d.createTextNode(prod[id].text);
    let p = d.createElement("p")
    p.appendChild(text)
    let title = d.createTextNode(prod[id].title)

    modal.img_modal.src = prod[id].img;
    
    modal.title.appendChild(title);
    modal.body.appendChild(p);

    body.className = 'body-hidden';
    modal.modal.className += ' active';

    modal.close.addEventListener('click', cerrarModal)

    function cerrarModal():void{
        body.className = '';
        modal.modal.className = 'modal-info';
        modal.title!.removeChild(title);
        modal.body.removeChild(p);
    }
    
}
