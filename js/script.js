
const $meals =$('.meals');
const $picture=$('.picture');
const $strArea =$('.strArea');
const $ingredients=$('.ingredients');
const $measure =$('.measure');
const $instructions =$('.instructions');
const $input = $('input[type="text"]');


let recipeData, userInput;
//calls the form and submit the data
$("form").on("submit", getData)
$(".searchButton").click(function(){
});

// function get data from API
function getData(event) {
    event.preventDefault()
    userInput = $input.val()
    if (userInput.length == 0) {
        result.innerHTML = `<h3> Input field cannot be empty</h3>`;
    }
    $.ajax({
        url:"https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput
    }).then(
        (main) => {
            recipeData = main
            render()
           console.log(main);
        },
        (error) => {
            console.log("Sorry, we dont have that recipe, error")
        }
    )
}




// call and render the function
function render() {
    $meals.text(recipeData.meals[0].strMeal)
    $picture.attr("src",recipeData.meals[0].strMealThumb)
    $strArea.text(recipeData.meals[0].strArea)
    $ingredients.text(recipeData.meals[0].strIngredient1)
    $measure.text(recipeData.meals[0].strMeasure1)
    $instructions.text(recipeData.meals[0].strInstructions)
}


let recipe = recipeData.meals[0];
let count = 1;
  let ingredientes = [];
  for (let i in recipe) {
    let ingrediente = "";
    let measure = "";
    if (i.startsWith("strIngredient") && recipe[i])
    {
      ingrediente = recipe[i];
      measure = recipe[`strMeasure` + count];
      count += 1;
      ingredientes.push(ingrediente + measure);
    }
  }
console.log(ingredientes);



