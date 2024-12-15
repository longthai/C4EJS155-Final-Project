const templateTodaysCarousel = document.getElementById('todays-carousel');

templateTodaysCarousel.innerHTML = `
    <div class="carousel" data-flickity='{ "cellAlign": "left", "contain": true, "pageDots": false }'>
          
          <a class="carousel-cell" href="./productpage.html">
            <div class="item-image">
              <span class="item-discount">-40%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item1.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">HAVIT HV-G92 Gamepad</p>
              <div>
                <span class="item-price">$120</span>
                <span class="item-org-price">$160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(88)</span>
              </div>
            </div>
          </a>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-35%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item2.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">AK-900 Wired Keyboard</p>
              <div>
                <span class="item-price">$960</span>
                <span class="item-org-price">$1160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(75)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-30%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item3.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">IPS LCD Gaming Monitor</p>
              <div>
                <span class="item-price">$370</span>
                <span class="item-org-price">$400</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(99)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-25%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item4.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">S-Series Comfort Chair </p>
              <div>
                <span class="item-price">$375</span>
                <span class="item-org-price">$400</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(99)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-40%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item1.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">HAVIT HV-G92 Gamepad</p>
              <div>
                <span class="item-price">$120</span>
                <span class="item-org-price">$160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(88)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-35%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item2.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">AK-900 Wired Keyboard</p>
              <div>
                <span class="item-price">$960</span>
                <span class="item-org-price">$1160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(75)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-30%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item3.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">IPS LCD Gaming Monitor</p>
              <div>
                <span class="item-price">$370</span>
                <span class="item-org-price">$400</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(99)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span class="item-discount">-25%</span>
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item4.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">S-Series Comfort Chair </p>
              <div>
                <span class="item-price">$375</span>
                <span class="item-org-price">$400</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(99)</span>
              </div>
            </div>
          </div>
        </div>
`