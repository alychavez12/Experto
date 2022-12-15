

const $meals =$('.meals');
const $picture=$('.picture');
const $strArea =$('.strArea');
const $ingredients=$('.ingredients');
const $measure =$('.measure');
const $instructions =$('.instructions');
const $input = $('input[type="text"]');


let recipeData, userInput;

$("form").on("submit", getData)
$(".searchButton").click(function(){
});

function getData(event) {
    event.preventDefault()
    userInput = $input.val()
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


function render() {
    $meals.text(recipeData.meals[0].strMeal)
    $picture.text(recipeData.meals[0].strMealThumb)
    $strArea.text(recipeData.meals[0].strArea)
    $instructions.text(recipeData.meals[0].strInstructions)
}



