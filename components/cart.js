
const itemInc = document.getElementById('plus-btn');
const itemDec = document.getElementById('minus-btn');
const itemCount = document.getElementById('item-count');
const itemClear = document.getElementById('empty-cart');
const cartProduct = document.querySelector('div.cart-product');
const checkCart = JSON.parse(localStorage.getItem('cartEmpty'));
itemCount.value = checkCart.itemNum
let count = Number(itemCount.value);

//Check if cart is empty from local storage
window.onload = () => {
    if (JSON.stringify(checkCart.cartStatus) === 'false') {
        cartProduct.style.display = ""
        priceDisplay()
    }
}

/* Price display */
const priceDisplay = () => {
    let price = 120*Number(itemCount.value);
    const prices = document.querySelectorAll('p.price');
    prices.forEach(priceElement => { 
        if (cartProduct.style.display === 'none') {
            priceElement.innerHTML = "0";
        } else {
            priceElement.innerHTML = `$${price}`;
        }
    })
}
priceDisplay()

/*Quantity increase or decrease */
itemInc.addEventListener('click', () => {
    if (Number(itemCount.value) >= 0) {
        count++;
        itemCount.value = count;
        checkCart.itemNum = count;
        localStorage.setItem('cartEmpty', JSON.stringify(checkCart))
    }
    priceDisplay()
});

itemDec.addEventListener('click', () => {
    if (Number(itemCount.value) > 0) {
        count--;
        itemCount.value = count;
        checkCart.itemNum = count;
        localStorage.setItem('cartEmpty', JSON.stringify(checkCart))
    }
    priceDisplay()
})

//Empty cart 
itemClear.addEventListener('click', () => {
    checkCart.itemNum = 0;
    localStorage.setItem('cartEmpty', JSON.stringify(checkCart))
    cartProduct.style.display = 'none';
    priceDisplay()
})

//Check-out
const checkLogin = JSON.parse(localStorage.getItem('userAuthentication'));
const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
    if (checkLogin == true && checkCart.itemNum > 0) {
        window.alert('Đi đến trang thanh toán')
    } else if (checkCart.itemNum == 0) {
        window.alert('Hãy thêm đồ vào giỏ hàng')
    } else {
        window.location.href = './signup.html'
    }
})
