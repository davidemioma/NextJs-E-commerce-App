import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_rates: ["shr_1KxstcHRSQ16AOR5vgXgKOOK"],
        line_items: req.body.items.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/m7zs7ihi/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.qty,
            description: item.details,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ status: 500, error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");

    res.status(405).end("Method Not Allowed");
  }
};
