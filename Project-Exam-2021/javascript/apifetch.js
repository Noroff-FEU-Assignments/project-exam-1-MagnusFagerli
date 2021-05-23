const url = "https://rfmy.fagerlidesign.no/wp-json/wp/v2/posts/?_embed";

const container = document.querySelector(".blogcontainer");

async function fetchRecipes() {
    try {
        const response = await fetch(url);
        const recipe = await response.json();


        for (let i = 0; i < recipe.length; i++) {
            if (i === 4) {
                break;
            };
            console.log('Yummy Recipes');

            container.innerHTML += `
                                    <div class="recipecard">
                                    <div class="recipediv">
                                    <a href="oneblog.html?id=${recipe[i].id}"><h3>${recipe[i].title.rendered}</h3>
                                    <img class="thumbimg" src="${recipe[i]['better_featured_image'].source_url};"></a>
                                    <div class="summary"><p>${recipe[i].excerpt.rendered}</p></div></div>
                                    </div>
            `
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchRecipes();
