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
            {
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
           `${products.map(product=>{
              if(window.location.href == product.navigate_link){
                  return `<div class="product_details_wrapper">
                      <div>
                          <p>Menge:</p>
                      </div>
                      <ul class="product_details">
                              <li class="product active" data-att="1">
                                    <span>1x</span>
                                    <img src="${product.img_one}">
                                    <div class="percentage first_product"></div>
                              </li>
                              <li class="product" data-att="2">
                                    <span>2x</span>
                                    <img src="${product.img_two}">
                                    <div class="percentage">Spare 5%</div>
                              </li>
                              <li class="product" data-att="3">
                                    <span>3x</span>
                                    <img src="${product.img_three}">
                                    <div class="percentage">Spare 10%</div>
                              </li>
                              <li class="product" data-att="4">
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

          const content_hide = document.querySelector('.product-block.product-single__description .rte p:nth-of-type(2) span:last-child').innerHTML;
          if(content_hide){
          const [start1, end1] = content_hide.split('<br>');
          document.querySelector('.product-block.product-single__description .rte p:nth-of-type(2) span:last-child').innerHTML =  start1;
          }
          
          const item1 =	document.querySelector('.item1').textContent;
          const item3 =	document.querySelector('.item3').textContent;
          
          const multiplyInitial = function productMultiply(item,item2,index){
              item = parseInt(item)*index;
              item2 = parseInt(item2)*index;
              document.querySelector('.item1').textContent = item;
              document.querySelector('.item3').textContent = item2;
          }
          
          const expire = document.querySelector('.expire-date-text__wrapper').textContent;
          const mainText = expire.split(':').pop();
          const [start, end] = mainText.split(',');
          const bold = start.replace('Produkt ', '');
          const expirediv = document.querySelector('.expire-date-text__wrapper')
          injectExpireText = `<div class="expire_text hidden">Produkt <b>${bold}</b> ${end ? end : '.'} </div>`;
          document.querySelector('.ammounts').insertAdjacentHTML('afterend',injectExpireText);
          
          document.querySelectorAll('li.product').forEach( elm =>{
              elm.addEventListener("click", (event) => {
                      const existing_value = document.querySelector('.js-qty__num[name="quantity"]').value;
                      multiplyInitial(item1,item3,elm.dataset.att);
                      
                      let dataset_val = parseInt(elm.dataset.att);
                      let existing_val = parseInt(existing_value);
                      let operation;
                      if(existing_val > dataset_val){
                        operation = document.querySelector('#MainContent .product-section  .js-qty__adjust.js-qty__adjust--minus');
                      }
                      else if(existing_val < dataset_val){
                        operation = document.querySelector('#MainContent .product-section .js-qty__adjust.js-qty__adjust--plus');
                      }
                      const calculatedVal =  Math.abs(dataset_val - existing_val);
                      for(let i = 0; i < calculatedVal; i++){
                          operation.click();
                      }
                      
                      if(expirediv.classList.contains('hidden')){
                          document.querySelector('.expire_text').classList.add('hidden')
                      }
                      else{
                          document.querySelector('.expire_text').classList.remove('hidden')
                      }
                  document.querySelectorAll(".product").forEach(item => {
                      item.classList.remove("active");
                  })
                  event.target.closest('.product').classList.add('active');
              });
          });
          
        },
      };
      
      XBX_11.init();
    }
});
  
  
<style>
.xbx_11 .product_details_wrapper .first_product{
	display: none;
}
.xbx_11 .product_details{
	display: flex;
	flex-wrap: wrap;
	margin: 0;
}
.xbx_11 .product{
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  max-width: 135px;
  background: #f1f5f1;
  border: 2px solid #f1f5f1;
  margin: 0 8px 8px 0;
  padding: 9px 20px 10px 26px;
  position: relative;
}
.xbx_11 .product.active{
	border: 2px solid #333;
}
.xbx_11 .percentage.first_product{
	display: none;
}
.xbx_11 .product .percentage{
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -13px;
  width: max-content;
  padding: 0 11px 3px;
  border-radius: 900px;
  background: #417c78;
  color: #fff;
  text-align: center;
  font-style: normal;
  line-height: normal;
  font-size: 16px;
  font-weight: 400;
}
.xbx_11 .product span{
	color: #333;
  font-style: normal;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
}
.xbx_11 .product__quantity .js-qty__wrapper, .product-block .discount-box__wrapper{
	display: none;
}
.xbx_11 .btn-quantity__wrapper {
  display: unset;
}
.xbx_11 .ammounts{
	color: #333;
	font-family: Arsenal;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 27px;
	padding: 16px 0 0;
}
.xbx_11 .item3{
	padding-right: 4px;
}
.xbx_11 .expire_text{
	color: #333;
	font-family: Arsenal;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 27px;
	padding-top: 5px;
}
.hidden{
	display: none !important;
}
.xbx_11 .expire-date-text__wrapper{
	display: none;
}
.xbx_11 .product-block .product-single__form{
	margin-top: 14px;
}

</style>