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

        // interval = setInterval(()=>{
        //     if (position < distancia) {

        //         position += 30;
        //         console.log(position);
        //         if(position >= distancia) {
        //             clearInterval(interval);
        //         }
                
        //     } else if(position > distancia) {
                
        //         position  -= 30;

        //     }
        //     window.scrollTo(0, position)
        // }, 100)




    }

    function up(e:Event){
        
        e.preventDefault();
        position = window.scrollY
        // clearInterval(interval);
        if(position > 0 || position < 0) {
            position = 0;

            // position -= 30;
            // if(position <= 0){
            //     clearInterval(interval);
            // }else {
            //     return;
            // }
            window.scrollTo(0,position)
        }

        // interval = setInterval(()=>{


        // },1500)

    }

    inicio()
}