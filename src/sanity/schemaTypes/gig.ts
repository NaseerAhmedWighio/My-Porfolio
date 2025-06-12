export default {
    name: "gig",
    title: "Gig",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Gig Title",
        type: "string",
      },
      {
        name: "fiverrUrl",
        title: "Fiverr URL",
        type: "url",
      },
      {
        name: "packages",
        title: "Packages",
        type: "object",
        fields: [
          {
            name: "basic",
            title: "Basic Package",
            type: "package",
          },
          {
            name: "premium",
            title: "Premium Package",
            type: "package",
          },
          {
            name: "standard",
            title: "Standard Package",
            type: "package",
          },
        ],
      },
    ],
  };
  