function waitForElem(e,l,t=1,$=!1,o=1e4,i=25)
{
	let r=$?window[e]:document.querySelectorAll(e);
	o<=0||(!$&&r.length>=t||$&&void 0!==window[e]?l(r):setTimeout(()=>waitForElem(e,l,t,$,o-i),i))
}

waitForElem(".product__media-wrapper", (element) => {
  if (element) {
    let PH_8 = {
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
        document.querySelector('body').classList.add("ph_8");
        let scrollElm = document.querySelector('.ph_8 .product__media-wrapper .product__media-thumbnails .swiper-wrapper');
        let activeThumb = document.querySelectorAll('.swiper-wrapper .swiper-slide-thumb-active')[0]

		waitForElem('.product__media-wrapper .hide-mobile.product__media-thumbnails.list-unstyled.swiper.swiper-initialized.swiper-vertical.swiper-thumbs',([targetNode])=>{
		const swiperSlide = document.querySelector('.product__media-list.swiper').swiper;
		// const thumbSlider = document.querySelector('.hide-mobile.product__media-thumbnails.list-unstyled').swiper;
		// console.log('swiperSlide',swiperSlide);
		// console.log('thumbSlider',thumbSlider);
		// swiperSlide.controller.control = thumbSlider;
		// thumbSlider.controller.control = swiperSlide;
		
		swiperSlide.on('slideChange', function () {
		const active = targetNode.querySelector('.swiper-thumbs .swiper-slide.swiper-slide-thumb-active');
		if(active){
			// active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
			document.querySelector('.product__media-thumbnails.swiper-thumbs .swiper-wrapper').scrollTo({
			  top: scrollY,
			  left: active.offsetLeft,
			  behavior: "smooth",
			});
		}
		});
		
		
		});		
      },
    };
    PH_8.init();
  }
});

<style>

    
@media (max-width: 768px){
.ph_8 .product__media-wrapper .hide-mobile.product__media-thumbnails.list-unstyled{
	display: flex!important; 
	margin-left: 20px;
}
.ph_8 .product__media-wrapper .swiper-vertical>.swiper-wrapper {
    flex-direction: row;
    /*margin-left: 20px;*/
}
.ph_8 .product__media-thumbnails .swiper-slide{
	max-height: 75px;
    max-width: 75px;
    
}
.ph_8 .product__media-thumbnails .swiper-slide:not(:last-child){
	margin-right: 14px;
}
.ph_8 .product__media-wrapper .product__media-thumbnails .swiper-wrapper{
	overflow-x: scroll;
}
.ph_8 .product__media-wrapper .product__media-thumbnails .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.ph_8 .product__media-wrapper .product__media-thumbnails .swiper-wrapper{
  -ms-overflow-style: none;
  scrollbar-width: none;
  transform: translateY(0) !important;
}
.ph_8 .product__media-wrapper .swiper-horizontal>.swiper-pagination-bullets{
	display: none;
}
.ph_8 .product__media-wrapper .product__media-list {
    padding-bottom: 20px;
}
.ph_8 .product__media-wrapper {
	display: flex;
	flex-direction: column-reverse;
}
.ph_8 .product__media-thumbnails{
	margin-bottom: 14px;
}
.ph_8 #MainContent .shopify-section.product-section.show .page-width{
	overflow-x: hidden;
}

}
</style>