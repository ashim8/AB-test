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
          
          document.querySelector('body').classList.add("hof_99");
          
          let nevigationLink,breakpoint,splitted;
      //     let injectContent = 
      //     `<a class="${nevigationLink}">
               //<div>${splitted[0]}</div>
      //     	<div>${splitted[1]}</div>
      //     	<div>${splitted[1]}</div>
      //     </a>`
          
          function matchPatttern(){
          document.querySelectorAll('.ProductItem .ProductItem__Wrapper .ProductItem__Info.ProductItem__Info--center h2 a').forEach(event=>{
              let text = event.innerHTML;
              if(text.includes("Ø") && (text.includes("I"))){
                  breakpoint = /\Ø|\I/;
                  splitted = text.split(breakpoint);
                  nevigationLink = event.getAttribute("href");
              }
              event = event.insertAdjacentHTML('afterbegin',`<div>${splitted[0]}</div>
              <div>${splitted[1]}</div>
              <div>${splitted[2]}</div>`);
          });
          
        }
          
        },
      };
      LIV_138.init();
    }
  });

  <style>
    .hof_99 .ProductListWrapper .ProductList .Grid__Cell{
	padding-left: 0;
    }
    .ProductItem__Info{
        text-align: start;
    }
  </style>