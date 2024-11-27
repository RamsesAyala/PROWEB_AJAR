const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuración para leer datos del cuerpo de las peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      
    password: '@ramdx1501Q',      
    database: 'node_crud' 
});

// Verifica si la conexión a la base de datos fue exitosa
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Configuración para servir archivos estáticos como CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para obtener todos los usuarios
app.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('index', { users: results });
    });
});

// Ruta para agregar un nuevo usuario
app.post('/users', (req, res) => {
    const { nombre, correo, numero_cuenta, escuela } = req.body;
    db.query('INSERT INTO usuarios (nombre, correo, numero_cuenta, escuela) VALUES (?, ?, ?, ?)', 
        [nombre, correo, numero_cuenta, escuela], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send('Usuario agregado.');
    });
});


// Ruta para mostrar el formulario de edición de un usuario
app.get('/edit-user/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('edit-user', { user: results[0] });
    });
});

// Ruta para actualizar 
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo, numero_cuenta, escuela } = req.body;
    db.query('UPDATE usuarios SET nombre = ?, correo = ?, numero_cuenta = ?, escuela = ? WHERE id = ?', 
        [nombre, correo, numero_cuenta, escuela, id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Usuario actualizado.');
    });
});
// Ruta para eliminar un usuario
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Usuario eliminado.');
    });
});


// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

