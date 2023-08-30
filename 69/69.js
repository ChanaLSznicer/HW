(function(){

    const intrestCal = (function(){
        let rate;
        let year;

        function setRate(amnt){
            rate=amnt;
            return this;
        }
        function setYears(amnt){
            year=amnt;
            return this;
        }
        function calculateIntrest(amnt){
            return (amnt * (rate/100))  *year;
        }

        return{
            setRate,
            setYears,
            calculateIntrest
        }
    })();

    intrestCal.setRate(5);
    intrestCal.setYears(12);
    console.log(intrestCal.calculateIntrest(50000));

    intrestCal.setRate(8).setYears(14);
    console.log(intrestCal.calculateIntrest(10000));


    function CreateBank(){
        return{
            balance: 0,
            transaction:function(amnt){
                this.balance+=amnt;
            }
        };
    }
    const checking = CreateBank();
    checking.transaction(15);
    console.log(checking.balance);

/////////////////////////////////////////////
    function CreateBank2(){
        return{
            balance: 0,
            
        }
        
    }
    function transaction(amnt){
        this.balance +=amnt;
    }


    const savings = CreateBank2();
    transaction.call(savings,25);
    
/////////////////////////////////////////////////
    const add50Savings = transaction.bind(savings,50); //set amnt

    add50Savings();
    transaction.call(savings,25);

    console.log(savings.balance);


})();