const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('build'));
// for react router
app.get('*', (req, res)=> {
    res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
app.listen(PORT, ()=> {
    console.log('Listening on port: ' + PORT + 'And arthur is so awesome')
});