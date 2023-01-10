// Récupérer les données du localStorage + JSONparse pour faire l'inverse du JSONstringify


const cart = []


retrieveItemsFromCache() 
console.log(cart)
cart.forEach((item) => displayItem(item))

function retrieveItemsFromCache() {
    const numberOfitems = localStorage.length    
    for (let i = 0; i < numberOfitems; i++) {
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
     }
}



function displayItem(item) {
    const article = makeArticle(item)
    const imageDiv = makeImageDiv(item)
    article.appendChild(imageDiv) 

    const cardItemContent = makeDescription(imageDiv, item)
    article.appendChild(cardItemContent)
    displayArticle(article)
}

function makeCardItemContent() {
    const div = document.createElement("div")
    div.classList.add("card__item__content")


}

function makeDescription(div, item) {
    const description = document.createElement("div")
    div.classList.add("card__item__content__description")

    const h2 = document.createElement("h2") 
    h2.textContent = item.name
    const p = document.createElement("p")
    p.textContent = item.color
    const p2 = document.createElement("p") 
    p2.textContent = item.price + " €"

    description.appendChild(h2)  
    description.appendChild(p)
    description.appendChild(p2)
    div.appendChild(description)
    console.log(div)
    return div

}

function displayArticle(article) {
      document.querySelector("#cart__items").appendChild(article)
      
}

  

function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("card__item")
    article.dataset.id = item.id
    article.dataset.color = item.color
    // article.appendChild(makeTitle(item))
    // article.appendChild(makePrice(item))
    // article.appendChild(makeQuantity(item))
    // article.appendChild(makeColor(item))
    // article.appendChild(makeImage(item))
    return article
}

function makeImageDiv(item) {
    const div = document.createElement("div")
    div.classList.add("cart__item__img")

    const image = document.createElement('img')
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)
    return div
}

