// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === "POST") {
    // Process a POST request

    axios
      .post("http://riviatech.eastus.cloudapp.azure.com:1337/answer", {
        name: `${req.body.name}`,
        content: `${req.body.content}`,
      })
      .then(function (response) {
        res.statusCode = 200;
        res.json({ name: "Record successfully entered" });
      })
      .catch(function (error) {
        console.log(error);
        res.json({ error });
      });
  } else if (req.method === "GET") {
    axios
      .get("http://riviatech.eastus.cloudapp.azure.com:1337/question")
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        res.json({ error });
      });
  } else {
    // Handle any other HTTP method
    res.statusCode = 200;
    res.json({ name: "Updated John Doe" });
  }
};
