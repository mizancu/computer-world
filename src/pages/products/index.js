import { DBConnect, client } from "@/utils/DBConnect";

const products = async (req, res) => {
  await DBConnect();

  const productsCollection = client.db("computer-world").collection("products");

  if (req.method === "GET") {
    const products = await productsCollection.find({}).toArray();
    res.send(products);
  }
};

export default products;
