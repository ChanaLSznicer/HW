(function(){

    const partSection = document.querySelector('#sidebar ul');
    let dragging;
    let offset;

    async function loadParts(){
        try{
            const response = await fetch('parts.json');
            if(!response.ok){
            throw new Error(`${response.status}${response.statusText}`);
        } 
        const parts = await response.json();
        parts.forEach(prt=>{
            const img = document.createElement('img');
            img.setAttribute('src',prt.url);
            partSection.append(img);
            console.log(prt);

        })
        }catch(e){
            console.error(e.message);
        }
       
    }

    loadParts();

}());