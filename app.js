const cohorts = require('./data/cohorts');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({data: cohorts}))

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
