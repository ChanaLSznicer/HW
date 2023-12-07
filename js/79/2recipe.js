(async function(){

    const recipeSelect = $('#recipes');
    const recipeStuff = $('.recipe');
    const recipeName = $('#name');
    const recipePic = $('#pic');
    const recipeIngredients = $('#ingredients');

    try{

        const response = await fetch('recipe.json');

        if(!response.ok){
        throw new Error (`${response.status} ${response.statusText}`);
        
        }
        const recipes = await response.json();
        recipes.forEach(recipe => {
            recipeSelect.append(`<option value = "${recipe.id}">${recipe.name}</option>`);
            
        });

        recipeSelect.change(/*e=>*/ async function (e){
           // console.log('recipe selected',e.target.value);
           //console.log('recipe selected',recipeSelect.val());
           //console.log(this.value);

           try{
            const response = await fetch(`${this.value}.json`);
            if(!response.ok){
                throw new Errror(`${response.status} ${response.statusText}`);
            }

            const recipe = await response.json();
            console.log(recipe);

            recipeStuff.show()
            recipeName.text(recipe.name);
            recipePic.attr('src',recipe.picture);

            recipeIngredients.empty();
            recipe.ingredients.forEach(ing =>{
                recipeIngredients.append(`<li>${ing}</li>`);

            });

           }catch (e){
            console.error('inner',e.message);
           }
            
        
            

          
        });

    
    }catch(e){
        console.error(e.message);
    }


}());