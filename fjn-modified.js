var makeFilter = () => {
    document.querySelector('body').classList.add("fjn-3");
    var content =
        `<div class="select_and_clear">
            <div class="filter_by_size display_none">FILTER BY SIZE</div>
            <div class="total_selected desktop-none"></div>
            <div class="clear_filter display_none">Clear filter</div>
        </div>`
    document.querySelector(".collection-filters").insertAdjacentHTML("afterbegin",content);
};

const activeCheck = () =>{
    const active = document.querySelectorAll(".collection-filter__inner .tag-list .tag.tag--active");
    document.querySelector(".select_and_clear .total_selected").textContent = `(${active.length} selected)`
    if(active.length<1){
        document.querySelector(".select_and_clear .total_selected").classList.add('mobile-none');
    }
    else{
        document.querySelector(".select_and_clear .total_selected").classList.remove('mobile-none');
    }
}


let observer = new MutationObserver(() => {
    console.log(1231231);
    activeCheck();
    if(document.querySelector('.tag--active')){
        document.querySelector(".clear_filter").classList.remove("display_none");
    }
    else{
        document.querySelector(".clear_filter").classList.add("display_none");
    }

    if(document.querySelector('.clear_filter')){
    document.querySelector('.clear_filter').addEventListener('click',()=>{
        if(document.querySelector(".tag--active")){
            async function getDOM(url, selector) {
              const response = await fetch(url);
              const html = await response.text();
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              return selector ? doc.querySelector(selector) : doc;
            }
            
            getDOM('https://www.fitjeans.com/collections/all-products-womens?section_id=template--14468446093374__main-collection&', '.shopify-section')
            .then(res => {
                document.querySelector('#shopify-section-template--14468446093374__main-collection').replaceWith(res);
            })
            window.location.replace("https://www.fitjeans.com/collections/all-products-womens?");
            document.querySelectorAll(".tag--active").forEach(e=>{
                e.classList.remove("tag--active");
            })
        }
    })
}

});

(function pollFormakeFilter() {
    if (document.querySelector("#CollectionFiltersSection")) {
        try {
            makeFilter();
          let target=document.querySelector('#MainContent');
observer.observe(target, {attribute: true, subtree: true, childList: true });
        } catch (error) {
            console.log("Initialization error");
        }
    } else {
        setTimeout(pollFormakeFilter, 25);
    }
})();