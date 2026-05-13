/**
 * Per-flavor descriptions keyed by flavor ID.
 * Written for a formulator audience: what it tastes like, where it performs,
 * and what to watch for. Falls back to familyNotes if a key is missing.
 */
export const flavorNotes: Record<string, string> = {

  // ── Berry ────────────────────────────────────────────────────────────────

  "acai-berry-powder":
    "Earthy, slightly astringent acai powder with subtle berry and grape undertones. Built for nutraceutical masking work — pairs well with other berry notes to reduce metallic and bitter character from actives.",

  "black-currant-liquid":
    "Deep, jammy black currant with wine-like complexity and a dry finish. Strong identity in premium beverages and confectionery; keep use levels moderate or astringency builds.",

  "blackberry-powder":
    "Earthy, slightly seedy blackberry in powder form with good depth and natural character. Works well in protein blends and dry bakery mixes where a deep berry note is needed.",

  "blue-raspberry-liquid":
    "High-impact, bright candy profile that doesn't track any real raspberry variety. Built for confectionery, gummies, and novelty beverages that need sour-sweet punch in a high-sugar system.",

  "blueberry-liquid":
    "Clean, slightly tart blueberry with cooked-fruit depth. Strong performer in dairy, gummies, and protein powders; oil-soluble version carries better through fat-based bakery applications.",

  "boysenberry-liquid":
    "Soft, jammy boysenberry with raspberry and blackberry character and low acidity. Distinctive in premium dairy and beverage applications where standard berry reads too common.",

  "cherry-liquid":
    "Classic sweet cherry with a light almond-stone background. Use level shifts the profile between bright sweet cherry and darker Bing-style; works across dairy and confectionery.",

  "cough-syrup-cherry-liquid":
    "Sweet cherry built specifically for pharmaceutical liquid dosage forms. Formulated to complement typical excipient systems and hold through the dosing experience without turning artificial.",

  "cranberry-liquid":
    "Tart, slightly astringent cranberry with a clean acid profile. Commonly used as a blend partner to add tartness and identity in functional beverages and nutraceutical applications.",

  "mixed-berry-liquid":
    "Balanced blend of strawberry, raspberry, and blueberry that reads round and fruity rather than any single variety. Versatile where a clear berry direction is less important than a familiar berry impression.",

  "nutraceutical-berry-masking-powder":
    "Berry-based masking system in powder format targeting nutraceutical off-notes including metallic, bitter, and chalky character. Address the specific active first, then dial flavor to taste.",

  "pomegranate-liquid":
    "Tart, slightly tannic pomegranate with a dry, wine-adjacent finish. Works in functional beverages and gummies — use levels moderate to manage astringency in the finished product.",

  "raspberry-liquid":
    "Sharp, seedy raspberry with good acid punch at 1-400 concentration. Start use levels low and scale carefully. Strong identity in confectionery, beverages, and dairy.",

  "sour-cherry-candy-liquid":
    "Bright, tart cherry candy profile with pronounced acid character. Built for sour confectionery, hard candy, and novelty gummy applications where sharp-sweet impact is the target.",

  "strawberry-liquid":
    "Clean, ripe strawberry with natural sweetness and a light jammy background. Versatile across dairy, gummies, and beverages; oil-soluble version handles bakery and fat-phase applications.",

  "wild-berry-powder":
    "Naturalistic mixed berry with a slightly earthy, irregular character in powder form. Suited for functional bars, dry protein blends, and applications where a rustic berry note matches the brand story.",

  // ── Botanical & Tea ───────────────────────────────────────────────────────

  "black-tea-liquid":
    "Clean, moderately tannic black tea with restrained astringency and a slight malty note. Works as a background element in premium beverages and as a base for chai-style compound profiles.",

  "elderflower-liquid":
    "Delicate, floral elderflower with a light honeyed sweetness and green-floral character. Use levels are critical — a little goes far. Works in premium beverages and specialty confectionery.",

  "hibiscus-tea-liquid":
    "Bright, tart hibiscus with cranberry-adjacent acidity and a floral finish. Strong identity in functional beverages and gummies where a distinctive, tart-fruity note adds credibility.",

  "jasmine-tea-liquid":
    "Soft, floral jasmine over a light tea base. Easily overwhelmed by bold flavor partners — keep surrounding notes subtle. Works in premium beverages and specialty confectionery.",

  "lavender-liquid":
    "Soft herbal lavender with floral and slightly medicinal notes. Use levels are critical — too much reads soapy. Works in premium bakery, dairy, and wellness-positioned beverages.",

  "matcha-green-tea-liquid":
    "Earthy, vegetal matcha with a slightly bitter, grassy character and a sweet finish. Works in premium beverages, dairy, and functional applications where authentic tea character supports the product story.",

  "rose-liquid":
    "Delicate, floral rose with a slightly waxy, perfumed character. Use levels are very critical — too high reads floral-off or soapy. Works in premium confectionery and specialty beverages.",

  // ── Candy & Confectionery ─────────────────────────────────────────────────

  "bubble-gum-liquid":
    "Sweet, fruity, high-impact gum character built for confectionery. Does not map to any natural fruit — it's a pure candy profile that reads artificial in food-format applications outside confectionery.",

  "cotton-candy-liquid":
    "Pure spun-sugar sweetness with no specific fruit direction. Works in confectionery and novelty applications; also useful as a very-low-level sweetness enhancer that doesn't add fruit character.",

  "gummy-bear-liquid":
    "Classic gummy bear blend with pineapple, strawberry, and apple notes. Built for gummy confectionery; also works in candy-style beverages where a nostalgic multi-fruit profile is the target.",

  // ── Chocolate & Brown Notes ───────────────────────────────────────────────

  "brown-sugar-caramel-liquid":
    "Molasses-forward caramel with more depth and complexity than a standard caramel note. Works in bakery, confectionery, and dairy where a richer, more rustic sweetness profile is needed.",

  "brownie-batter-liquid":
    "Rich, fudgy chocolate with raw-batter sweetness and a slight floury note. Built for confectionery fillings, ice cream, and protein powder applications where a dense chocolate dessert character is the target.",

  "butterscotch-liquid":
    "Warm, buttery brown sugar with a creamy, round finish. Works well in confectionery, dairy, and protein powder applications where a soft, sweet dessert character is needed without full chocolate depth.",

  "caramel-liquid":
    "Clean, mid-tone caramel with balanced cooked-sugar sweetness and a smooth finish. Works across bakery, confectionery, dairy, and beverage — one of the most versatile brown notes in the library.",

  "caramel-popcorn-liquid":
    "Sweet caramel with a light popcorn character and a warm, faintly salty finish. Works in popcorn coatings, snack seasonings, and dessert-style confectionery.",

  "chocolate-liquid":
    "Clean, mid-roast chocolate with balanced bitterness and sweetness. The dark variant adds more roasted depth. Works across confectionery, dairy, and bakery — test in the fat system of the finished product.",

  "chocolate-milk-liquid":
    "Sweet, rounded chocolate milk profile with soft dairy notes. Built for RTD chocolate beverage and protein powder applications where a drinkable chocolate profile, not a full-chocolate flavor, is the target.",

  "cocoa-powder":
    "Pure, unsweetened cocoa with a slightly bitter, earthy finish in powder format. Works as a foundation in dry mixes — typically used with a sweetener complement since it contributes zero sweetness.",

  "honey-liquid":
    "Floral, warm honey with a natural sweetness that reads authentic rather than candy-sweet. Works in beverages, dairy, and bakery as both a primary profile and a modifier to round out other notes.",

  "maple-syrup-liquid":
    "Clean, wood-smoked maple with rounded natural sweetness and a pleasant finish. Works well in bakery, confectionery, and breakfast-positioned beverages.",

  "mocha-liquid":
    "Balanced coffee and chocolate blend with a warm, slightly sweet finish. Works in beverages, dairy, and confectionery where coffee and chocolate read better as a compound than as separate additions.",

  "toffee-liquid":
    "Deep, caramelized sugar with a nutty, slightly bitter finish. Works in premium confectionery and dairy applications where a more complex brown note is needed beyond standard caramel.",

  "white-chocolate-liquid":
    "Sweet, creamy, cocoa-butter-forward profile with vanilla undertones. Works in confectionery coatings and dairy applications — fat compatibility matters, so test in the finished matrix.",

  // ── Citrus ────────────────────────────────────────────────────────────────

  "blood-orange-liquid":
    "Darker, more complex orange with berry and tannic undertones. Premium positioning for beverages and confectionery where standard orange reads too simple or generic.",

  "calamansi-liquid":
    "Punchy, sour-sweet calamansi with lime and orange character and a bright, clean finish. Strong identity in functional beverages and specialty confectionery.",

  "electrolyte-lemon-masking-liquid":
    "Lemon-based masking system targeting electrolyte mineral bitterness and metallic off-notes. Built for sports drinks and hydration applications — address the mineral load specifically, not just general sweetness.",

  "ginger-lime-liquid":
    "Sharp, fresh lime with a ginger heat overlay. Works in functional beverages, cocktail mixers, and specialty confectionery where a compound citrus-spice note is the target.",

  "grapefruit-liquid":
    "Bitter-bright grapefruit with a light pithy finish. Works in functional beverages and flavored waters; watch bitterness contribution at higher use levels.",

  "jalapeno-lime-liquid":
    "Sharp lime acidity with a jalapeno heat that builds progressively. Works in snack coatings, popcorn, and specialty sauces where a spicy-citrus compound character is the target.",

  "key-lime-liquid":
    "Sharper and more floral than standard lime with a punchy, tart finish. Oil-soluble format preferred for bakery fillings and confectionery where lime character needs to carry through the fat phase.",

  "lemon-liquid":
    "Bright, clean lemon with a sharp top note and good acid character. Versatile across beverage, bakery, confectionery, and oral care. One of the most application-flexible citrus profiles in the library.",

  "lemon-lime-liquid":
    "Balanced citrus blend with more body than straight lemon at 10X concentration. Performs well in beverage and confectionery at standard dilution — start use level calculation relative to the concentration.",

  "mandarin-orange-liquid":
    "Softer, rounder citrus than standard orange with more floral notes and lower acidity. Works well in dairy and light confectionery where orange reads too assertive.",

  "meyer-lemon-liquid":
    "Sweeter and less acidic than standard lemon with distinct floral undertones. Works in premium bakery, dairy, and specialty beverages where a gentler, more aromatic lemon character is the target.",

  "orange-liquid":
    "Classic sweet orange with clear top note character. Emulsion format provides water dispersibility for beverages. Works across a wide range of applications from confectionery to dairy.",

  "orange-cream-liquid":
    "Sweet orange balanced with creamy dairy notes. Built for creamsicle and orange-cream-style confectionery, dairy, and beverage applications.",

  "raspberry-lemonade-liquid":
    "Tart raspberry and bright lemon blend built specifically for beverage applications. Reads as a finished drink compound rather than two separate fruit additions.",

  "tangerine-liquid":
    "Bright, sweet tangerine with clean top notes and a less pithy finish than standard orange. Performs well in beverages and light confectionery.",

  "vitamin-orange-masking-powder":
    "Orange-based masking system in powder format targeting vitamin B complex and mineral off-notes. Formulated for fortified beverages and supplement applications — confirm active profile before finalizing use level.",

  "yuzu-citrus-liquid":
    "Complex, floral yuzu with citrus, tropical, and herbal notes — distinctive and premium. Low use levels deliver strong character. Works in specialty beverages and confectionery where yuzu is a brand story.",

  // ── Coffee & Beverage ─────────────────────────────────────────────────────

  "coffee-liquid":
    "Clean, medium-roast coffee with balanced bitterness and body. Works in beverages, dairy, and bakery. Adjust use level relative to the sweetener system — sweetness masks coffee bitterness non-linearly.",

  "cola-liquid":
    "Classic cola at concentrate strength with citrus, cinnamon, and vanilla notes. Highly versatile in syrup and RTD applications; confirm dilution ratio before development.",

  "cold-brew-coffee-liquid":
    "Smooth, low-acid cold brew with chocolate undertones and less bitterness than hot-brew profiles. Built for RTD beverage applications where body and roundness matter more than brightness.",

  "energy-drink-liquid":
    "Sharp, slightly tart energy drink character with citrus and mixed berry notes. Built for functional beverage applications where the energy drink profile — not a fruit profile — is the target.",

  "espresso-liquid":
    "Strong, dark-roast concentrated coffee with concentrated bitterness and roasted character. Works well in syrup applications, dairy, and confectionery where coffee impact needs to punch through.",

  "fruit-punch-liquid":
    "Bright, sweet multi-fruit punch blend at 1-600 concentration. Classic beverage profile that also works in confectionery and syrups. Confirm dilution for beverage applications before development.",

  "ginger-beer-liquid":
    "Sharp, dry ginger with moderate heat and a light yeasty character. Works in specialty beverages, cocktail mixers, and functional applications where ginger punch is needed.",

  "hazelnut-coffee-liquid":
    "Warm toasted hazelnut balanced with medium-roast coffee. Classic pairing for dairy applications, syrups, and confectionery. Coffee and hazelnut use levels can be adjusted relative to each other.",

  "horchata-liquid":
    "Sweet rice and cinnamon blend with soft creamy character. Works in specialty beverage and confectionery applications where a warm, spiced, sweet profile fits the concept.",

  "root-beer-liquid":
    "Herbal, slightly medicinal root beer with anise, vanilla, and spice notes. Works in specialty beverage and confectionery; strong identity for American-style root beer positioning.",

  "tropical-punch-liquid":
    "Tropical multi-fruit blend with bright sweetness and a juicy, sun-forward character. Works in beverage and confectionery applications where a warm-weather, mixed-tropical impression is the target.",

  // ── Custom & Signature ────────────────────────────────────────────────────

  "custom-beverage-profile-match-liquid":
    "Beverage matching service — we reverse-engineer and reformulate a target profile around your specific base, sweetener, and processing system. Share the benchmark and application details.",

  "custom-masking-system-liquid":
    "Custom masking system engineered around a specific active ingredient combination, excipient stack, and palatability goal. Not a starting-point flavor — developed entirely around your brief.",

  "custom-signature-fruit-liquid":
    "Proprietary fruit direction developed from the ground up around a specific brief, base, and application. Share the target character, matrix, and any reference products to start the conversation.",

  // ── Dessert & Bakery ──────────────────────────────────────────────────────

  "birthday-cake-liquid":
    "Sweet, frosting-forward vanilla cake with confetti-adjacent sweetness. Built for ice cream, confectionery, and RTD protein applications where a celebration-cake profile is the concept.",

  "butter-popcorn-liquid":
    "Rich, buttery popcorn character in oil-soluble liquid format. Built for popcorn coating applications — moderate use levels to avoid artificial character at higher loads.",

  "marshmallow-liquid":
    "Sweet, soft vanilla-adjacent marshmallow character with a pillowy, rounded sweetness. Works in confectionery fillings, ice cream, and protein powder applications.",

  "oatmeal-cookie-liquid":
    "Warm, spiced oatmeal cookie character with cinnamon, brown sugar, and dried fruit notes. Works in bakery, protein powder, and limited-time confectionery applications.",

  "pancake-syrup-liquid":
    "Sweet, maple-adjacent syrup character in an artificial profile. Built for bakery and confectionery where maple is a supporting note rather than the center of the flavor story.",

  "red-velvet-liquid":
    "Subtle cocoa with cream cheese notes and a light, sweet character. Works in confectionery, bakery, and protein powder applications where a compound dessert profile is the positioning.",

  "tiramisu-liquid":
    "Coffee, mascarpone cream, and light cocoa blend with a sophisticated dessert character. Built for ice cream, confectionery fillings, and protein powder applications.",

  // ── Melons ────────────────────────────────────────────────────────────────

  "cucumber-melon-liquid":
    "Light, fresh cucumber and melon blend with a clean, slightly green character. Works in functional beverages and wellness-positioned applications where a refreshing, non-fruit-sweet note is needed.",

  "watermelon-liquid":
    "Fresh, green-rind watermelon with light natural sweetness. More naturalistic than candy watermelon — works in beverages and light confectionery where a fresh summer profile is the target.",

  "watermelon-candy-liquid":
    "Artificially sweet, high-impact watermelon candy profile. Distinct from natural watermelon. Built for high-sugar confectionery and novelty beverage applications where candy recognition is the goal.",

  // ── Mint & Cooling ────────────────────────────────────────────────────────

  "mint-liquid":
    "Clean, balanced spearmint-peppermint blend with moderate cooling. Versatile in confectionery, oral care, and functional beverages — a good starting point before selecting a more specific mint direction.",

  "mouth-wash-liquid":
    "High-impact mint blend with balanced cooling, clean freshness, and a lasting aftertaste. Built for mouthwash applications — evaluates differently from food-format mint, so test in the finished system.",

  "oral-care-cool-mint-liquid":
    "Balanced cooling mint formulated for toothpaste and rinse applications. Accounts for SLS interaction and the full brushing experience rather than initial taste alone.",

  "peppermint-liquid":
    "Sharp, high-menthol peppermint with strong, clean cooling. Oral care and confectionery standard — adjust use level carefully. It goes from refreshing to medicinal in a narrow window.",

  "toothpaste-mint-liquid":
    "Clean, slightly sweet mint built for SLS-containing toothpaste matrices. Formulated for the full rinse experience including the aftertaste, not just the initial application.",

  "wintergreen-liquid":
    "Sweet, candy-like wintergreen with characteristic methyl salicylate note. Works in confectionery and some oral care applications where a softer, sweeter mint direction is preferred over peppermint.",

  // ── Nut & Praline ─────────────────────────────────────────────────────────

  "almond-liquid":
    "Clean, bitter-almond character with a sweet background at 4-fold concentration. Start use levels low. Confirm benzaldehyde content relative to the application and any labeling requirements.",

  "butter-pecan-liquid":
    "Warm, buttery pecan with light caramel notes and a rounded nut character. Works well in dairy applications, bakery fillings, and confectionery coatings.",

  "macadamia-liquid":
    "Rich, buttery macadamia with a creamy, mild nut character and soft sweetness. Works well in cookies, dairy, and confectionery applications where an understated nut note is preferred.",

  "peanut-butter-liquid":
    "Roasted, slightly salty peanut butter with good depth and a savory-sweet balance. Works in confectionery, protein powders, and bakery. Confirm allergen declaration requirements early.",

  "pistachio-liquid":
    "Mild, subtly sweet pistachio with a delicate green-nut character. Use levels need to be higher than other nut profiles to register clearly. Works in dairy, bakery, and premium confectionery.",

  "sesame-liquid":
    "Toasted, earthy sesame with a savory-sweet balance and a light nuttiness. Works in specialty confectionery and bakery applications; also useful as a savory modifier.",

  "walnut-liquid":
    "Bitter-earthy walnut with a dry, slightly tannic finish. Works in bakery and confectionery where nut complexity and a mild bitter character add interest and depth.",

  // ── Orchard Fruit ─────────────────────────────────────────────────────────

  "apple-liquid":
    "Clean, ripe apple with a balanced sweet-tart profile. Reads as fresh-cut apple in beverages and light applications; shifts toward cooked character at higher use levels in bakery.",

  "apple-pie-liquid":
    "Cooked apple with cinnamon, spice, and pastry notes. Built for bakery, confectionery, and dairy applications where an apple dessert compound is the target rather than a fresh apple profile.",

  "green-apple-liquid":
    "Bright, tart Granny Smith-style apple with a sharp acid punch. Performs well in confectionery and beverages where a crisp, sour-apple direction and strong tartness are needed.",

  "pear-liquid":
    "Soft, slightly floral pear with mild sweetness and low acidity. Works well in bakery fillings and dairy where apple would read too sharp or dominant.",

  "sour-apple-liquid":
    "Extreme tart, candy-style sour green apple. Built for sour confectionery applications. Distinct from naturalistic green apple — confirm that a candy-style profile is the right direction.",

  "spearmint-liquid":
    "Sweet, low-menthol spearmint with smooth, gentle cooling. Preferred over peppermint in confectionery and gum applications where a softer, less assertive mint experience is needed.",

  // ── Other ─────────────────────────────────────────────────────────────────

  "kettle-corn-liquid":
    "Sweet and salty kettle corn character with a light caramel note and authentic popcorn identity. Works in popcorn coatings and confectionery-inspired snack applications.",

  "medicated-grape-liquid":
    "Grape-based palatability flavor for pharmaceutical liquid suspensions. Addresses active bitterness while complementing standard pharma excipient backgrounds. Confirm excipient compatibility.",

  // ── Savory & Culinary ─────────────────────────────────────────────────────

  "beef-broth-liquid":
    "Rich, meaty beef broth with Maillard browning notes and savory depth. Works in sauces, seasonings, and savory prepared food applications where a credible meat background is needed.",

  "cheddar-popcorn-powder":
    "Sharp cheddar with mild heat and a clean, savory-dairy finish in powder format. Standard for popcorn and snack coating applications.",

  "garlic-herb-liquid":
    "Roasted garlic with mixed herb character and mild savory depth. Works in snack seasonings, sauces, and prepared food applications.",

  "miso-liquid":
    "Savory, slightly sweet miso with umami depth and fermented complexity. Works in specialty sauces, seasonings, and Asian-inspired savory applications where authenticity matters.",

  "nacho-cheese-seasoning-powder":
    "Sharp cheddar with mild heat, salt, and savory character in powder format. Standard for snack coatings and dry seasoning blends.",

  "ranch-seasoning-powder":
    "Buttermilk, garlic, and herb blend with mild acid and dairy character in powder format. Works across popcorn, snack coatings, and dry seasoning applications.",

  "savory-chicken-liquid":
    "Mild, clean chicken broth with savory depth and a light Maillard background. Works in sauces, seasonings, and prepared food applications.",

  "smoked-paprika-liquid":
    "Rich, sweet-smoky paprika with moderate heat and earthy character. Works in snack coatings, meat seasonings, and savory applications where a warm, smoky-sweet note adds depth.",

  "smoky-bbq-liquid":
    "Sweet-smoky BBQ with tomato, molasses, and char notes. Works in snack coatings, popcorn seasonings, and sauce applications.",

  "thai-basil-liquid":
    "Slightly sweet, anise-forward Thai basil with herbal complexity. Works in specialty sauces and savory prepared food applications where a Southeast Asian profile is the target.",

  "tomato-basil-liquid":
    "Fresh tomato with herbal basil and a slight background acidity. Works in savory sauces, seasonings, and prepared food applications.",

  "wasabi-liquid":
    "Sharp, pungent wasabi with a clean, fast-clearing heat profile. Works in specialty snack seasonings and Asian-inspired savory applications.",

  "white-cheddar-popcorn-powder":
    "Sharp aged cheddar with a clean dairy note and mild salt character in powder format. Standard for premium popcorn and snack coating applications.",

  // ── Spice & Warmth ────────────────────────────────────────────────────────

  "chai-tea-liquid":
    "Warm spice blend with black tea base, cinnamon, cardamom, and ginger. Works in beverage, dairy, and bakery applications where a layered, warming spice compound is the target.",

  "cinnamon-liquid":
    "Clean, sharp cinnamon oil with strong top note character. Oil-soluble format; high use levels can cause irritation in some applications — confirm tolerance and use level range before proceeding.",

  "cinnamon-toothpaste-liquid":
    "Warm, spicy cinnamon built for oral care applications. Works with toothpaste bases and delivers lasting warmth without excess irritation at standard use levels.",

  // ── Stone Fruit ───────────────────────────────────────────────────────────

  "apricot-liquid":
    "Soft stone fruit with a slightly tart finish and a floral top note. Works well in bakery fillings, dairy, and confectionery coatings where a softer stone fruit character is preferred.",

  "peach-liquid":
    "Ripe, juicy peach with rounded sweetness and a soft stone fruit background. Strong performer in dairy, beverages, and confectionery — one of the most versatile stone fruit profiles.",

  "plum-liquid":
    "Deep, slightly tangy plum with some stone fruit complexity and a wine-adjacent note. Works in specialty confectionery and premium beverage applications.",

  "white-peach-liquid":
    "Delicate, aromatic peach with floral notes, a softer sweetness, and low acidity. Premium positioning for dairy and light beverage applications where a more refined stone fruit character is needed.",

  // ── Tropical ──────────────────────────────────────────────────────────────

  "banana-liquid":
    "Classic ripe banana with a clean, slightly candy-adjacent sweetness. Performs well in dairy, nutraceutical, and confectionery applications — watch for top note fade under heat.",

  "coconut-liquid":
    "Clean, sweet coconut with a neutral finish that doesn't overwhelm blend partners. Works well in dairy, bakery, and tropical beverage profiles.",

  "dragon-fruit-liquid":
    "Mild, slightly sweet dragon fruit with subtle earthy undertones and a light tropical character. Identity flavor for functional beverages and limited-time confectionery.",

  "guava-liquid":
    "Sweet, slightly tropical guava with a floral-fruity character and lower intensity than mango. Works well in beverages and dairy where a tropical note is needed without full mango punch.",

  "kiwi-liquid":
    "Bright, slightly tart kiwi with green and tropical notes. Works well in beverages and gummies where a fresh, light fruit character is needed.",

  "lychee-liquid":
    "Floral, delicate lychee with rose-adjacent sweetness. Handle use level carefully — too much reads floral-off. Works in light beverages and premium confectionery.",

  "mango-liquid":
    "Ripe, juicy mango with smooth sweetness and a tropical top note. Strong performer across beverages, gummies, and dairy. One of the most reliably versatile tropical profiles.",

  "papaya-liquid":
    "Mild, musky papaya with a tropical sweetness and a slightly earthy background. Distinctive in functional beverages and specialty confectionery where a less common tropical note is the intent.",

  "passion-fruit-liquid":
    "Acidic, aromatic passion fruit with tropical complexity and a tart finish. Works as a blend accent or primary note in premium beverages and gummies.",

  "pina-colada-liquid":
    "Blended pineapple and coconut with a creamy, rounded character. Built for confectionery and beverage applications where a compound tropical profile works better than pineapple and coconut added separately.",

  "pineapple-liquid":
    "Bright, slightly sharp pineapple with acid bite and clean sweetness. Beverage and confectionery standard; works across applications and is highly mixable with other tropical notes.",

  "pineapple-powder":
    "Pineapple character in powder format with good stability for dry applications. Works in protein blends, dry mixes, and other powder applications where the liquid version isn't practical.",

  "tamarind-liquid":
    "Tart, tangy tamarind with a complex sweet-sour profile and a slightly earthy finish. Strong identity in specialty confectionery and functional beverages where a unique, sour-complex note is the target.",

  // ── Vanilla & Cream ───────────────────────────────────────────────────────

  "bavarian-cream-liquid":
    "Sweet cream with a light vanilla and pastry character. Works well in confectionery fillings, bakery frostings, and dairy applications where a dessert-cream profile is more appropriate than straight vanilla.",

  "cheesecake-liquid":
    "Rich, dense cream cheese and sweet pastry character. Works well in ice cream, confectionery fillings, and protein powder applications where a dense, indulgent dairy-dessert note is needed.",

  "cookies-and-cream-liquid":
    "Chocolate cookie balanced with sweet cream notes. Built for ice cream, protein powders, and confectionery where a compound dessert profile reads more finished than separate chocolate and vanilla.",

  "cream-cheese-liquid":
    "Slightly tangy, dairy-rich cream cheese character. Works well in bakery frostings, confectionery fillings, and compound dessert profiles.",

  "cream-soda-liquid":
    "Sweet, vanilla-forward soda profile. Works well in confectionery and specialty beverage applications where a retro-sweet, carbonated-drink character is the target.",

  "french-vanilla-liquid":
    "Warm, slightly buttery vanilla with custard notes and a rich, rounded finish. Performs well in ice cream, protein powder, and baked applications.",

  "protein-vanilla-masking-liquid":
    "Vanilla-based masking system targeting BCAA and whey protein off-notes. Built for high-protein applications where standard vanilla falls flat because the protein matrix suppresses flavor perception.",

  "sweet-cream-liquid":
    "Clean, neutral dairy cream without strong vanilla influence. Works as a modifier to round out fruit profiles or as a standalone in dairy applications where light, clean creaminess is needed.",

  "vanilla-liquid":
    "Vanilla extract character in liquid format — woody, floral, and slightly complex compared to vanillin. Works in premium bakery and dairy applications where natural vanilla character is part of the label story.",

  "vanilla-bean-liquid":
    "Full-spectrum vanilla bean character with woody, floral, and fruity notes. More botanical and authentic than vanillin; premium bakery and dairy positioning.",

  "vanilla-custard-liquid":
    "Creamy, rounded vanilla with egg-yolk richness and a soft, sweet finish. Built for ice cream, dairy, and protein powder applications where custard depth is more appropriate than straight vanilla.",

  "vanilla-powder":
    "Clean, sweet vanilla built around powder format for dry mix applications. Balanced vanillin character; pairs well with cream and dairy profiles in protein blends and bakery dry mixes.",

  "vanillin-liquid":
    "High-strength artificial vanillin at 10X concentration. Cost-effective sweet vanilla baseline. Adjust use level carefully relative to natural vanilla formats — concentration is significantly higher.",

  "yogurt-liquid":
    "Mild, slightly tannic yogurt culture note. Works as a background flavor in dairy applications; adds authenticity to cultured dairy formats and can help fermented notes read more credible.",

};
