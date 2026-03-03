import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PetData from "../../models/PetData";
import petService from "../../services/PetService";
import { apiAssertions as assertions } from "../../support/assertions/index";
import { HTTP_STATUS } from "../../support/constants/index";
import dataFactory from "../../support/utils/DataFactory";

let currentPet;

Given("que defino una nueva mascota con datos dinámicos", () => {
    const id = dataFactory.generateId();
    const name = dataFactory.generatePetName("GatoPrueba");
    currentPet = new PetData(id, name, "available");
});

When("envío una petición para añadir la mascota a la tienda", () => {
    petService.addPet(currentPet).as('apiResponse');
});

Then("la mascota es añadida exitosamente", () => {
    cy.get('@apiResponse').then((response) => {
        assertions.validateStatusCode(response, HTTP_STATUS.OK);
        assertions.validateResponseTime(response);
        assertions.validateSchemaKeys(response.body, ['id', 'name', 'status']);
    });
});

Then("consulto la mascota por su ID y verifico su nombre", () => {
    petService.getPetById(currentPet.id).then((response) => {
        assertions.validateStatusCode(response, HTTP_STATUS.OK);
        assertions.validateValue(response.body.name, currentPet.name);
    });
});

When("actualizo el nombre de la mascota y el estatus a {string}", (newStatus) => {
    currentPet.name = dataFactory.generatePetName("GatoPruebaActualizado");
    currentPet.status = newStatus;
    petService.updatePet(currentPet).as('apiResponse');
});

Then("la mascota es actualizada exitosamente", () => {
    cy.get('@apiResponse').then((response) => {
        assertions.validateStatusCode(response, HTTP_STATUS.OK);
    });
});

Then("consulto mascotas por estatus {string} y verifico que la mascota esté en la lista", (status) => {
    petService.findPetsByStatus(status).then((response) => {
        assertions.validateStatusCode(response, HTTP_STATUS.OK);
        const petNames = response.body.map(pet => pet.name);
        assertions.validateInList(petNames, currentPet.name);
    });
});

let nonexistentId;

Given("que defino un ID de mascota inexistente", () => {
    nonexistentId = 1234567890; // ID muy improbable que exista
});

When("consulto la mascota por ese ID", () => {
    petService.getPetById(nonexistentId).as('apiResponse');
});

Then("recibo un mensaje de error y un código de estado {string}", (statusKey) => {
    cy.get('@apiResponse').then((response) => {
        assertions.validateStatusCode(response, HTTP_STATUS[statusKey]);
        // Validamos que el cuerpo contenga 'not found' independientemente de la estructura exacta
        const responseString = JSON.stringify(response.body).toLowerCase();
        expect(responseString).to.contain("not found");
    });
});
