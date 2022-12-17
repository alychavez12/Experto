
const $meals =$('.meals');
const $picture=$('.picture');
const $strArea =$('.strArea');
const $ingredients1=$('.ingredients1');
const $measure1 =$('.measure1');
const $ingredients2=$('.ingredients2');
const $measure2 =$('.measure2');
const $ingredients3=$('.ingredients3');
const $measure3 =$('.measure3');
const $ingredients4=$('.ingredients4');
const $measure4 =$('.measure4');
const $ingredients5=$('.ingredients5');
const $measure5 =$('.measure5');
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
    $ingredients1.text(recipeData.meals[0].strIngredient1)
    $measure1.text(recipeData.meals[0].strMeasure1)
    $ingredients2.text(recipeData.meals[0].strIngredient2)
    $measure2.text(recipeData.meals[0].strMeasure2)
    $ingredients3.text(recipeData.meals[0].strIngredient3)
    $measure3.text(recipeData.meals[0].strMeasure3)
    $ingredients4.text(recipeData.meals[0].strIngredient4)
    $measure4.text(recipeData.meals[0].strMeasure4)
    $ingredients5.text(recipeData.meals[0].strIngredient5)
    $measure5.text(recipeData.meals[0].strMeasure5)
    $instructions.text(recipeData.meals[0].strInstructions)
}


// let recipe = recipeData.meals[0];
// let count = 1;
//   let ingredientes = [];
//   for (let i in recipe) {
//     let ingrediente = "";
//     let measure = "";
//     if (i.startsWith("strIngredient") && recipe[i])
//     {
//       ingrediente = recipe[i];
//       measure = recipe[`strMeasure` + count];
//       count += 1;
//       ingredientes.push(ingrediente + measure);
//     }
//   }
// console.log(ingredientes);



