var makeStickyATC  = {
    init: function () {
        this.mainJS();
    },
    mainJS: function () {
    	
    document.querySelector('body').classList.add("F016_add_to_Cart");
  	var array = getAttributesFromArray(".product-list__inner .ruk_rating_snippet");
    var elements = document.querySelectorAll(".product-list__inner .product-item__info");
    var dataSku = [];
    array.forEach(function(item){
        dataSku.push(getValuesAfterLastSemicolon(item));
    });
    if(!document.querySelector(".collection_form")){
    elements.forEach(function(element, index) {
      var value;
    	if(element.querySelector(".product-item-meta__title").textContent.includes("SuperMikroben - Premium-Biotika (60 Kapseln pro Glas)")){
    		value = "42417843929345";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("Bio Apfelessig - naturtrüb & ungefiltert (500 ml)")){
    		value = "29602591440961";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("Bio Kultur-Kimchi vegan (330 g)")){
    		value = "38730102603961";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("Bio Kultur-Kraut Gold (330 g)")){
    		value = "38730172825785";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("Bio Kultur-Kraut Pink (330 g)")){
    		value = "38721626669241";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("Fairment Geschenkgutschein")){
    		value = "40055501881529";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("MikrobenFutter - Premium Ballaststoffe")){
    		value = "43667590480136";
    	}
    	else if(element.querySelector(".product-item-meta__title").textContent.includes("EffektivEnzyme - Premium Verdauungskomplex (90 Kapseln pro Glas)")){
    		value = "44581547311368";
    	}
    	else{
    		value =	dataSku[index];
    	}
        element.insertAdjacentHTML("beforeend", `<form method="post" action="/cart/add" accept-charset="UTF-8" class="collection_form shopify-product-form" enctype="multipart/form-data" is="product-form"><input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id" value="${value}">
              <product-payment-container  id="MainPaymentContainer" class="product-form__payment-container">
                <button id="AddToCart" type="submit" is="loader-button" data-use-primary="" data-product-add-to-cart-button="" data-button-content="In den Warenkorb" class="product-form__add-button button button--primary button--full">
      <span class="btn-text">In den Warenkorb</span>
      <span class="loader-button__loader" hidden="">
        <div class="spinner">
          <svg focusable="false" width="24" height="24" class="icon icon--spinner" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
          </svg>
        </div>
      </span>
    </button></product-payment-container><input id="_customerReferenceId" hidden="" type="hidden" name="properties[_customerReferenceId]"></form>
    
`);
  });
  }
function getValuesAfterLastSemicolon(inputString) {
  var parts = inputString.split(';');
  if (parts.length > 1) {
    var lastPart = parts[parts.length - 1].trim();
    return lastPart;
  } else {
    return inputString.trim();
  }
}

function getAttributesFromArray(selector) {
  var elements = document.querySelectorAll(selector);
  var attributeValues = [];

  elements.forEach(function (element) {
    var attributeValue = element.getAttribute("data-sku");

    if (attributeValue !== null) {
      attributeValues.push(attributeValue);
    }
  });

  return attributeValues;
	
}
    }
};

var lastUrl = location.href;
new MutationObserver(() => {
var url = location.href;
    if (url !== lastUrl) {       
        lastUrl = url;
     (function reRender() {
        if (document.querySelector('.ruk_rating_snippet')) {
            try {
            	makeStickyATC.init();
            } catch (error) {}
        } else {
            setTimeout(reRender, 25);
        }
    })();
    }else {
    }
}).observe(document, {subtree: true, childList: true});


(function pollForMakeStickyATC() {
    if (document.querySelector(".ruk_rating_snippet")) {
        try {
            makeStickyATC.init();
        } catch (error) {
            console.log("Initialization error");
        }
    } else {
        setTimeout(pollForMakeStickyATC, 25);
    }
})();