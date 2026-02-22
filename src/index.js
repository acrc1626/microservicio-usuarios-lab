const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'users-api' });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Astrid', email: 'asttrid@example.com' },
    { id: 2, name: 'Luis', email: 'luis@example.com' },
    { id: 3, name: 'Alex', email: 'alex@example.com' }
  ]);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ id: 3, name, email });
});

// Solo iniciar servidor si no está en modo test
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;