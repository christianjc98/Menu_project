const menuItems = [
    {
        id: 1,
        title: "Late frio",
        category: "cafe",
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
    }
]

//display categories
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  let result = menuItems.map((item) => item.category)
  console.log(result);
  const categories = [...new Set(result)];
  console.log(categories);
  categories.forEach((category) => {
      const element = document.createElement("button");
      element.innerText = capitalize(category)
      element.classList.add("category");
      btnContainer.appendChild(element) 
  })

})

//FUNCTIONS
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

