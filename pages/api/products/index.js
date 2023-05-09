export default function handler(req, res) {
  //console.log(req.method);
  if (req.method === "POST") {
    console.log("Creating a product")
    return res.status(200).json("Creating a product");
  } else {
    return res.status(200).json("Getting a product");
  }
}
