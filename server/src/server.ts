import "./storage/seed";

import app from "./app";

const PORT = 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `Server running on port ${PORT}`
    );
  }
);