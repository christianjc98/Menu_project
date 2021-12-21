let menuItems = [
    {
        id: 1,
        title: "Late frio",
        category: "café",
        precio_mediano: 45,
        precio_grande: 50,
        img: "./Cafe_LateFrio.jpg",
        descripción: "Despertar con un café frío nunca fue tan delicioso. Espuma de leche, espresso, y estás listo para disfrutar de una refrescante café frío para cualquier momento del día."
    },
    {
        id: 2,
        title: "Avocado toast",
        category: "desayuno",
        precio_mediano: 0,
        precio_grande: 130,
        img: "./Desayuno_AvocadoToast.jpg",
        descripción: "Dos huevos poche sobre crema de aguacate y pan multigrano coronado con queso parmesano acompañado de ensalada, almendras tostadas , tomate cherry, rabano y vinagreta de la casa."    
    }, 
    {
        id: 3,
        title: "Frappe de cacahuate",
        category: "frappe",
        precio_mediano: 0,
        precio_grande: 80,
        img: "./Frappe_Cacahuate.jpg",
        descripción: "Nuestro Frappe de Cacahuate, es la perfecta combinación de crema de cacahuate con café."    
    },
    {
        id: 4,
        title: "Frappe Cookies and Cream",
        category: "frappe",
        precio_mediano: 0,
        precio_grande: 80,
        img: "./Frappe_CookiesAndCream.jpg",
        descripción: "Qué tal el rico sabor de tus galletas oreo en una bebida, bebida mezclada con hielos y cubierta con crema batida"   
    },
    {
        id: 5,
        title: "Frappe de coco",
        category: "frappe",
        precio_mediano: 0,
        precio_grande: 80,
        img: "./Frappe_coco.jpg",
        descripción: "Qué tal el rico sabor de tus galletas oreo en una bebida, bebida mezclada con hielos y cubierta con crema batida"   
    },
    {
        id: 6,
        title: "English Muffin",
        category: "desayuno",
        precio_mediano: 0,
        precio_grande: 150,
        img: "./Desayuno_EnglishMuffin.jpg",
        descripción: "Con jamón serrano, queso de cabra, aguacate, mix de lechugas aderezado con lactosa de ajo, acompañado de papas gajo"   
    },
    {
        id: 7,
        title: "Marago Mix",
        category: "desayuno",
        precio_mediano: 0,
        precio_grande: 120,
        img: "./Desayuno_MaragoMix.jpg",
        descripción: "Dos huevos estrellados con nuestra deliciosa salsa de chaya y queso de bola con jamón, frijol y un exquisito pancake de chispas de chocolate. Lo mejor en un solo plato"   
    }, 
    {
        id: 8,
        title: "Sandwich Elefante",
        category: "desayuno",
        precio_mediano: 0,
        precio_grande: 130,
        img: "./Desayuno_SandwichElefante.jpg",
        descripción: "Crujientes tiras de tocino, torta de huevo con champiñones, jamon de pavo, queso panela asado, aguacate, lechuga y tomate. Servido con papas gajo"  
    },
    {
        id: 9,
        title: "Pastel Red Velvet",
        category: "postres",
        precio_mediano: 0,
        precio_grande: 270,
        img: "./Postre_PastelRedVelvet.jpg",
        descripción: "Crujientes tiras de tocino, torta de huevo con champiñones, jamon de pavo, queso panela asado, aguacate, lechuga y tomate. Servido con papas gajo"  
    }
]

//display categories
const btnContainer = document.querySelector(".btn-container");
const itemContainer = document.querySelector(".item-container");

window.addEventListener("DOMContentLoaded", () => {
  let result = menuItems.map((item) => item.category)
  console.log(result);
  const categories = ["todo", ...new Set(result)];
  console.log(categories);
  categories.forEach((category) => {
      const element = document.createElement("button");
      element.innerText = capitalize(category)
      element.classList.add("category");
      element.setAttribute("id", category)
      btnContainer.appendChild(element) 
  })
  displayMenuItems(menuItems)
})

//display item
btnContainer.addEventListener("click", (e) => {
    id = e.target.id
    let result = []
    menuItems.forEach((item) => {
        if(id === item.category) {
            result.push(item)
        } if (id === "todo") {
            result = menuItems
        }  
    })  
    displayMenuItems(result)  
})



//FUNCTIONS
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayMenuItems(result) {
    let displayMenu = result.map((item) => {
        if (item.precio_mediano === 0) {
          return `<div class="menu-item">
          <img class="item-img" src="${item.img}" alt="${item.title}">
          <div class="item-info">
            <p class="item-title">${item.title}</p>
            <p class="item-description">${item.descripción}</p>
            <p>Precio: $${item.precio_grande}</p>
          </div>
        </div>`
        } else {
            return `<div class="menu-item">
            <img class="item-img" src="${item.img}" alt="${item.title}">
            <div class="item-info">
              <p class="item-title">${item.title}</p>
              <p class="item-description">${item.descripción}</p>
              <p>
                Precio mediano: $${item.precio_mediano} </br>
                Precio grande: $${item.precio_grande}
              </p>
            </div>
          </div>` 
        }
    })
    console.log(displayMenu);

    displayMenu = displayMenu.join ("")
    console.log(displayMenu);
    itemContainer.innerHTML = displayMenu
}



