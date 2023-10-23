let cart = []
// initialize the cart
function initializeCart() {
    let myCart;

    if (localStorage.getItem("cart") === null) {
        // there is no cart in localStorage so make a default empty cart [] in json, which they can add items to
        myCart = '[]'
    } else {
        // a cart was found so lets use that instead since it posibly has items they previously added
        myCart = localStorage.getItem("cart")
    }
    cart = JSON.parse(myCart);
}

// register click event listener on .addToCart buttons
function registerAddToCartClickListener() {

    let cartBtnList = document.querySelectorAll(".addToCart");
    for (button of cartBtnList) { // for each button in cartBtnList array
        button.addEventListener("click", (event) => {// add click lister which
            const newItem = {// adds a new cart entry with id,name,price when click
                id: event.target.getAttribute("data-id"),
                name: event.target.getAttribute("data-name"),
                price: event.target.getAttribute("data-price"),
                quantity: 1
            }
            const hasItem = cart.some(item => item.id === newItem.id)
            if (!hasItem) {
                cart.push(newItem)
            }
            else {
                cart = cart.map(item => {
                    if (item.id === newItem.id) {
                        item.quantity += 0
                    }
                    return item
                })
            }

            // then save the cart list in local storage
            getOrUpdateCart(cart)
        })
    }
}


function getOrUpdateCart(newCart = null) {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]')
    if (newCart === null) {
        return cart
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
}

function removeFromCart(index) {
    cart.splice(index, 1);
    getOrUpdateCart(cart)
}

initializeCart()