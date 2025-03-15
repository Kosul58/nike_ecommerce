// import fs from "fs";
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// app.use(cors());
// app.use(express.json());

// function transformdata(data) {
//   return (
//     data.data?.map((item) =>
//       item.model && item.avg_price
//         ? {
//             id: item.id,
//             label: item.model,
//             price: parseFloat(item.avg_price.toFixed(2)), // Rounds to 2 decimal places
//             image: item.image,
//             year: item.created_at.slice(0, 5), // Extracts year from date
//           }
//         : {}
//     ) || []
//   );
// }

// async function getdata() {
//   let allData = []; // Array to store all fetched data

//   for (let page = 1; page <= 200; page++) {
//     let url = `https://api.sneakersapi.dev/api/v3/stockx/products/?brand=Nike&limit=100&page=${page}`;

//     const options = {
//       method: "GET",
//       headers: {
//         Authorization: "sd_ZWZJzvCXXU2pbqVKqeuRussTbhfge0o5", // Replace with your actual API key
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       console.log(`Fetching page ${page}...`);
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();

//       let transformedData = transformdata(data);
//       allData = allData.concat(transformedData); // Merge the new data with existing data

//       console.log(`Page ${page} fetched successfully.`);
//     } catch (error) {
//       console.error(`Error fetching page ${page}:`, error.message);
//     }

//     // Optional delay to avoid rate-limiting (adjust if needed)
//     await new Promise((resolve) => setTimeout(resolve, 100));
//   }

//   // Save all data to a JSON file
//   fs.writeFileSync(
//     "nike_shoes.json",
//     JSON.stringify(allData, null, 2),
//     "utf-8"
//   );
//   console.log(`✅ Data fetching complete! Saved ${allData.length} items.`);
// }

// getdata();

// app.listen(5000, () => console.log("Server running on port 5000"));

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server running on port 5000"));
