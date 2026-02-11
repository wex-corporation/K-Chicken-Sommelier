// K-Chicken Sommelier — Real Brand Dataset (EN) - Full 20 Brands

const KCHICKEN_BRANDS = [
  // ===== THE BIG 3 =====
  {
    id: "kyochon", group: "The Big 3", brand: "Kyochon Chicken",
    website: "https://www.kyochon.com/",
    logoPage: "https://www.kyochon.com/",
    menuPage: "https://m.kyochon.com/menu/menu_list",
    brand_features: "Soy sauce chicken icon. Thin batter, double-fried, sauce brushed piece-by-piece.",
    menus: [
      { id: "kyochon_honey_combo", menu: "Honey Combo", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy/Chewy", characteristics: "Bestseller. Sweet-salty honey base.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Honey+Combo" },
      { id: "kyochon_original", menu: "Kyochon Original", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Thin/Crispy", characteristics: "Signature garlic soy. Very savory.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Kyochon+Original" },
      { id: "kyochon_red_combo", menu: "Red Combo", spiciness_1to5: 4, sweetness_1to5: 1, texture: "Crispy", characteristics: "Cheongyang red pepper kick. Clean heat.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 1, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Red+Combo" },
      { id: "kyochon_half_half", menu: "Half & Half", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Mixed", characteristics: "Mix of Original (Soy) + Red series.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 2, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 1, Filling: 1, Shareable: 3, LowMess: 1 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Half+%26+Half" },
      { id: "kyochon_sal_sal", menu: "Sal Sal Chicken", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Crunchy", characteristics: "Boneless with rice puffs coating.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 1, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Sal+Sal+Chicken" },
      { id: "kyochon_black_secret", menu: "Black Secret", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Five-spice blend. Exotic oriental vibe.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 1, NoSauce: 1, Value: 0, Filling: 1, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Black+Secret" },
      { id: "kyochon_honey_jumbo_wing", menu: "Honey Jumbo Wing", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy/Chewy", characteristics: "Larger wings version of Honey series.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Honey+Jumbo+Wing" }
    ]
  },
  {
    id: "bbq", group: "The Big 3", brand: "BBQ",
    website: "https://bbq.co.kr/",
    logoPage: "https://bbq.co.kr/",
    menuPage: "https://bbq.co.kr/categories/7",
    brand_features: "Fried chicken leader. Uses extra virgin olive oil for premium flavor.",
    menus: [
      { id: "bbq_golden_olive", menu: "Golden Olive", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Extra Crispy", characteristics: "Signature. Juicy meat with crispy batter.", tags: { Crunchy: 3, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/FFC727/000000?text=Golden+Olive" },
      { id: "bbq_secret_seasoned", menu: "Secret Seasoned", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Moist", characteristics: "Classic sweet-sour red sauce (yangnyeom).", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/FFC727/000000?text=Secret+Seasoned" },
      { id: "bbq_jamaica_whole_leg", menu: "Jamaica Whole Leg", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Tender", characteristics: "Large thigh roasted with jerk sauce.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 3, Shareable: 1, LowMess: 2 }, image: "https://placehold.co/400x300/FFC727/000000?text=Jamaica+Whole+Leg" },
      { id: "bbq_pepper_garlic", menu: "Pepper Garlic", spiciness_1to5: 2, sweetness_1to5: 3, texture: "Sticky/Crispy", characteristics: "Chinese-style fusion with scallion.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 2, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/FFC727/000000?text=Pepper+Garlic" },
      { id: "bbq_galbi", menu: "Galbi", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Crispy", characteristics: "Korean beef rib sauce flavor.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/FFC727/000000?text=Galbi" },
      { id: "bbq_smoked_chicken", menu: "Smoked Chicken", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Chewy", characteristics: "Smoked hip meat. Strong smoky aroma.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 1, LowMess: 3 }, image: "https://placehold.co/400x300/FFC727/000000?text=Smoked+Chicken" }
    ]
  },
  {
    id: "bhc", group: "The Big 3", brand: "bhc",
    website: "https://www.bhc.co.kr/",
    logoPage: "https://www.bhc.co.kr/",
    menuPage: "https://www.bhc.co.kr/menu/best.asp",
    brand_features: "Strong at unique seasonings and fusion sauces. Gen Z favorite.",
    menus: [
      { id: "bhc_bburinkle", menu: "Bburinkle", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy", characteristics: "Blue-cheese & veggie seasoning. Yogurt dip.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Bburinkle" },
      { id: "bhc_matcho_king", menu: "Matcho King", spiciness_1to5: 2, sweetness_1to5: 3, texture: "Chewy", characteristics: "Aged soy + honey with chili toppings.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Matcho+King" },
      { id: "bhc_gold_king", menu: "Gold King", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Soy sauce + honey. Similar to honey-soy.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Gold+King" },
      { id: "bhc_red_king", menu: "Red King", spiciness_1to5: 4, sweetness_1to5: 2, texture: "Crispy", characteristics: "Hot chili sauce. Intense spiciness.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Red+King" },
      { id: "bhc_curry_queen", menu: "Curry Queen", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Curry seasoning + red curry dip.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Curry+Queen" },
      { id: "bhc_pota_king", menu: "Pota-King", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Crunchy", characteristics: "Batter with real potato strips.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Pota-King" }
    ]
  },

  // ===== OVEN & ROASTED =====
  {
    id: "goobne", group: "Oven & Roasted", brand: "Goobne Chicken",
    website: "https://www.goobne.co.kr/",
    logoPage: "https://www.goobne.co.kr/",
    menuPage: "https://www.goobne.co.kr/menu",
    brand_features: "Top oven-baked brand. No oil, lower calories.",
    menus: [
      { id: "goobne_gochu_basasak", menu: "Gochu Basasak", spiciness_1to5: 2, sweetness_1to5: 1, texture: "Crispy", characteristics: "Cheongyang pepper powder. Signature.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 2, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 1, NoSauce: 1, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/D35400/FFFFFF?text=Gochu+Basasak" },
      { id: "goobne_original", menu: "Original", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Chewy/Lean", characteristics: "Basic roasted. Diet-friendly.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/D35400/FFFFFF?text=Original" },
      { id: "goobne_volcano", menu: "Volcano", spiciness_1to5: 5, sweetness_1to5: 2, texture: "Moist", characteristics: "Fire-spicy. Famous for rice-mix (chibap).", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/D35400/FFFFFF?text=Volcano" },
      { id: "goobne_galbi_cheonwang", menu: "Galbi Cheonwang", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Moist", characteristics: "Galbi flavor. Popular with kids.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/D35400/FFFFFF?text=Galbi+Cheonwang" },
      { id: "goobne_namhae_garlic", menu: "Namhae Garlic", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Crispy", characteristics: "Roasted garlic profile.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/D35400/FFFFFF?text=Namhae+Garlic" }
    ]
  },
  {
    id: "puradak", group: "Oven & Roasted", brand: "Puradak",
    website: "https://puradakchicken.com/",
    logoPage: "https://puradakchicken.com/",
    menuPage: "https://puradakchicken.com/menu",
    brand_features: "Luxury vibe. Oven-fried method: baked then lightly fried.",
    menus: [
      { id: "puradak_black_alio", menu: "Black Alio", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Crispy/Chewy", characteristics: "Deep soy + fried garlic chips. Signature.", tags: { Crunchy: 2, Juicy: 2, CleanSalty: 1, SweetSpicy: 0, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 1, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/1A1A1A/D4AF37?text=Black+Alio" },
      { id: "puradak_chili_mayo", menu: "Chili Mayo", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Creamy", characteristics: "Jalapeño + mayo sauce. Sweet & spicy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/1A1A1A/D4AF37?text=Chili+Mayo" },
      { id: "puradak_corn_so_amazing", menu: "Corn-So-Amazing", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy", characteristics: "Corn powder + real corn pieces.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/1A1A1A/D4AF37?text=Corn-So-Amazing" },
      { id: "puradak_toowoomba", menu: "Toowoomba", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Thick/Rich", characteristics: "Spicy cream sauce (rose pasta vibe).", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/1A1A1A/D4AF37?text=Toowoomba" },
      { id: "puradak_basil_festa", menu: "Basil Festa", spiciness_1to5: 0, sweetness_1to5: 2, texture: "Moist", characteristics: "Basil pesto + roasted tomato.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 1, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/1A1A1A/D4AF37?text=Basil+Festa" }
    ]
  },
  {
    id: "zikova", group: "Oven & Roasted", brand: "Zikova",
    website: "https://www.gcova.co.kr/",
    logoPage: "https://www.gcova.co.kr/",
    menuPage: "https://www.gcova.co.kr/",
    brand_features: "Charcoal-grilled chicken king. Famous for mixing sauce with rice.",
    menus: [
      { id: "zikova_seasoned_grilled", menu: "Seasoned Grilled", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Tender", characteristics: "Signature. Rice-mix is essential.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Seasoned+Grilled" },
      { id: "zikova_salt_grilled", menu: "Salt Grilled", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Chewy/Lean", characteristics: "Pure grilled. Highlights meat quality.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Salt+Grilled" }
    ]
  },

  // ===== CLASSIC & SEASONED =====
  {
    id: "cheogajip", group: "Classic & Seasoned", brand: "Cheogajip",
    website: "https://www.cheogajip.co.kr/",
    logoPage: "https://www.cheogajip.co.kr/",
    menuPage: "https://www.cheogajip.co.kr/menu",
    brand_features: "Yangnyeom master. Uses vegetable stock for cleaner sweetness.",
    menus: [
      { id: "cheogajip_supreme_gold", menu: "Supreme Gold", spiciness_1to5: 0, sweetness_1to5: 5, texture: "Crispy/Soft", characteristics: "White signature sauce + red sauce. Brand icon.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 2, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Supreme+Gold" },
      { id: "cheogajip_original_seasoned", menu: "Original Seasoned", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Moist", characteristics: "Classic seasoned chicken standard.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Original+Seasoned" },
      { id: "cheogajip_warak_soy", menu: "Warak (Soy)", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Sautéed soy/garlic. Savory.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 2, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Warak" },
      { id: "cheogajip_truffle_supreme", menu: "Truffle Supreme", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Soft", characteristics: "Supreme sauce with truffle aroma.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 2, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Truffle+Supreme" }
    ]
  },
  {
    id: "pelicana", group: "Classic & Seasoned", brand: "Pelicana",
    website: "https://www.pelicana.co.kr/",
    logoPage: "https://www.pelicana.co.kr/",
    menuPage: "https://www.pelicana.co.kr/menu",
    brand_features: "One of the oldest brands. Thin batter and classic garlic-onion red sauce.",
    menus: [
      { id: "pelicana_seasoned", menu: "Seasoned Chicken", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Sticky/Moist", characteristics: "Long-running classic. Garlic & onion base.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 1, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Seasoned+Chicken" },
      { id: "pelicana_fried", menu: "Fried Chicken", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Thin/Crispy", characteristics: "Old-school thin crust style.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Fried+Chicken" },
      { id: "pelicana_cheese_bburio", menu: "Cheese Bburio", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Cheese powder, sweet & salty.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Cheese+Bburio" }
    ]
  },
  {
    id: "mexicana", group: "Classic & Seasoned", brand: "Mexicana",
    website: "https://www.mexicana.co.kr/",
    logoPage: "https://www.mexicana.co.kr/",
    menuPage: "https://www.mexicana.co.kr/menu",
    brand_features: "First-generation brand known for experimental collaborations.",
    menus: [
      { id: "mexicana_ddaengcho", menu: "Ddaengcho", spiciness_1to5: 5, sweetness_1to5: 2, texture: "Moist", characteristics: "Extremely spicy Korean chili style.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Ddaengcho" },
      { id: "mexicana_cheetos", menu: "Cheetos Chicken", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Snack-flavor powder + sweet sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Cheetos+Chicken" },
      { id: "mexicana_modu_mayo", menu: "Modu-ui Mayo", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Soft", characteristics: "Mayo base with garlic notes.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 2, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Modu-ui+Mayo" }
    ]
  },
  {
    id: "nene", group: "Classic & Seasoned", brand: "NeNe Chicken",
    website: "https://nenechicken.com/",
    logoPage: "https://nenechicken.com/",
    menuPage: "https://nenechicken.com/menu",
    brand_features: "Packaging pioneer and early seasoning-powder trendsetter.",
    menus: [
      { id: "nene_snowing_cheese", menu: "Snowing Cheese", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Veggie + cheese powder. Kids' favorite.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Snowing+Cheese" },
      { id: "nene_oriental_scallion", menu: "Oriental Scallion", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crunchy", characteristics: "Green onion + mustard sauce topping.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Oriental+Scallion" },
      { id: "nene_shocking_hot", menu: "Shocking Hot", spiciness_1to5: 5, sweetness_1to5: 1, texture: "Moist", characteristics: "Tear-jerking spicy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Shocking+Hot" },
      { id: "nene_cheongyang_mayo", menu: "Cheongyang Mayo", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Creamy", characteristics: "Onion + spicy mayo topping.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/C0392B/FFFFFF?text=Cheongyang+Mayo" }
    ]
  },

  // ===== TRENDY & VALUE =====
  {
    id: "60gye", group: "Trendy & Value", brand: "60 Gye",
    website: "https://www.60chicken.co.kr/",
    logoPage: "https://www.60chicken.co.kr/",
    menuPage: "https://www.60chicken.co.kr/menu",
    brand_features: "Clean taste concept: only 60 chickens per fresh oil vat.",
    menus: [
      { id: "60gye_gochu", menu: "Gochu (Pepper)", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Moist", characteristics: "Soy base with minced mild peppers.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Gochu" },
      { id: "60gye_ganji", menu: "Ganji (Soy/Nurungji)", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Chewy", characteristics: "Soy sauce + scorched rice powder.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Ganji" },
      { id: "60gye_keukeukeu", menu: "Keu-Keu-Keu", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Extra Crunchy", characteristics: "Triple-crunch style. Dipping sauces.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Keu-Keu-Keu" },
      { id: "60gye_tiger", menu: "Tiger Chicken", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Garlic powder + cornflakes. Sweet/salty.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 2, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 2, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Tiger+Chicken" }
    ]
  },
  {
    id: "norang", group: "Trendy & Value", brand: "Norang Tongdak",
    website: "https://www.norangtongdak.co.kr/",
    logoPage: "https://www.norangtongdak.co.kr/",
    menuPage: "https://www.norangtongdak.co.kr/menu",
    brand_features: "Market-style cauldron fry. Subtle curry scent, lower sodium.",
    menus: [
      { id: "norang_big_fried", menu: "Big Fried", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Cracker-like", characteristics: "Subtle curry aroma. Stays crispy cold.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Big+Fried" },
      { id: "norang_alssa_garlic", menu: "Alssa Garlic", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Garlic vinegar dipping sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 1, Value: 2, Filling: 2, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Alssa+Garlic" }
    ]
  },
  {
    id: "jadam", group: "Trendy & Value", brand: "Jadam Chicken",
    website: "https://www.ejadam.co.kr/",
    logoPage: "https://www.ejadam.co.kr/",
    menuPage: "https://www.ejadam.co.kr/menu",
    brand_features: "Nature-forward. Uses animal welfare-certified chickens.",
    menus: [
      { id: "jadam_mapchelin", menu: "Map-chelin", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Chewy", characteristics: "Mayo + Cheongyang peppers. Spicy creamy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 2, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/2ECC71/FFFFFF?text=Map-chelin" },
      { id: "jadam_sriracha", menu: "Sriracha", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Exotic spice with sriracha sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/2ECC71/FFFFFF?text=Sriracha" }
    ]
  },
  {
    id: "hosigi", group: "Trendy & Value", brand: "Hosigi Double Chicken",
    website: "https://www.9922.co.kr/",
    logoPage: "https://www.9922.co.kr/",
    menuPage: "https://www.9922.co.kr/menu",
    brand_features: "Two-chickens-for-one value pioneer. Great quantity per price.",
    menus: [
      { id: "hosigi_spicy_soy", menu: "Spicy Soy", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Salty", characteristics: "Steady seller. Mildly spicy soy.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 3, Filling: 3, Shareable: 3, LowMess: 1 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Spicy+Soy" },
      { id: "hosigi_lemon_cream", menu: "Lemon Cream", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Chewy", characteristics: "Glutinous rice batter. Sweet lemon cream.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 3, Filling: 2, Shareable: 3, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Lemon+Cream" }
    ]
  },
  {
    id: "huchamjal", group: "Trendy & Value", brand: "Huchamjal",
    website: "https://www.hoocham.com/",
    logoPage: "https://www.hoocham.com/",
    menuPage: "https://www.hoocham.com/menu",
    brand_features: "Affordable, high-quality fried. Strong takeaway discounts.",
    menus: [
      { id: "huchamjal_fried", menu: "Fried", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Crispy", characteristics: "Basic marinade has spicy kick (KFC-like).", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Fried" },
      { id: "huchamjal_king_triple", menu: "King Triple", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Moist", characteristics: "Cheese sauce + cream sauce layers.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 3, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=King+Triple" }
    ]
  },
  {
    id: "barun", group: "Trendy & Value", brand: "Barun Chicken",
    website: "https://barunchicken.com/",
    logoPage: "https://barunchicken.com/",
    menuPage: "https://barunchicken.com/menu",
    brand_features: "Oil-count system on box (max 58). Known for shrimp toppings.",
    menus: [
      { id: "barun_daesae_red", menu: "Daesae Red", spiciness_1to5: 4, sweetness_1to5: 2, texture: "Crispy", characteristics: "Large shrimp topping + spicy sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Daesae+Red" },
      { id: "barun_brown_rice", menu: "Brown Rice", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Crunchy", characteristics: "Brown-rice batter for nuttiness.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Brown+Rice" }
    ]
  },
  {
    id: "toreore", group: "Trendy & Value", brand: "Toreore",
    website: "https://www.toreore.com/",
    logoPage: "https://www.toreore.com/",
    menuPage: "https://www.toreore.com/board/menu/board_list.php",
    brand_features: "Uses high-quality Moguchon (NH Nonghyup) chicken.",
    menus: [
      { id: "toreore_garlic_hot_half", menu: "Garlic/Hot Half", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Mixed", characteristics: "Legendary combo: soy garlic + spicy.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 2, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 1, Filling: 2, Shareable: 3, LowMess: 1 }, image: "https://placehold.co/400x300/E31837/FFFFFF?text=Garlic%2FHot+Half" }
    ]
  },
  {
    id: "kkanbu", group: "Trendy & Value", brand: "Kkanbu Chicken",
    website: "https://www.kkanbu.co.kr/",
    logoPage: "https://www.kkanbu.co.kr/",
    menuPage: "https://www.kkanbu.co.kr/menu",
    brand_features: "Premium chicken-pub style. Dine-in experience focused.",
    menus: [
      { id: "kkanbu_crispy", menu: "Crispy", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Crunchy", characteristics: "Thick, wavy batter (KFC style).", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 1, Filling: 2, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/1A1A1A/FFFFFF?text=Crispy" },
      { id: "kkanbu_garlic_roast", menu: "Garlic Roast", spiciness_1to5: 1, sweetness_1to5: 1, texture: "Moist", characteristics: "Rotisserie topped with minced garlic.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 1, Filling: 3, Shareable: 2, LowMess: 2 }, image: "https://placehold.co/400x300/1A1A1A/FFFFFF?text=Garlic+Roast" }
    ]
  },
  {
    id: "moms_touch", group: "Trendy & Value", brand: "Mom's Touch",
    website: "https://momstouch.co.kr/",
    logoPage: "https://momstouch.co.kr/",
    menuPage: "https://momstouch.co.kr/menu",
    brand_features: "Burger franchise famous for high-quality, cheap chicken.",
    menus: [
      { id: "moms_touch_thigh_boneless", menu: "Thigh Boneless", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Crispy", characteristics: "100% thigh meat. Great value.", tags: { Crunchy: 2, Juicy: 3, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 3, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Thigh+Boneless" },
      { id: "moms_touch_soy_garlic_thigh", menu: "Soy Garlic Thigh", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Salty-sweet garlic soy glaze.", tags: { Crunchy: 2, Juicy: 2, CleanSalty: 1, SweetSpicy: 1, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 3, Filling: 3, Shareable: 2, LowMess: 0 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Soy+Garlic+Thigh" }
    ]
  },
  {
    id: "gamachi", group: "Trendy & Value", brand: "Gamachi Tongdak",
    website: "https://www.gamachi.co.kr/",
    logoPage: "https://www.gamachi.co.kr/",
    menuPage: "https://www.gamachi.co.kr/",
    brand_features: "Market-style whole chicken. Very cheap, whole-fried.",
    menus: [
      { id: "gamachi_whole_chicken", menu: "Whole Chicken", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Thin/Crispy", characteristics: "Spicy marinade. Crackling skin.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 3, Shareable: 3, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Whole+Chicken" },
      { id: "gamachi_fried_gizzards", menu: "Fried Gizzards", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Chewy", characteristics: "Popular side snack (anju).", tags: { Crunchy: 1, Juicy: 1, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 1, Shareable: 2, LowMess: 3 }, image: "https://placehold.co/400x300/F4D03F/000000?text=Fried+Gizzards" }
    ]
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'crunch', title: 'How crunchy do you want it?', options: [
      { label: 'Ultra crunchy', value: 'Ultra', tags: { Crunchy: 3 } },
      { label: 'Crispy', value: 'Crispy', tags: { Crunchy: 2 } },
      { label: 'Balanced', value: 'Balanced', tags: { Crunchy: 1, Juicy: 1 } },
      { label: 'Soft & juicy', value: 'Juicy', tags: { Juicy: 3 } }
    ]
  },
  {
    id: 'heat', title: 'How spicy can you handle today?', options: [
      { label: 'No spice', value: 'None', tags: { CleanSalty: 2 } },
      { label: 'Mild', value: 'Mild', tags: { SweetSpicy: 1 } },
      { label: 'Medium', value: 'Medium', tags: { SweetSpicy: 2 } },
      { label: 'Hot', value: 'Hot', tags: { SweetSpicy: 3 } },
      { label: 'Danger', value: 'Danger', tags: { SweetSpicy: 4 } }
    ]
  },
  {
    id: 'mood', title: 'What flavor mood are you craving?', options: [
      { label: 'Clean & salty', value: 'Clean', tags: { CleanSalty: 3 } },
      { label: 'Sweet & spicy', value: 'SweetSpicy', tags: { SweetSpicy: 3 } },
      { label: 'Garlic & savory', value: 'Garlic', tags: { Garlic: 3 } },
      { label: 'Soy & umami', value: 'Soy', tags: { SoyUmami: 3 } },
      { label: 'Cheesy & creamy', value: 'Cheesy', tags: { CheesyCreamy: 3 } },
      { label: 'Smoky / peppery', value: 'Smoky', tags: { SmokyPepper: 3 } }
    ]
  },
  {
    id: 'sauce', title: 'Sauce or no sauce?', options: [
      { label: 'No sauce (pure fried)', value: 'NoSauce', tags: { NoSauce: 3, LowMess: 2 } },
      { label: 'Light sauce', value: 'Light', tags: { LightSauce: 3 } },
      { label: 'Saucy', value: 'Saucy', tags: { Saucy: 2 } },
      { label: 'Extra saucy', value: 'Extra', tags: { Saucy: 3 } }
    ]
  },

];

// Flatten to single menu list for scoring
function getDomainFromUrl(url) {
  if (!url) return '';
  const match = String(url).match(/^https?:\/\/([^/?#]+)/i);
  if (!match) return '';
  return match[1].replace(/^www\./, '');
}

function hashSeed(text) {
  return text.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function pickFromPool(pool, seedText) {
  return pool[hashSeed(seedText) % pool.length];
}

function buildCommonsImageUrl(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

const REAL_MENU_IMAGE_POOL = {
  fried: [
    buildCommonsImageUrl('Korean Fried Chicken.jpg'),
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean fried chicken bbq.jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Korean fried chicken (409217776).jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban).jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban) (cropped).jpg')
  ],
  spicy: [
    buildCommonsImageUrl('Korean fried chicken 7 dari.jpg'),
    buildCommonsImageUrl('Korean fried chicken 5 padak.jpg'),
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Buffalo_wings.jpg')
  ],
  saucy: [
    buildCommonsImageUrl('Korean Yangnyeom chicken.jpg'),
    buildCommonsImageUrl('Korean fried chicken bbq.jpg'),
    buildCommonsImageUrl('Korean fried chicken (banban).jpg'),
    buildCommonsImageUrl('Korean_fried_chicken_4.jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings,_Oct_2025.jpg')
  ],
  wing: [
    buildCommonsImageUrl('Fried_Chicken_Wings_(54282490120).jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings_(52769476180).jpg'),
    buildCommonsImageUrl('Fried_Chicken_Wings,_Oct_2025.jpg'),
    buildCommonsImageUrl('Buffalo_Wings.jpg')
  ],
  roast: [
    buildCommonsImageUrl('Roast_Chicken.jpg'),
    buildCommonsImageUrl('Roast_Chicken_(505826806).jpg'),
    buildCommonsImageUrl('Roast_Chicken_(6987686841).jpg'),
    buildCommonsImageUrl('Grilled_chicken.JPG'),
    buildCommonsImageUrl('GRILLED_CHICKEN.jpg'),
    buildCommonsImageUrl('Grilled_chickens.jpg')
  ],
  gizzard: [
    buildCommonsImageUrl('Chicken_Gizzard.jpg')
  ]
};

function buildBrandImageUrl(brand) {
  const domain = getDomainFromUrl(brand.website || brand.logoPage || brand.menuPage);
  if (!domain) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

function buildMenuImageUrl(brand, menu) {
  const id = menu.id || '';
  const isRoastStyle = brand.group === 'Oven & Roasted'
    || /roast|grilled|whole/i.test(menu.menu);
  const isSpicy = (menu.spiciness_1to5 || 0) >= 4
    || (menu.tags?.SweetSpicy || 0) >= 3
    || /hot|volcano|red|spicy|ddaengcho/i.test(id);
  const isSaucy = (menu.tags?.Saucy || 0) >= 2 || /seasoned|mayo|yangnyeom/i.test(id);

  if (/gizzard/i.test(id)) return REAL_MENU_IMAGE_POOL.gizzard[0];
  if (/wing/i.test(id)) return pickFromPool(REAL_MENU_IMAGE_POOL.wing, id);
  if (isRoastStyle) return pickFromPool(REAL_MENU_IMAGE_POOL.roast, id);
  if (isSpicy) return pickFromPool(REAL_MENU_IMAGE_POOL.spicy, id);
  if (isSaucy) return pickFromPool(REAL_MENU_IMAGE_POOL.saucy, id);

  return pickFromPool(REAL_MENU_IMAGE_POOL.fried, id);
}

const MENU_ITEMS = KCHICKEN_BRANDS.flatMap(b =>
  b.menus.map(m => ({
    id: m.id,
    name: m.menu,
    brand: b.brand,
    group: b.group,
    characteristics: m.characteristics,
    spiciness: m.spiciness_1to5,
    sweetness: m.sweetness_1to5,
    texture: m.texture,
    tags: m.tags,
    image: buildMenuImageUrl(b, m),
    fallbackImage: m.image,
    brandImage: buildBrandImageUrl(b),
    website: b.website,
    logoPage: b.logoPage,
    menuPage: b.menuPage,
    crunchLevel: m.tags.Crunchy || 0,
    heatLevel: m.spiciness_1to5,
    sauceLevel: (m.tags.Saucy || 0) + (m.tags.LightSauce || 0)
  }))
);

// Assign badges based on tags
MENU_ITEMS.forEach(item => {
  if (item.tags.Value >= 2) item.badge = 'Best Value';
  else if (item.tags.LowMess >= 3) item.badge = 'Low Mess';
  else if (item.tags.Crunchy >= 3) item.badge = 'Ultra Crunch';
  else if (item.heatLevel >= 4) item.badge = 'Spicy';
  else if (item.tags.CheesyCreamy >= 3) item.badge = 'Creamy';
  else if (item.tags.Garlic >= 3) item.badge = 'Garlic Bomb';
  else if (item.tags.SoyUmami >= 3) item.badge = 'Umami';
  else item.badge = 'Top Pick';
});

console.log(`Loaded ${KCHICKEN_BRANDS.length} brands with ${MENU_ITEMS.length} menu items`);

const UI_STRINGS = {
  en: {
    startBtn: "Find My Chicken Match",
    heroHeadline: "Find your K-Chicken Soulmate 🍗",
    heroSub: "Take the 2-minute quiz to discover which Korean chicken brand perfectly matches your taste profile.",
    shareBtn: "Share",
    skipBtn: "Skip",
    nextBtn: "Next",
    backBtn: "Back",
    resultTitle: "Your Perfect Match",
    viewMenu: "View Menu",
    matchScore: "Match",
    crunch: "Crunch",
    heat: "Heat",
    mood: "Mood",
    sauce: "Sauce",
    reasonPlaceholder: "Perfect match for your taste profile.",
    premiumBannerTitle: "Try Premium",
    premiumBannerText: "First month free. Then $4.99/month.",
    premiumBannerBtn: "Start Free Month"
  },
  ko: {
    startBtn: "나의 치킨 찾기",
    heroHeadline: "나의 치킨 소울메이트 찾기 🍗",
    heroSub: "2분 퀴즈로 당신의 입맛에 딱 맞는 치킨 브랜드를 찾아보세요.",
    shareBtn: "공유하기",
    skipBtn: "건너뛰기",
    nextBtn: "다음",
    backBtn: "이전",
    resultTitle: "당신의 완벽한 매치",
    viewMenu: "메뉴 보기",
    matchScore: "일치도",
    crunch: "바삭함",
    heat: "매운맛",
    sauce: "소스량",
    reasonPlaceholder: "당신의 취향에 딱 맞는 치킨입니다.",
    premiumBannerTitle: "프리미엄 체험",
    premiumBannerText: "첫 달 무료. 이후 월 $4.99.",
    premiumBannerBtn: "무료 체험 시작"
  },
  zh: {
    startBtn: "寻找我的炸鸡",
    heroHeadline: "寻找你的炸鸡灵魂伴侣 🍗",
    heroSub: "花2分钟测试，发现最适合你口味的韩式炸鸡品牌。",
    shareBtn: "分享",
    skipBtn: "跳过",
    nextBtn: "下一步",
    backBtn: "返回",
    resultTitle: "你的完美匹配",
    viewMenu: "查看菜单",
    matchScore: "匹配度",
    crunch: "酥脆度",
    heat: "辣度",
    sauce: "酱汁量",
    reasonPlaceholder: "这是最适合你口味的炸鸡。",
    premiumBannerTitle: "试用高级版",
    premiumBannerText: "首月免费。之后每月$4.99。",
    premiumBannerBtn: "开始免费试用"
  },
  ja: {
    startBtn: "チキンを探す",
    heroHeadline: "運命のチキンに出会う 🍗",
    heroSub: "2分間のクイズで、あなたの味覚にぴったりの韓国チキンブランドを見つけましょう。",
    shareBtn: "共有",
    skipBtn: "スキップ",
    nextBtn: "次へ",
    backBtn: "戻る",
    resultTitle: "あなたにぴったりのチキン",
    viewMenu: "メニューを見る",
    matchScore: "マッチ度",
    crunch: "サクサク感",
    heat: "辛さ",
    mood: "気分",
    sauce: "ソースの量",
    reasonPlaceholder: "あなたの好みにぴったりのチキンです。",
    premiumBannerTitle: "プレミアムを試す",
    premiumBannerText: "初月無料。その後月額$4.99。",
    premiumBannerBtn: "無料体験を開始"
  }
};

const QUIZ_TRANSLATIONS = {
  crunch: {
    title: {
      en: "How crunchy do you want it?",
      ko: "얼마나 바삭한 걸 원하시나요?",
      zh: "你喜欢多脆的口感？",
      ja: "どれくらいサクサクがいいですか？"
    },
    options: {
      Ultra: { en: "Ultra crunchy", ko: "엄청 바삭하게", zh: "超级酥脆", ja: "超サクサク" },
      Crispy: { en: "Crispy", ko: "적당히 바삭하게", zh: "酥脆", ja: "サクサク" },
      Balanced: { en: "Balanced", ko: "밸런스 있게", zh: "平衡", ja: "バランスよく" },
      Juicy: { en: "Soft & juicy", ko: "부드럽고 촉촉하게", zh: "软嫩多汁", ja: "しっとりジューシー" }
    }
  },
  heat: {
    title: {
      en: "How spicy can you handle today?",
      ko: "오늘 얼마나 매운 게 땡기나요?",
      zh: "今天想吃多辣？",
      ja: "辛さはどれくらいがいいですか？"
    },
    options: {
      None: { en: "No spice", ko: "안 매운 맛", zh: "不辣", ja: "辛くない" },
      Mild: { en: "Mild", ko: "순한 맛", zh: "微辣", ja: "マイルド" },
      Medium: { en: "Medium", ko: "적당히 매운 맛", zh: "中辣", ja: "中辛" },
      Hot: { en: "Hot", ko: "매운 맛", zh: "很辣", ja: "辛口" },
      Danger: { en: "Danger", ko: "아주 매운 맛 (위험!)", zh: "变态辣", ja: "激辛 (危険!)" }
    }
  },
  mood: {
    title: {
      en: "What flavor mood are you craving?",
      ko: "어떤 맛이 땡기시나요?",
      zh: "你想吃什么口味？",
      ja: "どんな味が食べたいですか？"
    },
    options: {
      Clean: { en: "Clean & salty", ko: "깔끔하고 짭짤한 맛", zh: "清淡咸香", ja: "さっぱり塩味" },
      SweetSpicy: { en: "Sweet & spicy", ko: "매콤달콤 양념", zh: "甜辣", ja: "甘辛ヤンニョム" },
      Garlic: { en: "Garlic & savory", ko: "마늘 & 감칠맛", zh: "蒜香", ja: "ニンニク風味" },
      Soy: { en: "Soy & umami", ko: "간장 & 깊은 맛", zh: "酱油鲜香", ja: "醤油＆旨味" },
      Cheesy: { en: "Cheesy & creamy", ko: "치즈 & 크리미", zh: "芝士奶香", ja: "チーズ＆クリーミー" },
      Smoky: { en: "Smoky / peppery", ko: "훈제 / 후추향", zh: "烟熏/黑椒", ja: "スモーキー/ペッパー" }
    }
  },
  sauce: {
    title: {
      en: "Sauce or no sauce?",
      ko: "소스는 어떻게 할까요?",
      zh: "要加酱吗？",
      ja: "ソースはどうしますか？"
    },
    options: {
      NoSauce: { en: "No sauce (pure fried)", ko: "소스 없이 (후라이드)", zh: "不加酱 (原味炸鸡)", ja: "ソースなし (フライド)" },
      Light: { en: "Light sauce", ko: "적게 (찍먹/살짝)", zh: "少酱", ja: "少なめ" },
      Saucy: { en: "Saucy", ko: "넉넉하게 (양념)", zh: "多酱", ja: "たっぷり" },
      Extra: { en: "Extra saucy", ko: "아주 넉넉하게", zh: "超多酱", ja: "超たっぷり" }
    }
  }
};
