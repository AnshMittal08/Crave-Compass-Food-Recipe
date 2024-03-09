const categories = ['Breakfast', 'Chinese', 'Vegeterian', 'Smoothie', 'Non-Veg', 'Light Snack'];
const regions = ['Italian', 'Sweets', 'India', 'French'];
const recipesByCategory = {
    'Breakfast': [
        { name: 'Pasta Carbonara', category: 'Breakfast',img:"Assests/pasta-carbonara-1.jpg"}
    ],
    'Vegeterian': [
        { name: 'Baigan Bharta', category: 'Vegeterian',img:"https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg" },
        { name: 'Matar Paneer', category: 'Vegeterian',img:"https://shwetainthekitchen.com/wp-content/uploads/2012/11/IMG_7026-scaled.jpg"},
        { name: 'Dal Fry', category: 'Vegeterian',img:"https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg" }, 
        { name: 'Rajma/Kidney Beans Curry', category: 'Vegeterian',img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg" },
        { name: 'Chole Chawal', category: 'Vegeterian',img:"https://img.freepik.com/premium-photo/indian-food-chole-chawal-spicy-chickpea-curry-with-plain-rice-served-with-green-salad_466689-372.jpg" }
    ],
    'Light Snack': [
        { name: 'Chocolate Chip Cookies', category: 'Light Snack',img:"https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg"}
    ]
};
function createCategoryElement(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    const img = document.createElement('img');
    img.src = `Assests/${category.toLowerCase()}.png`;
    img.alt = category;
    categoryDiv.appendChild(img);
    const h4 = document.createElement('h4');
    h4.textContent = category;
    categoryDiv.appendChild(h4);
    return categoryDiv;
}


function createRegionElement(region) {
    const regionDiv = document.createElement('div');
    regionDiv.classList.add('region');
    regionDiv.textContent = region;
    return regionDiv;
}


const categoryContainer = document.querySelector('.category-container');
categories.forEach(category => {
    const categoryElement = createCategoryElement(category);
    categoryContainer.appendChild(categoryElement);
});


const regionContainer = document.querySelector('.region-container');
regions.forEach(region => {
    const regionElement = createRegionElement(region);
    regionContainer.appendChild(regionElement);
});


// Function to create recipe cards
function createRecipeCard(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const img = document.createElement('img');
    img.src = recipe.img;
    img.alt = recipe.name;
    recipeCard.appendChild(img);

    const heading = document.createElement('div');
    heading.classList.add('recipe-heading');
    heading.textContent = recipe.name;
    recipeCard.appendChild(heading);

    recipeCard.addEventListener('click', () => {
        navigateToRecipe(recipe.name);
    });

    return recipeCard;
}

// Function to display recipes for a specific category
/*function displayRecipes(category) {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous recipes

    const recipes = recipesByCategory[category];
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}
*/

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Function to display recipes for a specific category
function displayRecipes(category) {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous recipes

    const recipes = recipesByCategory[category];
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}

// Display recipes for the category specified in the URL
if (category) {
    displayRecipes(category);
} else {
    console.error('Category parameter not found in URL');
}


const categoryLinks = document.querySelectorAll('.category');
categoryLinks.forEach(categoryLink => {
    categoryLink.addEventListener('click', () => {
        const category = categoryLink.textContent.trim();
        displayRecipes(category);
    });
});

const recipesByArea = {
    'Italian': [
        { name: 'Pasta Carbonara', area: 'Italian',img:"Assests/pasta-carbonara-1.jpg"}
    ],
    'India': [
        { name: 'Baigan Bharta', area: 'India',img:"https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg" },
        { name: 'Matar Paneer', area: 'India',img:"https://shwetainthekitchen.com/wp-content/uploads/2012/11/IMG_7026-scaled.jpg"},
        { name: 'Dal Fry', area: 'India',img:"https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg" }, 
        { name: 'Rajma/Kidney Beans Curry', area: 'India',img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg" },
        { name: 'Chole Chawal', area: 'India',img:"https://img.freepik.com/premium-photo/indian-food-chole-chawal-spicy-chickpea-curry-with-plain-rice-served-with-green-salad_466689-372.jpg" },
        { name: 'Paneer Grilled Sandwich', area: 'India',img:"https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800" }
    ],
    'French': [
        { name: 'Eggless Apple Honey Pancake', area: 'French',img:"https://bestservedvegan.com/wp-content/uploads/2021/08/Vegan-Apple-Pancakes-21-681x1024.jpg"}
    ],
    'Sweets':[
        { name: 'Chocolate Chip Cookies', area: 'Sweets',img:"https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg"},
        { name: 'Strawberries Romanoff', area: 'Sweets',img:"https://www.gittaskitchen.com/wp-content/uploads/2020/06/Final-single-glass-side-view.jpg"}

    ],

};

const regionLinks = document.querySelectorAll('.region');
regionLinks.forEach(regionLink => {
    regionLink.addEventListener('click', () => {
        const region = regionLink.textContent.trim();
        displayRecipesByArea(region);
    });
});

// Function to display recipes for a specific area
function displayRecipesByArea(area) {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous recipes

    const recipes = recipesByArea[area];
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}
function navigateToRecipe(recipeName) {
    window.location.href = `recipe.html?name=${recipeName}`;
}