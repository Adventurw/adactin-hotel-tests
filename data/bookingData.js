export default{
  "validBookings": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123"
    }
  ],
  "invalidBookings": [
    {
      "firstName": "",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please enter your First Name"
    },
    {
      "firstName": "John",
      "lastName": "",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please Enter you Last Name"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please enter your Address"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please Enter your 16 Digit Credit Card Number"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please select your Credit Card Type"
    }
  ]
}