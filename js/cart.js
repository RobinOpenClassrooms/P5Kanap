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



function displayItem (item) {
    const article = makeArticle(item)
    const image = makeImage3(item)
}

function makeImage3(item) {
    const image = document.createElement('img')
    image.src = item.imageUrl
    image.alt = item.altTxt
    return image
}