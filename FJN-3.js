var makeStickyATC  = {
    init: function () {
        this.mainJS();
    },
    mainJS: function () {
        document.querySelector('body').classList.add("fjn-3");
    	var content =
    	`<div class="select_and_clear">
    		<div class="total_selected"> </div>
    		<div class="clear_filter display_none">Clear filter</div>
    	</div>`
    	document.querySelector(".collection-filters").insertAdjacentHTML("afterbegin",content)

    }
};





// document.querySelectorAll('.tag').forEach(event=>{
// 	event.addEventListener('click',()=>{
// 		if(document.querySelector("display_none")){
// 			document.querySelector("clear_filter").classList.remove("display_none")
// 		}
// 		else{
// 			document.querySelector("clear_filter").classList.add("display_none")
// 		}
		
// 	})
// })

// let target=document.querySelector('.no-bullets.tag-list');
let target=document.querySelector('#CollectionGrid');
let observer = new MutationObserver(() => {
	if(document.querySelector('.tag--active')){
		document.querySelector(".clear_filter").classList.remove("display_none")
	}
	else{
		document.querySelector(".clear_filter").classList.add("display_none")
	}
	
	if(document.querySelector('.clear_filter')){
	document.querySelector('.clear_filter').addEventListener('click',()=>{
		var url = window.location.href;
		var[one,two] = url.split("?");
		[two].pop();
		document.querySelectorAll(".tag--active").forEach(event=>{
			event.classList.remove("tag--active")
			})
		})
	}
});
observer.observe(target, {attribute: true, subtree: true, childList: true });









// const elementToObserve = document.querySelector(".no-bullets.tag-list");
// var count = 0;
// const observer = new MutationObserver(() => {
// 	if(document.querySelector(".tag--active")){
// 		document.querySelectorAll(".tag--active").forEach(element=>{
// 			count = count+1; 
// 		})
// 	}
// });
// observer.observe(elementToObserve, { subtree: true, childList: true });

// let target=document.querySelector('#CollectionGrid');
// let observer = new MutationObserver(() => {
// var content =
//     	`<div id='active' class="select_and_clear">
//     		<div class="total_selected"> </div>
//     		<div class="clear_filter">Clear filter</div>
//     	</div>`;
//     if(!document.querySelector('#active')){
//         document.querySelector(".collection-filter__inner .collection-filter__title").insertAdjacentHTML("afterend",content);     
//     }
// });
// observer.observe(target, {attribute: true, subtree: true, childList: true });


(function pollForMakeStickyATC() {
    if (document.querySelector("#CollectionFiltersSection")) {
        try {
            makeStickyATC.init();
        } catch (error) {
            console.log("Initialization error");
        }
    } else {
        setTimeout(pollForMakeStickyATC, 25);
    }
})();

