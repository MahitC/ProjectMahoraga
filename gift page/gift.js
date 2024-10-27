function showCard(){
    document.getElementById("info").style.display="none";
    document.getElementById("card").style.display="grid";
}

function showInfo(){
    document.getElementById("card").style.display="none";
    document.getElementById("info").style.display="grid";
}
const giftData = [
  { id: 0, name: "Laneige Lip Sleeping Mask", price: "$", description: "A leave-on lip mask that delivers intense moisture and antioxidants while you sleep with Berry Fruit Complex™, Murumuru seed and Shea butter.", image: "gift0.png", category: "cosmetic", seen: "false", types:"want"}
  { id: 1, name: "Parlovable Fuzzy Slippers", price: "$", description: "Stylish and comfortable home slippers. Coming home to a pair of Parlovable's, with their warm plush upper, breathable lining, and lightweight rubber soles, feels like freedom for your feet.", image: "gift1.png", category: "clothing", seen: "false", types:"want"}
 { id:2, name: "Belt Bag" price:"$", descripition: "Mini high-quality and adjustable belt bag ideal for men, women and teenagers,multiple styles of wear and fits any person fanny pack.the perfect fanny packs for women and men.", image: "" // REMOVE HTML CODE 
{ id: 3, name: "Jones Road Brow Pencil", price: "$", description: "More brow with less work. This smooth, controllable pencil integrates tiny, hairlike fibers to add dimension and fullness. Use it to achieve fluffy and feathery brows, to extend and define, or just to fill in bare patches.", image: "gift3.png", category: "cosmetic", seen: "false", types:"want"}
{ id: 4, name: "Malin + Goetz Best Sellers Travel Kit", price: "$$", description: "The best-sellers travel kit is an iconic collection featuring six of their best selling hair, body and face products, conveniently packaged in travel ready aluminum tubes to keep you feeling refreshed both during and after your travels.", image: "gift4.png", category: "cosmetic", seen: "false", types:"want"}
{ id: 5, name: "Warmies Neck Wrap", price: "$$", description: "Warmies® Neck Wraps are microwavable and gently scented with French lavender for the ultimate comfort and relaxation. Simply warm in a microwave or chill in the freezer to relieve stress and soothe everyday aches and pains.", image: "gift5.png", category: "clothing", seen: "false", types:"want"}
{ id: 6, name: "Cosrx Advanced Snail Snail 96 Mucin Power Essence", price: "$", description: "Like a multivitamin for your skin, this COSRX Advanced Snail 96 Mucin Power Essence contains 96% snail mucin to nourish, repair, and plump with moisture.", image: "gift6.jpg", category: "cosmetic", seen: "false", types:"want"}
  { id: 7, name: "Chanel Rouge Allure Lipstick", price: "$$", description: "An intense, longwearing lip colour with full coverage and a satin finish. The formula instantly comforts lips, leaving them luminous and supple. In a palette of vibrant shades for a bold, daring look.", image: "gift7.png", category: "cosmetic", seen: "false", types:"want"}
  { id: 8, name: "Everlane The ReNew Air Pant", price: "$$", description: "ReNew Air is our supremely comfortable new fabric that's stretchy, soft, and breathable. Knowing how good the material felt, we designed the ReNew Air Pant to hit just the right mix of casual comfort and put-together style for lounging to errands to travel.", image: "gift8.png", category: "clothing", seen: "false", types:"want"}
  { id: 9, name: "Groceries", price: "$$", description: "Groceries as a gift are practical and thoughtful, providing essentials or treats that can brighten someone's day. Whether it's a curated basket of fresh produce, gourmet snacks, or specialty items, they show you care about the recipient's needs and preferences.", image: "gift9.png", category: "bills", seen: "false", types:"need"}
  { id: 10, name: "Transportation", price: "$", description: "Transportation as a gift offers the freedom and convenience to travel. Whether it's a prepaid travel card, a ride-sharing voucher, or a subscription to a bike or scooter service, it provides a fun and practical way to explore new places and experiences.", image: "gift10.jpg", category: "bills", seen: "false", types:"need"}
  { id: 11, name: "Car Insurance Payment", price: "$$$", description: "Transportation as a gift offers the freedom and convenience to travel. Whether it's a prepaid travel card, a ride-sharing voucher, or a subscription to a bike or scooter service, it provides a fun and practical way to explore new places and experiences.", image: "gift11.png", category: "bills", seen: "false", types:"need"}
  { id: 12, name: "Olaplex Hair Repair Treatment Kit", price: "$$", description: "A hair repair kit of the iconic Olaplex brand, leaving hair 3X stronger with 68% more repair, hair healthier-looking, softer, and shinier with every wash, reducing and prevent frizz, breakage, and split ends as you cleanse, and restoring weightless moisture, body, and shine.", image: "gift12.png", category: "cosmetics", seen: "false", types:"want"}
  { id: 13, name: "Ellis Brooklyn Eau De Parfum", price: "$$$", description: "Ever imagined perfume as a texture? Meet SUPER AMBER, a cozy, super warm, addictive scent that envelops like a cashmere blanket on warm bare skin. SUPER AMBER is the beautiful marriage of cutting edge olfactive technology (made with minimal environmental and social impact) and clean perfumery (free of fragrance allergens).", image: "gift13.png", category: "cosmetics", seen: "false", types:"want"}
  { id: 14, name: "Quest Nutrition BBQ Style Protein Chips", price: "$", description: "Ever imagined perfume as a texture? Meet SUPER AMBER, a cozy, super warm, addictive scent that envelops like a cashmere blanket on warm bare skin. SUPER AMBER is the beautiful marriage of cutting edge olfactive technology (made with minimal environmental and social impact) and clean perfumery (free of fragrance allergens).", image: "gift14.png", category: "food and beverages", seen: "false", types:"need"}
  { id: 15, name: "Ferrero Rocher Premium Chocolates", price: "$", description: "Ferrero Rocher's milk chocolate gift box offers a unique taste experience of contrasting layers: a whole crunchy hazelnut in the heart and a delicious, creamy hazelnut filling surrounded with milk chocolate, crispy wafers and gently roasted hazelnut pieces. Celebrate the moment with Ferrero Rocher.", image: "gift14.png", category: "food and beverages", seen: "false", types:"need"}
   { id: 16, name: "Bibigo Beef Bulgogi Mandu", price: "$", description: "With every bite of bibigo™ Mandu Beef Bulgogi Dumplings you'll experience bold flavors rooted in Korean culinary traditions. Each dumpling is filled with beef, mixed with vegetables like cabbage, carrots and green onion, surrounded by a silky mandu wrapper.", image: "gift16.png", category: "food and beverages", seen: "false", types:"need"}
   { id:17, name: "Carhartt Quilted Flannel Lined Duck Active Jacket", price: "$$$", description:"This Carhartt® jacket is made of heavy 12-oz, 100% ringspun cotton duck canvas that is water repellent and wind resistant for weather protection. Body of the jacket is flannel lined and the sleeves feature a quilted nylon lining. Carhartt® patch logo is located on the front pocket.", image:"gift17.png", category:"clothing", seen:"false", types:"want" }
 { id: 18, name: "Nintendo Switch Lite", price: "$$$", description: "Introducing Nintendo Switch™ Lite, a version of the Nintendo Switch system that’s optimized for personal, handheld play. Nintendo Switch Lite is a small and light Nintendo Switch system at a great price. With a built-in +Control Pad, and a sleek, unibody design, Nintendo Switch Lite is great for on-the-go gaming. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are.", image: "gift18.png", category: "tech", seen: "false", types:"want"}
 { id: 19, name: "Renpho Eye Massager with Heat", price: "$$$", description: "Give your giftee’s eyes a rest with this top-rated eye massager. Using a combination of air pressure and heat, this goggle-like device gently massages the eyes, brow, and temples to reduce fatigue and the strain of daily screen use. This device is great for use before a night's sleep, or right when your recipient clocks out of work for the day.", image: "gift19.png", category: "tech", seen: "false", types:"want"}
 { id: 20, name: "Keychron K2 WIreless Mechanical Keyboard", price: "$$$", description: "K2 is a super tactile wireless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard.", image: "gift20.png", category: "tech", seen: "false", types:"want"}
 { id: 21, name: "Cleopatra LED Mask", price: "$$$$", description: "With 192 high density LEDs and neck coverage built into one powerful mask. You can now spend time to give yourself more time. It's self care when you need it at anytime. The neck is always first to show signs of aging. Get your neck glowing with a simple tap.", image: "gift21.png", category: "tech", seen: "false", types:"want"}
 { id: 22, name: "Sharpie S-Gel Pens", price: "$", description: "Smooth, bold ink meets a stunning design to create a high-performance gel pen with the Sharpie S·Gel. Featuring no smear, no bleed technology, it always delivers vivid writing. Meanwhile the contoured rubber grip, sleek, modern design, and eye-catching finish make it a pen to envy.", image: "gift22.png", category: "supplies", seen: "false", types:"want"}
 { id: 23, name: "HP 962 Ink Cartridge Series", price: "$", description: "Ensure your printing is right the first time and every time with Original HP Ink, which provides precision output so you can take pride in fade-resistant documents and brilliant images. Original HP Ink is engineered to work with HP printers to provide consistent quality, reliability and value", image: "gift23.png", category: "supplies", seen: "false", types:"want"}
 { id: 24, name: "HP 962 Ink Cartridge Series", price: "$", description: "Ensure your printing is right the first time and every time with Original HP Ink, which provides precision output so you can take pride in fade-resistant documents and brilliant images. Original HP Ink is engineered to work with HP printers to provide consistent quality, reliability and value", image: "gift24.png", category: "supplies", seen: "false", types:"want"}
{ id: 25, name: "mop", price: "$", category: "housekeeping",  
        url: "https://m.media-amazon.com/images/I/51t9YPWWylL._AC_UF894,1000_QL80_.jpg", 
        types: "need", description: "good qualty mop to clean floors"},

    { id: 26, name: "detergent", price: "$", category: "housekeeping", 
        types: "need", description: "powerful cleaning detergent",
        url: "https://m.media-amazon.com/images/I/814o8a13uvL.__AC_SX300_SY300_QL70_FMwebp_.jpg"},

    { id: 27, name: "mop rack", price: "$$$$", category: "housekeeping", 
        types: "want", description: "sturdy rack to hold housekeeping supplies",
        url: "https://m.media-amazon.com/images/I/81qHXF1qvPL.__AC_SX300_SY300_QL70_FMwebp_.jpg"},

    { id: 28, name: "broom", price: "$$", category: "housekeeping", 
        types: "need", description: "high quality shilong grass broom",
        url: "https://m.media-amazon.com/images/I/712nj+j2bxL._AC_SY300_SX300_.jpg"},

    { id: 29, name: "soap holder", price: "$$$", category: "housekeeping", 
        types: "want", description: "black soap holder",
        url: "https://m.media-amazon.com/images/I/31zAEmm1TuL._AC_.jpg"},

    { id: 30, name: "capri sun fruit punch", price: "$", category: "food&beverages", 
        types: "want", description: "One box of Capri Sun Fruit Punch flavored Juice Drink Blend",
        url: "https://m.media-amazon.com/images/I/81NUKfFXc2L._SX679_PIbundle-30,TopRight,0,0_AA679SH20_.jpg"},

    { id: 31, name: "energy drink", price: "$$", category: "food&beverages", 
        types: "want", description: "12-pack Jocko GO Energy Drink",
        url: "https://m.media-amazon.com/images/I/81Kh4lG8jKL._SX679_.jpg"},

    { id: 32, name: "ramen", price: "$$$", category: "food&beverages", 
        types: "want", description: "Kaedama - Authentic Japanese Ramen Noodles Bulk (48 pack)",
        url: "https://m.media-amazon.com/images/I/71plmndu5aL._SX679_.jpg"},

    { id: 33, name: "beef jerky", price: "$", category: "food&beverages", 
        types: "want", description: "Jack Link's Beef Jerky Variety Pack",
        url: "https://m.media-amazon.com/images/I/71pRsgr9CaL._SX679_PIbundle-9,TopRight,0,0_SX679SY879SH20_.jpg"},
    
    { id: 34, name: "peanut butter cookies", price: "$$$$", category: "food&beverages", 
        types: "want", description: "Davids Cookies Annies Peanut Butter Explosion",
        url: "https://m.media-amazon.com/images/I/51KGEANzBrL._SX679_PIbundle-24,TopRight,0,0_SX679SY509SH20_.jpg"},
    
    { id: 35, name: "music box", price: "$", category: "art&music", 
        types: "want", description: "Can't Help Falling in Love Wood Music Box",
        url: "https://m.media-amazon.com/images/I/71PTk2u-LzL._AC_SX679_.jpg"},

    { id: 36, name: "boom box", price: "$$", category: "art&music", 
        types: "want", description: "LONPOO CD Player Portable Boombox",
        url: "https://m.media-amazon.com/images/I/41pghbATzrL._AC_.jpg"},

    { id: 38, name: "cd player", price: "$$$$", category: "art&music", 
        types: "want", description: "Onkyo C-7030 Home Audio CD Player",
        url: "https://m.media-amazon.com/images/I/518AkoZsxRL._AC_SL1500_.jpg"},
        
    { id: 37, name: "wall paintings", price: "$$", category: "art&music", 
        types: "want", description: "MPLONG Wall Art 3 Pieces Of Framed Decorative Paintings",
        url: "https://m.media-amazon.com/images/I/612rL13IdnL._AC_SX679_.jpg"},
    
    {id: 39, name: "piano", price: "$$$", category: "art&music", 
        types: "want", description: "RockJam 61 Key Keyboard Piano Stand With Pitch Bend Kit",
        url: "https://m.media-amazon.com/images/I/91K5Jqu0rUL._AC_SX679_.jpg"}
]
