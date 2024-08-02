# Node.js Express API

API built with Node.js, Express, and MongoDB to manage investors.

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following content:

   ```env
   DATABASE_URL=mongodb://localhost:27017/yourDatabaseName
   ```

4. **Start the server:**
   ```sh
   node server.js
   ```
   The server will start on port 3000.

## Usage

Use tools like Postman or REST Client to interact with the API.

## API Endpoints

### Get All Investors

- **URL:** `/investors`
- **Method:** `GET`
- **Response:**
  ```json
  [
      {
          "_id": "unique_id",
          "name": "Investor Name",
          "investingToCompany": "Company Name",
          "investingDate": "2023-01-01T00:00:00.000Z"
      },
      ...
  ]
  ```

### Get One Investor

- **URL:** `/investors/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "_id": "unique_id",
    "name": "Investor Name",
    "investingToCompany": "Company Name",
    "investingDate": "2023-01-01T00:00:00.000Z"
  }
  ```

### Create One Investor

- **URL:** `/investors`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Investor Name",
    "investingToCompany": "Company Name"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "unique_id",
    "name": "Investor Name",
    "investingToCompany": "Company Name",
    "investingDate": "2023-01-01T00:00:00.000Z"
  }
  ```

### Update One Investor

- **URL:** `/investors/:id`
- **Method:** `PATCH`
- **Request Body:**
  ```json
  {
    "name": "Updated Name",
    "investingToCompany": "Updated Company"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "unique_id",
    "name": "Updated Name",
    "investingToCompany": "Updated Company",
    "investingDate": "2023-01-01T00:00:00.000Z"
  }
  ```

### Delete One Investor

- **URL:** `/investors/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "Deleted Investor"
  }
  ```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL=mongodb://localhost:27017/yourDatabaseName
```
