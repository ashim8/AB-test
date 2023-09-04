function waitForElem(
    waitFor,
    callback,
    minElements = 1,
    isVariable = false,
    timer = 10000,
    frequency = 25
  ) {
    let elements = isVariable? window[waitFor] : document.querySelectorAll(waitFor);
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
  waitForElem(".l-search", (element) => {
    if (element) {
      let KIC_31 = {
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
          document.querySelector('body').classList.add("KIC_31");
          const products = [
                  {
                    id:1,
                    name: "Oldhead",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw25fe05a0/0994_Editorial-Kickz-Berlin.JPG?sw=1074&q=95",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw5743290c/images/large/kickz-Bball_Classic_Logo_T_Shirt-Pine_Grove-1.jpg?sw=1074&q=95",
                    navigate_link: "https://www.kickz.com/de/p-oldhead/MTB+1.html",
                },
                {	  id:2,
                    name: "The Fresh Kid",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw81848408/0314_Editorial-Kickz-Berlin.JPG?q=80",
                    number_of_product: 7,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw79392c8d/images/large/mitchell_and_ness-MN_BRANDED_DIAMOND_SCRIPT_SHORTS-Pattern_Black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-the-fresh-kid/MTB+2.html",
                },
                {	
                      id:3,
                    name: "Ms. Bucket",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwd6edd723/0092_Editorial-Kickz-Berlin.JPG?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwbbe46939/images/large/spalding-Reversible_Shorts-Black_White-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-ms.-bucket/MTB+3.html",
                },
                {		
                      id:4,
                    name: "Baller Dad",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw56754618/0388_Editorial-Kickz-Berlin.JPG?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw68f978ec/images/large/kickz-Bucket_Full_Zip_Hoody-heather_grey-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-baller-dad/MTB+4.html",
                },
                {
                      id:5,
                    name: "Billy Hoyle",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwebb1a44a/0178_Editorial-Kickz-Berlin%20(3).JPG?q=80",
                    number_of_product: 6,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw63e75037/images/large/new_balance-MT31583-White-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-billy-hoyle/MTB+5.html",
                },
                {
                      id:6,
                    name: "Hardcore Fan",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwf684eced/0140_Editorial-Kickz-Berlin.JPG?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw88edafdd/images/large/mitchell_and_ness-NBA_SWINGMAN_JERSEY_TORONTO_RAPTORS_VINCE_CARTER-purple-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-hardcore-fan/MTB+6.html",
                },
                {
                      id:7,
                    name: "Court Essentials",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwfe167595/201826001-201832005-5-1080%20x%201080.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwea8ba333/images/large/kickz-Courts_of_NY_Hood_Longsleeve-White-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-court-essentials/STL-KICKZ+1.html",
                },
                {	
                      id:8,
                    name: "Ready To Hoop",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw4c0fa0d2/201822001-201832001-3-800%20x%20800.jpg?q=80",
                    number_of_product: 3,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw68f978ec/images/large/kickz-Bucket_Full_Zip_Hoody-heather_grey-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-ready-to-hoop/STL-KICKZ+2.html",
                },
                {
                      id:9,
                    name: "Streetwear Essentials",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw07be0853/201820001-5-Bearbeitet-1000x1000.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwdae1894e/images/large/kickz-Bball_Classic_Logo_T_shirt-black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-streetwear-essentials/STL-KICKZ+3.html",
                },
                {
                      id:10,
                    name: "Cargos Over Everything",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw4ea0be49/1x1_LEAGUE%20FITS-23.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwf3a2dea1/images/large/new_era-MLB_OAKLAND_ATHLETICS_ICECREAM_OVERSIZED_T_SHIRT-GREY_MED-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-cargos-over-everything/LF+1.html",
                },
                {
                      id:11,
                    name: "Sommer Season Ready",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwa7bad64a/1x1_LEAGUE%20FITS-21.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw145d1156/images/large/Market-VISION_QUEST_SS_BUTTON_UP_SHIRT-black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-sommer-season-ready/LF+2.html",
                },
                {
                      id:12,
                    name: "Casual In These Streets",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwc5ac1ede/1x1_LEAGUE%20FITS-45.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw1deec256/images/large/Mister_Tee-Sicilian_Message_Oversize_T_Shirt-black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-casual-in-these-streets/LF+3.html",
                },
                {
                      id:13,
                    name: "Courtside Outfit",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwe167c09c/4x5_LEAGUE%20FITS-13.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw945ae999/images/large/Jeff_Hamilton-NBA_COLLAGE_WOOL_AND_LEATHER_JACKET-maroon-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-courtside-outfit/LF+4.html",
                },
                {
                      id:14,
                    name: "Humble And Cozy",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw05450d9a/1x1_LEAGUE%20FITS-55.jpg?q=80",
                    number_of_product:3 ,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw5743290c/images/large/kickz-Bball_Classic_Logo_T_Shirt-Pine_Grove-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-humble-and-cozy/LF+5.html",
                },
                {
                      id:15,
                    name: "From Kickz With Love",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw57f9abc8/1x1_LEAGUE%20FITS-50.jpg?q=80",
                    number_of_product: 2,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwb2353c9c/images/large/kickz-Courts_of_NY_Park_T_shirt-White-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-from-kickz-with-love/LF+6.html",
                },
                {
                      id:16,
                    name: "Mlb Crew Love",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw85937398/1x1_LEAGUE%20FITS-26.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw4849de66/images/large/levis-CHESTNUT_VARSITY_JACKET_Z8220-black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-mlb-crew-love/LF+7.html",
                },
                {
                      id:17,
                    name: "Razzle Dazzle",
                    main_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw72ead404/All%20Day%20Mesh%20Shorts_203973001_5%20Kopie.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-master-catalog/default/dwc3a7528a/images/large/Bucketz-Ball_Park_Sleeveless-White-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-razzle-dazzle/Bucketz1.html",
                },
                {
                      id:18,
                    name: "The Walking Bucket",
                    main_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw3279fdbf/All%20Day%20Mesh%20Shorts_203973005_10.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-master-catalog/default/dw49bf7765/images/large/Bucketz-T_shirt-black-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-the-walking-bucket/Bucketz2.html",
                },
                {
                      id:19,
                    name: "King Of The Court",
                    main_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw91134ed0/Dropping%20Bucketz%20T-Shirt_203977003_1.jpg?q=80",
                    number_of_product: 5,
                    gallery_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-master-catalog/default/dw56d6a361/images/large/Bucketz-T_shirt-kelp-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-king-of-the-court/Bucketz3.html",
                },
                {
                      id:20,
                    name: "Playmaker",
                    main_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-master-catalog/default/dw128d6ca5/images/large/Bucketz-Reversible_Pick_Up_Jersey-True_Blue_All_Aboard-1.jpg?q=80",
                    number_of_product: 7,
                    gallery_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw02c56195/Reversible%20Pick-Up%20Jersey_203974005_2.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-playmaker/Bucketz4.html",
                },
                {
                      id:21,
                    name: "Ball Park Showdown",
                    main_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw471e05d1/Reversible%20Pick-Up%20Jersey_203976001_3%20Kopie.jpg?q=80",
                    number_of_product: 7,
                    gallery_img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BGQV_STG/on/demandware.static/-/Sites-kickz-master-catalog/default/dw4e57c752/images/large/nike-DRI_FIT_HEAD_TIE_4_0-101_WHITE_BLACK-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-ball-park-showdown/Bucketz5.html",
                },
                { 
                      id:22,
                    name: "Mlb Black On Black",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw671c365b/197939001_2_1080x1080.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwa753af0c/images/large/Fanatics-MLB_PITTSBURGH_PIRATES_BASEBALL_JERSEY-Black_Yellow_Gold-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-mlb-black-on-black/STL-RCOM1.html",
                },
                {
                      id:23,
                    name: "Ready For The Heat Wave",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dwdd42dd93/194561219_2_1000X1000.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw663f6f3a/images/large/nike-NBA_MIAMI_HEAT_DRI_FIT_STATEMENT_SWINGMAN_JERSEY_JIMMY_BUTLER-TOUGH_RED_BUTLER_JIMMY-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-ready-for-the-heat-wave/STL-RCOM2.html",
                },
                {
                      id:24,
                    name: "True Schooler",
                    main_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-all-sites-navigation/default/dw5eec1da3/185328006_2.jpg?q=80",
                    number_of_product: 4,
                    gallery_img: "https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw449e508d/images/large/new_era-MLB_5950_OAKLAND_ATHLETICS_GM-DARK_GREEN_POLY-1.jpg?q=80",
                    navigate_link: "https://www.kickz.com/de/p-true-schooler/STL-RCOM3.html",
                },
          ]
          
          
            const check=(products)=>{
                let products_data = 
            `${products.map(product => 
                  `<section class="products_wrapper">
                       <div class="product_img">
                              <img src="${product.main_img}" alt="${product.name}">
                        </div>
                        <div class="product_details">
                              <div class="name_and_total_product">
                                  <p class="product_name common_style">${product.name}</p>
                                  <p class="total_product common_style">${product.number_of_product} Artikel</p>
                              </div>
                              <div class="gallery_img_wrap">
                                  <div class="gallery_img background-layer_one">
                                      <img src="${product.gallery_img}">
                                  </div>
                                  <div class="background-layer_two">
                                  </div>
                                  <div class="background-layer_three">
                                  </div>
                              </div>
                              <div class="btn">
                                  <a href="${product.navigate_link}">Shop Outfit</a>
                              </div>
                        </div>
                        <div class="kickz_icon">
                              <img src="https://i.ibb.co/TKzhXDk/kickz-icon.png">
                        </div>
                  </section>`
              ).join('')}`
              return products_data
            }
            const products_data = check(products)
     
          //random-id generate
          function getRandomIds(array, count) {
              const shuffledArray = array.sort(() => 0.5 - Math.random());
              return shuffledArray.slice(0, count).map(obj => obj.id);
          }
          const selectedIds = getRandomIds(products, products.id);
          // console.log("random ids:",selectedIds);
          
          //get-random-product
          const product_tile = document.querySelectorAll('.KIC_31 .b-product_tile');
          let random_stl = selectedIds.slice(0, 3);
          const data1 = products.filter(product=>{
              return product.id == random_stl[0];
          })
          const data2 = products.filter(product=>{
              return product.id == random_stl[1];
          })
          const data3 = products.filter(product=>{
              return product.id == random_stl[2];
          })
          
          
          const clearElement=()=>{
              document.querySelectorAll('.products_wrapper').forEach(element=>{
                  element?.remove()
              })
          }
          
          const updateWindowDimensions = () => {
          const width = window.innerWidth;
          let i = 0;
          // clearElement();
          if(width >= 1500){
              console.log("width >1500");
              clearElement();
              product_tile.forEach(e => {
                  console.log("width >1500",i)
                  i++;
                  if(i===10){
                      e.insertAdjacentHTML("afterend",check(data1));
                  }
                  if(i===41){
                      e.insertAdjacentHTML("afterend",check(data2));
                  }
              })
          }
          else if(width >= 1000 && width <= 1499){
              clearElement();
            //   console.log("width >1000 and width <1500");
              let i = 0;
              product_tile.forEach(e => {
                  console.log("1000-1500",i)
                  i++;
                  if(i===12){
                      e.insertAdjacentHTML("afterend",check(data1));
                  }
                  if(i===32){
                      e.insertAdjacentHTML("afterend",check(data2));
                  }
              })
                  
              }
              
          else if(width >= 769 && width <= 999){
              clearElement();
              let i = 0;
              product_tile.forEach(e => {
                  i++;
                  if(i===9){
                      e.insertAdjacentHTML("afterend",check(data1));
                  }
                  if(i===29){
                      e.insertAdjacentHTML("afterend",check(data2));
                  }
                  if(i===47){
                      e.insertAdjacentHTML("afterend",check(data3));
                  }
               })
              }
              
              else if(width <= 768 ){
                  clearElement();
                  let i = 0;
                  product_tile.forEach(e => {
                      i++;
                      if(i===10){
                          e.insertAdjacentHTML("afterend",check(data1));
                      }
                      if(i===34){
                          e.insertAdjacentHTML("afterend",check(data2));
                      }
                  })
              }
          }
          
          window.onload = updateWindowDimensions;
          window.addEventListener('resize', updateWindowDimensions);
          
        },
      };
      KIC_31.init();
    }
  });


