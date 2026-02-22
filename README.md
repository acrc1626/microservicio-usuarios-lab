# Microservicio Usuarios - Lab DevOps

API REST para gestión de usuarios (Lab Actividad 3)

## Endpoints
- `GET /health` - Health check
- `GET /users` - Listar usuarios
- `POST /users` - Crear usuario

## Desarrollo
```bash
npm install
npm run dev      # Modo desarrollo
npm test         # Ejecutar tests
npm start        # Producción
```

## Docker
```bash
docker build -t users-api .
docker run -p 3000:3000 users-api
```