// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    res.statusCode = 200;
    axios
      .post("http://riviatech.eastus.cloudapp.azure.com:1337/recharge", {
        "key":req.body.key,"amount":req.body.amount,"id":req.body.id,"transactionId":req.body.transactionId
      })
      .then(function (response) {
        res.statusCode = 200;
        res.json(true);
      })
      .catch(function (error) {
        console.log("Error",error);
        res.statusCode = 400;
        res.json({ error });
      });
  } else {
    // Handle any other HTTP method
    res.statusCode = 200;
    res.json({ name: "Updated John Doe" });
  }
};
