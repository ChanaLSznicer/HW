window.pcs = window.pcs ||{};
window.pcs.messageBox = (function(){
    'use strict';

    const width =274;
    const height = 162;
    const topOffset = -(height/2);
    const leftOffset = -(width/2);

    return function (msg,buttons,callBack){
        buttons = buttons ||['ok'];
        const div = document.createElement('div');
        const msgDiv = document.createElement('div')
        msgDiv.innerText = msg;
        msgDiv.style.overflow = 'auto';
        msgDiv.style.height = '7em';

       // document.body.appendChild(div); //what does append child do? //why no return?

        
        //div.style.display = 'none';
        div.style.border = '1px solid black'
        div.style.backgroundColor = 'lightblue';
        div.style.height = `${height}px`;;
        div.style.width = `${width}px`;
        div.style.boxSizing ='border-box';
        div.style.padding = '1em';
    
        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${topOffset}px`;
        div.style.marginLeft = `${leftOffset}px`;;
        div.style.textAlign = 'center';
        div.className = 'messageBox';

        const buttonDiv = document.createElement('div');

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '0.5em';
        buttonDiv.style.width = '100%';
        buttonDiv.style.left = 0;

        
        for(let i = 0; i<buttons.length; i++){
           
            const button = document.createElement('button');
            button.innerText=buttons[i];
            button.addEventListener('click',()=>{
                //div.style.display = 'none';
                div.remove();
                if(callBack){
                  callBack(buttons[i]);  
                }
                
            });
            buttonDiv.appendChild(button);
        }
         
        div.appendChild(msgDiv);
        div.appendChild(buttonDiv); //why is this step necessary?
        document.body.appendChild(div);
        

    };
}());