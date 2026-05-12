export type Challenge = {
  title: string;
  body: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type IndustryDetail = {
  challenges: Challenge[];
  faqs: FAQ[];
  relevantCerts: string[];
  sampleNote: string;
};

export const industryDetails: Record<string, IndustryDetail> = {
  bakery: {
    relevantCerts: ["GMP", "SQF", "Organic"],
    sampleNote: "Include oven temperature and time, product format (filling, topping, baked-in), sweetener system, and target shelf life.",
    challenges: [
      {
        title: "Flavor volatility at oven temperature",
        body: "Most flavor compounds that read bright and clean at room temperature cook off in the oven before the product is done. Baked applications require heat-stable flavor fractions or encapsulated systems designed for your specific time-temperature profile. A bench approval that falls flat in the oven is not a close call.",
      },
      {
        title: "Sweetener system changes the profile",
        body: "The same flavor reads differently in sucrose versus stevia versus erythritol. High-intensity sweetener backgrounds have characteristic bitter and metallic notes that interact with fruit and vanilla profiles in ways that do not show up until you are in the real matrix. The sweetener has to be part of the brief from day one.",
      },
      {
        title: "Oil-water phase balance in fillings and frostings",
        body: "Fillings, frostings, and batters have different fat-to-water ratios. A flavor built for an oil-based filling may not carry correctly in a water-continuous frosting. The delivery system and phase compatibility matter as much as the flavor character.",
      },
      {
        title: "Extended ambient shelf life",
        body: "A 9-12 month shelf life means top notes have to survive without drifting toward stale, cardboard, or oxidized character. The flavor system has to be built for the timeline, not just the day of production.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors that survive oven temperatures?",
        a: "Yes. Heat stability is built into the formulation from the first sample. We develop around your specific temperature and time parameters. Where the application requires it, we use encapsulated systems and heat-stable fractions.",
      },
      {
        q: "Do you work with both liquid and powder bakery flavors?",
        a: "Both. Liquid flavors work well for frostings, glazes, and applications where liquid addition does not affect formula balance. Powder flavors are standard for dry mixes, batters, and applications where the liquid phase is critical to texture.",
      },
      {
        q: "Can you match an existing bakery flavor from another supplier?",
        a: "Yes. If you have a benchmark, we build to match performance in your specific matrix. The match is always evaluated in the finished product format, not in water or isolation.",
      },
      {
        q: "What information do you need to start a bakery flavor project?",
        a: "Application format (cake, cookie, filling, coating, snack), target flavor profile, sweetener system, processing temperature and time, shelf life requirement, and any label requirements.",
      },
      {
        q: "How do your bakery flavors handle 12-month shelf life requirements?",
        a: "We build for the stated shelf life from the start. Extended shelf life typically means more heat-stable fractions, reduced volatile top notes, and sometimes encapsulation where the base allows it.",
      },
    ],
  },

  beverage: {
    relevantCerts: ["GMP", "SQF", "Kosher", "Halal", "Organic"],
    sampleNote: "Include base (water, juice, plant-based), pH target, sweetener system, processing method (cold fill, pasteurization, UHT), carbonation, and any functional ingredients.",
    challenges: [
      {
        title: "Acid environment behavior",
        body: "Citric, malic, and phosphoric acids affect how flavor compounds behave over time. Some esters hydrolyze in acidic environments. Others get amplified. Stable beverage flavor formulation means knowing which compounds hold and which drift, and building around the acid system in the brief.",
      },
      {
        title: "Sweetener-specific profiling",
        body: "A flavor built for HFCS performs differently in a stevia or monk fruit formula. High-intensity sweetener combinations have characteristic aftertaste and background notes that require specific flavor systems to address. The same profile turned up louder is not the same as a profile built for that sweetener.",
      },
      {
        title: "Carbonation changes the finished profile",
        body: "CO2 amplifies bright, sharp top notes and suppresses round, creamy ones. A profile approved in still water or at bench can read completely differently in the finished carbonated product. Carbonated evaluation has to be part of the development loop.",
      },
      {
        title: "Heat treatment and flavor stability",
        body: "Pasteurization and UHT processing damage heat-sensitive flavor fractions. Premium juice-based and functional beverages are especially sensitive. The flavor system has to survive the kill step, not just the filling temperature.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors for high-acid beverages?",
        a: "Yes. Acid-stable flavor systems are standard for us. We test in the actual pH range of the finished product and build around the specific acid system you are using.",
      },
      {
        q: "Do you develop flavors for stevia and monk fruit-sweetened beverages?",
        a: "Yes. High-intensity sweetener backgrounds require flavor systems built for them, not standard profiles. We work with the specific sweetener combination you are using and build around its characteristic notes.",
      },
      {
        q: "How do you handle carbonation during development?",
        a: "We evaluate in carbonated format when the application requires it. Bench approval in still water does not guarantee performance in CO2. Carbonated testing is part of the development loop.",
      },
      {
        q: "Can you help with off-note masking in functional beverages?",
        a: "Yes. We have masking systems for common functional ingredients including vitamins, minerals, and botanical extracts. Masking is built around the specific off-note source, not a generic sweet cover.",
      },
      {
        q: "What do you need from us to start a beverage flavor project?",
        a: "Target flavor profile, base, pH target, sweetener system, processing method, carbonation, and any functional ingredients or label requirements.",
      },
    ],
  },

  confectionery: {
    relevantCerts: ["GMP", "Kosher", "Halal"],
    sampleNote: "Include product format (gummy, hard candy, coated), process temperature, gelatin or pectin system if applicable, and target shelf life.",
    challenges: [
      {
        title: "Process temperatures destroy delicate compounds",
        body: "Hard candy pull temperature runs 300-320F. Gummy kettles run 200-230F. Most standard flavor systems are not built for these temperatures. Confectionery-specific flavor systems use heat-stable carriers and higher-boiling compounds that survive the process.",
      },
      {
        title: "High sugar solids compete with flavor perception",
        body: "At 70-80 Brix, sweetness competes heavily with flavor perception. Profiles that read distinctly in water get drowned in a high-solids gummy or hard candy system. Confectionery flavors have to be built with the intensity and character to punch through.",
      },
      {
        title: "Moisture migration changes flavor release over shelf life",
        body: "In soft candy and gummies, moisture migrates between phases as the product ages. This changes both texture and the physical structure of flavor release. A gummy at week one and the same gummy at month four taste different not just from oxidation, but from structural change in how the flavor is delivered.",
      },
      {
        title: "Fat binding in compound coatings",
        body: "Chocolate and compound coatings bind lipophilic aroma compounds in the fat phase. The same flavor load that works in a gummy may be imperceptible in a compound coating. Fat-based applications need fat-compatible flavor systems and higher use levels.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors for hard candy processes?",
        a: "Yes. Hard candy development starts with your pull temperature and hold time. We build for the specific thermal profile of your process.",
      },
      {
        q: "Do you work with gummy formulations?",
        a: "Yes. Gummy development is one of our most common applications. We formulate around your gelatin or pectin system and test for performance across the shelf life range.",
      },
      {
        q: "Can you provide Kosher or Halal certified flavors for confectionery?",
        a: "Yes. Kosher and Halal certification are available for qualifying flavor projects. Tell us at the project start so ingredient sourcing is confirmed from sample one.",
      },
      {
        q: "How do you approach flavor matching for a reference confectionery product?",
        a: "We analyze the reference to identify what makes the profile distinctive, then build to match those specific characteristics in your actual production matrix.",
      },
      {
        q: "What is a realistic timeline for confectionery flavor development?",
        a: "First samples typically ship in 3-5 business days. Most confectionery projects reach an approvable sample within 3-5 rounds depending on how closely the brief is defined.",
      },
    ],
  },

  dairy: {
    relevantCerts: ["GMP", "SQF", "Kosher", "Halal", "Organic"],
    sampleNote: "Include fat content, protein level, sweetener system, processing method, and whether the base is dairy or plant-based.",
    challenges: [
      {
        title: "Fat phase alters flavor release and perception",
        body: "Fat binds lipophilic aroma compounds and changes how they are released. A vanilla or strawberry profile in full-fat ice cream releases differently than the same flavor in a low-fat or plant-based alternative. Each fat type, dairy fat, coconut, sunflower, or oat, interacts with flavor compounds differently.",
      },
      {
        title: "Protein binding reduces perceived intensity",
        body: "In high-protein dairy and plant-based products, protein concentrate levels can bind flavor compounds and reduce perceived intensity. High-protein applications often require higher use levels or specific systems designed to compensate for this binding.",
      },
      {
        title: "Freeze-thaw cycling affects flavor stability",
        body: "Ice cream flavors have to survive freezing, recrystallization during distribution, and softening in the consumer's hand. Some flavor compounds mute or shift character after freeze-thaw cycles. Stability testing through the distribution scenario is part of the development loop.",
      },
      {
        title: "Fermented note compatibility in cultured products",
        body: "In yogurt, kefir, and cultured dairy, the culture produces diacetyl and lactic acid that become part of the finished flavor profile. The added flavor has to work with these culture-derived notes, not mask them.",
      },
    ],
    faqs: [
      {
        q: "Do you develop flavors for plant-based dairy alternatives?",
        a: "Yes. Plant-based bases each have different flavor-binding behavior and background notes. We develop profiles that work with the specific plant base, not just the flavor target.",
      },
      {
        q: "Can you develop flavors for frozen dairy applications?",
        a: "Yes. We formulate for freeze-thaw stability and evaluate performance at frozen temperatures. Ice cream flavors require different fractions than ambient or refrigerated dairy products.",
      },
      {
        q: "How do you handle the off-notes in protein-fortified dairy products?",
        a: "Protein masking is part of our standard capability. We build masking systems around the specific protein source and concentration.",
      },
      {
        q: "What information helps you develop a dairy flavor more accurately?",
        a: "Fat content, protein level, sweetener system, processing method, any plant-based base, and the flavor target.",
      },
      {
        q: "Do you work with both liquid and powder formats for dairy?",
        a: "Both. Liquid flavors are standard for finished dairy products. Powder flavors are common for dry dairy mixes, protein powders, and applications where moisture control matters.",
      },
    ],
  },

  nutraceutical: {
    relevantCerts: ["GMP", "SQF", "FDA Registered Facility"],
    sampleNote: "Include active ingredient list with concentrations, protein source and level if applicable, sweetener system, pH, and product format.",
    challenges: [
      {
        title: "Active ingredients each have distinct off-notes",
        body: "BCAAs are bitter and metallic. Magnesium is chalky. Omega-3s carry fishy notes. Ashwagandha has an earthy, root-like character. Masking requires systems built for the specific off-note chemistry of each active. A general masking flavor covers sweetness; it does not address the source of the problem.",
      },
      {
        title: "High-protein matrices create flat, savory backgrounds",
        body: "Protein concentrates at 20-25g per serving create a dense, umami, beany background that makes sweet flavors taste flat and one-dimensional. Vanilla and chocolate profiles in protein powders have to be built with this matrix in mind.",
      },
      {
        title: "Sweetener combinations create complex backgrounds",
        body: "Most nutraceutical products use multiple high-intensity sweeteners to balance sweetness while managing cost. Each combination creates different backgrounds that interact with the masking and flavor systems in ways that require formulation-specific development.",
      },
      {
        title: "pH variability affects flavor performance",
        body: "Vitamin C and other acidulants lower the pH of the matrix significantly. Some botanical extracts are alkaline. The flavor and masking system has to be stable and functional across a pH range that may not be finalized until late in the formulation process.",
      },
    ],
    faqs: [
      {
        q: "Can you mask the bitterness of specific active ingredients?",
        a: "Yes. We develop masking systems for specific active off-note profiles: BCAA bitterness and metallics, mineral chalkiness, botanical earthiness, and others. The masking approach depends on the specific active, not just the general bitterness level.",
      },
      {
        q: "Do you work with protein powder flavor development?",
        a: "Yes. Protein powder work is one of our core nutraceutical applications. We develop flavors and masking systems around the specific protein source, concentration, and sweetener system.",
      },
      {
        q: "What sweetener systems do you typically work with in nutraceutical products?",
        a: "Stevia, sucralose, monk fruit, erythritol, xylitol, and combinations. We develop flavors and masking systems built for the specific sweetener blend.",
      },
      {
        q: "Can you develop Kosher or organic-certified flavors for nutraceutical products?",
        a: "Yes, for qualifying formulas. Tell us the certification requirement at the project start so ingredient sourcing can be confirmed from the first sample.",
      },
      {
        q: "What do you need to start a nutraceutical flavor project?",
        a: "Active ingredient list with concentrations, protein source and level if applicable, sweetener system, pH, format (powder, liquid, gummy), and the flavor target.",
      },
    ],
  },

  "oral-care": {
    relevantCerts: ["GMP", "FDA Registered Facility"],
    sampleNote: "Include product format (toothpaste, mouthwash, breath strip), cooling compound preferences if any, and target freshness profile.",
    challenges: [
      {
        title: "No food matrix to buffer perception",
        body: "In toothpaste, mouthwash, and breath strips, the flavor is in direct contact with taste receptors at full concentration. There is no food matrix to buffer, dilute, or alter perception. Every character note in the flavor system, including off-notes that would be imperceptible in food, comes through fully.",
      },
      {
        title: "Cooling compound calibration is precise",
        body: "Menthol, WS-3, WS-23, and other cooling agents have to be balanced precisely. Too little and the product does not deliver the freshness signal consumers expect. Too much reads medicinal or anesthetic. The right balance is different for toothpaste, mouthwash, and mint confectionery.",
      },
      {
        title: "Surfactants interact with taste receptors",
        body: "SLS and other surfactants in toothpaste interact with sweet taste receptors, suppressing sweetness and altering perception for 30 or more minutes after brushing. Flavor systems in toothpaste have to account for this altered taste environment.",
      },
      {
        title: "Aftertaste duration and character define the experience",
        body: "Oral care products sell freshness that lingers. The flavor system has to deliver immediate impact and a clean, lasting finish. Profiles with strong initial impact that drop off quickly, or that turn soapy or metallic in the aftertaste, fail the application.",
      },
    ],
    faqs: [
      {
        q: "Can you develop custom mint profiles beyond standard peppermint?",
        a: "Yes. Spearmint, wintergreen, cooling blends, menthol-free cooling systems, and custom mint combinations are all available. The profile depends on the intended application and the cooling experience you want to deliver.",
      },
      {
        q: "Do you develop flavors for toothpaste specifically?",
        a: "Yes. Toothpaste flavors have to account for SLS interaction, abrasive base compatibility, and the full rinse experience. We develop for the finished toothpaste matrix.",
      },
      {
        q: "What cooling agents do you work with?",
        a: "Menthol, WS-3, WS-23, Icilin, and other cooling agents depending on the application and desired sensation. Cooling compounds are balanced for the specific product experience.",
      },
      {
        q: "How do you handle the aftertaste requirements for mouthwash?",
        a: "Aftertaste duration and character are part of the development brief for mouthwash. We evaluate across the full duration of the freshness experience, not just at the initial rinse.",
      },
      {
        q: "Can you match an existing oral care flavor from another supplier?",
        a: "Yes. If you have a reference product and target performance characteristics, we can match and potentially improve the profile.",
      },
    ],
  },

  pharmaceutical: {
    relevantCerts: ["GMP", "FDA Registered Facility"],
    sampleNote: "Include API name or off-note profile, dosage form (liquid, chewable, lozenge), excipient system, dose volume, and target age group if pediatric.",
    challenges: [
      {
        title: "API bitterness requires targeted masking",
        body: "Most active pharmaceutical ingredients are bitter. This is related to the molecular structures that make them pharmacologically active. Masking requires understanding which bitter receptor subtypes the specific API activates, then using systems that address those receptors. A general sweet masking flavor does not solve API bitterness.",
      },
      {
        title: "Excipient background changes the flavor equation",
        body: "Sorbitol, mannitol, xylitol, and sucralose each have distinct taste backgrounds that interact with the masking system. A flavor built to mask the API has to account for the full excipient stack. Changes to excipient levels late in development can require re-masking work.",
      },
      {
        title: "Suspension stability and compatibility",
        body: "Liquid oral formulations require flavor systems that are stable over shelf life without contributing to pH drift, compatibility issues with preservatives, or unwanted interaction with the API suspension.",
      },
      {
        title: "Regulatory documentation is part of the deliverable",
        body: "Flavor regulatory status (GRAS, QS, FEMA), declaration requirements, and allergen statements are documentation requirements in pharmaceutical formulation work. The flavor system has to be built from qualified ingredients with documentation available from the start.",
      },
    ],
    faqs: [
      {
        q: "Can you mask specific API bitterness without excessive sweeteners?",
        a: "Yes. Our approach targets the specific bitter receptor subtypes being activated by the API, which is more effective than simply adding sweetness. Masking systems that address the receptor require less sweetener load.",
      },
      {
        q: "Do you provide regulatory documentation for pharmaceutical flavor systems?",
        a: "Yes. We provide GRAS status, FEMA numbers, allergen statements, and other documentation as part of standard pharmaceutical flavor work.",
      },
      {
        q: "What formats do you work with for pediatric pharmaceutical products?",
        a: "Liquid suspensions, chewable tablets, and lozenges. Pediatric palatability development requires specific sweetness profiles and mouthfeel characteristics.",
      },
      {
        q: "What information do you need to start pharma flavor development?",
        a: "API name or off-note profile, dosage form, excipient system, dose volume, target age group if pediatric, and palatability goals.",
      },
      {
        q: "How do you evaluate palatability beyond overall taste?",
        a: "We evaluate bitterness masking effectiveness, sweetness balance, mouthfeel, and aftertaste character systematically. For clinical palatability work, we can structure samples around your evaluation criteria.",
      },
    ],
  },

  popcorn: {
    relevantCerts: ["GMP", "SQF", "Kosher", "Halal"],
    sampleNote: "Include popcorn type (kettle, air-popped, extruded), oil type and load, application method, and target shelf life.",
    challenges: [
      {
        title: "Coating adhesion changes at production scale",
        body: "A flavor that adheres well at bench or in a small drum may coat unevenly at full production scale due to temperature and tumbling dynamics. The carrier system, oil load, and flavor format have to be validated at scale, not just in the lab.",
      },
      {
        title: "Oil type affects flavor compatibility",
        body: "Coconut oil, sunflower, canola, and palm each have different flavor carrier compatibility and background characters. A flavor system built for one oil may not perform the same way in another. Switching oils mid-development requires revalidating the flavor against the new carrier.",
      },
      {
        title: "Application method determines surface compatibility",
        body: "Kettle-cooked, air-popped, and extruded popcorn have different surface textures, moisture contents, and coating dynamics. A powder that coats a rough kettle corn kernel well may not adhere to a smooth extruded piece.",
      },
      {
        title: "Salt level interaction is non-linear",
        body: "Salt perception interacts heavily with flavor, and the interaction is not linear. A profile calibrated at 1.5% sodium reads differently at 2.0%. Changes to sodium level require reflavor development, not just formula adjustment.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors for kettle corn versus air-popped popcorn?",
        a: "Yes. Kettle and air-popped have different surfaces, moisture contents, and coating adhesion characteristics. We develop for the specific application type and validate adhesion accordingly.",
      },
      {
        q: "What format works best for popcorn flavoring?",
        a: "It depends on the application. Oil-soluble liquid flavors work well for oil-seasoned applications. Dry powder flavors are standard for drum-coated and dry seasoning applications. We match the format to the production process.",
      },
      {
        q: "Can you help with flavors for retail packaged popcorn with 12-month shelf life?",
        a: "Yes. Shelf life performance is part of the development brief. We evaluate oxidative stability and flavor retention at ambient conditions over the stated shelf life.",
      },
      {
        q: "How do you handle the coating uniformity challenge at scale?",
        a: "We formulate with the production scale in mind. Carrier system, oil compatibility, and powder flow characteristics are evaluated at realistic application conditions.",
      },
      {
        q: "What is your minimum order for a popcorn seasoning flavor?",
        a: "Our minimum order policy is designed for small-batch and startup production. Contact us to discuss your specific order size.",
      },
    ],
  },

  savory: {
    relevantCerts: ["GMP", "SQF", "Kosher", "Halal"],
    sampleNote: "Include application format (sauce, seasoning blend, snack coating, prepared food), sodium level, processing method, and base ingredient system.",
    challenges: [
      {
        title: "Maillard browning notes are non-negotiable for depth",
        body: "Authentic savory profiles require Maillard reaction-derived notes, the roasted, meaty, and nutty compounds that give depth and complexity. Profiles without them taste flat, one-dimensional, and identifiably artificial regardless of how well the flavor compounds are otherwise balanced.",
      },
      {
        title: "Process conditions degrade flavor differently",
        body: "Retort, extrusion, and frying each damage flavor compounds in different ways. A profile that performs well going into a retort can come out flat or off after the kill step. The flavor system has to be built for the processing end-state, not the input.",
      },
      {
        title: "Salt level interaction is non-linear",
        body: "A profile benchmarked at 2.0% sodium can read completely differently at 2.5%. Salt intensifies perceived flavor at lower levels and can mask specific notes at higher levels. Changes to the sodium level require rebalancing the flavor system.",
      },
      {
        title: "Umami system integration affects the whole profile",
        body: "Yeast extract, disodium inosinate, and disodium guanylate are common in savory seasoning work. Adding or changing the umami stack after the flavor is approved can throw the whole profile off. The full umami approach has to be defined before development starts.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors for retort-processed products?",
        a: "Yes. Retort stability is one of the harder requirements in savory development. We build for the kill step temperature and hold time, and evaluate the finished product after processing.",
      },
      {
        q: "Do you work with natural flavor declarations for savory products?",
        a: "Yes. Natural savory flavors are a standard part of our capability. We confirm declaration status for the specific ingredients and application requirements.",
      },
      {
        q: "Can you help with sodium reduction in seasoning systems?",
        a: "Yes. Sodium reduction changes how flavor is perceived. Reformulating for lower sodium requires rebalancing the flavor system against the new salt level, not just adjusting use levels.",
      },
      {
        q: "What information do you need to start a savory flavor project?",
        a: "Application format, target flavor profile, sodium level, processing method, base ingredient system, and any label requirements.",
      },
      {
        q: "Do you develop flavors for both sauce and dry seasoning applications?",
        a: "Yes. Liquid flavors for sauces and wet-process applications; powder flavors for dry seasonings and coatings. The development path depends on your application format.",
      },
    ],
  },

  syrup: {
    relevantCerts: ["GMP", "Kosher", "Halal", "Organic"],
    sampleNote: "Include dilution ratio, sweetener base, dispensing format (hot, cold, carbonated), preservation system, and the flavor target.",
    challenges: [
      {
        title: "Dilution ratio is the starting variable",
        body: "The flavor has to be built for a specific dilution ratio. A profile that tastes balanced at 1:6 will taste thin and undefined at 1:8. Defining and holding the dilution ratio through development is the most important variable in syrup work.",
      },
      {
        title: "Sweetener system in the base defines flavor carrier behavior",
        body: "Sucrose-based syrups, HFCS syrups, and simple syrup with sucralose bases each carry flavor differently and create different background sweetness profiles. The flavor character has to be built for the specific sweetener base.",
      },
      {
        title: "Cold and hot dispensing require different flavor profiles",
        body: "Coffee syrups are dispensed into beverages at 160-180F. Cold beverages and cocktail mixers are at 40-55F. Flavor compounds release differently at these temperatures. A profile optimized for hot dispensing may taste sharp or unbalanced cold.",
      },
      {
        title: "Preservation system can affect flavor stability",
        body: "Potassium sorbate and sodium benzoate are standard in commercial syrups. Some flavor systems have chemical interactions with these preservatives over shelf life. The flavor may be stable at fill and show drift at three months. Stability testing in the finished syrup formula is the only way to identify this.",
      },
    ],
    faqs: [
      {
        q: "Can you develop flavors for coffee syrup applications?",
        a: "Yes. Coffee syrup work specifically considers the hot dispensing temperature, dilution into the beverage, and sweetener system in the base.",
      },
      {
        q: "What dilution ratios do you typically develop for?",
        a: "Whatever your application requires. We develop to the specific ratio from the first sample. Typical coffee syrup dilutions range from 1:5 to 1:8; cocktail mixers vary more widely.",
      },
      {
        q: "Can you develop Kosher-certified flavors for syrup applications?",
        a: "Yes. Kosher documentation is available for qualifying flavor projects. Specify the requirement at the project start.",
      },
      {
        q: "How do you evaluate syrup flavor stability over shelf life?",
        a: "We evaluate stability in the finished syrup formula, not in isolation. Preservation system, sweetener interaction, and pH are all part of the stability picture.",
      },
      {
        q: "What information helps you develop a syrup flavor accurately?",
        a: "Dilution ratio, sweetener base, dispensing format (hot, cold, carbonated), preservation system, and the flavor target.",
      },
    ],
  },
};
