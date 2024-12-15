const templateCategories = document.getElementById('categories-menu');

templateCategories.innerHTML = `
    <div class="categories-menu">
          <ul>
            <li>
              <a href="#">
                <div><i class="fa-solid fa-mobile-screen-button"></i></div>
                <div>Phones</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div><i class="fa-solid fa-desktop"></i></div>
                <div>Computers</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div><i class="fa-regular fa-clock"></i></div>
                <div>Smartwatches</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div><i class="fa-solid fa-camera"></i></div>
                <div>Camera</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div><i class="fa-solid fa-headphones"></i></div>
                <div>HeadPhones</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div><i class="fa-solid fa-gamepad"></i></div>
                <div>Gaming</div>
              </a>
            </li>
          </ul>
        </div>
`