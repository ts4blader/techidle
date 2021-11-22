const phone = ["F3", "M3-pro-5G", "Note-10-5G", "Note-10S", "X3-pro"];

const POCO = phone.map((item) => {
  return {
    name: "POCO " + item.split("-").join(" "),
    img: `/images/poco/${item}.png`,
    content: [],
  };
});

export { POCO };
