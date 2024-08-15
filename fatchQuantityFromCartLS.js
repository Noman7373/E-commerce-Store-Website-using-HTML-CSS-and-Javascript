import { getCartProductFromLS } from "./GetcartProduct"

export const fatchQuantityFromCartLS = (id,price) =>{
    let cartProducts = getCartProductFromLS()

    let existinProduct = cartProducts.find((currElem) => currElem.id === id);
    let quantity = 1;

    if(existinProduct) {
        quantity = existinProduct.quantity;
        price  = existinProduct.price
    }
    return {quantity , price}
}