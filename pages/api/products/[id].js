export default function handler(req, res) {
    console.log(req.query);
  return res.status(200).json("Getting one product: " + req.query.id);
}
