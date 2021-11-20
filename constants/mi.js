const phone = [
  "A2-lite",
  "C3G",
  "C3I",
  "C3J",
  "C3K",
  "C3M",
  "F1",
  "F2",
  "F4",
  "F4L",
  "F6-lite",
  "F7A",
  "E7T",
  "K3S",
  "J3S",
  "J6A",
  "J6B",
  "J15S",
  "J17",
  "J19",
  "J19S",
];

const MI = phone.map((item) => {
  return { name: item.split("-").join(" "), img: item + ".png", content: [] };
});

export { MI };
