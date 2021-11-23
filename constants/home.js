import { ALL } from "./all";
import { shuffleArray } from "../libs/mixin";

const HERO = {
  title: "This is for you",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  cta: "Browse now",
  preview: "",
};

const TRENDING = shuffleArray(ALL).slice(0, 6);

const thumbnail = ["K3S", "K9D", "K11R", "K19", "R10"];

const NEW = thumbnail.map((item) => {
  return {
    name: item,
    img: `/images/banner/${item}.jpg`,
  };
});

export { HERO, TRENDING, NEW };
