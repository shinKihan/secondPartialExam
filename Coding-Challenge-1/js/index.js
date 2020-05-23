function getMeal(meal) {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}";
  let showName = document.querySelector(".json-search-showName");
  showName.innerHTML = " ";

  fetch(url)
    .then(Response => {
      if(response.ok) {
        return Response.json();
      }
      return showName.innerHTML +=
      <div>
        Meal not found
      </div>
    })
    .then(responseJSON => {
      if(responseJSON.meal === null) {
        return showName.innerHTML +=
        <div>
          Meal not found
        </div>
      }

      for(let i=0; i<responseJSON.meal.lenght; i++)  {
        showName.innerHTML +=
        <div>
          <ul>
            <li>${responseJSON.meal.strMealName}</li>
            <li>${responseJSON.meal.strMealCuisine}</li>
            <li>${responseJSON.meal.strMealInstruction}</li>
          </ul>
          <img src="${responseJSON.meal.strThumb}"/>
        </div>
      }
    })
}

init()

function init() {
  viewForm();
}

function viewForm() {
  let body = document.querySelector('.js-search-body');
  body.addEventListener('submit', (event) => {
    event.preventDefault();
    let value = document.querySelector(',js-query').value
    getMeal(value);
  })
}
