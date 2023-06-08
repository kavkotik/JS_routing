const posts = [
  { id: 1, title: "post1", text: "post1 text" },
  { id: 2, title: "post2", text: "post2 text" },
  { id: 3, title: "post3", text: "post3 text" },
  { id: 4, title: "post4", text: "post4 text" },
  { id: 5, title: "post5", text: "post5 text" },
  { id: 6, title: "post6", text: "post6 text" },
];

const laptops = [
  {
    brand: "asus",
    processor: "intel-i7",
    diagonal: "17",
    ram: "8",
    ssd: "512MB",
    price: "30000",
    model: "asus-an1",
  },
  {
    brand: "lenovo",
    processor: "amd-ryzen-8",
    diagonal: "20",
    ram: "10",
    ssd: "800MB",
    price: "25000",
    model: "lenovo-ad45",
  },
  {
    brand: "hp",
    processor: "amd-ryzen-9",
    diagonal: "15",
    ram: "6",
    ssd: "2T",
    price: "28000",
    model: "hp-ppp",
  },
  {
    brand: "samsung",
    processor: "intel-i5",
    diagonal: "25",
    ram: "4",
    ssd: "800MB",
    price: "24000",
    model: "samsung-bfa12",
  },
  {
    brand: "hp",
    processor: "intel-i7",
    diagonal: "20",
    ram: "6",
    ssd: "2T",
    price: "27000",
    model: "hp-max3",
  },
  {
    brand: "asus",
    processor: "amd-ryzen-8",
    diagonal: "17",
    ram: "10",
    ssd: "512MB",
    price: "22000",
    model: "asus-l800",
  },
];

const filters = [
  {
    brand: ["asus", "lenovo", "hp", "samsung"],
    processor: ["intel-i5", "intel-i7", "amd-ryzen-8", "amd-ryzen-9"],
    diagonal: ["17", "20", "25", "15"],
    ram: ["8", "10", "4", "6"],
    ssd: ["512MB", "800MB", "2T"],
  },
];
