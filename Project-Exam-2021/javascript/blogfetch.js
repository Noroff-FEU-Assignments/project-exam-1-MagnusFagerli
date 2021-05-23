const recipeDetails = document.querySelector(".recipedetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://rfmy.fagerlidesign.no/wp-json/wp/v2/posts/" + id;


async function fetchRecipe() {

    try {
        const response = await fetch(url);
        const recipedetails = await response.json();


        recipeDetails.innerHTML += `

        <div class="crumbs">
        <a href="allblogs.html">Recipes</a> > <a href="#">${recipedetails.title.rendered}</a></div>
                                    <div class="recipedetails">                                   
                                    <h2>${recipedetails.title.rendered}</h2>
                                    
                                    <img class="thumbimg" src="${recipedetails['better_featured_image'].source_url};">
                                    
                                    <div id="testModal" class="modal">
                                      <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
                                    
                                      <img class="modal-content" id="thumbimg" src="${recipedetails['better_featured_image'].source_url};">
                                    </div>

                                    <div class="date"><p><i>Posted by Magnus</i></p></div>
                                    <div class="requirements"><h3>Difficulty: Average</h3>
                                    <p>Nothing is impossible - it might just require more time.</p></div>
                                    
                                    <div class="ingredients">
                                    
                                    <h4>Ingredients:</h4>
                                    <li>Lorem</li>
                                    <li>Ipsum</li>
                                    <li>Dolor</li>
                                    <li>Amat</li>
                                    </div>
                                    <hr class="underrecipe">
                                    <div class="masstext"><p>${recipedetails.content.rendered}</p> 
        </div>
        `

    }
    catch (error) {
        console.log(error);
    }

}

fetchRecipe();