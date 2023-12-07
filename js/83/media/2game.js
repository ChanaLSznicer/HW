(function(){

    function loadParts(){

        for(let i = 1;i<=15;i++){
            document.createElement('img');
            const part = document.createElement('img');
            part.className = 'part';
            part.src = `media/parts-0${i}.png`;

            part.style = `top:${y}px; left:${x}`
        }

    }

    let dragging; //= false;
    let offset;
    //const theBox = document.querySelector('.box');

    function mouseMoveHandler(e){
        e.preventDefault();
        if(dragging){
            console.log(e);
            //console.log('mouse move');

            const currentStyle = getComputedStyle(dragging);
            console.log(currentStyle);
            /*theBox*/dragging.style = `top: ${e.pageY - offset.y}px; left:${e.pageX - offset.x}px; background-color: ${currentStyle.backgroundColor}`;
        }
    }

    /*theBox*/ document.addEventListener('mousedown',e=>{
        if(e.target.matches('.parts')){
            //dragging = true;
            dragging=e.target;
            offset={y:e.offsetY,x:e.offsetX};
            console.log('mouse down');
        }
       

    });
    document.addEventListener('mousemove',e=>{
        if(dragging){
           console.log('mouse move');
        }
        

    });
    document.addEventListener('mousemove',mouseMoveHandler);

    document.addEventListener('mouseup',e=>{
        if(dragging){
            console.log('mouse up');
            dragging = false;
        }
        

    });
    const colorInput = document.querySelector('#color');
    document.querySelector('#add').addEventListener('click',()=>{
        const newBox = document.createElement('div');
        newBox.style = `background-color: ${colorInput.value};`;
        newBox.className = 'box';
        document.body.appendChild(newBox);
    });
    loadParts();

}());