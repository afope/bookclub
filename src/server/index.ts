import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from '../components/app';
import html from './html';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
  const body = renderToString(React.createElement(App));

  res.send(
    html({
      body
    })
  );
});

server.listen(port, () => {
  console.log(`Book club app is listening on port ${port}!`);
});
