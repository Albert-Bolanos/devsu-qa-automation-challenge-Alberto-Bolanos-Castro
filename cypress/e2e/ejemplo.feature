Feature: Ejemplo de prueba con Cucumber

  Scenario: Visitar la página de ejemplo
    Given que abro la página de Cypress
    When hago clic en el enlace "type"
    Then debería ver el título "Type"
