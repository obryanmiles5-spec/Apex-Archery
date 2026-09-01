export interface SubCategory {
  name: string;
  subcategories?: string[];
}

export interface MainCategory {
  name: string;
  subcategories: SubCategory[];
}

export const shopSchema: MainCategory[] = [
  {
    name: "Bows",
    subcategories: [
      {
        name: "Compound Bows",
        subcategories: [
          "Hunting",
          "Target",
          "Carbon",
          "Kits",
          "Youth",
          "Youth Kits",
        ],
      },
      { name: "Recurve bows" },
      { name: "Longbows" },
      { name: "Youth bows" },
      { name: "Crossbow" },
      { name: "Bow fishing" },
    ],
  },
  {
    name: "Arrows",
    subcategories: [
      { name: "Arrow Shafts" },
      { name: "Fletched Arrows" },
      { name: "Custom Arrows" },
      { name: "Broadhead & Specialty Points" },
      { name: "Arrow Building & Repair" },
      { name: "Arrow Components" },
      { name: "Crossbow Bolts & Arrows" },
      { name: "Arrow Tubes & Cases" },
      { name: "Bowfishing Arrows" },
    ],
  },
];
