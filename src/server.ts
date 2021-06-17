// 'use strict'; // eslint https://stackoverflow.com/questions/32791507/node-js-and-eslint-disagree-on-use-strict

// require('dist/leaflet-src.ts');

import express from 'express';
export require('iconv').Iconv;
// const express = require('express');

// Constants
declare const PORT = 8080;
declare const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);