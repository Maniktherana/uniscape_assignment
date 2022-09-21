# uniscape assignment
A MERN-based form app

## Task
- Create a form on the MERN stack
- Users should be able to enter name, email, phone number, active status
- List of all users should be visible
- Validate the form via express validator

## How to use

Clone the repo
```bash
git clone https://github.com/Maniktherana/uniscape_assignment.git
```

Add a .env file with a mongoDB atlas key and desired port to run the server on
```.env
PORT=8080
ATLAS_URI=mongodb+srv://<USERID>:<PASSWORD>@cluster0.ssyl5vn.mongodb.net/?retryWrites=true&w=majority
```

run server
```bash
cd server
npm install
npm start
```

run the frontend
```bash
cd client
npm install
npm start
```
