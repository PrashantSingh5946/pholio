// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body)


    axios.post('http://riviatech.eastus.cloudapp.azure.com:1337/answer', JSON.stringify(req.body))
    .then(function (response) {
      console.log(response);
      res.statusCode=200;
      res.json({name:"Record successfully entered"})
    })
    .catch(function (error) {
      console.log(error);
      res.statusCode=400;
      res.json(error)
    });


  } else {
    // Handle any other HTTP method
    res.statusCode = 200
    res.json({ name: 'Updated John Doe' })
  }

}
