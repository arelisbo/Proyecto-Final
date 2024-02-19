import express from "express";
import adminSchema from "../models/admin.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getAdmin } from "../controllers/admin.cotrollers.js"
const router = express.Router();

//POST registro
router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 12);

    const adminCreate = await adminSchema.create(req.body);

    res.json(adminCreate);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//POST login
router.post("/login", async (req, res) => {
  //Comprobar existencia del email
  const admin = await adminSchema.findOne({ email: req.body.email });
  if (!admin) {
    return res.json(0);
  }

  const validar = bcrypt.compareSync(req.body.password, admin.password);
  if (!validar) {
    return res.json(0);
  }

  res.json({ token: createToken(admin) });
});

//TOKEN
function createToken(admin) {
  const payload = {
    admin_id: admin._id,
    admin_password: admin.password,
  };

  return jwt.sign(payload, process.env.AUTH_KEY);
}

router.get("/", async(req, res) => {
  res.json(await getAdmin())
})

export default router;
