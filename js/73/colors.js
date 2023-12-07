(function(){


    let index = 0;
    let interval;
    //const colors = ['red','green','purple'];
    const theButton = document.querySelector('#start');
    const colorTable = document.querySelector('#colorTable');
    
    theButton.addEventListener('click',()=>{
        if(!interval){
            startColors();
        }else{
            stopColors();
        }
    });

    /*let increment = 10;
    let r = -1;
    let g = 0;
    let b = 0;*/
    function startColors(){
        theButton.innerText = 'stop';
        interval = setInterval(() => {
            /*document.body.style.color = colors[index++];
            if(index===colors.length){
                index = 0;
            }
            document.body.style.backgroundColor = colors[index]; 
            */  
           do{
            const color = getRandomColor();
            const bgColor = getRandomColor();
           // document.body.style.color = color;
           // document.body.style.backgroundColor = bgColor;
            setColors(document.body,color,bgColor);
            addColorsToTable(color,bgColor);

           } while(document.body.style.color===document.body.style.backgroundColor);
           /* for(let r=0;r<256;r++){
                for(let g= 0;g<256; g++){
                    for(let b = 0;b<256; r++){
                        document.body.style.color = `rgb(${r},${g},${b})`;
                        document.body.style.backgroundColor = `rgb(${b},${g},${r})`;
                    }
                }
            }*/
            /*r+= increment;
            if(r >= 256){
                r=0;
                g+= increment;
                if (g >=256){
                    g=0;
                    b+= increment;
                    if(b >=256){
                        b=0;
                    }
                }

            }
            document.body.style.color = `rgb(${r},${g},${b})`;
            document.body.style.backgroundColor = `rgb(${b},${g},${r})`; */
        }, 1000);
    };

    function stopColors(){
        theButton.innerText = 'start';
        clearInterval(interval);
        interval=null;
    }
    function getColorPart(){
        return Math.floor(Math.random()*256);
    }
    function getRandomColor(){
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();  
        return `rgb(${r},${g},${b})`;
    };
    function addColorsToTable(color,bgColor){
        const row = colorTable.insertRow();
        const timeCell = row.insertCell();
        const colorCell = row.insertCell();
        const bgColorCell = row.insertCell();
        timeCell.innerText= new Date().toLocaleTimeString();
        colorCell.innerText = color;
        bgColorCell.innerText = bgColor;
        row.style.color=color;
        row.style.backgroundColor=bgColor;
        row.addEventListener('click',()=>{
            //document.body.style.color = color;
            //document.body.style.backgroundColor = bgColor;
            setColors(document.body,color,bgColor);
            stopColors();
        });
    }
    function setColors(elem,color,bgColor){
        elem.style.color=color;
        elem.style.backgroundColor=bgColor;
    }
}());