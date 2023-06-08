const router = {
  getHash() {
    return window.location.hash.slice(1);
  },
  isUndefined(type) {
    return typeof type === "undefined";
  },
  getBasePath(path) {
    return path.split("/")[0] + "/";
  },
  getBasePathProd(path) {
    return path.split("|")[0] + "|";
  },
  changeMenuColor() {
    const a = document.querySelectorAll("a");
    let hash = window.location.hash;
    const menuItems = document.querySelectorAll(".menu-item");

    a.forEach((el) => {
      if (hash === el.hash) {
        menuItems.forEach((item) => {
          item.classList.remove("active");
        });
        el.parentElement.classList.add("active");
      }
      if (hash.includes("/")) {
        menuItems.forEach((item) => {
          item.classList.remove("active");
        });
      }
    });
  },
};
