Feature: Flujo de compra en SauceDemo

    Scenario: Compra exitosa de dos productos
        Given que me autentico en SauceDemo con el usuario "standard_user" y la contraseña "secret_sauce"
        When agrego los productos "Sauce Labs Backpack" y "Sauce Labs Bike Light" al carrito
        And visualizo el carrito
        And completo el formulario de compra con los datos "Prueba", "tecnica" y "12345"
        Then finalizo la compra y verifico el mensaje "Thank you for your order!"
