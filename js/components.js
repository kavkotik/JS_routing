function homePage() {
  return `
  <h1>Home page</h1>
  `;
}

function laptopsPage() {
  let productsHtml = "";
  let brandFiltersHtml = "";
  let processorsFiltersHtml = "";
  let diagonalFiltersHtml = "";
  let ramFiltersHtml = "";
  let ssdFiltersHtml = "";
  laptops.forEach((el) => {
    productsHtml += `
<div class="product-card" data-brand="${el.brand}">
<h2 class="product-title">model: ${el.model}</h2>
<p class="product-brand" >brand: ${el.brand}</p>
  <p class="product-price">price: ${el.price}</p>
  <p class="product-diagonal">diagonal: ${el.diagonal}</p>
  <p class="product-ssd">ssd: ${el.ssd}</p>
  <p class="product-ram">ram: ${el.ram}</p>
  <p class="product-processor">processor: ${el.processor}</p>
</div>
`;
  });

  filters.forEach((el) => {
    el.brand.forEach((item) => {
      brandFiltersHtml += `
  <li class="brand-filters-item"><input type="checkbox" class="brand-filters-check filters-check" data-brand="${item}"> ${item}</li>

  `;
    });
    el.processor.forEach((item) => {
      processorsFiltersHtml += `
  <li class="processor-filters-item"><input type="checkbox" class="processor-filters-check filters-check" data-processor="${item}"> ${item}</li>

  `;
    });
    el.diagonal.forEach((item) => {
      diagonalFiltersHtml += `
  <li class="diagonal-filters-item"><input type="checkbox" class="diagonal-filters-check filters-check" data-diagonal="${item}"> ${item}</li>

  `;
    });
    el.ram.forEach((item) => {
      ramFiltersHtml += `
  <li class="ram-filters-item"><input type="checkbox" class="ram-filters-check filters-check" data-ram="${item}""> ${item}</li>

  `;
    });
    el.ssd.forEach((item) => {
      ssdFiltersHtml += `
  <li class="ssd-filters-item"><input type="checkbox" class="ssd-filters-check filters-check" data-ssd="${item}""> ${item}</li>

  `;
    });
  });

  return `
 <h1>Laptops</h1>
 <div class="wrap">
<div class="filters">

<ul class="filters-list">
<p class="new-filter">FILTERS</p>

<p class="new-filter">brand:</p>
${brandFiltersHtml}
<p class="new-filter">processors:</p>
${processorsFiltersHtml}
<p class="new-filter">diagonal:</p>
${diagonalFiltersHtml}
<p class="new-filter">ram:</p>
${ramFiltersHtml}
<p class="new-filter">ssd:</p>
${ssdFiltersHtml}
</ul>

<button class="confirm-filters-btn">confirm</button>
</div>

 <div class="products">
 ${productsHtml}
 </div>
 </div>

 `;
}

