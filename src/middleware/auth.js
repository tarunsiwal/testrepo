import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res
      .status(401)
      .json({ message: "Authorization denied: No token or incorrect format." });
  }
  try {
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, JWT_SECRET);
    req.userId = decode.id;
    next();
  } catch (error) {
    console.error("Token is not verified", error);
    res.status(401).json({ message: "Token is not verified" });
  }
};

export default auth;
