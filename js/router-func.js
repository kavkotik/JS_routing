function renderRoute() {
  const basePath = router.getHash();
  let searchParamStr = "";
  let typeParam = "";

  let path = basePath;

  let route = routes.find((r) => {
    if (path.includes("/")) {
      return r.path == router.getBasePath(path);
    } else if (path.includes("|")) {
      return r.path == router.getBasePathProd(path);
    }
    return r.path == path;
  });

  if (router.isUndefined(route)) {
    route = routes.find((r) => r.path == "**");
  }

  searchParamStr = path.split("=")[1];
  typeParam = path.split("=")[0];

  renderComponent(route.component({ params: searchParamStr, type: typeParam }));

  const post = document.querySelectorAll(".post");

  post.forEach((item) => {
    item.onclick = () => {
      window.location.hash += `/id=${item.id}`;
    };
  });

  const countButton = document.querySelector(".count-button");
  const countInput = document.querySelector(".count-input");
  const warning = document.querySelector(".warning");

  if (countButton) {
    countButton.addEventListener("click", function () {
      if (countInput.value > posts.length) {
        warning.innerText = `there are only ${posts.length} posts`;
        countInput.value = "";
        countInput.focus();
      } else {
        warning.innerText = "";

        window.location.hash += `/count=${countInput.value}`;
      }
    });
  }
  router.changeMenuColor();

  const brandFiltersCheck = document.querySelectorAll(".brand-filters-check");
  const processorFiltersCheck = document.querySelectorAll(
    ".processor-filters-check"
  );
  const diagonalFiltersCheck = document.querySelectorAll(
    ".diagonal-filters-check"
  );
  const ramFiltersCheck = document.querySelectorAll(".ram-filters-check");
  const ssdFiltersCheck = document.querySelectorAll(".ssd-filters-check");
  const confirmFiltersBtn = document.querySelector(".confirm-filters-btn");

  let pathStr = "laptops";

  if (confirmFiltersBtn) {
    confirmFiltersBtn.addEventListener("click", function () {
      let pathStr = "laptops";
      pathStr += `/&brand:`;
      brandFiltersCheck.forEach((el) => {
        if (el.checked) {
          pathStr += `,${el.dataset.brand}`;
        }
      });
      pathStr += `&processor:`;
      processorFiltersCheck.forEach((el) => {
        if (el.checked) {
          pathStr += `,${el.dataset.processor}`;
        }
      });
      pathStr += `&diagonal:`;
      diagonalFiltersCheck.forEach((el) => {
        if (el.checked) {
          pathStr += `,${el.dataset.diagonal}`;
        }
      });
      pathStr += `&ram:`;
      ramFiltersCheck.forEach((el) => {
        if (el.checked) {
          pathStr += `,${el.dataset.ram}`;
        }
      });
      pathStr += `&ssd:`;
      ssdFiltersCheck.forEach((el) => {
        if (el.checked) {
          pathStr += `,${el.dataset.ssd}`;
        }
      });

      window.location.hash = pathStr;
    });
  }
}
function renderComponent(component) {
  const outlet = document.querySelector(".router-outlet");
  outlet.innerHTML = component;

  let pathStr = window.location.hash;
  if (pathStr.includes("&")) {
    const filterInputs = document.querySelectorAll(".filters-check");
    let pathFilters = pathStr.split("&");

    let brands = pathFilters[1].split(",");
    let processors = pathFilters[2].split(",");
    let diagonals = pathFilters[3].split(",");
    let rams = pathFilters[4].split(",");
    let ssds = pathFilters[5].split(",");

    function checked(filter, prop) {
      filter.forEach((el) => {
        filterInputs.forEach((input) => {
          if (el === input.dataset[prop]) {
            input.setAttribute("checked", true);
          }
        });
      });
    }

    checked(brands, "brand");
    checked(processors, "processor");
    checked(diagonals, "diagonal");
    checked(rams, "ram");
    checked(ssds, "ssd");
  }
}

function initRoute() {
  addEventListener("hashchange", renderRoute);
  router.changeMenuColor();
}
