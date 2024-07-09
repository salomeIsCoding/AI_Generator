function displayRecipe(response){
    console.log("recipe generated");
    new Typewriter('#answer', {
    strings: response.data.answer,
    autoStart: true,
    cursor:"",
    delay: 1,
    });

}

function generateRecipe(event){
    event.preventDefault();

    // build the API
    let mainIngredient = document.querySelector("#text-instructions");
    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let context = "You are an expert in the kitchen and love to cook. Your mission is to generate a recipe in basic HTML and separate each line ith a <br />. Make sure to follow the user instructions. Provide the answer in a recipe form.";
    let prompt = `User instructions: Generate a recipe with ${mainIngredient}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating recipe");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    // Make a call to the API
    axios.get(apiUrl).then(displayRecipe);
}

let aiForm = document.querySelector("#search-form");
aiForm.addEventListener("submit", generateRecipe);

// Display the generated Poem