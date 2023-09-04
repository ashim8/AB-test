const makeFilter = () => {
    document.querySelector('body').classList.add('fjn-3');
    const content = `<div class="select_and_clear">
                  <div class="filter_by_size display_none">FILTER BY SIZE</div>
                  <div class="total_selected desktop-none"></div>
                  <div class="clear_filter display_none">Clear filter</div>
              </div>`;
    document.querySelector('.collection-filters').insertAdjacentHTML('afterbegin', content);
  };
  // makeFilter();
  sessionStorage.removeItem("filter-item");
  sessionStorage.removeItem("filter-item-position");
  const activeCheck = () => {
    const active = document.querySelectorAll('.collection-filter__inner .tag-list .tag.tag--active');
    document.querySelector('.select_and_clear .total_selected').textContent = `(${active.length} selected)`;
    if (active.length < 1) {
      document.querySelector('.select_and_clear .total_selected').classList.add('mobile-none');
    } else {
      document.querySelector('.select_and_clear .total_selected').classList.remove('mobile-none');
    }
  };
  
  const filterScroll = () => {
    document.querySelectorAll('#CollectionFiltersSection form .no-bullets.tag-list li').forEach((filter, index) => {
      const item = filter.querySelector('input.tag__input').getAttribute('value');
  
      if (sessionStorage.getItem('filter-item')) {
        const selectedValue = sessionStorage.getItem('filter-item');
  
        if (selectedValue === item) {
          // filter.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
          const value = parseFloat(sessionStorage.getItem('filter-item-position'));
          document.querySelector('.collection-filter__scrollable').scrollTo(value, 0);
          console.log(filter.parentElement);
          // ppp(filter);
        }
      }
  
      filter.addEventListener('click', (e) => {
        sessionStorage.setItem('filter-item', item);
        sessionStorage.setItem('filter-item-position', document.querySelector('.collection-filter__scrollable').scrollLeft);
      });
    });
  };
  
  filterScroll();
  
  const observer = new MutationObserver(() => {
    observer.disconnect();
  
    activeCheck();
  
    if (document.querySelector('.tag--active')) {
      document.querySelector('.clear_filter').classList.remove('display_none');
    } else {
      document.querySelector('.clear_filter').classList.add('display_none');
    }
  
    if (document.querySelector('.clear_filter')) {
      document.querySelector('.clear_filter').addEventListener('click', () => {
        if (document.querySelector('.tag--active')) {
          window.location.href = window.location.origin + window.location.pathname;
  
          document.querySelectorAll('.tag--active').forEach((e) => {
            e.classList.remove('tag--active');
          });
        }
      });
    }
  
    filterScroll();

    const target = document.querySelector('#MainContent');
    observer.observe(target, { attribute: false, subtree: true, childList: true });
  });
  
  // let target=document.querySelector('#MainContent');
  (function pollFormakeFilter() {
    if (document.querySelector('#CollectionFiltersSection') && document.querySelector('.collection-filters')) {
      try {
        makeFilter();
        const target = document.querySelector('#MainContent');
        observer.observe(target, { attribute: false, subtree: true, childList: true });
      } catch (error) {
        console.log('Initialization error');
      }
    } else {
      setTimeout(pollFormakeFilter, 25);
    }
  }());