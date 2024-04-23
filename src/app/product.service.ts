import { Injectable } from '@angular/core';
import { Product } from './product';
import { Icategory } from './icategory';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
counter=new BehaviorSubject(0)
  cartList:Product[]=[]
  productDetails:Product[]=[]
categoryList:Icategory[] = [
  {
    name:"phone",
    id:20
  },
  {
    name:"tv",
    id:21
  },{
    name:'fashion',
    id:25
  },{
    name:'laptop',
    id:30
  },{
    name:'sports',
    id:40
  }
]
addProduct(model:Product){
const data ={
  image:model.image,
    title:model.title,
    description:model.description,
    price:model.price,
    name:model.name,
    id:1+this.productList.length,
    catID:model.catID
}
this.productList.push(data)
}
buyProduct(id:number){
  let index=this.productList.findIndex(item=>item.id==id)
  if(index!==-1){
    this.cartList.push(this.productList[index])
  }
    this.counter.next(this.cartList.length)
}
getProductDetails(id:number){
  this.productDetails.splice(0)
  let index=this.productList.findIndex(item=>item.id==id)
  if(index!==-1){
    this.productDetails.push(this.productList[index])
  }
}

productList:Product[]=[
  {
          image:'https://m.media-amazon.com/images/I/61TmJlNIEuL.__AC_SX300_SY300_QL70_ML2_.jpg',
          title:'Realme 11 Pro',
          description:`Compatible phone models: Realme 11 Pro
          Material: Metal
          Form factor: Basic Case
          Special feature: Shock Absorbent
          Compatible phone models: Realme 11 Pro
          Material: Metal`,
          price:'8375',
          name:'kareem',
          id:1,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/513rNt-cvGL._AC_SX679_.jpg',
          title:'Redmi 12 8GB RAM',
          description:`Li-Po 5000 mAh, non-removable
          AMOLED, 120Hz, 450 nits (typ), 700 nits (HBM), 1200 nits (peak)
          Dual SIM (Nano-SIM, dual stand-by)
          Android 13, MIUI 14
          `,
          price:'8375',
          name:'kareem',
          id:2,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/71AQ3qEZ-VL.__AC_SY300_SX300_QL70_ML2_.jpg',
          title:'Nokia G21 Dual SIM 4GB',
          description:`Fast, efficient processing power and a long battery to take you through the weekend
          With 2× more security updates than the competiton², all your data is safe.
          `,
          price:'33431',
          name:'ahmed',
          id:3,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/71C2wzHk-lL.__AC_SY300_SX300_QL70_ML2_.jpg',
          title:'Nokia g11 plus',
          description:`Fast, efficient processing power and a long battery to take you through the weekend
          With 2× more security updates than the competiton², all your data is safe.
          `,
          price:'4199',
          name:'ahmed',
          id:4,
          catID:20
        },{
          image:'https://cdn.salla.sa/oNWB/iHyjtmmicfFa8sJSTp7YIEXTDmGmad7xkgPseEHb.jpg',
          title:'Galaxy A05s',
          description:`Capture more with multiple cameras: Galaxy A05s boasts a comprehensive camera system, Four cameras including the 13MP Front Camera, 2MP Macro Camera, 50MP Wide-angle Camera and 2MP Depth Camera, Ensuring versatility to capture every moment
          `,
          price:'7444',
          name:'hossam',
          id:5,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/51kQgMblg9L._AC_SY450_.jpg',
          title:'Samsung Galaxy A54 - Dual',
          description:`BODY Dimensions: 158.2 x 76.7 x 8.2 mm (6.23 x 3.02 x 0.32 in)
          DISPLAY Type: Super AMOLED, 120Hz, HDR10+, 1000 nits (HBM)`,
          price:'8447',
          name:'omar',
          id:6,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/61XS87YnSXL.__AC_SX300_SY300_QL70_ML2_.jpg',
          title:'SiPhone Clear Magnetic Case TPU + Acrylic Back Designed For MagSafe Chargers Hard Cover For iPhone 12/12 Pro ',
          description:`BODY Dimensions: 158.2 x 76.7 x 8.2 mm (6.23 x 3.02 x 0.32 in)
          DISPLAY Type: Super AMOLED, 120Hz, HDR10+, 1000 nits (HBM)`,
          price:'487',
          name:'omar',
          id:7,
          catID:20
        },{
          image:'https://m.media-amazon.com/images/I/71xU8w3fHJL.__AC_SX300_SY300_QL70_ML2_.jpg',
          title:'Samsung Galaxy A54',
          description:`BODY Dimensions: 158.2 x 76.7 x 8.2 mm (6.23 x 3.02 x 0.32 in)
          DISPLAY Type: Super AMOLED, 120Hz, HDR10+, 1000 nits (HBM)`,
          price:'13599',
          name:'amr',
          id:8,
          catID:20
        },
        {
          image:'https://m.media-amazon.com/images/I/61UxiHD7VXL.__AC_SY300_SX300_QL70_ML2_.jpg',
          title:'Jac 32 inch hd led tv - 32jb310, RF, USB, HDMI',
          description:`Resolution: 1280*720 (HD)
          HDMI:2 USB:2
          AV OUT :1 Mini AV IN:1 VGA (D-Sub 15pin) Earphone Out:1 RF:1 PC AUDIO IN: 1
          Contrast:5000:1 Brightness (cd/m2):250CD/M2 Multi Language
          Dimensions: 730*90*430 mm`,
          price:'5499',
          name:'kareem',
          id:9,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/61ckfbfWrfL.__AC_SY300_SX300_QL70_ML2_.jpg',
          title:'Samsung 50 Inch 4K UHD Smart LED TV with Built-in Receiver and Remote Control - Black - UA50CU7000UXEG',
          description:`TV with Built-in Receiver and Remote Control
          Model : UA50CU7000UXEG
          Samsung 50 Inch 4K UHD Smart LED
          HD picture quality Enjoy your HD TV in the digital age we live in. Once you watch images on HDTV with vivid, vivid detail, you can be sure that you will never go back to standard definition devices or to analog TV.`,
          price:'17419',
          name:'kareem',
          id:10,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/61Iu6ajRIoL._AC_SL1000_.jpg',
          title:'Sharp 50 inch 4K Ultra HD LED Smart Android TV with Remote Control and Built-in Receiver - 4T-C50DL6EX - Promotions',
          description:`SHARP 4K Smart Frameless LED TV Ultra HD 50 Inch With Android 10.0
          With Built-In Receiver
          Connect With Wired and Wireless Internet
          Netflix Application
          Country Of Origin : Egypt 3 Years Full Free Warranty`,
          price:'16599',
          name:'omar',
          id:11,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/41B54Cy1OkL._AC_SL1500_.jpg',
          title:'SHARP 43 Inch Frameless LED FHD Smart With Built-In Receiver Google TV - 2T-C43FG6EX',
          description:`SHARP Smart Frameless LED TV 43 Inch Google TV
          With Built-In Receiver
          Connect With Wired and Wireless Internet
          Country Of Origin : Egypt
          3 Years Full Free Warranty`,
          price:'11999',
          name:'omar',
          id:12,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/510Ei7dbyZL._AC_.jpg',
          title:'ELC Screen 43 Inch Smart, Android, Internal Receiver Black',
          description:`SHARP Smart Frameless LED TV 43 Inch Google TV
          With Built-In Receiver
          Connect With Wired and Wireless Internet
          Country Of Origin : Egypt
          3 Years Full Free Warranty`,
          price:'10499',
          name:'amr',
          id:13,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/51M84+G5p4L._AC_SL1500_.jpg',
          title:'Castle 32 Inch HD LED Standard TV, Black - LEDAC2132',
          description:`2 HDMI
          2 USB (Media)
          1 AV IN
          1 AV OUT (MINI)
          1 RF`,
          price:'4699',
          name:'amr',
          id:14,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/61YAKCk8n2L._AC_SL1200_.jpg',
          title:'ROWA 32 Inch HD LED Basic TV, Black',
          description:`2 HDMI
          2 USB (Media)
          1 AV IN
          1 AV OUT (MINI)
          1 RF`,
          price:'4699',
          name:'ahmed',
          id:15,
          catID:21
        },
        {
          image:'https://m.media-amazon.com/images/I/61HpWzA-g6L._AC_SL1000_.jpg',
          title:'Castle 32 Inch HD LED Standard TV, Black - LEDAC2132',
          description:`View 32 LED Standard TV L32VIEWA450
          Resolution: HD 1366x768
          Aspect ratio: 16:9
          Viewing angle: 178°* 178°
          Contrast: 3000:1`,
          price:'4699',
          name:'amr',
          id:16,
          catID:21
        },{
          image:'https://m.media-amazon.com/images/I/81ieycykK3L._AC_SY606_.jpg',
          title:'Mizah Casual Trendy Fur Sleeve T-Shirt',
          description:`Material Milton 50% Cotton 50% Polyester Lined with inner fleece for warmth, softness, fur sleeve inside and outside
          Suitable For Outdoor Or Home
          New and fashion design by featured`,
          price:'250',
          name:'kareem',
          id:17,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/71780UP4C+L._AC_SX569_.jpg',
          title:'adidas WO BASE TEE TRAINING T-SHIRT (SHORT SLEEVE) IB7898 for Men',
          description:`adidas WO BASE TEE TRAINING T-SHIRT (SHORT SLEEVE) IB7898 for Men`,
          price:'969',
          name:'kareem',
          id:18,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/71nOjEv0aVL._AC_SX679_.jpg',
          title:'adidas boys AEROREADY Shorts TRAINING SHORTS for Boys Shorts',
          description:`adidas WO BASE TEE TRAINING T-SHIRT (SHORT SLEEVE) IB7898 for Men`,
          price:'899',
          name:'ahmed',
          id:19,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/81kuHBt6OAL._AC_SX569_.jpg',
          title:'Adidas FIGC H JSY Y BLUE FOOTBALL/SOCCER JERSEY (SHORT SLEEVE) HS9881 for Boys blue size 11-12- Regular Fit',
          description:`Regular fit
          Ribbed crewneck
          AEROREADY`,
          price:'2169',
          name:'kareem',
          id:20,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/81rcuT-VK4L._AC_SX679_.jpg',
          title:'Adidas designed 4 training heat.rdy allover print hiit training t-shirt training t-shirts for men',
          description:`Regular fit
          Ribbed crewneck
          AEROREADY`,
          price:'1409',
          name:'omar',
          id:21,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/51p2nYdIdEL._AC_SX679_.jpg',
          title:'Puma Male/Unisex No. 1 Logo Celebration Tee PUMA Black SHIRT',
          description:`Unisex Adult Leisure Hiking T-Shirt
          Black Sportswear from the brand Puma
          T-Shirt No. 1 Logo Celebration Tee PUMA Black
          `,
          price:'1219',
          name:'kareem',
          id:22,
          catID:25
        },
        {
          image:'https://m.media-amazon.com/images/I/71xU+joxP3L._AC_SX569_.jpg',
          title:'Spool Noise Fishing T-shirt, Sports Long Sleeve T-shirt Dryfit UV UPF 50,t-shirts for men, Kayaking T-shirt,summer shirts for men, Big Mouth Fish, Multi Color Yellow - Red -Blue Black',
          description:`Spool Noise Sports Long Sleeve T-shirt features a UPF 50+ sun protection to keep you cool and comfortable while you Train, Fishing or make any Sports activity,
          The Dry fit and Breathable fabric allows your skin to breathe, keeping you dry and comfortable all day long.
          With the help of Anti-microbial material with Stain Repel and Release technology, this shirt will stay looking great wash after wash.
          Spool Noise T-shirts Suits Wide Range of Activities, Spool Noise will let you Unleash your Power with Confidence and comfort.`,
          price:'450',
          name:'ahmed',
          id:23,
          catID:25
        },{
          image:'https://m.media-amazon.com/images/I/510PX535b2L._AC_SL1000_.jpg',
          title:'Lenovo IdeaPad 1 82QD008LED/ Intel® Core™ i7-1255U/8GB Ram/512 SSD/Intel® Iris® Xe Graphics/Win11/Abyss Blue/ 2 Years Warranty',
          description:`Intel Core i7-1255U, 10C (2P + 8E) / 12T, P-core 1.7 / 4.7GHz, E-core 1.2 / 3.5GHz, 12MB
          Integrated Intel Iris Xe Graphics Functions as UHD Graphics
          15.6" FHD (1920x1080) TN 220nits Anti-glare`,
          price:'25999',
          name:'amr',
          id:24,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/71d6k4iQT0L._AC_SL1500_.jpg',
          title:'Dell Latitude 7490 14-inch FHD (1920x1080) Business Laptop PC, Intel Core i5-8350 1.6GHz, 16GB RAM, 512GB SSD, WiFi, Bluetooth, DP, Webcam Windows 10 Pro 64-Bit (Renewed)',
          description:`CPU: Intel Core i5-8350, 1.9GHz up to 4.1GHz processor, so you can expect very fast, reliable and consistent performance for an exceptional PC experience.
          Memory: Renewed Dell Latitude 7490 14-inch FHD Notebook, with 16GB DDR4 RAM and 512 GB Solid State Drive for efficient multi-tasking.
          Display: 14" screen with Full HD 1920x1080 resolution. The resolution makes text crisp and sharp.`,
          price:'19000',
          name:'kareem',
          id:25,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/41D8Xq0M-oL._AC_.jpg',
          title:'HP 15s-eq Laptop - Ryzen 3 5300U 4-Cores, 8GB DDR4-3200 RAM, 512GB PCIe NVMe SSD, AMD Radeon Graphics, 15.6" FHD (1920 x 1080) micro-edge anti-glare 250 nits, DOS - Jet Black',
          description:`HP 15s-eq Laptop - Ryzen 3 5300U 4-Cores, 8GB DDR4-3200 RAM , 512GB PCIe NVMe SSD, AMD Radeon Graphics, 15.6" FHD (1920 x 1080) micro-edge anti-glare 250 nits, DOS - Jet Black
          Good Quality
          Perfect Material
          Easy to use
          Unique and fashionable design`,
          price:'13019',
          name:'ahmed',
          id:26,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/51k1LB5cXpL._AC_SL1000_.jpg',
          title:'ASUS Vivobook Go 15, CPU: i3-N305 - 13th Gen intel, 8GB RAM, Display: 15.6-inch FHD 16:9 60Hz, 256GB SSD, Windows 11 (E1504GA-NJ003W)',
          description:`ASUS Vivobook Go 15 E1504GA-NJ003W i3-N305 8GB DDR4 256GB SSD 15.6-inch FHD Win11`,
          price:'17494',
          name:'omar',
          id:27,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/51YXADc8EIL._AC_.jpg',
          title:'Acer Travel Mate TMP215-53G-55ZV Intel Core i5-1135G7 Processor 8GB DDR4 RAM 512GB PCle NVME SSD Storage NVIDIA GeForce MX330 2GB VRAM FHD IPS Slim Bezel Laptop, 15.6-Inch Screen Size, Shale Black',
          description:`ASUS Vivobook Go 15 E1504GA-NJ003W i3-N305 8GB DDR4 256GB SSD 15.6-inch FHD Win11`,
          price:'26419',
          name:'omar',
          id:28,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/51k1LB5cXpL._AC_SL1000_.jpg',
          title:'ASUS Vivobook Go 15, CPU: i3-N305 - 13th Gen intel, 8GB RAM, Display: 15.6-inch FHD 16:9 60Hz, 256GB SSD, Windows 11 (E1504GA-NJ003W)',
          description:`Boasting an Intel Core i5-1135G7 processor, 512GB SSD and NVIDIA GeForce MX330 graphics
          15.6-inch FHD laptop delivers a compelling blend of performance and efficiency
          A base speed of 2.40 GHz and a maximum turbo speed of 4.20 GHz making it ideal for work and entertainment`,
          price:'17494',
          name:'omar',
          id:29,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/510h5qsLS1L._AC_SX679_.jpg',
          title:'ASUS Vivobook 16, CPU: i7-13700H, 8GB RAM, Display: 16.0-inch WUXGA 16:10 60Hz, 512GB SSD, Windows 11 (X1605VA-MB007W)',
          description:`ASUS Vivobook 16 X1605VA-MB007W i7-13700H 8GB DDR4 512GB SSD 16.0-inch WUXGA Win 11
          - Intel Core i7-13700H
          -RAM: 8GB DDR4
          -512GB M.2 NVMe PCIe 3.0 SSD`,
          price:'31999',
          name:'ahmed',
          id:30,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/61BBQIyyn2L._AC_SL1500_.jpg',
          title:'ASUS Vivobook Go 15, CPU: i3-N305 - 13th Gen intel, 8GB RAM, Display: 15.6-inch FHD 16:9 60Hz, 256GB SSD, Windows 11 (E1504GA-NJ003W)',
          description:`Boasting an Intel Core i5-1135G7 processor, 512GB SSD and NVIDIA GeForce MX330 graphics
          15.6-inch FHD laptop delivers a compelling blend of performance and efficiency
          A base speed of 2.40 GHz and a maximum turbo speed of 4.20 GHz making it ideal for work and entertainment`,
          price:'54299',
          name:'hossam',
          id:31,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/515eJzpiWmL._AC_SL1000_.jpg',
          title:'ROG Strix G15 G513RC-HN088W R7-6800H 16GB 512SSD RTX3050 4GB 15.6 FHD 144HZ win11 Eclipse Gray',
          description:`R7 6800H
          RTX3050
          15.6" FHD 144Hz
          8GB DDR5-4800 SO-DIMM *2
          512GB PCIe 4.0 NVMe M.2 SSD`,
          price:'50999',
          name:'omar',
          id:32,
          catID:30
        },
        {
          image:'https://m.media-amazon.com/images/I/617hgxXUuML._AC_SL1497_.jpg',
          title:'3 Pack Sports Water Bottle With Straw,2L+900ml+500ml Measured Plastic Drinking BPA Free Non-Toxic Sports Drinks Time Markings Motivational Fitness (Black)',
          description:`Bottle`,
          price:'360',
          name:'kareem',
          id:33,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/51AuKCypwOS._AC_SL1050_.jpg',
          title:'Jdiano V Handle Tricep Rope V-Shaped Bar Press Down Cable Machine Attachment,Multi Gym Weight Lifting Workout Accessories',
          description:`made of high-quality steel, can prevent any wear,corrosion and rust,Exquisite non-slip handle, diamond-shaped knurled design,more elegant and durable.
          Fashionable colors bring a different experience to your exercise. This is a high-quality fitness equipment, very suitable for exercise at home and in the gym`,
          price:'3999',
          name:'kareem',
          id:34,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/61ltdCWh3SL._AC_SL1500_.jpg',
          title:'Skyland EM-9233-R Lat Chrome Curve V Shape Bar For Unisex Adult - Black and Chrome',
          description:`Skyland EM-9233-R Lat Chrome Curve V Shape Bar For Unisex Adult - Black and Chrome`,
          price:'2999',
          name:'omar',
          id:35,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/51AqVyBjrBL._AC_SL1200_.jpg',
          title:'Skyland Rotating Straight Press Down Bar With Rubber Handgrips For Unisex Adult - Black and Chrome EM-9235-R ',
          description:`Skyland EM-9233-R LRubber Handgrips And End Caps with Revolving Hanger
          Handle Boosts Your Muscle Stimulation
          Bar Is 50.8 Centimetres Long,
          Weigh : 2.32 Kgs
          High Polished Chrome.
          `,
          price:'2400',
          name:'omar',
          id:36,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/61nZOQQbxKL.__AC_SX300_SY300_QL70_ML2_.jpg',
          title:'Skyland EM-9234-R Triceps Deluxe Double D Shaped Press Down Bar With Rubber Handgrips For Unisex Adults - Black AND Chrome',
          description:`Suitable For Multiple Workouts
          Constructed Of High Quality Solid Steel
          Triceps V Shaped Press Down Bar`,
          price:'1999',
          name:'kareem',
          id:37,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/51jBHogbmSL._AC_SL1500_.jpg',
          title:'Track 20885 Red Black Multi Position Bench Small With High Material For Workout - Black',
          description:`Suitable For Multiple Workouts
          Constructed Of High Quality Solid Steel
          Triceps V Shaped Press Down Bar`,
          price:'2850',
          name:'kareem',
          id:38,
          catID:40
        },
        {
          image:'https://m.media-amazon.com/images/I/51L-qgGtFTL._AC_SL1500_.jpg',
          title:'Multilevel 2 to 5 Adjustable Levels Exercise Tool Great for Home Gym, Cardio, Blista Pilates, Yoga Sports',
          description:`Suitable For Multiple Workouts
          Constructed Of High Quality Solid Steel
          Triceps V Shaped Press Down Bar`,
          price:'800',
          name:'wael',
          id:39,
          catID:40
        }
      ]
  constructor() { }
}



