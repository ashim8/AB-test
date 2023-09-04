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
  
  
  waitForElem(".PageContainer, .ProductListWrapper", (element) => {
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
            
            var textChange = (event) => {
                const klassischeText = event.innerHTML;
              let[start,end] = klassischeText.split('Klassische');
              start = "Natürliche";
              event.innerHTML = `${start} ${end}`;
            }
            
          
          document.querySelectorAll('.featured-collections-bs .TabPanel .ProductListWrapper .ProductItem__Wrapper .ProductItem__Info .ProductItem__Title a').forEach(event=>{
              textChange(event);
          })
          
          waitForElem(".shopify-block .CarouselWidget-prefix .CarouselWidget__inner .CarouselWidget__list .R-ReviewsList em.R-TextBody",(element)=>{
          document.querySelectorAll('.shopify-block .CarouselWidget-prefix .CarouselWidget__inner .CarouselWidget__list .R-ReviewsList em.R-TextBody').forEach(event => {
              if(event.textContent.includes('Klassische')){
                  textChange(event);
              }
           })
         })
         
      waitForElem(".CartItem__Title.Heading",(element)=>{
        if(document.querySelectorAll('.CartItem__Title.Heading').length){
            document.querySelectorAll('.CartItem__Title.Heading').forEach(event => {
                if(event.textContent.includes('Klassische')){
                  textChange(event);
              }
           })
        } 
      });
      
      
              
        },
      };
      LIV_172.init();
    }
  }, 2);
  