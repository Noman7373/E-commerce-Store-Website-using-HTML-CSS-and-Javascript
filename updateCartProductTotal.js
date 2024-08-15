import { getCartProductFromLS } from "./GetcartProduct";


export const updateCartProductTotal = () => {
    const totalSum = document.querySelector(".productSubTotal");
    const productFinalTotal = document.querySelector(".productFinalTotal");
    // const productTax = parseInt(document.querySelector(".productTax").innerText);

    let localCartProducts = getCartProductFromLS();
    let initialVal = 0;
    let productTotal = localCartProducts.reduce((accum , currProd) => {
        let productPrice = parseInt(currProd.price) || 0;
        return accum + productPrice
    }, initialVal)
    totalSum.textContent = `PKR ${productTotal}`;
    productFinalTotal.textContent = `PKR ${productTotal + 50}`;
    
    // console.log(typeof productTax);
    
    
}