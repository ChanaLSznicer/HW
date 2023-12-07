(function (){

    const nameInput = $('#name');
    const resultsElem = $('results');

    $('#load').click(async () =>{
        try{
            const response = await fetch(nameInput.val());
        console.log(response);
        if(response.status >= 400){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const text = await response.text();
        resultsElem.text(text);
        } catch(e){
            pcs.messageBox(e.message);
            //console.error('oops',e);
        } finally{
            spinner.hide();
        }
        
    });
}());

