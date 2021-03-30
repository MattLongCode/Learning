import { Cards } from "../../../types";

export const cardsMockResponse: Cards = [
  {
    id: "card001",
    title: "card 1 title",
    sizes: ["sm", "md", "gt"],
    basePrice: 200,
    pages: [
      {
        title: "Front Cover",
        templateId: "template001",
      },
      {
        title: "Inside Left",
        templateId: "template002",
      },
      {
        title: "Inside Right",
        templateId: "template003",
      },
      {
        title: "Back Cover",
        templateId: "template004",
      },
    ],
  },
  {
    id: "card002",
    title: "card 2 title",
    sizes: ["md"],
    basePrice: 200,
    pages: [
      {
        title: "Front Cover",
        templateId: "template005",
      },
      {
        title: "Inside Left",
        templateId: "template002",
      },
      {
        title: "Inside Right",
        templateId: "template003",
      },
      {
        title: "Back Cover",
        templateId: "template004",
      },
    ],
  },
  {
    id: "card003",
    title: "card 3 title",
    sizes: ["md", "lg"],
    basePrice: 200,
    pages: [
      {
        title: "Front Cover",
        templateId: "template006",
      },
      {
        title: "Inside Top",
        templateId: "template007",
      },
      {
        title: "Inside Bottom",
        templateId: "template007",
      },
      {
        title: "Back Cover",
        templateId: "template008",
      },
    ],
  },
];
