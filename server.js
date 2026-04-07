const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe("YOUR_STRIPE_SECRET_KEY");

app.post("/create-checkout", async (req, res) => {

const { price, service, imei } = req.body;

const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [{
price_data: {
currency: "usd",
product_data: { name: service + " | IMEI: " + imei },
unit_amount: price * 100,
},
quantity: 1,
}],
mode: "payment",
success_url: "https://your-site.com/success.html",
cancel_url: "https://your-site.com/cancel.html",
});

res.json({ url: session.url });

});

app.listen(3000, () => console.log("Server running 🔥"));
