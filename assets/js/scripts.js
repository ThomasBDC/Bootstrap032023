const listCategories = document.querySelector(".list-categories");
const listArticles = document.querySelector("#allArticles");
const categorie =`<div class="categorie">
                    <a>Ma categorie</a>
                </div>`;

const article = `<article class="col-12 col-md-6 col-xl-4">
                    <div>
                        <img src="https://picsum.photos/300/150"/>
                    </div>
                    <h2>Microphone Rode NT1-A</h2>
                    <p>Avec sa capsule de condensateur de 1 pouce et sa réponse en fréquence étendue ...</p>
                </article>`;


let htmlCategories = '';
for(let i =0; i<6;i++){
    htmlCategories += categorie;
}
listCategories.innerHTML = htmlCategories;

let htmlArticles = '';
for(let i =0; i<12; i++){
    htmlArticles += article;
}
listArticles.innerHTML = htmlArticles;
