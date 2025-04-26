const app = require("express")();
const port = 5000;
const postRoutes = require("./router/postRoutes");
app.use(require("express").json());
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
