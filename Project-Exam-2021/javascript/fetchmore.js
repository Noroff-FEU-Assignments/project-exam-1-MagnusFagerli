const urltwo = url + "?page=2"

const additionalcontent = document.querySelector(".blogcontainer");

async function fetchMore() {
    try {
        const response = await fetch(urltwo);
        const recipe = await response.json();

        for (let i = 0; i < recipe.length; i++) {

            additionalcontent.innerHTML += `<div class="recipecard">
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


const viewButton = document.querySelector(".viewMore");

viewButton.addEventListener('click', hideshow, false);

function hideshow() {
    viewButton.style.display = 'block';
    this.style.display = 'none'
}