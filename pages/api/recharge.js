// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    res.statusCode = 200;
    res.json(req.body);
  } else {
    // Handle any other HTTP method
    res.statusCode = 200;
    res.json({ name: "Updated John Doe" });
  }
};
