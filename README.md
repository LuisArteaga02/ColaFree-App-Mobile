# COLA FREE

Sistema móvil para la gestión de turnos y colas. El proyecto tiene dos carpetas independientes:

```text
COLAFREE/
├── colafree-appmobile/
└── colafree-backend/
```

---

## Carpetas del proyecto

### colafree-appmobile

Aplicación móvil de COLA FREE, hecha con React Native y TypeScript usando Expo. Es el cliente que usan las personas para consultar y gestionar sus turnos, y se comunica con el backend mediante peticiones HTTP. Todo su código fuente está en `src/`.

### colafree-backend

API REST de COLA FREE, hecha con Node.js, Express y TypeScript. Es el servidor que atiende las peticiones de la aplicación móvil. Su archivo principal es `src/server.ts` y corre en el puerto `3000`.

---

## Comandos utilizados

### Backend (`colafree-backend`)

```bash
npm init -y
npm install express
npm install -D typescript tsx @types/node @types/express
npm install cors
npm install -D @types/cors
npx tsc --init
```

### App móvil (`colafree-appmobile`)

```bash
npm install
npm install axios
```

El resto de dependencias de la app están declaradas en su `package.json`.

---

## Instalar las dependencias en tu PC

Si ya tienes el proyecto, no necesitas repetir los comandos anteriores. Dentro de cada carpeta ejecuta:

```bash
npm install
```
