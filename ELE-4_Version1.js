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
      let ELE_4 = {
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
          document.querySelector('body').classList.add('ELE_4');
          let main = document.querySelector("#main");
          let categories = [
              {
                  category_url: "https://www.elevateclo.com/collections/new-collection",
                  image_url: "https://i.ibb.co/jwCSstR/New-Products.png",
                  category_name: "New Product",
              },
              {
                  category_url: "https://www.elevateclo.com/collections/t-shirt",
                  image_url: "https://i.ibb.co/bsTFzH8/T-Shirt.png",
                  category_name: "T-Shirt",
              },
              {
                  category_url: "https://www.elevateclo.com/collections/zipper",
                  image_url: "https://i.ibb.co/hVXTxSs/Zipper.png",
                  category_name: "Zipper",
              },
              {
                  category_url: "https://www.elevateclo.com/collections/hoodies",
                  image_url: "https://i.ibb.co/d6m51Ds/Hoodies.png",
                  category_name: "Hoodies",
              },
              {
                  category_url: "https://www.elevateclo.com/collections",
                  image_url: "https://i.ibb.co/ggb4SRx/See-All.png",
                  category_name: "See All",
                  
              },
              {
                  category_url: "https://www.elevateclo.com/collections/bottoms",
                  image_url: "https://i.ibb.co/nsfJHQ0/Bottoms.png",
                  category_name: "Bottoms",
              },
              {
                  category_url: "https://www.elevateclo.com/collections/basics",
                  image_url: "https://i.ibb.co/SPq9nW7/Basics.png",
                  category_name: "Basics",
              },
              {
                  category_url: "https://www.elevateclo.com/collections/accessoires",
                  image_url: "https://i.ibb.co/N6cTTpr/Accessoires.png",
                  category_name: "Accessoires",
              },
              {
                  category_url: "https://www.elevateclo.com/products/black-nackenkissen",
                  image_url: "https://i.ibb.co/CV7CsG0/Nackenkissen.png",
                  category_name: "Nackenkissen",
              },
          ]
          
          let categories_data = 
            `<div class="categories_wrapper">
              <ul>
                ${categories.map(category => 
                  `<li>
                    <a href="${category.category_url}">
                      <div><img src="${category.image_url}" alt="${category.category_name}"></div>
                      <p>${category.category_name}</p>
                    </a>
                  </li>`
                ).join('')}
              </ul>
            </div>`;
            
          main.insertAdjacentHTML('afterbegin', categories_data);
          
          const anchor = document.querySelectorAll('.categories_wrapper ul li a');
          const collection_title =  document.querySelector('.heading.h1').textContent;
          const all_collection = "alle kollektionen";
          
          anchor.forEach((element)=>{
          if(collection_title.toLowerCase().includes(element.querySelector('p').textContent.toLowerCase())  ||
          collection_title.toLowerCase() === all_collection && element.querySelector('p').textContent.toLowerCase() === "see all"){
                  element.querySelector('div').classList.add('active');
                  const currentList = element.querySelector('div').closest("li");
                  const rect = currentList.getBoundingClientRect();
                  const x = rect.x - 40;
                  document.querySelector('.categories_wrapper ul').scrollLeft += x;
              }
          })
        },
      };
      ELE_4.init();
    }
});

<style>
.ELE_4 .categories_wrapper{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0 30px 0;
}
.ELE_4 .categories_wrapper ul{
	display: inline-flex;
    overflow: scroll;
    padding-right: 45px;
}
.ELE_4 .categories_wrapper ul li {
    list-style: none;
    text-align: center;
}
.ELE_4 .categories_wrapper ul li a{
	display: flex;
	flex-direction: column;
}
.ELE_4 .categories_wrapper ul li div{
	width: 90px;
	height: 90px;
	display: inline-block;
	border: 2px solid #DADADA;
    border-radius: 50px;
    padding: 4px;
}
.ELE_4 .categories_wrapper ul li:not(:last-child){
	padding-right: 12px;
}
.ELE_4 .categories_wrapper ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.ELE_4 .categories_wrapper ul::-webkit-scrollbar { 
    display: none;
}

.ELE_4 .categories_wrapper ul li div.active{
    border: 2px solid #000;
    border-radius: 50px;
}

@media screen and (max-width: 999px) {
	.ELE_4 .categories_wrapper ul {
    	padding-left: 20px;
	}
}
</style>