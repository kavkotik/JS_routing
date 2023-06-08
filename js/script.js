const routes = [
  { path: "", component: homePage },
  { path: "laptops", component: laptopsPage },
  { path: "laptops/", component: filterPage },
  { path: "about", component: aboutPage },
  { path: "blog", component: blogPage },
  { path: "blog/", component: postPage },
  { path: "**", component: _404Page },
];

renderRoute();
initRoute();