<style>
.KIC_31 .custom_product{
	max-width: 600px;
	border: 2px solid green;
}

.KIC_31 .products_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /*grid-column: 3/span 2;*/
    grid-column: 2 span;
    border: 1px solid #767676;
    position: relative;
    max-width: 660px;
    width: 100%;
	max-height: 384px;
	height: 100%;
}
.KIC_31 .product_details{
	background: #F1F1F3;
	padding: 24px 0;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    position: relative;
}
.KIC_31 .product_img img{
	width: 100%;
	height: 100%;
    display: block;
}
.KIC_31 .common_style{
	font-family: Funktional Grotesk Pro;
	font-size: 16px;
	font-weight: 400;
	line-height: 18.2px; 
	text-align: center;
}
.KIC_31 .product_name{
	color: #000;
}
.KIC_31 .total_product{
	color: #767676;
	padding-top: 8px;
}
.KIC_31 .btn{
	border-radius: 20px;
    background: #000;
    height: 30px;
    max-width: 114px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.KIC_31 .btn a{
	color: #FFF;
	text-align: center;
	font-family: Funktional Grotesk Pro;
	font-size: 13px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	text-transform: uppercase;
}
.KIC_31 .gallery_img{
    margin: auto;
    transform: rotate(-5deg);
    z-index: 2;
}
.KIC_31 .product_img,.KIC_31 .product_details{
	max-height: 382px;
}
.KIC_31 .background-layer_one,.KIC_31 .background-layer_two,.KIC_31 .background-layer_three{
	width: 150px;
	height: 150px;
	background: #fff;
	position: absolute;
    box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.10);
}
.KIC_31 .background-layer_one img,.KIC_31 .background-layer_two img,.KIC_31 .background-layer_three img{
	width: 100%;
}


