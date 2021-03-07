const express = require("express")

const app = express();

const userRoute = require("./routes/user.js")
const generalRoute = require("./routes/general.js")

app.use(userRoute);
app.use(generalRoute);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);