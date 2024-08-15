import { getCartProductFromLS } from "./GetcartProduct";
import { updateCartValue } from "./updatecart";


getCartProductFromLS();

export const addToCart = (event, id ,stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currElem = document.querySelector(`#card${id}`);

    let quantity = currElem.querySelector(".productQuantity").innerText;
    let price = currElem.querySelector(".productPrice").innerText;

    
    price = price.replace("PKR", '');

    let existingProd = arrLocalStorageProduct.find((currElem) => currElem.id === id);


    if(existingProd && quantity > 1) {
        price = existingProd.price + Number(price * quantity);
        quantity =  existingProd.quantity + Number(quantity);

        let updatedCart = {id, quantity , price};

        updatedCart = arrLocalStorageProduct.map((currProd) => {
            return currProd.id === id ? updatedCart : currProd;
        });

        localStorage.setItem("cartProductLS" , JSON.stringify(updatedCart));

    };
        


    if(existingProd) {
        return false;
    };

    price = Number(price * quantity);
    quantity = Number(quantity);

    let updatedCart = {id, quantity , price};

    arrLocalStorageProduct.push(updatedCart);
    localStorage.setItem("cartProductLS" , JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
}