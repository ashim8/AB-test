
function waitForElem(e,l,t=1,$=!1,o=1e4,i=25)
{
	let r=$?window[e]:document.querySelectorAll(e);
	o<=0||(!$&&r.length>=t||$&&void 0!==window[e]?l(r):setTimeout(function(){waitForElem(e,l,t,$,o-i)},i))
}
waitForElem(".ruk_rating_snippet", (element) => {
  if (element) {
  	
  	document.querySelector('body').classList.add("F016_add_to_Cart");
  	let array = getAttributesFromArray(".product-list__inner .ruk_rating_snippet");
    let elements = document.querySelectorAll(".product-list__inner .product-item__info");
    let dataSku = [];
    array.forEach(function(item){
        dataSku.push(getValuesAfterLastSemicolon(item));
    });

    elements.forEach(function(element, index) {
        element.insertAdjacentHTML("beforeend", `<form method="post" action="/cart/add" accept-charset="UTF-8" class="collection_form shopify-product-form" enctype="multipart/form-data" is="product-form"><input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="id" value="${dataSku[index]}">
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

function getValuesAfterLastSemicolon(inputString) {
  const parts = inputString.split(';');
  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1].trim();
    return lastPart;
  } else {
    return inputString.trim();
  }
}

function getAttributesFromArray(selector) {
  let elements = document.querySelectorAll(selector);
  const attributeValues = [];

  elements.forEach(function (element) {
    const attributeValue = element.getAttribute("data-sku");

    if (attributeValue !== null) {
      attributeValues.push(attributeValue);
    }
  });

  return attributeValues;
	
}

  }
})

