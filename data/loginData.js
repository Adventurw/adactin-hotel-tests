export default {
  "validUsers": [
    {
      "username": "Aymentest123",
      "password": "Aymentest@123"
    }
  ],
  "invalidUsers": [
    {
      "username": "",
      "password": "",
      "error": ""  //no error message is shown when both fields are empty
    },
    {
      "username": "haristester02",
      "password": "haristester01",
      "error": "Invalid Login details"
    },
    {
      "username": "haristester01",
      "password": "haristester02",
      "error": "Invalid Login details"
    },
    {
      "username": "haristester03",
      "password": "haristester03",
      "error": "Invalid Login details"
    }
  ]
}