import { flavorFactoryImages } from "./flavorFactoryImages";

export const siteImages = {
  homeHero:           flavorFactoryImages.heroMain,
  homeCta:            flavorFactoryImages.ctaBackground,
  industriesHero:     flavorFactoryImages.industriesHero,

  // Real in-house photos - every section uses a unique photo
  aboutHero:          "/images/flavor-factory/inhouse-photos/worker-labeling.png",
  capabilitiesHero:   flavorFactoryImages.inhouseProductionTanks,    // stainless tanks floor - capabilities
  processHero:        flavorFactoryImages.inhouseWarehouse,          // wide warehouse - process
  requestSamplesHero: flavorFactoryImages.requestSamplesHero,
  certificationsHero: "/images/flavor-factory/certifications-transparent.png",
  contactHero:        flavorFactoryImages.inhouseExterior,           // building exterior v1 - contact
  companyInfoHero:    flavorFactoryImages.inhouseExteriorV2,         // building exterior v2 - company info
  flavorsHero:        flavorFactoryImages.flavorsHero,
  processRetainWall:  flavorFactoryImages.inhouseRetainWall,
} as const;
