import products from './apiData/products.json';
import { fatchQuantityFromCartLS } from './fatchQuantityFromCartLS.js';
import { getCartProductFromLS } from './GetcartProduct.js';
import { increamentDecreament } from './increamentDecreament.js';
import { removeTheCardFromCart } from './RemoveProductsFromCart.js';
import { updateCartProductTotal } from './updateCartProductTotal.js';


let cartProducts = getCartProductFromLS()

let filterProducts = products.filter((currElem) => {
    return cartProducts.some((currProd) => currProd.id === currElem.id)
});



const cartElement = document.querySelector("#productCartContainer");
const tamplateContainer = document.querySelector("#productCartTemplate").content;



const showCartProducts = () => {
    filterProducts.forEach((currProd) => {
        
        const {id, name, category,  image,  price} = currProd;
        
        const getDataFromLS = fatchQuantityFromCartLS(id, price);


        const cloneProduct = document.importNode(tamplateContainer, true);

        cloneProduct.querySelector("#cardValue").setAttribute('id', `card${id}`)

        cloneProduct.querySelector(".category").textContent = category;
        cloneProduct.querySelector(".productName").textContent = name;
        cloneProduct.querySelector(".productImage").src = image; 
        cloneProduct.querySelector(".productImage").alt = name; 
        cloneProduct.querySelector(".productPrice").textContent = `PKR ${price}`;

        cloneProduct.querySelector(".stockElement").addEventListener('click', (event) => {
            increamentDecreament(event, id, price);
        });

        cloneProduct.querySelector(".productQuantity").textContent = getDataFromLS.quantity;
        cloneProduct.querySelector(".productPrice").textContent =  getDataFromLS.price;

        document.querySelector("#cartValue").innerHTML = 
        `<i class="fa-solid fa-cart-shopping"></i> ${filterProducts.length} </i>`;

        cloneProduct.querySelector(".add-to-cart-button").addEventListener("click", () => {
            removeTheCardFromCart(id);
        });

        cartElement.append(cloneProduct);
    });
};

showCartProducts();

updateCartProductTotal();