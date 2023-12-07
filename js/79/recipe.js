(async function(){

    const recipeSelect = $('#recipes');
    const recipeStuff = $('.recipe');
    const recipeName = ('#name');
    const recipePicture = ('#picture');

    try{
        const response = await fetch('recipe.json');
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
    
        }
        const recipes = await response.json();
        recipes.forEach(recipe =>{
            recipeSelect.append(`<option value =${recipe.id}>${recipe.name}<option/>`);

        });
        recipeSelect.change(/*e=>*/ async function (e){
           //console.log('recipe selected',e.target.value);

            const response = await fetch(`${this.value}.json`);
            if(!response.ok){
                throw new Error(`${response.status} ${$response.statusText}`);
            }
            
            const recipe = await response.json();;
            console.log(recipe);
            //$('.recipe').show();
            recipeName.show();
            recipeName.text(recipe.name);
            recipeImage.attr('src',recipe.picture);

        });
    

    } catch(e){
        console.log(e.message);
    }
   


}());