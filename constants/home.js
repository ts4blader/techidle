import { ALL } from "./all";
import { shuffleArray } from "../libs/mixin";
import FAQ from "./faq.json";

const HERO = {
  title: "This is for you",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  cta: {
    text: "Browse now",
    url: "/products",
  },
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

const CARDS = [
  {
    title: "ALFRED ADLER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    date: "aug 17, 2021",
    bg: "olena.jpg",
  },
  {
    title: "CARL JUNG",
    description:
      "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it",
    date: "november 5, 2021",
    bg: "grace.jpg",
  },
  {
    title: "SIGMUND FREUD",
    description:
      "Kangaskhan protects its child by keeping it in its pouch. It has zero forgiveness for those who harm its child and will beat them down",
    date: "april 14, 2021",
    bg: "jonas.jpg",
  },
];

const PARTNERS = [
  {
    name: "tiki",
    img: "tiki.png",
    url: "https://tiki.vn/",
  },
  {
    name: "lazada",
    img: "lazada.jpg",
    url: "https://www.lazada.vn/",
  },
  {
    name: "shopee",
    img: "shopee.jpg",
    url: "https://shopee.vn/",
  },
];

export { HERO, TRENDING, NEW, CARDS, FAQ, PARTNERS };
