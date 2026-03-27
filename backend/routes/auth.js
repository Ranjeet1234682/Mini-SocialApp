// const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // SIGNUP
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword
//     });

//     const user = await newUser.save();
//     res.status(201).json(user);

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) return res.status(404).json("User not found");

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );

//     if (!validPassword) return res.status(400).json("Wrong password");

//     const token = jwt.sign(
//       { id: user._id, username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ user, token });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    console.log("Signup Body:", req.body); // debug

    const { username, email, password } = req.body;

    // ✅ validation
    if (!username || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    // ✅ check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });

  } catch (err) {
    console.error("Signup Error:", err); // 🔥 important
    res.status(500).json("Server error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("Login Body:", req.body);

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) return res.status(400).json("Wrong password");

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ user, token });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json("Server error");
  }
});

module.exports = router;