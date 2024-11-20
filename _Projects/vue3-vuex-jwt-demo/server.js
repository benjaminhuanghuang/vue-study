/*
npm i body-parser cors express jsonwebtoken
node server.js
    
*/

app.get("/dashboard", verifyToken, (req, res) => {
  jwt.verify(req.token, "the_secret_key", (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.json({
        events: events,
      });
    }
  });
});


app.post("/login", (req, res) => {  
    const user = {
        id: 1,
        username: "admin",
        email: "
    };  
    jwt.sign    

    });