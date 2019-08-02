const app = require("./app");
const scraper = require("./util/scraper");
const port = 3000;

scraper();

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
