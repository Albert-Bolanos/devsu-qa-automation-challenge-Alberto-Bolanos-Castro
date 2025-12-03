# Proyecto Cypress con Cucumber

## 📋 Requisitos
- Node.js v18.17.1 (instalado)
- npm 9.6.7

## 📦 Dependencias Instaladas
- **Cypress**: v13.6.0 (compatible con Node.js 18)
- **@badeball/cypress-cucumber-preprocessor**: v20.0.0
- **@bahmutov/cypress-esbuild-preprocessor**: v2.2.8

## 🚀 Comandos Disponibles

### Abrir Cypress (modo interactivo)
```bash
npm run cy:open
```

### Ejecutar pruebas (modo headless)
```bash
npm run cy:run
```

## 📁 Estructura del Proyecto

```
CypressC/
├── cypress/
│   ├── e2e/
│   │   ├── ejemplo.feature          # Feature de ejemplo
│   │   └── ejemplo.js               # Step definitions
│   ├── support/
│   │   ├── e2e.js                   # Configuración de soporte
│   │   └── commands.js              # Comandos personalizados
│   └── fixtures/                    # Datos de prueba
├── cypress.config.js                # Configuración de Cypress
├── .cypress-cucumber-preprocessorrc.json  # Config de Cucumber
└── package.json
```

## ✍️ Crear Nuevas Pruebas

### 1. Crear un archivo .feature
Crea un archivo en `cypress/e2e/` con extensión `.feature`:

```gherkin
Feature: Mi nueva funcionalidad

  Scenario: Probar algo específico
    Given que estoy en la página principal
    When hago clic en el botón
    Then debería ver el resultado
```

### 2. Crear los Step Definitions
Crea un archivo `.js` con el mismo nombre en `cypress/e2e/`:

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estoy en la página principal", () => {
  cy.visit("https://example.com");
});

When("hago clic en el botón", () => {
  cy.get("button").click();
});

Then("debería ver el resultado", () => {
  cy.get(".resultado").should("be.visible");
});
```

## 🔧 Notas Importantes

- Las versiones están ajustadas para ser compatibles con Node.js 18
- Si actualizas Node.js a v20+, puedes usar versiones más recientes de Cypress y Cucumber
- Los archivos `.feature` deben estar en `cypress/e2e/`
- Los step definitions pueden estar en el mismo directorio o subdirectorios

## 📝 Ejemplo Incluido

El proyecto incluye un ejemplo funcional:
- `cypress/e2e/ejemplo.feature`
- `cypress/e2e/ejemplo.js`

Puedes ejecutarlo para verificar que todo funciona correctamente.
