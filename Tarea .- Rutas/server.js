const express = require('express');
const path = require('path');

const app = express();
const PORT = 30010;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Calculadora', 'index.html'));
});

app.get('/generador-qr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'qrs', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
