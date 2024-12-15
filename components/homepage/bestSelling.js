
const templateBestSelling = document.getElementById('bestselling-carousel');

templateBestSelling.innerHTML = `
    <div class="carousel" data-flickity='{ "cellAlign": "left", "contain": true, "pageDots": false }'>
          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item5.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">The north coat</p>
              <div>
                <span class="item-price">$260</span>
                <span class="item-org-price">$360</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item6.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">Gucci duffle bag</p>
              <div>
                <span class="item-price">$960</span>
                <span class="item-org-price">$1160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item7.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">RGB liquid CPU Cooler</p>
              <div>
                <span class="item-price">$160</span>
                <span class="item-org-price">$170</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item8.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">Small BookSelf</p>
              <div>
                <span class="item-price">$360</span>
                <span class="item-org-price"></span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item5.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">The north coat</p>
              <div>
                <span class="item-price">$260</span>
                <span class="item-org-price">$360</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item6.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">Gucci duffle bag</p>
              <div>
                <span class="item-price">$960</span>
                <span class="item-org-price">$1160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item7.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">RGB liquid CPU Cooler</p>
              <div>
                <span class="item-price">$160</span>
                <span class="item-org-price">$170</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="item-image">
              <span><i class="fa-regular fa-heart item-like"></i></span>
              <span><i class="fa-regular fa-eye item-watch"></i></span>
              <img src="./images/homepage/item8.png" alt="">
            </div>
            <div class="item-info">
              <p class="item-name">Small BookSelf</p>
              <div>
                <span class="item-price">$360</span>
                <span class="item-org-price"></span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(65)</span>
              </div>
            </div>
          </div>
`