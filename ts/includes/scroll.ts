export default function (){
    let position:number, destino:any, distancia:number,  interval:any;
    const d = document;
    const scroll_element = d.querySelectorAll('.scroll'), back = d.querySelectorAll('.back');

    function inicio():void{
        for (let i = 0;  i<scroll_element.length; i++) {
            scroll_element[i].addEventListener('click', down)
            
        }
        for( let i = 0; i < back.length; i++){
            back[i].addEventListener('click', up)
        }
    }
    function down(this: HTMLElement, e:Event){

        e.preventDefault();
        destino = this.getAttribute('href');
        // console.log(destino);
        distancia = (d.querySelector(destino).offsetTop - 90);
        // console.log(distancia);
        window.scrollTo(0, distancia);

    }

    function up(e:Event){
        
        e.preventDefault();
        position = window.scrollY
        // clearInterval(interval);
        if(position > 0 || position < 0) {
            position = 0;

            window.scrollTo(0,position)
        }

    }

    inicio()
}