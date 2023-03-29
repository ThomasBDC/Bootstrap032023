const listCategories = document.querySelector(".list-categories");
const listArticles = document.querySelector("#allArticles");
const categorie =` <a href="#" class="list-group-item list-group-item-action">Philips</a>`;

const article = `<article class="col-12 col-md-6 col-xl-4 p-2">
                    <div class="card shadow">
                        <img class="bd-placeholder-img card-img-top" width="100%" src="https://picsum.photos/300/150" role="img">
                        <div class="card-body">
                            <h5 class="card-title">Microphone Rode NT1-A</h5>
                            <p class="card-text">Avec sa capsule de condensateur de 1 pouce et sa réponse en fréquence étendue ...</p>
                            <a href="#" class="btn btn-primary"  data-bs-toggle="tooltip" data-bs-placement="bottom" 
                            data-bs-title="15% de réduction si vous l'achetez dans les 5 minutes">
                            <i class="bi bi-cart"></i> Acheter</a>
                        </div>
                    </div>
                </article>`;


let htmlCategories = '';
for(let i =0; i<6;i++){
    htmlCategories += categorie;
}
listCategories.innerHTML += htmlCategories;

let htmlArticles = '';
for(let i =0; i<12; i++){
    htmlArticles += article;
}
listArticles.innerHTML = htmlArticles;

//Initialisation des tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));