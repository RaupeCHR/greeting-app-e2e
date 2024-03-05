const express = require('express');
const PORT = process.env.PORT || 3001;
let app = express();

app.use(express.static('frontend'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
