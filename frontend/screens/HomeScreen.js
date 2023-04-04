import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Card from "../components/Card";

const fakeData = [
  {
    type: "Hotel",
    locationId: "20264157",
    name: "Hotel Cerro",
    latitude: "35.27875",
    longitude: "-120.66346",
    numReviews: "28",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/23/d0/86/a1/classic-king.jpg",
    ranking: "#1 Best Value of 53 places to stay in San Luis Obispo",
    rating: "4.0",
    distance: "0.48195907912628694",
    isClosed: false,
    price: "$260 - $430",
    hotelClass: "0.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "17762001",
    name: "Hotel San Luis Obispo",
    latitude: "35.281723",
    longitude: "-120.66323",
    numReviews: "71",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/28/95/be/9e/hotel-slo-exterior.jpg",
    ranking: "#2 Best Value of 53 places to stay in San Luis Obispo",
    rating: "4.5",
    distance: "0.2779366078261577",
    isClosed: false,
    price: "$346 - $521",
    hotelClass: "0.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "74078",
    name: "Garden Street Inn",
    latitude: "35.278473",
    longitude: "-120.66241",
    numReviews: "274",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/22/47/9c/b4/concours-d-elegance.jpg",
    ranking: "#3 Best Value of 53 places to stay in San Luis Obispo",
    rating: "4.0",
    distance: "0.507047672387665",
    isClosed: false,
    price: "$191 - $392",
    hotelClass: "3.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "3574809",
    name: "Granada Hotel and Bistro",
    latitude: "35.280357",
    longitude: "-120.661385",
    numReviews: "387",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/28/95/41/57/granada-hotel-slo.jpg",
    ranking: "#4 Best Value of 53 places to stay in San Luis Obispo",
    rating: "4.5",
    distance: "0.3949818656244792",
    isClosed: false,
    price: "$263 - $370",
    hotelClass: "3.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "15520764",
    name: "Downtown SLO Inn",
    latitude: "35.286163",
    longitude: "-120.66567",
    numReviews: "104",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/13/66/91/21/two-queen-beds.jpg",
    ranking: "#5 Best Value of 53 places to stay in San Luis Obispo",
    rating: "2.5",
    distance: "0.10962334873075553",
    isClosed: false,
    price: "$66 - $114",
    hotelClass: "2.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "1066130",
    name: "Budget Inn SLO Cal Poly",
    latitude: "35.286633",
    longitude: "-120.66513",
    numReviews: "79",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/01/11/ba/56/king-bed.jpg",
    ranking: "#6 Best Value of 53 places to stay in San Luis Obispo",
    rating: "2.0",
    distance: "0.0979673375452418",
    isClosed: false,
    price: "$75 - $140",
    hotelClass: "2.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "589368",
    name: "San Luis Inn & Suites",
    latitude: "35.28751",
    longitude: "-120.66375",
    numReviews: "169",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0e/d2/10/5f/san-luis-inn-suites.jpg",
    ranking: "#7 Best Value of 53 places to stay in San Luis Obispo",
    rating: "3.0",
    distance: "0.12432764042936588",
    isClosed: false,
    price: "$75 - $139",
    hotelClass: "2.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "81727",
    name: "Olive Tree Inn & Suites San Luis Obispo",
    latitude: "35.28695",
    longitude: "-120.66545",
    numReviews: "778",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/12/bf/6b/29/caption.jpg",
    ranking: "#8 Best Value of 53 places to stay in San Luis Obispo",
    rating: "2.5",
    distance: "0.12604185030845552",
    isClosed: false,
    price: "$88 - $164",
    hotelClass: "2.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "1382794",
    name: "Homestead Motel",
    latitude: "35.28594",
    longitude: "-120.66591",
    numReviews: "31",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/14/55/26/66/homestead-motel.jpg",
    ranking: "#9 Best Value of 53 places to stay in San Luis Obispo",
    rating: "1.5",
    distance: "0.1194813656858097",
    isClosed: false,
    price: "$68 - $159",
    hotelClass: "1.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Hotel",
    locationId: "11642864",
    name: "SLO Brew Lofts",
    latitude: "35.27937",
    longitude: "-120.663994",
    numReviews: "114",
    address: "San Luis Obispo, San Luis Obispo County, California",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0d/5e/6e/51/slo-brew-lofts.jpg",
    ranking: "#10 Best Value of 53 places to stay in San Luis Obispo",
    rating: "4.5",
    distance: "0.4389273570287382",
    isClosed: false,
    price: "$372 - $586",
    hotelClass: "0.0",
    subtype: undefined,
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description: "no description found",
  },
  {
    type: "Restaurant",
    locationId: "582571",
    name: "Novo Restaurant & Lounge",
    latitude: "35.27942",
    longitude: "-120.66446",
    numReviews: "1281",
    address: "726 Higuera St, San Luis Obispo, CA 93401-3513",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/01/62/14/00/worldwide-flavor-creekside.jpg",
    ranking: "#2 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.7029921592158219",
    isClosed: false,
    price: "$20 - $30",
    hotelClass: undefined,
    subtype: "American",
    phone: "+1 805-543-3986",
    website: "http://www.novorestaurant.com/",
    description: `Set against a rich eclectic backdrop, Novo's international flavors are the leading ingredients in an exotic dining experience. Located downtown San Luis Obispo in a historic turn of the century building with spectacular creekside dining. Multi award winning restaurant for food, service and ambiance. Extensive global and local wine and beer selection. Novo easily accommodates large parties either on one of the patios in in their lower level "cellar room". A favorite with both locals and tourists, Novo is a truly a San Luis Obispo experience.`,
  },
  {
    type: "Restaurant",
    locationId: "1991642",
    name: "Giuseppe’s Cucina Rustica",
    latitude: "35.281292",
    longitude: "-120.66169",
    numReviews: "609",
    address: "849 Monterey St, San Luis Obispo, CA 93401-3224",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/4d/f1/fc/beautifully-prepared.jpg",
    ranking: "#3 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.5284453707027305",
    isClosed: false,
    price: "$31",
    hotelClass: undefined,
    subtype: "Italian",
    phone: "+1 805-541-9922",
    website: "http://www.giuseppesrestaurant.com/home",
    description:
      'Welcome to Palazzo Giuseppe’s, downtown San Luis Obispo! Our Italian regional specialties are indicative to the Pugliese region in Italy, particularly Bari, a seaport on the Adriatic Sea from which most of our recipes originate. We hope you will enjoy and appreciate our great loyalty to the distinctive dishes, all of which we prepare with genuine and natural ingredients and methods. Our bread is baked from scratch every day in a wood-burning oven imported from Italy. Each loaf is made by hand, allowed to rise four times and slow-cooked to achieve the truly rustic appearance and taste you would find in a Baresi seaside village. DiFronzo is dedicated to producing & growing as many heirloom, organic vegetables, & fruits from his family farm as possible. Gelato, pizzas, & specialties including his estate grown Pinot Grigio, Pinot Noir, & Syrah. All of this takes time but to us it is an art and a labor of love. We are truly committed to bringing you "cucina genuina."',
  },
  {
    type: "Restaurant",
    locationId: "339021",
    name: "Big Sky Cafe",
    latitude: "35.278557",
    longitude: "-120.66431",
    numReviews: "959",
    address: "1121 Broad St, San Luis Obispo, CA 93401-3506",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/17/98/20/97/photo1jpg.jpg",
    ranking: "#4 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.7977420756379799",
    isClosed: false,
    price: "$1 - $30",
    hotelClass: undefined,
    subtype: "American",
    phone: "+1 805-545-5401",
    website: "http://www.bigskycafe.com",
    description: "",
  },
  {
    type: "Restaurant",
    locationId: "339017",
    name: "Buona Tavola",
    latitude: "35.281982",
    longitude: "-120.66041",
    numReviews: "367",
    address: "1037 Monterey St, San Luis Obispo, CA 93401-3206",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/ac/41/54/buona-tavola.jpg",
    ranking: "#5 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.5176586585935736",
    isClosed: false,
    price: "$21 - $40",
    hotelClass: undefined,
    subtype: "Italian",
    phone: "+1 805-545-8000",
    website: "http://www.btslo.com/slo.html",
    description: "",
  },
  {
    type: "Restaurant",
    locationId: "449315",
    name: "Goshi",
    latitude: "35.27838",
    longitude: "-120.66671",
    numReviews: "204",
    address: "570 Higuera St, San Luis Obispo, CA 93401-3849",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/08/da/2b/0c/goshi.jpg",
    ranking: "#6 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.8574560282520453",
    isClosed: false,
    price: "no price found",
    hotelClass: undefined,
    subtype: "Japanese",
    phone: "+1 805-543-8942",
    website: "http://www.menuclub.com",
    description: "",
  },
  {
    type: "Restaurant",
    locationId: "1628972",
    name: "Luna Red",
    latitude: "35.280266",
    longitude: "-120.66353",
    numReviews: "445",
    address: "1023 Chorro St, San Luis Obispo, CA 93401-3222",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/ab/9d/41/cocktails-in-san-luis.jpg",
    ranking: "#7 of 193 Restaurants in San Luis Obispo",
    rating: "4.0",
    distance: "0.6068094718375239",
    isClosed: false,
    price: "$10 - $65",
    hotelClass: undefined,
    subtype: "Latin",
    phone: "+1 805-540-5243",
    website: "http://www.lunaredslo.com/",
    description:
      "Located in the heart of downtown SLO next to the historic Mission Plaza, Luna Red is a lively gathering spot that features a globally- inspired menu of handcrafted plates, craft cocktails and an award-winning global wine.",
  },
  {
    type: "Restaurant",
    locationId: "859944",
    name: "Mama's Meatball",
    latitude: "35.27825",
    longitude: "-120.66691",
    numReviews: "307",
    address: "570 Higuera St Suite 130, San Luis Obispo, CA 93401-3849",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/07/89/92/8e/mama-s-meatball.jpg",
    ranking: "#9 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.876821331309881",
    isClosed: false,
    price: "$10 - $25",
    hotelClass: undefined,
    subtype: "Italian",
    phone: "+1 805-544-0861",
    website: "https://www.mamasmeatball.com",
    description:
      "There are many Italian Restaurants in San Luis Obispo, but if you're looking for a truly authentic Italian dining experience, then you should consider Mama's Meatball Restaurant. Rated among the best San Luis Obispo restaurants, Mama's Meatball uses the freshest, quality ingredients grown locally to create some of the most outstanding dishes you could find in San Luis Obispo eateries. For your convenience, Mama's Meatball offers dine-in, takeout and delivery service. Mama's Meatball is one of the few restaurants near Mission San Luis Obispo, and a block away from hotels in downtown San Luis Obispo to offer private dining options and banquet accommodations for corporate parties and family celebrations. Click here to request a quote for your next private event.",
  },
  {
    type: "Restaurant",
    locationId: "2467215",
    name: "Eureka!",
    latitude: "35.27912",
    longitude: "-120.6624",
    numReviews: "201",
    address: "1141 Chorro Street, San Luis Obispo, CA 93401",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/fa/ac/91/cowboy-burger.jpg",
    ranking: "#12 of 193 Restaurants in San Luis Obispo",
    rating: "4.0",
    distance: "0.7447568234871752",
    isClosed: false,
    price: "no price found",
    hotelClass: undefined,
    subtype: "American",
    phone: "+1 805-903-1141",
    website: "http://eurekarestaurantgroup.com/blog/locations/san-luis-obispo/",
    description:
      "Eureka! features an elevated collection of all-American fare paired with local craft beers, small-batch whiskeys, and cocktails making it the perfect place for for the local community to dine, drink and socialize.",
  },
  {
    type: "Restaurant",
    locationId: "10732821",
    name: "Flour House",
    latitude: "35.27891",
    longitude: "-120.664894",
    numReviews: "129",
    address: "690 Higuera St, San Luis Obispo, CA 93401-3511",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0c/aa/d8/40/img-20160823-wa0004-largejpg.jpg",
    ranking: "#14 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.7633570985289538",
    isClosed: false,
    price: "no price found",
    hotelClass: undefined,
    subtype: "Italian",
    phone: "+1 805-544-5282",
    website: "http://www.flourhouseslo.com/",
    description: "",
  },
  {
    type: "Restaurant",
    locationId: "602112",
    name: "Koberl At Blue",
    latitude: "35.281742",
    longitude: "-120.66145",
    numReviews: "209",
    address: "998 Monterey St, San Luis Obispo, CA 93401-3205",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/01/0f/82/1b/koberl-at-blue-is-across.jpg",
    ranking: "#15 of 193 Restaurants in San Luis Obispo",
    rating: "4.5",
    distance: "0.4911254587936671",
    isClosed: false,
    price: "no price found",
    hotelClass: undefined,
    subtype: "American",
    phone: "+1 805-783-1135",
    website: "http://www.epkoberl.com/",
    description: "",
  },
  {
    type: "Attraction",
    locationId: "273715",
    name: "Farmers Market",
    latitude: "35.278614",
    longitude: "-120.66491",
    numReviews: "354",
    address: "Higuera Street, San Luis Obispo, CA",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0f/97/65/ef/photo0jpg.jpg",
    ranking: "#3 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.7963801391239745",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Flea & Street Markets",
    phone: "+1 805-824-7383",
    website: "http://www.slocountyfarmers.org/",
    description:
      "Every Thursday night through out the year, the city hosts a delightful outdoor market/festival where local farmers sell the freshest fruits, vegetables and produce while local musicians and performers entertain the crowds.",
  },
  {
    type: "Attraction",
    locationId: "128038",
    name: "Mission San Luis Obispo de Tolosa",
    latitude: "35.28063",
    longitude: "-120.66481",
    numReviews: "689",
    address: "751 Palm St, San Luis Obispo, CA 93401-3521",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/40/ec/5f/beautiful-historic-california.jpg",
    ranking: "#7 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.5731723481362941",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Missions",
    phone: "+1 805-781-8220",
    website: "http://www.missionsanluisobispo.org/",
    description:
      "Founded on September 1, 1772, this is considered one of the most beautiful missions in California and still serves as an active church in the community.",
  },
  {
    type: "Attraction",
    locationId: "279138",
    name: "Mission Plaza",
    latitude: "35.280464",
    longitude: "-120.66375",
    numReviews: "129",
    address: "San Luis Obispo, CA",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0a/54/fc/85/the-mission-church.jpg",
    ranking: "#12 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.5842166325997792",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Points of Interest & Landmarks",
    phone: "no phone number found",
    website: "https://www.tripadvisor.com/",
    description:
      "Two-block area of downtown serves as the community's cultural and social center complemented with great shopping, outdoor and indoor dining and nightlife.",
  },
  {
    type: "Attraction",
    locationId: "279137",
    name: "San Luis Obispo Children's Museum",
    latitude: "35.278908",
    longitude: "-120.66618",
    numReviews: "89",
    address: "1010 Nipomo St, San Luis Obispo, CA 93401-3870",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/1e/0c/5d/34/museum-clock-tower.jpg",
    ranking: "#13 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.7874889426216709",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Children's Museums",
    phone: "805-544-KIDS",
    website: "http://www.slocm.org",
    description:
      "Three floors of interactive exhibits and engaging spaces designed for kiddos 2-10 years of age and their families.",
  },
  {
    type: "Attraction",
    locationId: "279173",
    name: "History Center and Museum of San Luis Obispo County",
    latitude: "35.280144",
    longitude: "-120.66483",
    numReviews: "72",
    address: "696 Monterey St, San Luis Obispo, CA 93401-3515",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/0d/99/44/a7/carnegie-city-library.jpg",
    ranking: "#19 of 69 things to do in San Luis Obispo",
    rating: "4.0",
    distance: "0.6267732402620546",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "History Museums",
    phone: "+1 805-543-0638",
    website: "http://historycenterslo.org",
    description:
      "Located in the former Carnegie Library, this museum traces the history of San Luis Obispo County from the era of the Chumash and Salinan Indians to present day.",
  },
  {
    type: "Attraction",
    locationId: "279175",
    name: "San Luis Obispo Repertory Theatre",
    latitude: "35.28246",
    longitude: "-120.66296",
    numReviews: "48",
    address: "888 Morro St, San Luis Obispo, CA 93401-2711",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/97/5d/ae/the-foreigner-2015-photo.jpg",
    ranking: "#23 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.3703741194139967",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Theaters",
    phone: "+1 805-786-2440",
    website: "http://www.slorep.org",
    description:
      "Unforgettable Characters. Extraordinary Stories.Live Theatre on the Central Coast since 1947.San Luis Obispo Repertory Theatre is a professional, nonprofit, regional theatre providing year-round entertainment for our community and its visitors.",
  },
  {
    type: "Attraction",
    locationId: "4288288",
    name: "Museum of Art",
    latitude: "35.279663",
    longitude: "-120.664856",
    numReviews: "61",
    address: "1010 Broad St, San Luis Obispo, CA 93401-3505",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-f/09/1b/a5/cb/photo0jpg.jpg",
    ranking: "#24 of 69 things to do in San Luis Obispo",
    rating: "4.0",
    distance: "0.6800103163397458",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Specialty Museums",
    phone: "+1 805-543-8562",
    website: "http://www.sloma.org",
    description: "",
  },
  {
    type: "Attraction",
    locationId: "8409322",
    name: "Palm Theatre",
    latitude: "35.28145",
    longitude: "-120.66368",
    numReviews: "15",
    address: "817 Palm St, San Luis Obispo, CA 93401-3257",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/18/15/a5/9a/photo5jpg.jpg",
    ranking: "#40 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.4748008691890609",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Theaters",
    phone: "+1 805-541-5161",
    website: "http://www.thepalmtheatre.com/",
    description: "",
  },
  {
    type: "Attraction",
    locationId: "6594428",
    name: "San Luis Obispo County Library",
    latitude: "35.28228",
    longitude: "-120.66216",
    numReviews: "21",
    address: "995 Palm St, San Luis Obispo, CA 93401-3218",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/9f/de/a8/photo1jpg.jpg",
    ranking: "#34 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.4103855479669087",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Libraries",
    phone: "+1 805-781-5991",
    website: "https://www.tripadvisor.com/",
    description: "",
  },
  {
    type: "Attraction",
    locationId: "10136761",
    name: "SLO Skate Park",
    latitude: "35.289143",
    longitude: "-120.665924",
    numReviews: "7",
    address: "1050 Oak St Santa Rosa Park, San Luis Obispo, CA 93405-2358",
    photo:
      "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",
    ranking: "#47 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    distance: "0.4272433529957895",
    isClosed: false,
    price: undefined,
    hotelClass: undefined,
    subtype: "Playgrounds",
    phone: "+1 805-781-7067",
    website:
      "http://www.slocity.org/government/department-directory/parks-and-recreation/slo-skate-park",
    description: "",
  },
];

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
      <FlatList
        horizontal={true}
        data={props.savedPlaces}
        renderItem={({ item }) => (
          <Card fetchSavedPlaces={props.fetchSavedPlaces} placeInfo={item} />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Visited</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeData}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Recommended</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeData}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={props.onPress}>
          <Text style={styles.logoutText}>Sign out</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#F0F2F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logoutContainer: {
    alignItems: "flex-start",
    margin: 16,
  },
  logoutButton: {
    backgroundColor: "tomato",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
