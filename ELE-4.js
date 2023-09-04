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
  	console.log("enter");
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
				id: 1,
				category_url: "https://www.elevateclo.com/collections/new-collection",
				image_url: "https://i.ibb.co/dQJwQL1/new-product2.png",
				category_name: "New Product",
			},
			{
				id: 2,
				category_url: "https://www.elevateclo.com/collections/t-shirt",
				image_url: "https://i.ibb.co/JxNRL4v/t-shirt.png",
				category_name: "T-Shirt",
			},
			{
				id: 3,
				category_url: "https://www.elevateclo.com/collections/zipper",
				image_url: "https://i.ibb.co/K5DP5FN/zipper.png",
				category_name: "Zipper",
			},
			{
				id: 4,
				category_url: "https://www.elevateclo.com/collections/hoodies",
				image_url: "https://i.ibb.co/tbhdJ3R/hoodies.png",
				category_name: "Hoodies",
			},
			{
				id: 5,
				category_url: "https://www.elevateclo.com/collections",
				image_url: "https://i.ibb.co/v3LV8yf/see-all.png",
				category_name: "See All",
				
			},
			{
				id: 6,
				category_url: "https://www.elevateclo.com/collections/bottoms",
				image_url: "https://i.ibb.co/gVGG418/bottoms.png",
				category_name: "Bottoms",
			},
			{
				id: 7,
				category_url: "https://www.elevateclo.com/collections/basics",
				image_url: "https://i.ibb.co/Z2pJhQ1/basics.png",
				category_name: "Basics",
			},
			{
				id: 8,
				category_url: "https://www.elevateclo.com/collections/accessoires",
				image_url: "https://i.ibb.co/R6yGcxj/Accessoires.png",
				category_name: "Accessoires",
			},
			{
				id: 9,
				category_url: "https://www.elevateclo.com/products/black-nackenkissen",
				image_url: "https://i.ibb.co/NZ8Hhkd/Nackenkissen.png",
				category_name: "Nackenkissen",
			},
		]
		
		let categories_data = 
    		`<div class="categories_wrapper">
				<ul>
				</ul>
			</div>`
		main.insertAdjacentHTML('afterbegin', categories_data);
		
		
		let contents = document.querySelector('.categories_wrapper ul');
		for(let i=0;i<categories.length;i++){
			const id = categories[i].id;
	    	const category_url = categories[i].category_url;
	    	const image_url = categories[i].image_url;
	    	const category_name = categories[i].category_name;
			let innerContent = 	
				`<li>
					<a href=${category_url}>
						<div><img src="${image_url}"></div>
						<p>${category_name}</p>
					</a>
				</li>`
				
		contents.insertAdjacentHTML('afterbegin',innerContent);
		}
		
		let unorderList = document.querySelector('.categories_wrapper ul');
		let anchor = document.querySelectorAll('.categories_wrapper ul li a');
		let img_wrap = document.querySelectorAll('.categories_wrapper ul li a div');
		let obj_category_name = document.querySelectorAll('.categories_wrapper ul li a p');
		let collection_title =  document.querySelector('.heading.h1').innerHTML;
		
		for(let j=0; j<anchor.length;j++){
			const all_collection = "alle kollektionen";
			if(collection_title.toLowerCase().includes(obj_category_name[j].innerHTML.toLowerCase())  ||
			collection_title.toLowerCase() === all_collection && obj_category_name[j].innerHTML.toLowerCase() == "see all"){
				img_wrap[j].classList.add('active');
				let currentList = img_wrap[j].closest("li");
				let rect = currentList.getBoundingClientRect();
				const x = rect.x - 40;
				unorderList.scrollLeft += x;
			}
		}
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
.ELE_4 .shopify-section .sub_collection_bar{
	display: none;
}
@media screen and (max-width: 999px) {
	.ELE_4 .categories_wrapper ul {
    	padding-left: 20px;
	}
}
</style>