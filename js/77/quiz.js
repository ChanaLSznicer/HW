(function(){

    const boyNames = ['joe','donald','barack','george','bill'];
    const girlNames = ['jill','melania','michelle','laura','hillary'];
    const lastNames = ['biden','trump','obama','bush','clinton'];

    const male = 0;
    const female = 1;

    const people  = [];
    let nextId = 1;

    // pick a number between 1 and max
    function getRandNumb(max){
        return Math.floor(Math.random() * max)+1;
    }

    function personCreator(gender){
        let firstNames = gender === male ? boyNames : girlNames; //if else statemnet

        return{
            id:nextId++,
            gender,
            first:firstNames[getRandNumb(firstNames.length) -1],
            last:lastNames[getRandNumb(lastNames.length) -1],

            print(){
                console.log(`id: ${this.id}first:${this.first} last:${this.last}`)
                //this.spouse.print();
            }
           
        };
    }
    for(let i = 0; i <20; i++){
        const m = personCreator(male);
        const f = personCreator(female);

        m.spouse = f;
        f.spouse = m;
        people.push(personCreator(male));
        people.push(personCreator(female));
    }

    console.log(people);
})