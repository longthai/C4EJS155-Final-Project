const templateProductList = document.getElementById('product-list');

templateProductList.innerHTML = `
    <div class="product-list-container">
        <div class="product-list-item">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item10.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">Breed Dry Dog Food</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$100</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(35)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product-list-item">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item11.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">CANON EOS DSLR Camera</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$360</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(95)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="product-list-item">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item12.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">ASUS FHD Gaming Laptop</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$700</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(325)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product-list-item">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item17.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">Curology Product Set </p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$500</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(145)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="product-list-item pl-item-row">
          <div class="item-image">
            <span class="item-new">New</span>
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item13.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">Kids Electric Car</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$960</span>
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
            <ul class="item-picker">
              <li style="background-color: #FB1314; border: 2px solid #000;"><a href=""></a></li>
              <li style="background-color: #DB4444;"><a href=""></a></li>
            </ul>
          </div>
        </div>

        <div class="product-list-item pl-item-row">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item14.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">Jr. Zoom Soccer Cleats</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$1160</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(35)</span>
              </div>
            </div>
            <ul class="item-picker">
              <li style="background-color: #EEFF61; border: 2px solid #000;"><a href=""></a></li>
              <li style="background-color: #DB4444;"><a href=""></a></li>
            </ul>
          </div>

        </div>
        <div class="product-list-item pl-item-row">
          <div class="item-image">
            <span class="item-new">New</span>
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item15.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">GP11 Shooter USB Gamepad</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$660</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(55)</span>
              </div>
            </div>
            <ul class="item-picker">
              <li style="background-color: #000; border: 2px solid #000;"><a href=""></a></li>
              <li style="background-color: #DB4444;"><a href=""></a></li>
            </ul>
          </div>
        </div>

        <div class="product-list-item pl-item-row">
          <div class="item-image">
            <span><i class="fa-regular fa-heart item-like"></i></span>
            <span><i class="fa-regular fa-eye item-watch"></i></span>
            <img src="./images/homepage/item16.png" alt="">
          </div>
          <div class="item-info">
            <p class="item-name">Quilted Satin Jacket</p>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <span class="item-price">$660</span>
              </div>
              <div>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-star"><i class="fa-solid fa-star"></i></span>
                <span class="item-vote">(55)</span>
              </div>
            </div>
            <ul class="item-picker">
              <li style="background-color: #184A48; border: 2px solid #000;"><a href=""></a></li>
              <li style="background-color: #DB4444;"><a href=""></a></li>
            </ul>
          </div>
        </div>
      </div>
`