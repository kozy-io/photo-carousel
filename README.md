# PhotoCarousel

> Photo Carousel module for Kozy app

## Restful CRUD API:

| Method    | Endpoint                                | Description                              |
|-----------|---------------------------------------- |------------------------------------------|
|GET        | /api/listings/photos/initial/:listingID | Get photos by listingID (priority <= 4)  |
|GET        |/api/listings/photos/:listingID          | Get photos by listingID (priority >= 5)  |
|POST       |/api/listings/photos/:listingID          | Create a photo into a specific listingID)|
|PUT        |/api/listings/photos/:listingID/:photoID | Edit a photo into a specific listingID   |
|DELETE     |/api/listings/photos/:listingID/:photoID | Delete a photo into a specific listingID |
