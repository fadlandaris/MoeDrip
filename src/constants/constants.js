import { Tennis, Hype, Skate, BiHome, BiCollection, BsPerson, BsPhone, BiArrowBack, Yeezy, FaGithub, FaLinkedin, FaInstagram, p_img1, p_img1_2, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, p_img10, p_img11, p_img12, p_img13, p_img14, p_img15, p_img16, p_img17, p_img18, p_img19, p_img20, SiNike, SiAdidas, SiReebok, FiSearch, } from "../assets/assets"

export const heroTitle = [
  {
    id: 'home',
    title: "moedrip . . . . . . . . . . . . .  "
  },
  {
    id: '01',
    title: "01"
  }
]

export const heroImg = [
  {
    id: '1',
    title: "Tennis",
    img: Skate
  },
  {
    id: '2',
    title: "Skate",
    img: Tennis
  },
  {
    id: '3',
    title: "Hype",
    img: Hype
  },
]


export const heroDesc = [
  {
    id: '1',
    text: 'Sneakers originated&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as athletic footwear in the late 1800s and became mainstream&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by the 1920s, thanks to brands like Converse. They gained significance in the 1980s through hip-hop and streetwear culture. Today, sneakers are worn both for sports and fashion,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with limited-edition releases driving a large collector’s market. Their comfort and style make them a popular choice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;around the world.'
  },
  {
    id: '2',
    text: `Shoes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;designed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for sports have become a major&nbsp;trend in hypebeast culture, symbolizing status and&nbsp;style. Limited-edition&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;releases create a vibrant collector's market,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;combining comfort and unique designs. Their blend of performance and aesthetics has solidified their place in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contemporary fashion.`
  },
]

export const navLinks = [
  {
    id: '1',
    link: '',
    nav: "Back",
    icon: BiArrowBack
  },
  {
    id: '2',
    link: 'home',
    nav: "Home",
    icon: BiHome
  },
  {
    id: '3',
    link: 'collection',
    nav: "Collection",
    icon: BiCollection
  },
  {
    id: '4',
    link: 'about',
    nav: "About",
    icon: BsPerson
  },
  {
    id: '5',
    link: 'contact',
    nav: "Contact",
    icon: BsPhone
  },
]

export const discount = [
  {
    id: "Discount",
    title: "Disc Up to 30% for Selected Sneakers",
    desc: "Celebrating the Birth and Most Successful Eras of Moedrip ' A Legacy of Innovation, Performance, and Style ' ",
    image: [Yeezy]
  },
]

export const categoryFilters = [
  {
    id: "All Brand",
    title: 'Category',
    desc: 'Explore Our Variety of Brands !',
    value: [
      { title: 'All Brand', values: 'all-brand' },
      { title: 'Nike', values: 'nike', icon: SiNike },
      { title: 'Adidas', values: 'adidas', icon: SiAdidas },
      { title: 'Reebok', values: 'reebok', icon: SiReebok },
      // { title: 'New Balance', values: 'new-balance', icon: SiNewbalance },
      // { title: 'Onitsuka Tiger', values: 'onitsuka-tiger', icon: SiNewbalance },
    ]
  },
  {
    id: "Types",
    value: [
      { title: 'All Sections', values: 'unisex' },
      { title: 'Men', values: 'men' },
      { title: 'Women', values: 'women' },
    ]
  },
];

export const authenticGuaranteed = [
  {
    title: "Please Make Sure The Size Fits You",
    value: [
      { title: `If you are unsure about your size, please click the size chart button and browse through the chart to find your correct measurements. Our company policy does not accept refunds or returns for sizing-related issues. For more details, kindly contact our Customer Service to consult further`, },
    ]
  },
  {
    title: "Authentic. Guaranteed",
    value: [
      { title: `We carefully inspect each purchase and apply our guarantee to ensure the product's authenticity. The guarantee is valid for 2 days after delivery. If you have any concerns, please contact our Customer Service and Specialist from Monday to Saturday, 10:00 AM - 9:00 PM (GMT+7 / WIB).` },
    ]
  },
];



export const collectionFilters = [
  {
    id: "Relevant",
    value: [
      {title: 'Relevant', values: 'relevant',  },
      {title: 'Low To High', values: 'low-high',  },
      {title: 'High to Low', values: 'high-low',  },
    ]
  },
]

export const footer = [
  {
    id: "footer",
    Title: [
      { 
        name: 'Moedrip',
        desc: "Transform Your Aesthetic with Our Magnificent ",
        desc2: "and Meticulously Curated Selection of Updated Sneakers"
      }
    ],
    companyTitle: "Company",
    company: [
      { footerLink: "Home", link:"Home" },
      { footerLink: "Collection", link:"Collection" },
      { footerLink: "About", link: "About" },
      { footerLink: "Contact", link:"Contact" },
    ],
    aboutTitle: "Reach Me Out",
    about: [
      { icon: FaGithub, link: "https://github.com/fadlandaris" },
      { icon: FaLinkedin, link: "https://www.linkedin.com/in/fadlan-daris-4b85a7218/" },
      { icon: FaInstagram, link: "https://www.instagram.com/fadlandaris/" }
    ]
  },
];

