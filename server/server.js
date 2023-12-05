const express = require("express");
const axios = require("axios");
const app = express();

const apiKey = "73f6ce2bedc052eab39c8bcad642ec76";
const apiEndpoint = `http://api.coinlayer.com/live?access_key=${apiKey}`;

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(apiEndpoint);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});

// const express = require("express");
// const axios = require("axios");
// const app = express();
// const port = 5000;

// // back end we set up back end api that return list of cryptocurrency rate  and wanted to do was show those exchange rate on the front end depending a target Currency Name

// //variable for apikey and endpoint
// const apiKey = "73f6ce2bedc052eab39c8bcad642ec76";
// const apiEndpoint = `http://api.coinlayer.com/live?access_key=${apiKey}`;

// //request a JSON payload
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/calculate", async (req, res) => {
//   const { currency_one, amount_one, currency_two } = req.body;

//   try {
//     const response = await axios.get(apiEndpoint);

//     if (data.success) {
//       const rate = data.rates[currency_two] / data.rates[currency_one];
//       const result = (amount_one * rate).toFixed(2);

//       res.json({
//         success: true,
//         rate: `1 ${currency_one} = ${rate} ${currency_two}`,
//         result: result,
//       });
//     } else {
//       throw new Error("Failed to fetch data.");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     res.status(500).json({
//       success: false,
//       error: "An error occurred while processing the request.",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
