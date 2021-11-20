const phone = ["F3", "M3-pro-5G", "Note-10-5G", "Note-10S", "X3-pro"];

const POCO = phone.map((item) => {
  return { name: item.split("-").join(" "), img: item + ".png", content: [] };
});

export { POCO };
