export default{
  "validSearches": [
    {
      "location": "Sydney",
      "hotel": "Hotel Creek",
      "roomType": "Standard",
      "rooms": "1",
      "checkIn": "27/03/2026",
      "checkOut": "28/03/2026",
      "adults": "2"
    },
    {
      "location": "Melbourne",
      "hotel": "Hotel Hervey",
      "roomType": "Deluxe",
      "rooms": "2",
      "checkIn": "28/03/2026",
      "checkOut": "30/03/2026",
      "adults": "2"
    }
  ],
  "invalidSearches": [
    {
      "location": "",
      "hotel": "",
      "roomType": "",
      "rooms": "",
      "checkIn": "",
      "checkOut": "",
      "adults": "",
      "error": "Please select location"
    },
    {
      "location": "Sydney",
      "hotel": "Hotel Creek",
      "roomType": "Standard",
      "rooms": "1",
      "checkIn": "28/03/2026",
      "checkOut": "27/03/2026",
      "adults": "2",
      "error": "Check-Out Date shall be after than Check-In Date"
    }
  ]
}