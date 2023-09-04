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
  waitForElem(".facets-container", (element) => {
    if (element) {
      let LUA_131 = {
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
          document.querySelector('body').classList.add("lua_131");
          document.querySelector('.active-facets.active-facets-mobile')
          let toggleColumn = 
              `<div class="contents_wrapper">
                  <p>Ansicht:</p>
                  <div class="col-btn two-column">
                      <input type="radio" name="grid-col" checked data-grid-number="2"/>
                      <div class="grid-img">
                      </div>
                  </div>
                  <div class="col-btn one-column">
                      <input type="radio" name="grid-col" data-grid-number="1"/>
                      <div class="grid-img">
                      </div>
                  </div>
              </div>`
          
          if(window.location.href.includes('collections')){
              document.querySelector('.active-facets.active-facets-mobile').insertAdjacentHTML("beforeend",toggleColumn);
              document.querySelector(".contents_wrapper").addEventListener("click",(e)=>{
              if(e.target.closest('input[data-grid-number="1"]')){
                  document.querySelector('#product-grid.grid').classList.add("product-grid-col");
              }
              else if(e.target.closest('input[data-grid-number="2"]')){
                  document.querySelector('#product-grid.grid').classList.remove("product-grid-col");
              }
          })
          }
        },
      };
      LUA_131.init();
    }
  });
  
<style>
@media only screen and (max-width:749px){
.lua_131 .col-btn{
	width:20px;
	height: 20px;
	position: relative;
}
.lua_131 .col-btn input{
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	z-index: 99;
}
.lua_131 .col-btn .grid-img{
	min-width: 20px;
	min-height: 20px;
	width: 100%;
	height: 100%;
}
.lua_131 .grid-img::before{
  display: block;
	width: 100%;
	height: 100%;	
}
.lua_131 .contents_wrapper{
	display: flex;
    justify-content: center;
    align-items: center;
}
.lua_131 .two-column{
	margin: 0 6px 0 11px;
}
.lua_131 .two-column .grid-img::before{
	content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.2'%3E%3Crect width='9' height='9' fill='%23121212'/%3E%3Crect y='11' width='9' height='9' fill='%23121212'/%3E%3Crect x='11' width='9' height='9' fill='%23121212'/%3E%3Crect x='11' y='11' width='9' height='9' fill='%23121212'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.lua_131 .two-column input:checked + .grid-img::before{
	content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='9' height='9' fill='%23121212'/%3E%3Crect y='11' width='9' height='9' fill='%23121212'/%3E%3Crect x='11' width='9' height='9' fill='%23121212'/%3E%3Crect x='11' y='11' width='9' height='9' fill='%23121212'/%3E%3C/svg%3E%0A");
}
.lua_131 .one-column .grid-img::before {
	content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.2' width='20' height='20' fill='%23121212'/%3E%3C/svg%3E%0A");
}
.lua_131 .one-column input:checked + .grid-img::before{
	content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23121212'/%3E%3C/svg%3E%0A");
}
.lua_131 .product-grid-col{
	flex-direction: column;
}
.lua_131 .product-grid-col .grid__item{
	width: 100%;
	max-width: 100%;
}
.lua_131 .active-facets {
    margin: 0 0rem -1.2rem;
    justify-content: space-between;
    align-items: center;
}
.lua_131 .active-facets__button-wrapper{
    margin-left: 0rem;
    padding-left: 0rem;
}

}
</style>