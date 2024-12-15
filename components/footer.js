const templatefooter = document.createElement('template');

templatefooter.innerHTML = `
<link rel="stylesheet" href="./styles/footer.css">
<footer>
        <div class="footer">
            <ul class="footer-subscribe">
                <li><h3>Exculsive</h3></li>
                <li>Subscribe</li>
                <li style="font-size: 14px; font-weight: 400;">Get 10% of your first order</li>
                <li class="footer-subscribe-email">
                    <input type="text" placeholder="Enter email">
                    <i class="fa-regular fa-paper-plane"></i>
                </li>
            </ul>

            <ul class="footer-support">
                <li><h3>Support</h3></li>
                <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
            </ul>

            <ul class="footer-account">
                <li><h3>Account</h3></li>
                <li>My account</li>
                <li>Login /Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>

            <ul class="footer-link">
                <li><h3>Quick Link</h3></li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>

            <div class="footer-download">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div class="footer-download-app">
                    <img src="./images/footer/qrcode.png">
                    <div>
                        <img src="./images/footer/ggplay.png">
                        <img src="./images/footer/appstore.png">
                    </div>
                </div>
                
                <div class="footer-socialmedia">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>

        
        <p class="copyright">© Copyright Rimel 2022. All right reserved</p>
    </footer>
`
document.body.appendChild(templatefooter.content)