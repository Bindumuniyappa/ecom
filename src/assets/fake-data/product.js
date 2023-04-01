// all images imported from images directory
import product_01_image_01 from "../images/fashion (1).png";
import product_01_image_02 from "../images/fashion (2).png";
import product_01_image_03 from "../images/fashion (3).png";

import product_02_image_01 from "../images/phone(1).png";
import product_02_image_02 from "../images/phone(2).png";
import product_02_image_03 from "../images/phone(3).png";

import product_03_image_01 from "../images/tab (1).png";
import product_03_image_02 from "../images/tab (2).png";
import product_03_image_03 from "../images/tab (3).png";

import product_04_image_01 from "../images/headset(1).png";
import product_04_image_02 from "../images/headset(2).png";
import product_04_image_03 from "../images/headset(3).png";

import product_05_image_01 from "../images/fashion(4).png";
import product_05_image_02 from "../images/fashion(5).png";
import product_05_image_03 from "../images/fashion(6).png";

import product_06_image_01 from "../images/fashion(7).png";
import product_06_image_02 from "../images/fashion(8).png";
import product_06_image_03 from "../images/fashion(9).png";

import product_07_image_01 from "../images/shoes (1).png";
import product_07_image_02 from "../images/shoes (2).png";
import product_07_image_03 from "../images/shoes (3).png";
import product_07_image_04 from "../images/shoes (4).png";

const products = [
  //-----------------Fashion---------------------------------------------------------
  {
    id: "1",
    title: "Twills",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "2",
    title: "Twills(Brown)",
    price: 24.0,
    image01: product_01_image_02,
    image02: product_01_image_01,
    image03: product_01_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "3",
    title: "Twills(Dark)",
    price: 29.0,
    image01: product_01_image_03,
    image02: product_01_image_02,
    image03: product_01_image_01,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "4",
    title: "Bull",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "5",
    title: "Flying Michine",
    price: 35.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "6",
    title: "Bull(Combo)",
    price: 32.0,
    image01: product_05_image_03,
    image02: product_05_image_01,
    image03: product_05_image_02,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "7",
    title: "Trands(Pants)",
    price: 24.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "8",
    title: "Cotton(Pants)",
    price: 29.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "9",
    title: "Gens(Pants)",
    price: 49.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_01,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
  //-----------------Eletronices----------------------------------------------------

  {
    id: "10",
    title: "iphone 14",
    price: 150.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "11",
    title: "iTab(8th Gen)",
    price: 119.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "12",
    title: "Head Set",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "13",
    title: "iphone 13",
    price: 129.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "14",
    title: "iTab(7thGen)",
    price: 109.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "15",
    title: "Apple Headset",
    price: 114.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "16",
    title: "iphone 12",
    price: 109.0,
    image01: product_02_image_03,
    image02: product_02_image_01,
    image03: product_02_image_02,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "17",
    title: "iTab(6thGen)",
    price: 99.0,
    image01: product_03_image_03,
    image02: product_03_image_01,
    image03: product_03_image_02,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "18",
    title: "Apple Dolbs",
    price: 169.0,
    image01: product_04_image_03,
    image02: product_04_image_01,
    image03: product_04_image_02,
    category: "Eletronices",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

 //-----------------shoes-----------------------------------------------------

  {
    id: "19",
    title: "Woodland",
    price: 49.0,
    image01: product_07_image_01,
    image02: product_07_image_03,
    image03: product_07_image_01,
    category: "Shoes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "20",
    title: "Bata(Lofers Shoes) ",
    price: 35.0,
    image01: product_07_image_03,
    image02: product_07_image_01,
    image03: product_07_image_03,
    category: "Shoes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "21",
    title: "Sparx(Sports Shoes)",
    price: 39.0,
    image01: product_07_image_04,
    image02: product_07_image_02,
    image03: product_07_image_04,
    category: "Shoes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "22",
    title: "Sparx(Shoes)",
    price: 29.0,
    image01: product_07_image_02,
    image02: product_07_image_04,
    image03: product_07_image_02,
    category: "Shoes",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;