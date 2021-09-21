const express = require("express");
const app = express();
const PORT = 3000;

const students = [{ name: "Asaad" }, { name: "elodie" }];

// "parser" le body
app.use(express.json());

app.use((req, res, next) => {
	if (req.body.name.length < 5) {
		// Return pour éviter de déclencher le next()
		return res.json({
			status: "error",
			message: "Name cannot be less than 5 characters",
		});
	}
	next();
});

// Par convention, il n'y a aucun verbe dans les URLs
app.get("/students", (req, res) => {
	res.json({
		status: "OK",
		data: students,
	});
});

app.post("/students", (req, res) => {
	const newStudent = req.body;
	newStudent.id = Math.floor(Math.random() * 10);
	newStudent.created = new Date();

	students.push(newStudent);

	res.json({
		status: "OK",
		message: "Student added successfully :)",
		data: newStudent,
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});