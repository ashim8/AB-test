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
  waitForElem(".privy-popup-content.privy-foreground-element", (element) => {
    if (element) {
      let PH_6 = {
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
          document.querySelector('body').classList.add('ph_6');
          
          function addClass(){
              document.querySelector('[data-element-id]').parentNode.classList.add("get_free_shipping");
          }
          
          if(!document.querySelector('[data-element-id] img')){
              addClass();
          }
          
          document.querySelector('.page-width.cursor_pointer').addEventListener('click',event=>{
              if(!document.querySelector('[data-element-id] img')){
                  addClass();
              }
          })
  
        },
      };
      PH_6.init();
    }
  });
  
  