import express from "express";
const app = express();
const port = 8001;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('./index');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
