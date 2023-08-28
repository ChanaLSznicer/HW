

function employee(first,last,title){
    return{
        first:first,
        last:last,
        title:title,
        print: function(){
            console.log(`first: ${this.first}\t last: ${this.last}\t title: ${this.title}`);
        }
    };
} 

function company(name, adress){
    return{
        name:name, 
        adress:adress, 
        employees:[], 
        print: function(){
            console.log(`name: ${this.name}\n adress: ${this.adress}\t`);
            console.log('Employees:')
            this.employees.forEach(elem => console.log(elem.print()))
        },
        addEmployee: function(first,last,title){
            this.employees.push(employee (first,last,title))

        }
        

    };
    
   
}
const apple = company("apple","123 apple st");
apple.addEmployee('chana', 'sznicer','founder');

apple.addEmployee('Tim', 'Cook','CEO')

apple.print()


