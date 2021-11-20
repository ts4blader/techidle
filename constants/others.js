const others = [
  "mi-33W-wall-charger-eu",
  "mi-air-3H",
  "mi-air-compressor",
  "mi-ax3600",
  "mi-camera-8X",
  "mi-compact-projector",
  "mi-essential-KR",
  "mi-fan2lite",
  "mi-luggage-20",
  "mi-robot-vacuum-mop",
  "mi-router-4A",
  "mi-router-4C",
  "mi-smart-scale-2",
  "mi-vacuum-cleaner-G10",
  "mi-band-5",
  "mi-bedsidelamp-2",
  "mi-boxs",
  "mi-pod-2",
  "mi-power-bank-ultra-compact",
  "mi-screen-X",
  "mi-screen-zero",
  "mi-watch-lite",
  "mi-watch",
  "mi-ortable-bluetooth-black",
  "redmi-power-bank-10000",
  "mi-robot-vacuum-1C",
  "mi-band-6",
  "mi-tvstick",
  "mi-typec-US",
  "mi-vacuum-cleaner-light",
  "mi-vacuum-essential",
  "mi-wifi-AC",
];

const OTHER = others.map((item) => {
  return { name: item.split("-").join(" "), img: item + ".png", content: [] };
});

export { OTHER };
