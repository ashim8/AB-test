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
  
  waitForElem(".PageContainer", (element) => {
    if (element) {
      let LIV_172 = {
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
            document.querySelector('body').classList.add('liv-172');
            const changeContent = (event) => {
                let content = event.textContent;
                let changeContent = content.replace('Klassische','Natürliche');
                event.textContent = changeContent;
            }
            
          document.querySelectorAll('.featured-collections-bs .TabPanel .ProductListWrapper .ProductItem__Wrapper .ProductItem__Info .ProductItem__Title a').forEach(event=>{
              changeContent(event)
          })
          document.querySelectorAll('.liv-172 .Faq__Question h3').forEach(event=>{
              if(event.textContent.includes('klassische')){
                  let textChange = event.innerHTML.replace('klassische','Natürliche');
                  event.innerHTML = textChange;
              }
          })
          
          document.querySelectorAll('.ProductItem .ProductItem__Wrapper .ProductItem__Info .ProductItem__Title > a').forEach(event=>{
              if(event.textContent.includes('Klassische')){
                  let textChange = event.innerHTML.replace('Klassische','Natürliche');
                  event.innerHTML = textChange;
              }
          })
          
          if(document.querySelector(".review-badge")){
              document.querySelectorAll(".review-badge").forEach(event=>{
                  event.addEventListener('click',()=>{
                  if(document.querySelector("#reviews_container")){
                      setTimeout(() => {
                          document.querySelectorAll("#reviews_container .item__inner .R-TextHeading.R-TextHeading--xxs.u-textLeft--all").forEach(event=>{
                            if(event.textContent.includes('Klassische')){
                                let textChange = event.innerHTML.replace('Klassische','Natürliche');
                                event.innerHTML = textChange;
                            }
                          })
                      }, "1500");
                  }
                })
              })
          }
          
          if((window.location.href.includes('livefresh-saftkur-3-tage')) || (window.location.href.includes('klassische-saftkur-5-tage')) || (window.location.href.includes('livefresh-wellness-saftkur-7-tage')) ){
              if(window.location.href.includes('livefresh-saftkur-3-tage')){
                  document.querySelector('body').classList.add('livefresh-saftkur-3-tage');
              }
              else{
                  document.querySelector('body').classList.remove('livefresh-saftkur-3-tage');
              }
              if(window.location.href.includes('klassische-saftkur-5-tage')){
                  document.querySelector('body').classList.add('klassische-saftkur-5-tage');
              }
              else{
                  document.querySelector('body').classList.remove('klassische-saftkur-5-tage');
              }
              if(window.location.href.includes('livefresh-wellness-saftkur-7-tage')){
                  document.querySelector('body').classList.add('livefresh-wellness-saftkur-7-tage');
              }
              else{
                  document.querySelector('body').classList.remove('livefresh-wellness-saftkur-7-tage');
              }
              
              let text = document.querySelector('.ProductMeta__Title.Heading.u-h2.ProductTitle--Highlight').innerHTML.replace('Klassische','Natürliche')
              document.querySelector('.ProductMeta__Title.Heading.u-h2.ProductTitle--Highlight').innerHTML = text;
          }
              
        },
      };
      LIV_172.init();
    }
  });
  

<style>
    #sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="6867031621781"] .CartItem__Title::before,
    #sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="2226099978351"] .CartItem__Title::before,
    #sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="3927478239343"] .CartItem__Title::before {
	content: "Natürliche Saftkur";
    font-size: 14px;
}

.livefresh-saftkur-3-tage .item__review .R-TextHeading.R-TextHeading--xxxs.u-textLeft--all::before{
	content: "Natürliche Saftkur - 3 Tage";
    font-size: .875rem;
}
.klassische-saftkur-5-tage .item__review .R-TextHeading.R-TextHeading--xxxs.u-textLeft--all::before{
	content: "Natürliche Saftkur - 5 Tage";
    font-size: .875rem;
}
.livefresh-wellness-saftkur-7-tage .item__review .R-TextHeading.R-TextHeading--xxs.u-textLeft--all::before{
	content: "Natürliche Saftkur - 7 Tage";
    font-size: .875rem;
}

.item__review .R-TextHeading.R-TextHeading--xxxs.u-textLeft--all, .shopify-block .item__review .R-TextHeading.R-TextHeading--xxs.u-textLeft--all, .ProductMeta__Title.Heading.u-h2.title-sticky_addtocart, #sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="6867031621781"] .CartItem__Title,#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="2226099978351"] .CartItem__Title,#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="3927478239343"] .CartItem__Title,#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a {
	
	font-size: 0;	
}

#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="6867031621781"] .CartItem__Title a,#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="2226099978351"] .CartItem__Title a,#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="3927478239343"] .CartItem__Title a {
	font-size: 14px;
	margin-left: 3px;
}

.liv-172 h5.ProductMeta__Title.Heading.u-h2.title-sticky_addtocart::before {
    content: "Natürliche Saftkur - 3 Tage";
    font-size: 13px;
}

.ProductMeta .ProdutMeta__Title-Wrapper .ProductMeta__Title.Heading.u-h2 a::before{
	content: "Natürliche Saftkur  - 3 Tage";
	font-size: 22px;
}

#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a::before,#shopify-section-predictive-search .Grid .Grid__Cell:nth-child(2) .ProductItem .ProductItem__Title a::before,#shopify-section-predictive-search .Grid .Grid__Cell:nth-child(3) .ProductItem .ProductItem__Title a::before{
	content: "Natürliche Saftkur";
}
#shopify-section-predictive-search .Grid .Grid__Cell:nth-child(1) .ProductItem .ProductItem__Title a::after{
	content: "- 5 Tage";
}
#shopify-section-predictive-search .Grid .Grid__Cell:nth-child(2) .ProductItem .ProductItem__Title a::after{
	content: "- 3 Tage";
}
#shopify-section-predictive-search .Grid .Grid__Cell:nth-child(3) .ProductItem .ProductItem__Title a::after{
	content: "- 7 Tage";
}
#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a::before,#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a::after,#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a .ProductItem__TitleHighlightText{
	
	font-size: 15px;
}

@media screen and (min-width: 641px){
.liv-172 h5.ProductMeta__Title.Heading.u-h2.title-sticky_addtocart::before {
    font-size: 18px;
}
#sidebar-cart .Drawer__Main .Cart__ItemList .CartItemWrapper[data-product-id="6867031621781"] .CartItem__Title{
	font-size: 13;
}
}

@media screen and (max-width: 640px){
	.Search .ProductItem__Title {
    	font-size: 16px;
	}
	#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a::before,#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a::after,#shopify-section-predictive-search .Grid .Grid__Cell .ProductItem .ProductItem__Title a .ProductItem__TitleHighlightText {
		font-size: 16px;
	}
}

</style>