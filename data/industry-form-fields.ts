import type { IndustryKey } from "@/lib/types";

export type IndustryFormField = {
  name: string;
  label: string;
  placeholder: string;
};

export const industryFormFields: Partial<Record<IndustryKey, IndustryFormField[]>> = {
  bakery: [
    { name: "ovenProfile", label: "Oven profile", placeholder: "Target oven temp and bake time" },
    { name: "shelfLife", label: "Shelf life", placeholder: "Shelf life requirement" },
    { name: "sweetenerSystem", label: "Sweetener system", placeholder: "Sucrose, stevia, erythritol, other" },
  ],
  beverage: [
    { name: "beveragePh", label: "pH target", placeholder: "Target pH or acid system" },
    { name: "processingMethod", label: "Processing", placeholder: "Cold fill, pasteurization, UHT, other" },
    { name: "carbonation", label: "Carbonation", placeholder: "Still, sparkling, carbonated" },
  ],
  confectionery: [
    { name: "confectionFormat", label: "Product format", placeholder: "Gummy, hard candy, filling, coating" },
    { name: "cookTemp", label: "Cook or deposit temp", placeholder: "If heat is part of the process" },
    { name: "moistureActivity", label: "Moisture / water activity", placeholder: "If known or estimated" },
  ],
  dairy: [
    { name: "dairyBase", label: "Base type", placeholder: "Milk, cream, oat, almond, coconut, other" },
    { name: "fatLevel", label: "Fat level", placeholder: "Full fat, reduced fat, nonfat, plant fat %" },
    { name: "freezeThaw", label: "Freeze-thaw exposure", placeholder: "Frozen dessert, ambient, repeated freeze-thaw" },
  ],
  nutraceutical: [
    { name: "activeSystem", label: "Actives", placeholder: "Active ingredients and concentrations" },
    { name: "proteinSource", label: "Protein source", placeholder: "Whey, pea, soy, oat, other" },
    { name: "maskingNeed", label: "Masking need", placeholder: "Bitter, metallic, chalky, botanical" },
  ],
  "oral-care": [
    { name: "oralCareFormat", label: "Product format", placeholder: "Toothpaste, mouthwash, rinse, lozenge" },
    { name: "coolingAgent", label: "Cooling system", placeholder: "Menthol, WS-3, WS-23, other" },
    { name: "fluorideCompatibility", label: "Fluoride / actives", placeholder: "Fluoride level or other actives in base" },
  ],
  pharmaceutical: [
    { name: "dosageForm", label: "Dosage form", placeholder: "Liquid, chewable, lozenge, suspension" },
    { name: "apiLoad", label: "API / active load", placeholder: "Active ingredient and concentration" },
    { name: "excipientSystem", label: "Excipient system", placeholder: "Sweetener, buffer, viscosity, other excipients" },
    { name: "targetAgeGroup", label: "Target age group", placeholder: "Pediatric, adult, geriatric" },
  ],
  popcorn: [
    { name: "popcornProcess", label: "Process type", placeholder: "Kettle, air-popped, extruded, oil coating" },
    { name: "oilLoad", label: "Oil load", placeholder: "Oil type and approximate load" },
    { name: "coatingMethod", label: "Coating method", placeholder: "Tumble, spray, slurry, dry seasoning" },
  ],
};

export const optionalIndustryFieldNames = Object.values(industryFormFields)
  .flat()
  .map((field) => field.name);