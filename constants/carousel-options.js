const HOME_CAROUSEL = {
  type: "carousel",
  perView: 4,
  gap: 50,
  autoplay: 10000,
  hoverpause: true,
  peek: {
    before: 100,
    after: 100,
  },
};

const PRODUCTS_CAROUSEL = {
  type: "carousel",
  perView: 6,
  gap: 50,
  autoplay: 10000,
  hoverpause: true,
  peek: {
    before: 0,
    after: 150,
  },
};

export { HOME_CAROUSEL, PRODUCTS_CAROUSEL };