function filterPage() {
  let productsHtml = "";
  let brandFiltersHtml = "";
  let processorsFiltersHtml = "";
  let diagonalFiltersHtml = "";
  let ramFiltersHtml = "";
  let ssdFiltersHtml = "";
  let pathStr = window.location.hash;
  let pathFilters = pathStr.split("&");

  let brands = pathFilters[1].split(",");
  let processors = pathFilters[2].split(",");
  let diagonals = pathFilters[3].split(",");
  let rams = pathFilters[4].split(",");
  let ssds = pathFilters[5].split(",");

  function displayGoods(newArr, checkedArr, originalArr, prop) {
    checkedArr.forEach((checkedEl) => {
      originalArr.forEach((originalItem) => {
        if (checkedArr.length > 1) {
          if (checkedEl === originalItem[prop]) {
            newArr.push(originalItem);
          }
        } else {
          newArr.push(originalItem);
        }
      });
    });
  }

  let filteredByBrand1 = [];
  let filteredByProcessor2 = [];
  let filteredByDiagonal3 = [];
  let filteredByRam4 = [];
  let finalFilteredBySsd5 = [];
  displayGoods(filteredByBrand1, brands, laptops, "brand");
  displayGoods(filteredByProcessor2, processors, filteredByBrand1, "processor");
  displayGoods(
    filteredByDiagonal3,
    diagonals,
    filteredByProcessor2,
    "diagonal"
  );
  displayGoods(filteredByRam4, rams, filteredByDiagonal3, "ram");
  displayGoods(finalFilteredBySsd5, ssds, filteredByRam4, "ssd");

  if (finalFilteredBySsd5.length > 0) {
    finalFilteredBySsd5.forEach((el) => {
      productsHtml += `
  <div class="product-card" data-brand="${el.brand}">
  <h2 class="product-title">model: ${el.model}</h2>
  <p class="product-brand" >brand: ${el.brand}</p>
    <p class="product-price">price: ${el.price}</p>
    <p class="product-diagonal">diagonal: ${el.diagonal}</p>
    <p class="product-ssd">ssd: ${el.ssd}</p>
    <p class="product-ram">ram: ${el.ram}</p>
    <p class="product-processor">processor: ${el.processor}</p>
  </div>
  `;
    });
  } else {
    productsHtml = `there are no products on the site that fully match your filters`;
  }

  filters.forEach((el) => {
    el.brand.forEach((item) => {
      brandFiltersHtml += `
  <li class="brand-filters-item"><input type="checkbox" class="brand-filters-check filters-check" data-brand="${item}"> ${item}</li>

  `;
    });
    el.processor.forEach((item) => {
      processorsFiltersHtml += `
  <li class="processor-filters-item"><input type="checkbox" class="processor-filters-check filters-check" data-processor="${item}"> ${item}</li>

  `;
    });
    el.diagonal.forEach((item) => {
      diagonalFiltersHtml += `
  <li class="diagonal-filters-item"><input type="checkbox" class="diagonal-filters-check filters-check" data-diagonal="${item}"> ${item}</li>

  `;
    });
    el.ram.forEach((item) => {
      ramFiltersHtml += `
  <li class="ram-filters-item"><input type="checkbox" class="ram-filters-check filters-check" data-ram="${item}""> ${item}</li>

  `;
    });
    el.ssd.forEach((item) => {
      ssdFiltersHtml += `
  <li class="ssd-filters-item"><input type="checkbox" class="ssd-filters-check filters-check" data-ssd="${item}""> ${item}</li>

  `;
    });
  });

  return `
 <h1>Laptops</h1>
 <div class="wrap">
<div class="filters">

<ul class="filters-list">
<p class="new-filter">FILTERS</p>

<p class="new-filter">brand:</p>
${brandFiltersHtml}
<p class="new-filter">processors:</p>
${processorsFiltersHtml}
<p class="new-filter">diagonal:</p>
${diagonalFiltersHtml}
<p class="new-filter">ram:</p>
${ramFiltersHtml}
<p class="new-filter">ssd:</p>
${ssdFiltersHtml}
</ul>

<button class="confirm-filters-btn">confirm</button>
</div>

 <div class="products">
 ${productsHtml}
 </div>
 </div>

 `;
}

function aboutPage() {
  return `
    <h1>About page</h1>
    `;
}

function postPage(props) {
  const path = router.getHash();

  let postHtml;

  if (props.type.includes("count")) {
    postHtml = "";

    posts.forEach((item) => {
      if (item.id <= props.params) {
        postHtml += `
            <h3 class="post-title">${item.title}</h3>
        <p class="post-text">${item.text}</p>
            `;
      }
    });
    return `
    <h1>Post page</h1>
    ${postHtml}
    `;
  } else {
    posts.forEach((item) => {
      if (item.id == props.params) {
        postHtml = `
            <h3 class="post-title">${item.title}</h3>
            <p class="post-text">${item.text}</p>
            `;
      }
    });
    return `
        <h1>Post page</h1>
        ${postHtml}
        `;
  }
}

function blogPage() {
  const postsHtml = posts
    .map(
      (post) => `
        <div class="post" id="${post.id}">
    <h3 class="post-title">${post.title}</h3>
    <p class="post-text">${post.text}</p>
        </div>
        `
    )
    .join("");

  return `
        <h1>Blog page</h1>
        <p class="post-input-text"> show first <input type="number" class="count-input"> posts         <button class="count-button">confirm</button> </p>
        <p class="warning"></>

        <div class="posts">
        ${postsHtml}
        </div>
    
        `;
}

function _404Page() {
  return `
    <h1>404 page</h1>
   
    `;
}
