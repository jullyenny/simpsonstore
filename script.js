let persons = [];
let totalProducts = 6;



async function getDataPersonSimpsons() {
    const cover = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes").then((response) => {
        return response.json()
    }).then(jsonInfo => { return jsonInfo })
   
    return cover[0]
}

async function getAllProducts() {
    // fazer um for com total de produtos pegando cada produto por vez.//
    for (i = 0; i < totalProducts; i++) {
        const person = await getDataPersonSimpsons();
       
        const checkPerson = persons.find((isPerson) => isPerson.character === person.character);

        if(checkPerson === undefined){
            persons.push(person)
        }else {
            i--
        }

        
    }
    let conteinerProducts = document.querySelector(".conteiner")
    persons.map((item) => {
        let box = document.createElement("div");
        box.className = "box";
        box.innerHTML = `
   <img src="${item.image}" alt="">
      <h2>${item.character}</h2>  
      <span>R$199,90</span>
      <button> Comprar</button>
   `;
        conteinerProducts.appendChild(box);
    })
    console.log(persons)

}
getAllProducts();