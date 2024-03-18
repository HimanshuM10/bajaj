const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.post("/bfhl", (req, res) => {
  try {
    const inputArray = req.body.array;
    const userid = "2110992040";
    const email = "himanshu2040.be21@chitkara.edu.in";
    const collegerollnumber = "2110992040";
    const evennumber = inputArray.filter((num) => num % 2 === 0);
    const oddnumber = inputArray.filter((num) => num % 2 !== 0);
    const alphabets = inputArray
      .filter((char) => /^[a-zA-Z]+$/.test(char))
      .map((char) => char.toUpperCase());

    const object = {
      userid: userid,
      email: email,
      college_roll_number: collegerollnumber,
      evennumber: evennumber,
      oddnumber: oddnumber,
      aphabets: alphabets,
      is_status: true,
    };
    res.send(object);
  } catch (err) {
    console.log(err);
  }
});
app.listen(3000, () => {
  console.log("server is running");
});
