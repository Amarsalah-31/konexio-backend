const express = require("express");
const app = express();
const debug = require("./middlewares/debug");
const transformName = require("./middlewares/transformName");

const heroes = [
	{
		name: "Iron Man",
		powers: ["money"],
		color: "red",
		isAlive: true,
		age: 46,
		image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart",
	},
	{
		name: "thor",
		powers: ["electricity", "worthy"],
		color: "blue",
		isAlive: true,
		age: 300,
		image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg",
	},
	{
		name: "daredevil",
		powers: ["blind"],
		color: "red",
		isAlive: false,
		age: 30,
		image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg",
	},
];

// Middlewares
// Vous pouvez utiliser la librairie Morgan
app.use(express.json());
app.use(debug);

// Routes
app.get("/heroes", (req, res) => {
	res.json({
		status: "OK",
		data: heroes,
	});
});

app.get("/heroes/:name", (req, res) => {
	const name = req.params.name;

	// Méthode 1
	/* const hero = heroes.filter(
		(obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
	); */

	// Méthode 2
	const hero = heroes.find(
		(obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
	);

	res.json({
		status: "OK",
		data: [hero],
	});
});

app.get("/heroes/:name/powers", (req, res) => {
	const name = req.params.name;

	const hero = heroes.find(
		(obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
	);

	res.json({
		status: "OK",
		heroName: name,
		data: hero.power,
	});
});

app.post("/heroes", transformName, (req, res) => {
	const newHero = req.body;

	heroes.push(newHero);

	res.json({
		status: "OK",
		message: "Ok, héros ajouté",
		data: newHero,
	});
});

app.patch("/heroes/:name/powers", (req, res) => {
	const name = req.params.name;
	const newPower = req.body.newPower;

	const hero = heroes.find(
		(obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
	);

	hero.powers.push(newPower);

	res.json({
		status: "OK",
		message: "Pouvoir ajouté !",
		data: hero,
	});
});

// Starting server
app.listen(3000, () => {
	console.log("Server listening");
});