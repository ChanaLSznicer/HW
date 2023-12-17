(function(){
    'use strict';

    class Item {
        constructor(name, price, quantity) {
          this.name = name;
          this.price = price/quantity;
          //this.quantity = quantity;
        }
    };


    class Order {
        constructor(name, address, items) {
          this.name = name;
          this.address = address;
          this.items = items;

          
        }
        get orderTotal() {
            let t = 0;
            this.items.forEach(i => {
                t += i.total;
            });
            return t;



          }
    };  
    const getInput = document.querySelector("#input");   
    const loadOrder = document.querySelector("#load"); 
    const loadList = document.querySelector('#list');
    const itemArray =[];
    const ordersArray = [];

    loadOrder.addEventListener('click', async(e)=>{
        e.preventDefault();
        const inputVal = getInput.value;
        if(inputVal){
            try{
                const response = await fetch (`./${inputVal}.json`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status code: ${response.status}`);
                  }
                const data = await response.json();

                data.forEach(d => {
                    d.items.forEach(item =>{
                        itemArray.push(new Item(item.item,item.total,item.quantity));
                    })
                    ordersArray.push(new Order(d.customer,d.address,d.items));
                });
                ordersArray.forEach(o=>{
                    loadList.innerHTML +='<hr>'
                    loadList.innerHTML += `${o.name} <br> ${o.address} <br> Total: ${o.orderTotal} <br>`;
                    o.items.forEach(i=>{
                        loadList.innerHTML += `${i.item} <br> ${i.quantity} <br> ${itemArray.find(item => item.name === i.item).price} <br>`;

                    })
                    
                })
                
            }catch(e){
                console.error('Error during fetch:', e);

            }

        
        }
        
    });
    



    

}());