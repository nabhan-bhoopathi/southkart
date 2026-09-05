export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  badge: string
  colors: Array<string>
  weight: string
  drop: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'R/01 Velocity',
    image: '/shoe-velocity.svg',
    description: 'Our fastest everyday runner pairs a sculpted foam stack with a breathable engineered knit upper. The rocker geometry keeps transitions smooth while the grippy split-rubber outsole stays planted on wet city streets.',
    shortDescription: 'Responsive road runner with cloud-soft impact protection.',
    price: 148,
    category: 'Road / Everyday',
    badge: 'New drop',
    colors: ['#d72d2d', '#262421', '#eee8df'],
    weight: '8.4 oz',
    drop: '7 mm',
  },
  {
    id: 2,
    name: 'S/02 Afterdark',
    image: '/shoe-afterdark.svg',
    description: 'A low-profile street silhouette with running-shoe comfort underfoot. Layered suede, ripstop mesh, and reflective hits make the S/02 equally ready for the commute and the late shift.',
    shortDescription: 'Night-ready street shoe with reflective detailing.',
    price: 136,
    category: 'Street / Lifestyle',
    badge: 'Bestseller',
    colors: ['#262421', '#ddd8cf', '#8e1f1f'],
    weight: '10.1 oz',
    drop: '5 mm',
  },
  {
    id: 3,
    name: 'T/03 Circuit',
    image: '/shoe-circuit.svg',
    description: 'Built low and stable for quick cuts, heavy lifts, and hard intervals. A reinforced midfoot cage locks you in while the flexible forefoot lets you move naturally through every rep.',
    shortDescription: 'Stable cross-trainer made for explosive sessions.',
    price: 128,
    category: 'Training / Studio',
    badge: 'Studio pick',
    colors: ['#f4f0e8', '#c72b2b', '#6d6a64'],
    weight: '9.7 oz',
    drop: '4 mm',
  },
  {
    id: 4,
    name: 'R/04 Long Run',
    image: '/shoe-longrun.svg',
    description: 'Maximum cushioning without the marshmallow wobble. The broad platform and dual-density midsole keep long miles controlled, comfortable, and surprisingly lively.',
    shortDescription: 'High-cushion cruiser for double-digit miles.',
    price: 164,
    category: 'Road / Distance',
    badge: 'Long run',
    colors: ['#b92020', '#efe7db', '#43413e'],
    weight: '9.2 oz',
    drop: '8 mm',
  },
]

export default products
