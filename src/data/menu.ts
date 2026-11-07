import paneerTikka from "@/assets/paneer-tikka.jpg";
import haraBhara from "@/assets/hara-bhara.jpg";
import manchurian from "@/assets/manchurian.jpg";
import shahiPaneer from "@/assets/shahi-paneer.jpg";
import kadaiPaneer from "@/assets/kadai-paneer.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import mixVeg from "@/assets/mix-veg.jpg";
import malaiKofta from "@/assets/malai-kofta.jpg";
import butterNaan from "@/assets/butter-naan.jpg";
import garlicNaan from "@/assets/garlic-naan.jpg";
import breads from "@/assets/breads.jpg";
import lachha from "@/assets/lachha-paratha.jpg";
import biryani from "@/assets/veg-biryani.jpg";
import jeera from "@/assets/jeera-rice.jpg";
import steamed from "@/assets/steamed-rice.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import chole from "@/assets/chole-bhature.jpg";
import sandwich from "@/assets/sandwich.jpg";
import lassi from "@/assets/lassi.jpg";
import chai from "@/assets/chai.jpg";
import beverages from "@/assets/beverages.jpg";
import limeSoda from "@/assets/lime-soda.jpg";
import gulab from "@/assets/gulab-jamun.jpg";
import rasmalai from "@/assets/rasmalai.jpg";
import iceCream from "@/assets/ice-cream.jpg";

export const categories = [
  "Starters",
  "Main Course",
  "Indian Breads",
  "Rice & Biryani",
  "Snacks",
  "Beverages",
  "Desserts",
] as const;

export type Category = (typeof categories)[number];

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
};

export const dishes: Dish[] = [
  { id: "paneer-tikka", name: "Paneer Tikka", category: "Starters", price: 249, image: paneerTikka, featured: true, description: "Chunks of cottage cheese marinated in spiced yoghurt, chargrilled with peppers and onion." },
  { id: "hara-bhara-kebab", name: "Hara Bhara Kebab", category: "Starters", price: 199, image: haraBhara, description: "Crisp patties of spinach, green peas and potato, served with mint chutney." },
  { id: "veg-manchurian", name: "Veg Manchurian", category: "Starters", price: 189, image: manchurian, description: "Vegetable dumplings tossed in a tangy garlic-soy sauce with spring onions." },

  { id: "shahi-paneer", name: "Shahi Paneer", category: "Main Course", price: 279, image: shahiPaneer, featured: true, description: "Soft paneer in a rich, mildly sweet cashew and tomato gravy finished with cream." },
  { id: "kadai-paneer", name: "Kadai Paneer", category: "Main Course", price: 269, image: kadaiPaneer, description: "Paneer, capsicum and onion cooked with freshly ground kadai masala." },
  { id: "dal-makhani", name: "Dal Makhani", category: "Main Course", price: 229, image: dalMakhani, featured: true, description: "Black lentils slow-cooked overnight with butter and cream — a house favourite." },
  { id: "mix-veg", name: "Mix Veg", category: "Main Course", price: 209, image: mixVeg, description: "Seasonal vegetables in a homestyle onion-tomato masala." },
  { id: "malai-kofta", name: "Malai Kofta", category: "Main Course", price: 259, image: malaiKofta, description: "Paneer and potato dumplings in a velvety, gently spiced cream gravy." },

  { id: "butter-naan", name: "Butter Naan", category: "Indian Breads", price: 59, image: butterNaan, description: "Soft tandoor-baked naan brushed generously with butter." },
  { id: "garlic-naan", name: "Garlic Naan", category: "Indian Breads", price: 69, image: garlicNaan, description: "Naan topped with chopped garlic and fresh coriander." },
  { id: "plain-naan", name: "Plain Naan", category: "Indian Breads", price: 49, image: breads, description: "Classic leavened flatbread, baked fresh in the tandoor." },
  { id: "tandoori-roti", name: "Tandoori Roti", category: "Indian Breads", price: 29, image: butterNaan, description: "Whole wheat roti baked in the clay oven, light and wholesome." },
  { id: "butter-roti", name: "Butter Roti", category: "Indian Breads", price: 35, image: butterNaan, description: "Tandoori roti finished with a layer of melting butter." },
  { id: "lachha-paratha", name: "Lachha Paratha", category: "Indian Breads", price: 65, image: lachha, description: "Flaky, many-layered whole wheat paratha with a crisp finish." },

  { id: "veg-biryani", name: "Veg Biryani", category: "Rice & Biryani", price: 239, image: biryani, featured: true, description: "Fragrant basmati layered with vegetables, saffron and whole spices, served with raita." },
  { id: "jeera-rice", name: "Jeera Rice", category: "Rice & Biryani", price: 149, image: jeera, description: "Basmati rice tempered with cumin and ghee." },
  { id: "steamed-rice", name: "Steamed Rice", category: "Rice & Biryani", price: 119, image: steamed, description: "Fluffy long-grain basmati, the perfect partner to any curry." },
  { id: "fried-rice", name: "Fried Rice", category: "Rice & Biryani", price: 169, image: friedRice, description: "Wok-tossed rice with crunchy vegetables and spring onion." },

  { id: "pav-bhaji", name: "Pav Bhaji", category: "Snacks", price: 159, image: pavBhaji, featured: true, description: "Buttery mashed vegetable bhaji with toasted pav, onions and lemon." },
  { id: "chole-bhature", name: "Chole Bhature", category: "Snacks", price: 179, image: chole, featured: true, description: "Spiced Punjabi chickpeas with two fluffy bhature, onions and pickle." },
  { id: "veg-sandwich", name: "Veg Sandwich", category: "Snacks", price: 119, image: sandwich, description: "Grilled sandwich with cucumber, tomato and green chutney." },
  { id: "french-fries", name: "French Fries", category: "Snacks", price: 109, image: sandwich, description: "Golden, crispy fries with a dusting of peri-peri masala." },

  { id: "sweet-lassi", name: "Sweet Lassi", category: "Beverages", price: 89, image: lassi, description: "Thick churned yoghurt drink topped with malai and pistachio." },
  { id: "masala-chai", name: "Masala Chai", category: "Beverages", price: 39, image: chai, description: "Kadak tea brewed with ginger and cardamom, served in a kulhad." },
  { id: "cold-coffee", name: "Cold Coffee", category: "Beverages", price: 99, image: beverages, description: "Creamy chilled coffee, blended smooth and dusted with cocoa." },
  { id: "fresh-lime-soda", name: "Fresh Lime Soda", category: "Beverages", price: 69, image: limeSoda, description: "Fizzy and refreshing — have it sweet, salted or mixed." },

  { id: "gulab-jamun", name: "Gulab Jamun", category: "Desserts", price: 79, image: gulab, featured: true, description: "Warm milk-solid dumplings soaked in cardamom sugar syrup." },
  { id: "rasmalai", name: "Rasmalai", category: "Desserts", price: 99, image: rasmalai, description: "Soft chhena discs in chilled saffron milk with nuts." },
  { id: "ice-cream", name: "Ice Cream", category: "Desserts", price: 89, image: iceCream, description: "Two scoops — choose from vanilla, chocolate or strawberry." },
];

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
