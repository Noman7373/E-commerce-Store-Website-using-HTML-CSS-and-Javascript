import { addToCart } from "./Addtocart";
// import { increamentDecreament } from "./IncreamentDecreament";
import { homeQuantityToggle } from "./quantityToggle";


const ProductContainer = document.querySelector("#productContainer");

const productTemplate = document.querySelector("#productTemplate").content;





export const showProductContainer = (products) => {
    if(!products) {
        return false;
    };
    products.forEach((currProd) => {
        const{id, name, category, description, image, price, stock} = currProd;


        const productsClone = document.importNode(productTemplate, true);

        productsClone.querySelector("#cardValue").setAttribute('id', `card${id}`)


        productsClone.querySelector(".productName").textContent = name;
        productsClone.querySelector(".productImage").src = image; 
        productsClone.querySelector(".productImage").alt = name; 
        productsClone.querySelector(".productPrice").textContent = `PKR ${price}`;
        productsClone.querySelector(".productActualPrice").textContent = `PKR ${price * 4}`;
        productsClone.querySelector(".productStock").textContent = stock;
        productsClone.querySelector(".category").textContent = category;
        productsClone.querySelector(".productDescription").textContent = description;


        
        // productsClone.querySelector(".stockElement").addEventListener('click', (event) => {
        //     increamentDecreament(event, id, price, stock);
        // });

        productsClone.querySelector(".stockElement").addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        });

        productsClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });
        
        ProductContainer.appendChild(productsClone)
    });
    
};