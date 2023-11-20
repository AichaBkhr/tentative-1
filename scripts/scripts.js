window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY>0);
});

function toggleMenu(){
 const tmenuToggle = document.querySelector('.menuToggle');
 const navbar = document.querySelector('.navbar');
 navbar.classList.toggle('active');
 menuToggle.classList.toggle('active');
}

function filtrerParCategorie(categorie){
var produits = document.getElementsByClassName('box');
for(var i=0; i< produits.length; i++){
    var produit = produits[i];
    var categorieProduit =produit.getAttribute('data-categorie');

    //verifier si le prod appartient à la categorie selectionnée 
    if(categorieProduit === categorie || categorie === 'tout'){
        produit.style.display = 'block';
    } else {
        produit.style.display = 'none';
    }
}
}

var produits = document.getElementsByClassName('box');
for(var i=0; i<produits.length; i++){
var produit = produits[i];

var categorieProduit = produit.getAttribute('data-categorie');
var libelleProduit = produit.getAttribute('data-libelle');
var prixProduit = produit.getAttribute('data-prix');
var descriptionProduit = produit.getAttribute('data-description');

produit.querySelector('.libelle').innerText = 'Libellé : '+ libelleProduit ;
produit.querySelector('.nom-categorie').innerText = 'Catégorie : '+ categorieProduit;
produit.querySelector('.prix').innerText = 'Prix : '+ prixProduit + ' €';
produit.querySelector('.description').innerText = 'Description : '+ descriptionProduit;

}