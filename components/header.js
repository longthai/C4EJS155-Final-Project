const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="./styles/header.css">

    <header>
        <div class="topnav">
                <div></div>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">Shop Now</a></p>
                <select class="dropdown-lang">
                    <option value="en" selected>English</option>
                    <option value="vn">Vietnamese</option>
                </select>
        </div>

        <div class="navbar">
            <div class="navbar-logo">Exclusive</div>

            <div class="navbar-menu">
                <ul>
                    <li><a class="active" href="./index.html">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="./signup.html">Sign Up</a></li>
                </ul>
            </div>

            <div class="navbar-search">
                <div class = "navbar-searchbar">
                    <input type="text" placeholder="Search...">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <i class="fa-regular fa-heart"></i>
                <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                <div id="u-dropdown-btn" class="dropdown"> 
                    <i class="fa-solid fa-user" id="userCheck" style = "display:none"></i>
                    <div class="dropdown-content" id="dropdown-content">
                        <a href="#">My Account</a> 
                        <a href="#">Order</a> 
                        <a href="#">Cancellation</a>
                        <a href="#">Review</a>
                        <a href="#" id="u-logout">Log Out</a> 
                    </div>
                </div>
                <i class="fa-solid fa-bars" id='hidden-menu'></i>
            </div>
        </div>
    </header>
`

document.body.appendChild(template.content)

//Check user login to display profile icon
window.addEventListener('load', () => {
    const userProfile = document.getElementById('userCheck');
    if(localStorage.getItem('userAuthentication') === 'true') {
        userProfile.style.display = 'inline';
        //localStorage.removeItem('userAuthentication')
    }
});


//Clear userAuthentication when logout
document.getElementById('u-logout').addEventListener('click', () => {
    localStorage.removeItem('userAuthentication');
    window.location.href = "index.html"
})

//Dropdown show/hide
document.getElementById('u-dropdown-btn').addEventListener('click', () => {
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'; 
    } else {
        dropdownContent.style.display = 'block'
    }
})

