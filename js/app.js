const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
    const search = document.getElementById('search-text');
    const searchText = search.value;
    search.value = '';
    mealSearch(searchText);
})
const mealSearch = data => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadingMeal(data.meals))
}
const loadingMeal = (meal) =>{
    const card = document.getElementById('card');
    for (const food of meal ) {
        const foodSection = document.createElement('div');
        foodSection.textContent = '';
        foodSection.classList.add('col');
        
        foodSection.innerHTML = `
            <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0,250)}</p>
                </div>
            </div>
        `;
        card.appendChild(foodSection);
    }
}