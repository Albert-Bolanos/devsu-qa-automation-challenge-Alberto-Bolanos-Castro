# Prueba Técnica de Automatización (E2E & API)

**Desarrollado por: Alberto Bolaños Castro - QA Automatizador**

Este proyecto contiene una solución integral de automatización que combina pruebas de interfaz de usuario (E2E) y pruebas de servicios (API), utilizando **Cypress**, **Cucumber (Gherkin)** y una arquitectura profesional basada en **Page Object Model (POM)**.

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue principios de **Clean Code** y **SOLID**, organizado en capas para facilitar el mantenimiento y la escalabilidad:

- **E2E (SauceDemo)**: Implementado con el patrón **Page Object Model (POM)**.
- **API (PetStore)**: Implementado con una **Capa de Servicios** (`PetService.js`) para desacoplar la lógica de las peticiones de los steps.
- **Modelos (Models)**: Uso de clases (`PetData.js`, `UserData.js`) para la gestión de datos, eliminando la dependencia de fixtures estáticos.
- **Aserciones Modulares**: Separación de responsabilidades entre `apiAssertions.js` y `uiAssertions.js`.
- **Constantes Modulares**: Organización centralizada de URLs y Mensajes en la carpeta `support/constants/`.
- **Data Factory**: Generación dinámica de datos para pruebas de API para evitar colisiones.

---

## 📁 Estructura de Carpetas

```text
cypress/
├── e2e/
│   ├── features/               # Archivos .feature (Gherkin)
│   └── step_definitions/       # Implementación de los pasos (.js)
├── pages/                      # Page Objects (UI)
├── services/                   # Service Layer (API)
├── models/                     # Clases de Modelos (Data)
├── support/
│   ├── assertions/             # Validaciones modulares (API/UI)
│   ├── constants/              # URLs y Mensajes centralizados
│   └── utils/                  # Utilidades como DataFactory.js
```

---

## 🚀 Ejecución de Pruebas

### 1. Requisitos Previos
- Node.js v18+
- Instalar dependencias:
  ```bash
  npm install
  ```

### 2. Ejecución Interactiva (Cypress Open)
Para ver la ejecución en tiempo real en el navegador:
```bash
npm run cy:open
```

### 3. Ejecución por Consola (Headless)
Para ejecutar todas las pruebas de forma rápida:
```bash
npm run cy:run
```

---

## ⚙️ Integración Continua (CI/CD)

El proyecto incluye un pipeline automatizado en **GitHub Actions** (`.github/workflows/main.yml`) que:
- Se ejecuta en cada `push` o `pull_request` a las ramas principales.
- Instala dependencias y ejecuta todos los tests (API y E2E).
- Genera y almacena los reportes de **Allure** como artefactos de la ejecución para su posterior descarga y revisión.

---

## 📊 Reportes con Allure

El proyecto genera reportes visuales detallados que incluyen pasos, tiempos y resultados.

1. **Limpiar y Ejecutar**: Borra resultados previos y corre los tests.
   ```bash
   npm run cy:run:allure
   ```

2. **Generar y Abrir Reporte**: Crea el informe HTML y lo abre en el navegador.
   ```bash
   npm run allure:report
   ```

---

## 🧪 Escenarios Incluidos

### E2E: SauceDemo
- **Flujo**: Login -> Agregar 2 productos -> Checkout -> Validación de compra exitosa.
- **Mejora**: Uso de selectores por **ID** para mayor estabilidad.

### API: PetStore
- **CRUD Dinámico**: Creación, actualización y consulta de mascotas.
- **Validaciones**: Códigos de estado, esquemas de respuesta y tiempos.
- **Negative Testing**: Manejo de errores 404 para mascotas inexistentes.

---
