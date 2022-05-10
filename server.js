//Install express server
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

// const options = {
//   key: fs.readFileSync('./localhost-key.pem'), // Replace with the path to your key
//   cert: fs.readFileSync('./localhost.pem') // Replace with the path to your certificate
// }

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/qovid-ng'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/qovid-ng/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000, () => {
    console.log("application en cour ..... sur le port 8000......");
});




// "ng serve --ssl true --ssl-key localhost-key.pem --ssl-cert localhost.pem"
