import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
      const stripeCustomer = await stripe.customers.create({
        email: "safewoman22@gmail.com"
      })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {price: 'price_1KtJK8GnuxSAi5xdYIau8PDR',
         quantity: 1},
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })

    console.log('oi')
    
    return res.status(200).json({sessionId: stripeCheckoutSession.id})
  }else{
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}