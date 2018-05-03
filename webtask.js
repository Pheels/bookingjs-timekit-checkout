module.exports = function(ctx, cb) {
  var stripe = require('stripe@4.14.0') (ctx.data.stripe_private_api_key);

const token = ctx.body.stripeToken; // Using Express

const charge = stripe.charges.create({
  amount: 2000,
  currency: 'gbp',
  description: 'desc',
  source: token,
}, function(err, paid_order){
  cb(null, { paid_order: paid_order || err});
});
};

