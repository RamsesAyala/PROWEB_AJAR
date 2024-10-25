const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos (CSS, HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para las páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quienes-somos.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

// Servidor en el puerto 30010
app.listen(30010, () => {
    console.log('Servidor corriendo en el puerto 30010');
});