export const products = [
  {
    id: '1',
    _id: "aaaaa",
    name: "Nike G.T. Hustle 3 Blueprint EP",
    description: "A classic and versatile design, this Hustle 3 Blueprint EP features a durable upper and iconic Air-Sole cushioning.",
    price: 100,
    image: [p_img1, p_img1_2],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1712048345448, // February 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '2',
    _id: "aaaab",
    name: "Adidas Anthony Edwards",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 100,
    image: [p_img12],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Women'
  },
  {
    id: '3',
    _id: "aaaac",
    name: "Nike V2K Run",
    description: "The V2K is a look pulled straight from an early 2000s running catalogue (complete with durable leather upper).",
    price: 175,
    image: [p_img8],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1730228345448, // September 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '4',
    _id: "aaaad",
    name: "Nike Blazer Mid '77",
    description: "The Nike Blazer Mid '77 channels the old-school look of Nike Basketball with a vintage midsole finish.",
    price: 90,
    image: [p_img3],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1717238345448, // April 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '5',
    _id: "aaaae",
    name: "Nike Killshot 2",
    description: "Inspired by our original tennis shoe, the Killshot 2 gets refreshed with soft suede and smooth leather.",
    price: 115,
    image: [p_img10],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1735428345448, // November 2024
    discount: true,
    newArrival: false,
    type: 'women'
  },
  {
    id: '6',
    _id: "aaaaf",
    name: "Adidas Samba XLG",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 110,
    image: [p_img11],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '7',
    _id: "aaaag",
    name: "Nike Dunk Low",
    description: "Make a splash with this '80s throwback. The Dunk Low pairs cool tones.",
    price: 120,
    image: [p_img2],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1714640345448, // March 2024
    discount: true,
    newArrival: false,
    type: 'women'
  },
  {
    id: '8',
    _id: "aaaah",
    name: "Adidas Ultraboost 1.0",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 180,
    image: [p_img13],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: true,
    newArrival: false,
    type: 'Men'
  },
  {
    id: '9',
    _id: "aaaai",
    name: "Nike Air Max 1 '86 OG",
    description: "Meet the leader of the pack. The Air Max 1 '86 OG gets elevated with mixed materials in a camo print.",
    price: 95,
    image: [p_img5],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1722428345448, // June 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '10',
    _id: "aaaaj",
    name: "Adidas Harden Volume 8",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 160,
    image: [p_img16],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '11',
    _id: "aaaak",
    name: "Nike Air Max Dn",
    description: "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes.",
    price: 105,
    image: [p_img7],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1727628345448, // August 2024
    discount: true,
    newArrival: false,
    type: 'Men'
  },
  {
    id: '12',
    _id: "aaaal",
    name: "Nike Air Max SYSTM",
    description: "Take your sneaker game to the Max in kicks that bring back all the best trends of '80s. Soft, velvety nubuck.",
    price: 150,
    image: [p_img4],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1719830345448, // May 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '13',
    _id: "aaaam",
    name: "Nike Air Force 1 '07 LV8",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 100,
    image: [p_img9],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '14',
    _id: "aaaan",
    name: "Nike Air Force 1 '07 WB",
    description: "The legend lives on in the Nike Air Force 1 '07 WB, a low-cut take on the iconic AF-1.",
    price: 110,
    image: [p_img6],
    category: "Nike",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1725028345448, // July 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '15',
    _id: "aaaao",
    name: "Adidas NMD_R1",
    description: "Futuristic design meets comfort with the NMD_R1 V3, featuring responsive Boost midsole cushioning and bold TPU overlays.",
    price: 140,
    image: [p_img14],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1727628345448, // August 2024
    discount: true,
    newArrival: false,
    type: 'women'
  },
  {
    id: '16',
    _id: "aaaap",
    name: "Adidas Texas Tech x Mahomes",
    description: "Comfortable, durable, and timeless—it's number 1 for a reason. The classic '80s.",
    price: 104,
    image: [p_img15],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '17',
    _id: "aaaaq",
    name: "Adidas Superstar Originals",
    description: "A timeless classic, the Superstar Originals features a durable leather upper and iconic rubber shell toe for everyday comfort.",
    price: 85,
    image: [p_img17],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1730228345448, // September 2024
    discount: false,
    newArrival: true,
    type: 'Men'
  },
  {
    id: '18',
    _id: "aaaar",
    name: "Adidas Forum Low",
    description: "With its retro basketball style, the Forum Low offers a premium leather upper and a secure ankle strap.",
    price: 95,
    image: [p_img18],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1732828345448, // October 2024
    discount: false,
    newArrival: true,
    type: 'Women'
  },
  {
    id: '19',
    _id: "aaaas",
    name: "Adidas NMD_R1 V3",
    description: "Futuristic design meets comfort with the NMD_R1 V3, featuring responsive Boost midsole cushioning and bold TPU overlays.",
    price: 140,
    image: [p_img19],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1727628345448, // August 2024
    discount: true,
    newArrival: false,
    type: 'women'
  },
  {
    id: '20',
    _id: "aaaat",
    name: "Adidas EQT Support 93",
    description: "A modern update to the '90s classic, the EQT Support 93 features premium materials and unmatched comfort.",
    price: 120,
    image: [p_img20],
    category: "Adidas",
    subCategory: "Sneakers",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    date: 1735428345448, // November 2024
    discount: false,
    newArrival: true,
    type: 'women'
  },
];



