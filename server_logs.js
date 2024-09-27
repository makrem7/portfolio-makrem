const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;
const logFilePath = "user_logs.txt";

// Function to read and process the log file
const processLogFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(logFilePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
      const ipMap = new Map();
      const countryMap = new Map();

      lines.forEach((entry) => {
        // Update the log entry or add a new one
        if (!ipMap.has(entry.ip)) {
          ipMap.set(entry.ip, {
            ...entry,
            attempts: 1,
          });
        } else {
          const existingEntry = ipMap.get(entry.ip);
          existingEntry.attempts += 1;
          existingEntry.timestamp = entry.timestamp; // Update timestamp to the most recent
        }

        // Update country statistics
        if (!countryMap.has(entry.country)) {
          countryMap.set(entry.country, 0);
        }
        countryMap.set(entry.country, countryMap.get(entry.country) + 1);
      });

      // Convert Map to Array and sort by timestamp (latest first)
      const sortedLogs = Array.from(ipMap.values()).sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      const topCountries = Array.from(countryMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const totalAttempts = sortedLogs.reduce(
        (sum, log) => sum + log.attempts,
        0
      );

      resolve({
        logs: sortedLogs,
        topCountries,
        totalAttempts,
      });
    });
  });
};

// Function to format the timestamp and adjust it to GMT+1
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  // Adjust to GMT+1
  date.setHours(date.getHours() + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
};

// Serve the HTML page
app.get("/", async (req, res) => {
  try {
    const { logs, topCountries, totalAttempts } = await processLogFile();
    let htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Log Information</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2620/2620995.png" type="image/png">
        <style>
          body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px; /* Set a max-width for large screens */
  margin-left: auto;
  margin-right: auto;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

p {
  font-size: 1.2em; /* Increase paragraph font size */
}

.attempts-green { background-color: #d4edda; }
.attempts-blue { background-color: #d1ecf1; }
.attempts-yellow { background-color: #fff3cd; }
.attempts-orange { background-color: #ffeeba; }
.attempts-red { background-color: #f8d7da; color: #721c24; }

/* Responsive Design */
@media (max-width: 768px) {
  table {
    width: 90%;
    overflow-x: auto; 
  }

  thead {
    display: none; /* Hide the header for small screens */
  }

  tr {
    display: block;
    margin-bottom: 10px;
  }

  td {
    display: block;
    text-align: left;
    padding-left: 40%;
    position: relative;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 40%;
    padding-left: 10px;
    font-weight: bold;
    text-align: left;
  }

  /* Adjust font sizes */
  p {
    font-size: 1em;
  }
}


        </style>
      </head>
      <body>
        <h1>Log Information</h1>
        <h3>Statistics</h3>
        <p>Total Attempts: ${totalAttempts}</p>
        <h3>Top Countries by Attempts</h3>
        <p>|`;

    topCountries.forEach(([country, attempts]) => {
      htmlContent += ` ${country}: ${attempts}  |`;
    });

    htmlContent += `
        </p>
        <table>
          <thead>
            <tr>
              <th>Attempts</th>
              <th>IP</th>
              <th>Country, City</th>
              <th>Last Time</th>
            </tr>
          </thead>
          <tbody>`;

    logs.forEach((log) => {
      let attemptsClass = "";
      if (log.attempts <= 20) {
        attemptsClass = "attempts-green";
      } else if (log.attempts <= 40) {
        attemptsClass = "attempts-blue";
      } else if (log.attempts <= 60) {
        attemptsClass = "attempts-yellow";
      } else if (log.attempts <= 80) {
        attemptsClass = "attempts-orange";
      } else {
        attemptsClass = "attempts-red";
      }
      const formattedTimestamp = formatTimestamp(log.timestamp);
      htmlContent += `
        <tr>
          <td data-label="Attempts" class="${attemptsClass}">${log.attempts}</td>
<td data-label="IP">${log.ip}</td>
<td data-label="Country">${log.country}, ${log.city}</td>
<td data-label="Time">${formattedTimestamp}</td>
        </tr>`;
    });

    htmlContent += `
          </tbody>
        </table>
      </body>
      </html>`;

    res.send(htmlContent);
  } catch (error) {
    console.error("Error processing log file:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