.KIC_31 .background-layer_one{
	bottom: -70px;
	left: 75px;
}
.background-layer_three{
	transform: rotate(5deg);
}
.KIC_31 .background-layer_two{
	z-index: 1;
    bottom: -71px;
    left: 85px;
}
.KIC_31 .background-layer_three{
	bottom: -74px;
    left: 90px;
}
.KIC_31 .kickz_icon{
	position: absolute;
	width: 40px;
	height: 40px;
	top: 46%;
    left: 47%;
}
.KIC_31 .gallery_img_wrap {
    position: absolute;
    bottom: 48%;
}


@media only screen and (min-width: 1000px) and (max-width: 1200px){
.KIC_31 .gallery_img_wrap {
    left: -15%;
}
.KIC_31 .kickz_icon {
    left: 46%;
}
}
@media only screen and (min-width: 1200px) and (max-width: 1499px){
.KIC_31 .gallery_img_wrap {
    left: 2%;
}
}
@media only screen and (min-width: 769px) and (max-width: 900px){
	.KIC_31 .gallery_img_wrap {
    left: -14%;
}
}

@media only screen and (max-width:768px){
.KIC_31 .product_details {
    flex-direction: unset;
    align-items: center;
}
.KIC_31 .products_wrapper {
    grid-template-columns: 1fr;
}
.KIC_31 .gallery_img_wrap{
	display: none;
}
.KIC_31 .products_wrapper{
	max-height: unset;
}
.KIC_31 .common_style {
    text-align: unset;
}
.name_and_total_product{
	 padding-left: 58px;
}
.KIC_31 .kickz_icon {
    width: 34px;
    height: 34px;
    top: unset;
    bottom: 30px;
    left: 8px;
}
.KIC_31 .product_name{
	font-size: 14px;
}
.KIC_31  .total_product{
	font-size: 12px;
}
.KIC_31 .total_product {
    padding-top: 5px;
}

}
</style>