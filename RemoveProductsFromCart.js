import { getCartProductFromLS } from "./GetcartProduct";
import { updateCartValue } from "./updatecart";
import { updateCartProductTotal } from "./updateCartProductTotal";


export const removeTheCardFromCart = (id) =>{
    let cartProducts = getCartProductFromLS()
    cartProducts = cartProducts.filter((currProd) => currProd.id !== id);

    localStorage.setItem("cartProductLS" , JSON.stringify(cartProducts));

    let removeProduct = document.querySelector(`#card${id}`);
    if(removeProduct) {
        removeProduct.remove();
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();
}