import { TrolleyIcon } from "@sanity/icons";
import { rule, Rule } from "postcss";
import { defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  //https://youtu.be/3hepJA56KF8?t=10077
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation:(Rule) =>Rule.required(),
      //https://youtu.be/3hepJA56KF8?t=10152
    }),
  ],
});
