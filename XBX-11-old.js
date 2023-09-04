function waitForElem(
    waitFor,
    callback,
    minElements = 1,
    isVariable = false,
    timer = 10000,
    frequency = 25
  ) {
    let elements = isVariable
      ? window[waitFor]
      : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) ||
    (isVariable && typeof window[waitFor] !== "undefined")
      ? callback(elements)
      : setTimeout(
          () =>
            waitForElem(
              waitFor,
              callback,
              minElements,
              isVariable,
              timer - frequency
            ),
          frequency
        );
  }
  waitForElem(".page-content", (element) => {
    if (element) {
      let XBX_11 = {
        init: function () {
          this.mainCss();
          this.mainJs();
        },
        mainCss: function () {
          var styles = document.createElement("style");
          styles.setAttribute("type", "text/css");
          document.head.appendChild(styles).textContent = ``;
        },
        mainJs: function () {
            
            document.querySelector('body').classList.add("xbx_11");
            const products = [
              {
                id:1,
                name: "Darm Kultar",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/0x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/0x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/0x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/0x4.png",
                quantity_in_grams: 60,
                quantatiy_in_portions: 30,
                gm_or_ml: "gm",
                navigate_link:"https://xbyx.de/products/darm-kultur-probiotikum",
            },
            {	  id:2,
                name: "Kollagen Kick",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/1x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/1x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/1x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/1x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 45,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/kollagen-kick-kollagen-pulver",
            },
            {	
                  id:3,
                name: "Energie",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/2x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/2x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/2x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/2x4.png",
                quantity_in_grams: 500,
                quantatiy_in_portions: 16,
                gm_or_ml: "gm",
                navigate_link:"https://xbyx.de/products/energie-veganes-proteinpulver",
            },
            {		
                  id:4,
                name: "Energie Pur",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/3x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/3x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/3x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/3x4.png",
                quantity_in_grams: 500,
                quantatiy_in_portions: 16,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/energie-pur-proteinpulver-ohne-suessungsmittel",
            },
            {
                  id:5,
                name: "Ganz Gelassen",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/4x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/4x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/4x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/4x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 30,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/ganz-gelassen-ashwagandha-pulver",
            },
            {
                  id:6,
                name: "Peri Balance",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/5x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/5x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/5x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/5x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 45,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/peri-balance",
            },
            {
                  id:7,
                name: "Phyto Power",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/6x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/6x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/6x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/6x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 45,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/phyto-power",
            },
            {	
                  id:8,
                name: "Bauch Gefühl",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/7x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/7x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/7x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/7x4.png",
                quantity_in_grams: 50,
                quantatiy_in_portions: 90,
                gm_or_ml: "ml",
                navigate_link: "https://xbyx.de/products/bauch-gefuehl-bittertropfen",
            },
            {
                  id:9,
                name: "Lass Locker",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/8x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/8x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/8x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/8x4.png",
                quantity_in_grams: 120,
                quantatiy_in_portions: 60,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/lass-locker-magnesium-pulver",
            },
            {
                  id:10,
                name: "Alles Omega",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/9x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/9x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/9x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/9x4.png",
                quantity_in_grams: 50,
                quantatiy_in_portions: 20,
                gm_or_ml: "ml",
                navigate_link: "https://xbyx.de/products/alles-omega-omega-3-oel-vegan",
            },
            {
                  id:11,
                name: "Protein Push",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/10x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/10x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/10x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/10x4.png",
                quantity_in_grams: 500,
                quantatiy_in_portions: 25,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/protein-push-proteinpulver-eiweisspulver",
            },
            {
                  id:12,
                name: "Volle Lust",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/11x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/11x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/11x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/11x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 30,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/volle-lust-maca-pulver",
            },
            {
                  id:13,
                name: "Klar Denken",
                img_one: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/12x1.png",
                img_two: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/12x2.png",
                img_three: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/12x3.png",
                img_four: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/xbyx/XBX-11/12x4.png",
                quantity_in_grams: 90,
                quantatiy_in_portions: 30,
                gm_or_ml: "gm",
                navigate_link: "https://xbyx.de/products/klar-denken-ginseng-pulver",
            }
          ]
          const product_block = document.querySelector('.product-block.product-block--space .product-block');
          const products_data =
           `${products.map(product =>{
              if(window.location.href == product.navigate_link){
                  return `<div class="product_details_wrapper">
                      <div>
                          <p>Menge:</p>
                      </div>
                      <ul class="product_details">
                            <li class="product product_one active">
                                  <span>1x</span>
                                  <img src="${product.img_one}">
                                  <div class="percentage first_product"></div>
                            </li>
                            <li class="product product_two">
                                  <span>2x</span>
                                  <img src="${product.img_two}">
                                  <div class="percentage">Spare 5%</div>
                            </li>
                            <li class="product product_three">
                                  <span>3x</span>
                                  <img src="${product.img_three}">
                                  <div class="percentage">Spare 10%</div>
                            </li>
                            <li class="product product_four">
                                  <span>4x</span>
                                  <img src="${product.img_four}">
                                  <div class="percentage">Spare 15%</div>
                            </li>
                      </ul>
                      <div class="ammounts">
                          <span class="item1">${product.quantity_in_grams} </span> <span class="item2">${product.gm_or_ml}
                          </span> | <span class="item3">${product.quantatiy_in_portions}</span>Portionen
                      </div>
              </div>`;
              }
           }).join('')}`
         product_block.insertAdjacentHTML('afterbegin',products_data);
         const quantity = document.querySelector('.btn-quantity__wrapper .product__quantity .js-qty__wrapper .js-qty__num')
          let productQuantity = document.querySelector('.js-qty__num[name="quantity"]').value;
          let item1 =	document.querySelector('.item1').innerText;
          let item3 =	document.querySelector('.item3').innerText;
          
          const multiplyInitial = function productMultiply(item,item2){
              item = parseInt(item)*1;
              item2 = parseInt(item2)*1;
              document.querySelector('.item1').innerText = item;
              document.querySelector('.item3').innerText = item2;
          }
          const multiplyByTwo = function productMultiply(item,item2){
              item = parseInt(item)*2;
              item2 = parseInt(item2)*2;
              document.querySelector('.item1').innerText = item;
              document.querySelector('.item3').innerText = item2;
          }
          const multiplyByThree = function productMultiply(item,item2){
              item = parseInt(item)*3;
              item2 = parseInt(item2)*3;
              document.querySelector('.item1').innerText = item;
              document.querySelector('.item3').innerText = item2;
          }
          const multiplyByFour = function productMultiply(item,item2){
              item = parseInt(item)*4;
              item2 = parseInt(item2)*4;
              document.querySelector('.item1').innerText = item;
              document.querySelector('.item3').innerText = item2;
          }
          
          document.querySelectorAll('li.product').forEach(elm =>{
              elm.addEventListener("click", (event) => {
                  if(elm.classList.contains('product_one')){
                      document.querySelector('.js-qty__num[name="quantity"]').value = 1;
                      multiplyInitial(item1,item3);
                  }
                  else if(elm.classList.contains('product_two')){
                      document.querySelector('.js-qty__num[name="quantity"]').value = 2;
                      multiplyByTwo(item1,item3);
                  }
                  else if(elm.classList.contains('product_three')){
                      document.querySelector('.js-qty__num[name="quantity"]').value = 3;
                      multiplyByThree(item1,item3)
                  }
                  else if(elm.classList.contains('product_four')){
                      document.querySelector('.js-qty__num[name="quantity"]').value = 4;
                      multiplyByFour(item1,item3)
                  }
                  
              document.querySelector('.product_details').addEventListener("click", (e) => {
                  document.querySelectorAll(".product").forEach(item=>{
                      item.classList.remove("active")
                  })
                      e.target.closest('.product').classList.add('active');
                
              });
              });
          });
          
        },
      };
      XBX_11.init();
    }
  });
  