fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))

    function addProducts(sofas) {
        // const _id = data[0]._id
        // const imageUrl = data[0].imageUrl
        // const altTxt = data[0].altTxt
        // const name = data[0].name
        // const description = data[0].description

        sofas.forEach((canapé) => {               
        const {_id, imageUrl, altTxt, name, description} = canapé
        const anchor = makeAnchor(_id)
        const article = document.createElement("article")
        const image = makeImage(imageUrl, altTxt)
        const h3 = makeH3(name)
        const p = makeParagraph(description)
        appendElementsToArticle(article, [image, h3, p])
        appendChildren(anchor, article)
     })}

   

    function appendElementsToArticle(article, array) {
        array.forEach((item) => {
            article.appendChild(item)
        })
        // article.appendChild(image)
        // article.appendChild(h3)
        // article.appendChild(p)
    }
       
    function makeAnchor(id) {
        const anchor = document.createElement("a") 
        anchor.href = "./product.html?id=" + id
        return anchor
    }   
       
    function appendChildren(anchor, article) {
        const items = document.querySelector ("#items")
        if (items != null) {
            items.appendChild(anchor)
            anchor.appendChild(article)
    }}

    function makeImage(imageUrl, altTxt) {
        const image = document.createElement("img")
        image.src = imageUrl
        image.alt = altTxt
        image.removeAttribute("title")
        image.removeAttribute("style")
        return image
    }

    function makeH3(name) {
        const h3 = document.createElement("h3")
        h3.textContent = name
        h3.classList.add("productName")
        return h3
    }

    function makeParagraph(description) {
        const p = document.createElement("p")
        p.textContent = description
        p.classList.add("productDescription")
        return p 
    }

