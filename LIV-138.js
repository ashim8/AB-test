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
  waitForElem("body", (element) => {
    if (element) {
      let LIV_138 = {
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
          document.querySelector('body').classList.add('LIV_138');
          // let price = document.querySelectorAll('.LIV_138 .ProductItem__PriceList span')
          let ProductItem_PriceList = document.querySelectorAll('.LIV_138 .ProductItem__PriceList span');
          for (let i = 0; i < ProductItem_PriceList.length; i++) {
              console.log("loading............");
              let price1 = document.querySelectorAll('.LIV_138 #productID_2226099978351');
              let price2 = document.querySelectorAll('.LIV_138 #productID_6867031621781');
              let price3 = document.querySelectorAll('.LIV_138 #productID_3927478239343');
              if(price1[i]){
                  console.log("product_price1");
                  let price1_txt =  parseFloat(price1[i].textContent);
                  let final_price1 = (price1_txt/3).toFixed(2);
                  price1[i].innerHTML += `<span class="per_price">(${final_price1}€/Tag)</span`;
              }
              if(price2[i]){
                  let price2_txt =  parseFloat(price2[i].textContent);
                  let final_price2 = (price2_txt/5).toFixed(2);
                  price2[i].innerHTML += `<span class="per_price">(${final_price2}€/Tag)</span`
              }
              if(price3[i]){
                  let price3_txt =  parseFloat(price3[i].textContent);
                  let final_price3 = (price3_txt/5).toFixed(2);
                  price3[i].innerHTML += `<span class="per_price">(${final_price3}€/Tag)</span`
              }
          }
        },
      };
      LIV_138.init();
    }
  });

<style>
    .LIV_138 .ProductListWrapper .ProductItem__PriceList .ProductItem__Price {
	font-size: 15px;
	font-weight: 400;
	color: #1C1B1B;
}
.LIV_138 .ProductListWrapper .ProductItem__PriceList .ProductItem__Price .per_price{
	color: #515151;
}
</style>