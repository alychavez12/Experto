
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
const $ingredients6=$('.ingredients6');
const $measure6 =$('.measure6');
const $ingredients7=$('.ingredients7');
const $measure7 =$('.measure7');
const $ingredients8=$('.ingredients8');
const $measure8 =$('.measure8');
const $ingredients9=$('.ingredients9');
const $measure9 =$('.measure9');
const $ingredients10=$('.ingredients10');
const $measure10 =$('.measure10');
const $ingredients11=$('.ingredients11');
const $measure11 =$('.measure11');
const $ingredients12=$('.ingredients12');
const $measure12 =$('.measure12');

const $ingredients13=$('.ingredients13');
const $measure13 =$('.measure13');

const $ingredients14=$('.ingredients14');
const $measure14 =$('.measure14');

const $ingredients15=$('.ingredients15');
const $measure15 =$('.measure15');

const $ingredients16=$('.ingredients16');
const $measure16 =$('.measure16');

const $ingredients17=$('.ingredients17');
const $measure17 =$('.measure17');

const $ingredients18=$('.ingredients18');
const $measure18 =$('.measure18');

const $ingredients19=$('.ingredients19');
const $measure19 =$('.measure19');

const $ingredients20=$('.ingredients20');
const $measure20 =$('.measure20');

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
    
    $ingredients6.text(recipeData.meals[0].strIngredient6)
    $measure6.text(recipeData.meals[0].strMeasure6)
    
    $ingredients7.text(recipeData.meals[0].strIngredient7)
    $measure7.text(recipeData.meals[0].strMeasure7)
    
    $ingredients8.text(recipeData.meals[0].strIngredient8)
    $measure8.text(recipeData.meals[0].strMeasure8)

    $ingredients9.text(recipeData.meals[0].strIngredient9)
    $measure9.text(recipeData.meals[0].strMeasure9)

    $ingredients10.text(recipeData.meals[0].strIngredient10)
    $measure10.text(recipeData.meals[0].strMeasure10)

    $ingredients11.text(recipeData.meals[0].strIngredient11)
    $measure11.text(recipeData.meals[0].strMeasure11)

    $ingredients12.text(recipeData.meals[0].strIngredient12)
    $measure12.text(recipeData.meals[0].strMeasure12)

    $ingredients13.text(recipeData.meals[0].strIngredient13)
    $measure13.text(recipeData.meals[0].strMeasure13)

    $ingredients14.text(recipeData.meals[0].strIngredient14)
    $measure14.text(recipeData.meals[0].strMeasure14)

    $ingredients15.text(recipeData.meals[0].strIngredient15)
    $measure15.text(recipeData.meals[0].strMeasure15)

    $ingredients16.text(recipeData.meals[0].strIngredient16)
    $measure16.text(recipeData.meals[0].strMeasure16)

    $ingredients17.text(recipeData.meals[0].strIngredient17)
    $measure17.text(recipeData.meals[0].strMeasure17)

    $ingredients18.text(recipeData.meals[0].strIngredient18)
    $measure18.text(recipeData.meals[0].strMeasure18)

    $ingredients19.text(recipeData.meals[0].strIngredient19)
    $measure19.text(recipeData.meals[0].strMeasure19)

    $ingredients20.text(recipeData.meals[0].strIngredient20)
    $measure20.text(recipeData.meals[0].strMeasure20)

    $instructions.text(recipeData.meals[0].strInstructions)
}


// open and close instructions text onclick.
$(document).ready(function(){
    $("div.instructions").show();


    $("#open").click(function(){
        $("div.instructions").slideDown("slow");
        $("div#open").hide();
        $("div#close").show();
        if(autoTimer) clearTimeout(autoTimer);
        autoTimer = null;
    });

    $("#close").click(function(){
        $("div.instructions").slideUp("slow");
        $("div#open").show();
        $("div#close").hide();
        if(autoTimer) clearTimeout(autoTimer);
        autoTimer = null;
    });         
});


$(document).ready(function(){
    $("div.ingarea").show();


    $("#opens").click(function(){
        $("div.ingarea").slideDown("slow");
        $("div#opens").hide();
        $("div#closes").show();
        if(autoTimer) clearTimeout(autoTimer);
        autoTimer = null;
    });

    $("#closes").click(function(){
        $("div.ingarea").slideUp("slow");
        $("div#opens").show();
        $("div#closes").hide();
        if(autoTimer) clearTimeout(autoTimer);
        autoTimer = null;
    });         
});