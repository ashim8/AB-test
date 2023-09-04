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
      let KIC_98 = {
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
          document.querySelector('body').classList.add('kic_96');
          let header = document.querySelector(".b-minicart-inner .b-minicart-header");
          
          let content = 
          `<div class="cart-item-details">
              <div class="inner-content">
                  <img src="https://i.ibb.co/C2Wfp6M/Icon.png" alt="icon">
                  <p>Die Artikel in deinem Warenkorb sind sehr gefragt & können daher nicht reserviert werden.<p>
              </div>
          </div>`
          
          let targetNode1 = document.querySelector(".b-minicart-inner");
          
          let targetNode2 = document.querySelector('body');
          let observer = new MutationObserver(function(){
              
              if(document.querySelector('.b-minicart-header') && !document.querySelector('.b-minicart-inner .cart-item-details')){
                  document.querySelector('.b-minicart-header').insertAdjacentHTML('afterend', content);
              }
              observer.observe(targetNode1, { attributes: true, childList: true });
               });
  
          document.querySelectorAll('[data-ref="cartContainer"]')[0].classList.add("cartContents");
          let observer2 = new MutationObserver(function(){
              if(document.querySelector('.b-header_cart') && !document.querySelector('.b-header_cart + .cart-item-details')){
                  
                document.querySelector('.b-header_cart').insertAdjacentHTML('afterend', content);
                  }

          });
          
          observer.observe(targetNode1, { attributes: true, childList: true });
          if(window.location.href.includes('cart')){
              observer2.observe(targetNode2, { attributes: true, childList: true });
          }
  
        },
      };
      KIC_98.init();
    }
  });
  
  
<style>
    .kic_96 .cart-item-details{
        background: #F0F0F0;
        padding: 8px 10px;
        border-radius: 5px;
        display: inline-block;
    }
    .kic_96 .cart-item-details .inner-content{
        display: flex;
    }
    .kic_96 .cart-item-details .inner-content img{
        margin-right:5px;
        width: 14px;
        height: 14px;
    }
    .kic_96 .cartContents .cart-item-details{
        margin-left: 50px;
    }

    @media screen and (max-width: 767px){
    .kic_96 .cartContents .cart-item-details{
        margin-left: 15px;
        margin-right: 15px;
    }
    }
</style>



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
    let KIC_98 = {
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
        document.querySelector('body').classList.add('kic_96');
		let header = document.querySelector(".b-minicart-inner .b-minicart-header");
		
		let content = 
		`<div class="cart-item-details">
			<div class="inner-content">
				<img src="https://i.ibb.co/C2Wfp6M/Icon.png" alt="icon">
				<p>Die Artikel in deinem Warenkorb sind sehr gefragt & können daher nicht reserviert werden.<p>
			</div>
		</div>`
		
		let targetNode1 = document.querySelector(".b-minicart-inner");
		
		let targetNode2 = document.querySelector('body');
		// document.querySelector(div[data-ref="cartContainer"]).classList.add("abc");
		let observer = new MutationObserver(function(){
			// observer.disconnect();
			console.log("aaaa");
		    if(document.querySelector('.b-minicart-header') && !document.querySelector('.b-minicart-inner .cart-item-details')){
		        document.querySelector('.b-minicart-header').insertAdjacentHTML('afterend', content);
		    }
		    observer.observe(targetNode1, { attributes: true, childList: true });
			 });

		document.querySelectorAll('[data-ref="cartContainer"]')[0].classList.add("cartContents");
		let observer2 = new MutationObserver(function(){
			if(document.querySelector('.b-header_cart') && !document.querySelector('.b-header_cart + .cart-item-details')){
				
		      document.querySelector('.b-header_cart').insertAdjacentHTML('afterend', content);
		    	}
		    	 //observer2.observe(targetNode2, { attributes: true, childList: true });
		});
		
		
		
		observer.observe(targetNode1, { attributes: true, childList: true });
		if(window.location.href.includes('cart')){
			observer2.observe(targetNode2, { attributes: true, childList: true });
		}

      },
    };
    KIC_98.init();
  }
});

.kic_96 .cart-item-details{
	background: #F0F0F0;
	padding: 8px 10px;
	border-radius: 5px;
	display: inline-block;
}
.kic_96 .cart-item-details .inner-content{
	display: flex;
}
.kic_96 .cart-item-details .inner-content img{
	margin-right:5px;
	width: 14px;
    height: 14px;
}
.kic_96 .cartContents .cart-item-details{
	margin-left: 50px;
}

@media screen and (max-width: 767px){
  .kic_96 .cartContents .cart-item-details{
	margin-left: 15px;
	margin-right: 15px;
}
}