const stripe = require('stripe')('SECRET_KEY');

const createPayment = async (req, res) => {

    const customer = await stripe.customers.create({
        name: 'Cliente de prueba',
        address: {
            line1: 'Demo address',
            postal_code: '56660',
            city: 'Amecameca',
            state: 'Estado de México',
            country: 'MX'
        }
    });
    const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customer.id },
        { apiVersion: '2022-11-15' }
    );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 19900,
        currency: 'mxn',
        description: 'Pago de servicio',
        customer: customer.id,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.status(200).json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: 'PUBLIC_KEY'
    });
}

module.exports = { createPayment };