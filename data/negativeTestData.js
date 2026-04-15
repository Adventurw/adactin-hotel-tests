export default{
  "paymentErrors": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2020",
      "cvv": "123",
      "error": "" //No error message is shown when the card is expired
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "",
      "expYear": "2026",
      "cvv": "123",
      "error": "Please Select your Credit Card Expiry Month"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "",
      "cvv": "123",
      "error": "Please Select your Credit Card Expiry Year"
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "address": "123 Test St",
      "cardNo": "1234567890123456",
      "cardType": "VISA",
      "expMonth": "12",
      "expYear": "2026",
      "cvv": "",
      "error": "Please Enter your Credit Card CVV Number"
    }
  ],
  "logoutNegative": [
    {
      "description": "Try to logout without login",
      "expectedUrl": "index.php"
    }
  ]
}