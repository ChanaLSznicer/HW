(function(){
    const nameInput = document.querySelector('#name');
    const addressINput = document.querySelector('#address');
    const nameResult = document.querySelector('#nameResult');
    const adressResult = document.querySelector('#addressResult');

    const theForm = document.querySelector('#theForm');
    theForm.addEventListener('submit',e =>{
        e.preventDefault();

        nameResult.innerText = `name is ${nameInput.value}`;
        addressResult.innerText = `address is ${addressInput.value}`;
    });
})