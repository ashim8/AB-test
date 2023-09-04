function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
if (timer <= 0) return;
    ((!isVariable && elements.length >= minElements) || (isVariable && (typeof window[waitFor] !== 'undefined'))) ?
        callback(elements) :
        setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, (timer - frequency)), frequency);
};
let echoVariation = {
    init: function () {
        echoVariation.mainCss();
        echoVariation.mainJs();
    },
    mainCss: function () {
var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent =
            "" +
            "";
    },
    mainJs: function () {
    	document.querySelector('body').classList.add("fjn-10")
    	let givenData = [
    		{
    			title: "Pastel Flared Khaki",
    			url: "https://www.fitjeans.com/collections/pastel/products/womens-pastel-flared-fitjeans-khaki"
    		},
    		{
    			title: "Flared Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/flared/products/womens-regular-v2-flared-fitjeans-arctic-light-blue"
    		},
    		{
    			title: "Pastel Flared White",
    			url: "https://www.fitjeans.com/collections/flared/products/womens-pastel-flared-v3-fitjeans-white"
    		},
    		{
    			title: "Pastel Flared Sand",
    			url: "https://www.fitjeans.com/collections/pastel/products/womens-pastel-flared-fitjeans-sand"
    		},
    		{
    			title: "Flared Vintage Blue",
    			url: "https://www.fitjeans.com/collections/flared/products/womens-regular-v3-flared-high-waisted-fitjeans-vintage-blue"
    		},
    		{
    			title: "Flared 80s Blue",
    			url: "https://www.fitjeans.com/collections/flared/products/womens-regular-v2-flared-high-waisted-fitjeans-80s-blue"
    		},
    		{
    			title: "Contour Black",
    			url: "https://www.fitjeans.com/collections/contour/products/womens-contour-v2-high-waisted-fitjeans-black"
    		},
    		{
    			title: "Contour Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/contour/products/womens-contour-v2-high-waisted-fitjeans-arctic-light-blue"
    		},
    		{
    			title: "Contour Azure Blue",
    			url: "https://www.fitjeans.com/collections/contour/products/womens-contour-v2-high-waisted-fitjeans-azure-blue"
    		},
    		{
    			title: "Straight Leg 80s Blue",
    			url: "https://www.fitjeans.com/collections/straight-leg/products/womens-traditional-v2-straight-leg-high-waisted-fitjeans-80s-blue"
    		},
    		{
    			title: "Baggy Ripped 80s Blue",
    			url: "https://www.fitjeans.com/collections/baggy-jeans/products/womens-baggy-ripped-fitjeans-80s-blue"
    		},
    		{
    			title: "Baggy Black",
    			url: "https://www.fitjeans.com/collections/baggy-jeans/products/womens-traditional-v2-baggy-fitjeans-black-1"
    		},
    		{
    			title: "Ripped Shorts Vintage Blue",
    			url: "https://www.fitjeans.com/products/womens-fitjeans-ripped-shorts-vintage-blue"
    		},
    		{
    			title: "Shorts 80s Blue",
    			url: "https://www.fitjeans.com/collections/shorts/products/womens-fitjeans-shorts-80s-blue"
    		},
    		{
    			title: "Frame Grey",
    			url: "https://www.fitjeans.com/collections/frame/products/womens-frame-fitjeans-grey"
    		},
    		{
    			title: "Frame Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/frame/products/womens-frame-fitjeans-arctic-light-blue"
    		},
    		{
    			title: "Regular V2 4 Hole Ripped High Waisted Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/regular/products/womens-regular-v2-4-hole-ripped-high-waisted-fitjeans-arctic-light-blue"
    		},
    		{
    			title: "360 V2 High Waisted Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/360/products/womens-360-v2-high-waisted-fitjeans-arctic-light-blue"
    		},
    		{
    			title: "360 V2 High Waisted Deep Indigo",
    			url: "https://www.fitjeans.com/collections/360/products/womens-360-v2-high-waisted-fitjeans-deep-indigo"
    		},
    		{
    			title: "Regular V2 Super Ripped High Waisted Arctic Light Blue",
    			url: "https://www.fitjeans.com/collections/regular/products/womens-regular-v2-super-ripped-high-waisted-fitjeans-arctic-light-blue"
    		}
    		]
    		
    		
    		// document.querySelectorAll('#CollectionGrid .grid__item.grid-product').forEach(product=>{
    		// 	givenData.forEach(data=>{
    		// 		// console.log(data.title);
    		// 		// if(data.url.includes(product.querySelector('a').getAttribute('href'))){
    		// 		// 	console.log("product",product);
    		// 		// }
    		// 		if(product.querySelector(".grid-product__meta .grid-product__title").textContent.includes(data.title)){
    		// 			console.log("matched");
    		// 		}
    		// })
    		
    		// })
    		
    		document.querySelectorAll('#CollectionGrid .grid__item.grid-product').forEach(product=>{
    			givenData.forEach(data=>{
    				if(product.querySelector(".grid-product__meta .grid-product__title").textContent.replace(/[^a-zA-Z ]/g, "").includes(data.title)){
    					console.log("matched");
    				}
    		})
    		
    		})
    	
    },
};

waitForElem('body', echoVariation.init);