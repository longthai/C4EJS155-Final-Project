//Size choice behavior 
const sizeChoice = document.getElementById('size-choice');

sizeChoice.addEventListener('click', () => {
    if (sizeChoice.style.backgroundColor === "rgb(219, 68, 68)") {
        sizeChoice.style.backgroundColor = "#fff";
        sizeChoice.style.color = "#000"
    } else {
        sizeChoice.style.backgroundColor = "#DB4444";
        sizeChoice.style.color = "#fff"
    }
})

//Directo cart page
const buyBtn = document.getElementById('buy-btn') 


window.onload = () => {
    //Always set counter to 1 when reload
    itemCount.value = 1;
}

buyBtn.addEventListener('click', () => {
    const checkCart = JSON.parse(localStorage.getItem('cartEmpty')) || { itemNum: 0};
    let itemExist = checkCart.itemNum;

    let item = {
        cartStatus: false,
        itemNum: count+itemExist, 
    }

    if (sizeChoice.style.backgroundColor === "rgb(219, 68, 68)") {
        localStorage.setItem('cartEmpty', JSON.stringify(item));
        window.location.href = 'cart.html'
    } else {
        window.alert('Hãy chọn size')
    }
})

//Counting item
const itemInc = document.getElementById('plus-btn');
const itemDec = document.getElementById('minus-btn');
const itemCount = document.getElementById('item-count');
let count = Number(itemCount.value);

itemInc.addEventListener('click', () => {
    if (Number(itemCount.value) >= 0) {
        count++;
        itemCount.value = count;
    }
});

itemDec.addEventListener('click', () => {
    if (Number(itemCount.value) > 0) {
        count--;
        itemCount.value = count;
    }
})

//Display image view 
const imgDisplay = document.querySelectorAll('div.img-display');

imgDisplay.forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('image-right').innerHTML = img.innerHTML;
    })
})
