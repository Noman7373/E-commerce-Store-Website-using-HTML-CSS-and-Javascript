import { getCartProductFromLS } from "./GetcartProduct";

// const templateContainer = document.querySelector("#productTemplate").content;
export const increamentDecreament = (event, id, price, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCartProductFromLS();

  
//   console.log(localCartProducts);
  
  let existingProd = localCartProducts.find((currProd) => currProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  }
//   } else {
//     localStoragePrice = price;
//     price = price;
//   }

  if (event.target.className == "cartIncreament") {
    //   localStoragePrice = price * stock;
      alert("Got")
  }
    // if (quantity < stock) {
//       quantity += 1;

//     } else if (quantity === stock) {
//       quantity = stock;
//     }
//   }

// //   if (event.target.className === "cartDecreament") {
// //     if (quantity > 1) {
// //       quantity -= 1;
// //     }
// //   }

//   localStoragePrice = price * quantity;
//   localStoragePrice = Number(localStoragePrice.toFixed(2))
// //   console.log(productPrice.innerText);
  

//   let updatedCart = { id, quantity, price };

//   updatedCart = localCartProducts.map((currProd) => {
//     return currProd.id === id ? updatedCart : currProd;
//   });

//   localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));


//   productPrice.innerText = localStoragePrice;
  productQuantity.innerText = quantity;
//   console.log(productPrice.innerText);
};
