// Archivo de prueba para análisis de seguridad con CodeQL - Lab Interbank
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('DevOps Pipeline Active for Interbank!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});