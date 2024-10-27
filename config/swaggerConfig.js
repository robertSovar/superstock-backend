import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Superstock Backend",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      schemas: {
        Equipment: {
          type: "object",
          properties: {
            name: { type: "string" },
            quantity: { type: "number" },
            type: { type: "string" },
            image: { type: "string" },
            addedDate: { type: "string", format: "date-time" },
            status: { type: "string" },
            purchaseDate: { type: "string", format: "date-time" },
          },
          required: ["name", "quantity", "type"],
        },
        ServiceOrder: {
          type: "object",
          properties: {
            equipment: { type: "string" },
            quantity: { type: "number" },
            status: { type: "string" },
            sendDate: { type: "string", format: "date-time" },
            returnDate: { type: "string", format: "date-time" },
          },
          required: ["equipment", "quantity", "status"],
        },
      },
    },
  },
  apis: ["./routes/api/*.js"], // Asigură-te că ruta este corectă
};

const specs = swaggerJSDoc(options);

export default specs;
