function displayRecipe(response){
    
    new Typewriter('#answer', {
    strings: response.data.answer,
    autoStart: true,
    cursor:"",
    delay: 1,
    });

}

// Display the generated Recipe
function generateRecipe(event){
    event.preventDefault();

    // build the API
    let mainIngredient = document.querySelector("#text-instructions");
    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let context = "You are an expert in the kitchen and love to cook. Your mission is to generate a recipe in basic HTML and separate each line ith a <br />. Make sure to follow the user instructions. Provide the answer in a recipe form with a title and paragraphs.";
    let prompt = `User instructions: Generate a recipe with ${mainIngredient.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#answer");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">🧞 Generating a delicious ${mainIngredient.value} recipe… 🧞</div>`;
    
    

    // Make a call to the API
    axios.get(apiUrl).then(displayRecipe);
}

let aiForm = document.querySelector("#search-form");
aiForm.addEventListener("submit", generateRecipe);

