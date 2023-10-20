let cartBtnList = document.querySelectorAll(".addToCart");
let cart = []
if (localStorage.getItem("cart") === null) {
    //...
} else {
    let myCart = localStorage.getItem("cart");
    cart = JSON.parse(myCart);

}


for(let i =0; i< cartBtnList.length; i++){
    cartBtnList[i].addEventListener("click",()=>{

    

        cart.push({
            id: cartBtnList[i].getAttribute("data-id"),
            name: cartBtnList[i].getAttribute("data-name"),
            price: cartBtnList[i].getAttribute("data-price"),
        })

       
        localStorage.setItem("cart", JSON.stringify(cart));
    })
}