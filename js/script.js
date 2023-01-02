fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
        const imageUrl = data[0].imageUrl
        // console.log("url de l'image", imageUrl)
        const anchor = document.createElement ("a")
        anchor.href = imageUrl
        anchor.text = "un super kanap"
        const items = document.querySelector("#items")
        if (items != null) {
        items.appendChild(anchor)
        // console.log("nous avon bien ajouté le lien")
        }
    })
