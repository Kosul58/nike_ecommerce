import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoex,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  shoey,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
  { link: "/product", label: "Products" },
  { link: "/login", label: "Login" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: shoex,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: shoey,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "John Smith",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Tyla Banks",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const displayProducts = [
  {
    label: "Nike Air Force 1",
    price: 120,
    image: shoe4,
    year: 2025,
  },
  {
    label: "Nike Air Max 90",
    price: 130,
    image: shoe5,
    year: 2024,
  },
  {
    label: "Nike Dunk Low",
    price: 110,
    image: shoe6,
    year: 2023,
  },
  {
    label: "Nike Air Jordan 1",
    price: 150,
    image: shoe7,
    year: 2025,
  },
  {
    label: "Nike React Infinity Run",
    price: 160,
    image: shoe8,
    year: 2024,
  },
  {
    label: "Nike Pegasus 40",
    price: 140,
    image: thumbnailShoe1,
    year: 2023,
  },
  {
    label: "Nike Blazer Mid '77",
    price: 115,
    image: thumbnailShoe2,
    year: 2025,
  },
  {
    label: "Nike LeBron 21",
    price: 200,
    image: thumbnailShoe3,
    year: 2024,
  },
  {
    label: "Nike ZoomX Vaporfly",
    price: 250,
    image: s11,
    year: 2023,
  },
  {
    label: "Nike SB Dunk High",
    price: 125,
    image: s12,
    year: 2025,
  },
  {
    label: "Nike Air Zoom Tempo",
    price: 180,
    image: s13,
    year: 2024,
  },
  {
    label: "Nike Phantom GX Elite",
    price: 220,
    image: s14,
    year: 2023,
  },
  {
    label: "Nike Cosmic Unity 3",
    price: 170,
    image: s15,
    year: 2025,
  },
  {
    label: "Nike Free Run 5.0",
    price: 135,
    image: s16,
    year: 2024,
  },
  {
    label: "Nike Metcon 9",
    price: 145,
    image: s17,
    year: 2023,
  },
  {
    label: "Nike Zoom Freak 5",
    price: 190,
    image: s18,
    year: 2025,
  },
  {
    label: "Nike Air Huarache",
    price: 125,
    image: s19,
    year: 2024,
  },
  {
    label: "Nike Air Max Plus",
    price: 160,
    image: s20,
    year: 2023,
  },
  {
    label: "Nike Air More Uptempo",
    price: 165,
    image: s21,
    year: 2025,
  },
  {
    label: "Nike Court Vision Low",
    price: 110,
    image: s22,
    year: 2024,
  },
  {
    label: "Nike Tiempo Legend 10",
    price: 310,
    image: s23,
    year: 2023,
  },
  {
    label: "Nike Mercurial Vapor 15",
    price: 350,
    image: s24,
    year: 2025,
  },
];
