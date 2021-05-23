const url = "https://rfmy.fagerlidesign.no/wp-json/wp/v2/posts";

const container = document.querySelector(".blogcontainer");

async function fetchRecipes() {
    try {
        const response = await fetch(url);
        const recipe = await response.json();

        for (let i = 0; i < recipe.length; i++) {
            console.log();
            container.innerHTML += `<div class="recipecard">
                                    <div class="recipediv">
                                    <a href="oneblog.html?id=${recipe[i].id}"><h3>${recipe[i].title.rendered}</h3>
                                    <img class="thumbimg" src="${recipe[i]['better_featured_image'].source_url};"></a>
                                    <p>${recipe[i].excerpt.rendered}</p>
                                    </div></div>
            `
        };


    }
    catch (error) {
        console.log(error);
    }
};

fetchRecipes();