function generateAnswer(event){
    event.preventDefault();

    new Typewriter('#answer', {
    strings: 'Welcome to Shecodes',
    autoStart: true,
    cursor:"",
    delay: 17,
});
}

let aiForm = document.querySelector("#search-form");
aiForm.addEventListener("submit", generateAnswer);
