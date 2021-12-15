const Router = require("express");

const router = Router();

router.get("/", (req, res) =>
    res.status(200).send({message: "Here is all the students"})
);

router.get("/:id", (req, res) =>
    res.status(200).send({message: "Here is a specific student"})
);

router.post("/", (req, res) =>
    res.status(201).send({message: "Created new student"})
);

router.delete("/:id", (req, res) =>
    res.status(200).send({message: "Delete a student"})
);

module.exports = router;