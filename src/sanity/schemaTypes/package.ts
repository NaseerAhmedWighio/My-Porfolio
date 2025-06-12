export default {
  name: "package",
  title: "Package",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "deliveryTime",
      title: "Delivery Time",
      type: "string",
    },
    {
      name: "revisions",
      title: "Revisions",
      type: "number",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
  ],
};
