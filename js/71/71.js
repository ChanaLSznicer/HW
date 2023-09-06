(function (){

    const theButton = document.querySelector('#theButton');

    theButton.style.backgroundColor = 'red';
    let clicks = 1;
    function createNewButton(){

        clicks++;
        
        const myNewButton = document.createElement('button');
        
        myNewButton.style.backgroundColor = 'red';
        
        myNewButton.innerHTML = clicks;
        
        document.body.appendChild(myNewButton);

        myNewButton.addEventListener('click', createNewButton);

    }
    theButton.addEventListener('click', createNewButton);
})();