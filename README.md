# PhotoCarousel

> Photo Carousel module for Kozy app

## Restful CRUD API:

> Listings

| Method | Endpoint | Description | Params |
|--------|----------|-------------|--------|
| GET | /api/listings | Get all listings | |
| GET | /api/listings/:userId | Get all listings by user | _userId_ |
| POST | /api/listings | Add new listing | _userId_ |
| PUT | /api/listings/:listingId | Edit listing | _listingId_ |
| DELETE | /api/listings/:listingId | Delete listing | _listingId_ |

> Photos

| Method | Endpoint | Description | Params |
|--------|----------|-------------|--------|
| GET | /api/photos/:listingId | Get photos by listingId | _listingId, priority_ |
| POST | /api/photos/:listingId | Create a photo into a specific listingId | _listingId_ |
| DELETE | /api/photos/:listingId/:photoId | Delete a photo into a specific listingId | _listingId, photoId_ |

> Users

| Method | Endpoint | Description | Params |
|--------|----------|-------------|--------|
| GET | /api/users | Get all users | |
| POST | /api/users | Add new user | _user_ |
| PUT | /api/users/:userId | Edit user | _userId_ |
| DELETE | /api/users/:userId | Delete user | _userId_ |

> Favorites

| Method | Endpoint | Description | Params |
|--------|----------|-------------|--------|
| GET | /api/favorites | Get all favorites | |
| GET | /api/favorites/:userId | Get all favorites by user | _userId_ |
| GET | /api/favorites/:listingId | Get all favorites by listing | _listingId_ |
| POST | /api/favorites | Add new favorite | _userId, listingId_ |
| DELETE | /api/favorites/:favoriteId | Delete favorite | _favoriteId_ |







