
// var injectText = () => {
// 	document.querySelector("body").classList.add("move_100_days");
// 	if(document.querySelectorAll(".product__accordion.accordion.quick-add-hidden")[2]){
// 		document.querySelectorAll(".product__accordion.accordion.quick-add-hidden")[2].classList.add("d-none")
// 	}
// 	if(document.querySelector(".product__accordion.accordion.quick-add-hidden")){
// 	document.querySelector(".product__description.rte.quick-add-hidden").insertAdjacentHTML("beforebegin",`
// <div class="dayReturns">
// 	<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<g clip-path="url(#clip0_1092_3496)">
// 		<path d="M14.9615 6.88608H3.00927L5.45463 4.44072C5.79886 4.09649 5.79886 3.53848 5.45463 3.19424C5.1103 2.84992 4.55239 2.85001 4.20806 3.19424L0.258173 7.14433C-0.0860576 7.48856 -0.0860576 8.04657 0.258173 8.3908L4.20806 12.3407C4.38022 12.5129 4.60576 12.5988 4.8313 12.5988C5.05683 12.5988 5.28237 12.5128 5.45454 12.3407C5.79877 11.9965 5.79877 11.4384 5.45454 11.0942L3.00918 8.64885H14.9614C16.8694 8.64885 18.4217 10.2012 18.4217 12.1092C18.4217 14.0172 16.8694 15.5695 14.9614 15.5695H7.69071C7.20389 15.5695 6.80932 15.9641 6.80932 16.4509C6.80932 16.9377 7.20389 17.3323 7.69071 17.3323H14.9614C17.8413 17.3323 20.1845 14.9892 20.1845 12.1092C20.1845 9.2292 17.8414 6.88608 14.9615 6.88608Z" fill="#252427"/>
// 		</g>
// 		<defs>
// 		<clipPath id="clip0_1092_3496">
// 		<rect width="20.1845" height="20.1845" fill="white" transform="translate(0 0.0419922)"/>
// 		</clipPath>
// 		</defs>
// 	</svg>
// 	<span class="dayText">100-day hassle-free returns</span>
// <div>
// 	`)
	
// 	}	
// }



// (function pollForinjectText() {
//     if (document.querySelector(".product__description.rte.quick-add-hidden")) {
//         try {
//             injectText();
//         } catch (error) {
//             console.log("Initialization error");
//         }
//     } else {
//         setTimeout(pollForinjectText, 25);
//     }
// })();


var injectText = () => {
	document.querySelector("body").classList.add("move_100_days");
	document.querySelectorAll(".h4.accordion__title").forEach(e=>{
	    if((e.textContent.includes("100-day"))|| (e.textContent.includes("100 day"))){
	    	e.closest(".product__accordion").classList.add("d-none")
	    }
	})
	
	if(document.querySelector(".product__accordion.accordion.quick-add-hidden")){
	document.querySelector(".product__description.rte.quick-add-hidden").insertAdjacentHTML("beforebegin",`
<div class="dayReturns">
	<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_1092_3496)">
		<path d="M14.9615 6.88608H3.00927L5.45463 4.44072C5.79886 4.09649 5.79886 3.53848 5.45463 3.19424C5.1103 2.84992 4.55239 2.85001 4.20806 3.19424L0.258173 7.14433C-0.0860576 7.48856 -0.0860576 8.04657 0.258173 8.3908L4.20806 12.3407C4.38022 12.5129 4.60576 12.5988 4.8313 12.5988C5.05683 12.5988 5.28237 12.5128 5.45454 12.3407C5.79877 11.9965 5.79877 11.4384 5.45454 11.0942L3.00918 8.64885H14.9614C16.8694 8.64885 18.4217 10.2012 18.4217 12.1092C18.4217 14.0172 16.8694 15.5695 14.9614 15.5695H7.69071C7.20389 15.5695 6.80932 15.9641 6.80932 16.4509C6.80932 16.9377 7.20389 17.3323 7.69071 17.3323H14.9614C17.8413 17.3323 20.1845 14.9892 20.1845 12.1092C20.1845 9.2292 17.8414 6.88608 14.9615 6.88608Z" fill="#252427"/>
		</g>
		<defs>
		<clipPath id="clip0_1092_3496">
		<rect width="20.1845" height="20.1845" fill="white" transform="translate(0 0.0419922)"/>
		</clipPath>
		</defs>
	</svg>
	<span class="dayText">100-day hassle-free returns</span>
<div>
	`)
	
	}	
}

(function pollForinjectText() {
    if (document.querySelector(".product__description.rte.quick-add-hidden")) {
        try {
            injectText();
        } catch (error) {
            console.log("Initialization error");
        }
    } else {
        setTimeout(pollForinjectText, 25);
    }
})();