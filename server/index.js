const express = require("express");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

(async () => {
    try {
        app.listen(PORT, () =>
            console.log(`Server is listening to port ${PORT}`)
        );
    } catch (err) {
        console.log(err);
    }
})();
