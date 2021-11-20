const phone = [
  "5K3",
  "7A",
  "8CP",
  "9T",
  "11-5G",
  "11-lite-5G",
  "12C-lite",
  "A3T",
  "C8",
  "K3D",
  "K5B",
  "K5T",
  "K6T",
  "K8",
  "K9D",
  "K10A",
  "K11R",
  "M21B",
  "Note-10-pro",
  "Note-10",
  "R10B",
];

const REDMI = phone.map((item) => {
  return { name: item.split("-").join(" "), img: item + ".png", content: [] };
});

export { REDMI };
