# bookingjs-timekit-checkout

popular timekit widget booking js (https://github.com/timekit-io/booking-js) edited to integrate stripe checkout payments.

simpy edited so submitting the form spawns a stripe checkout window that must be completed to confirm the booking.

i use this with a webtask as the backend (attached).

simply import bookingjs and stripe checkout as follows:
```
<script type="text/javascript" src="https://rawgit.com/Pheels/bookingjs/master/dist/booking.js" defer></script>
<script src="https://checkout.stripe.com/checkout.js" defer></script>
```

feel free to message me if theres any issues.

note: in order to use this you will need to input your own api keys and urls in the submit function around line 630. 
