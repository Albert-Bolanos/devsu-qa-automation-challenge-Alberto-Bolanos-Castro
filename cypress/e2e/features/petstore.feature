Feature: Pruebas de API PetStore

    Scenario: Gestión exitosa de mascotas con datos dinámicos
        Given que defino una nueva mascota con datos dinámicos
        When envío una petición para añadir la mascota a la tienda
        Then la mascota es añadida exitosamente
        And consulto la mascota por su ID y verifico su nombre
        When actualizo el nombre de la mascota y el estatus a "sold"
        Then la mascota es actualizada exitosamente
        And consulto mascotas por estatus "sold" y verifico que la mascota esté en la lista

    Scenario: Error al consultar una mascota que no existe (Negative Testing)
        Given que defino un ID de mascota inexistente
        When consulto la mascota por ese ID
        Then recibo un mensaje de error y un código de estado "NOT_FOUND"
