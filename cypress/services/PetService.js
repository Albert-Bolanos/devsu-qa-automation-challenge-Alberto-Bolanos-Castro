import { API_URLS } from '../support/constants/index';

class PetService {
    addPet(pet) {
        return cy.request({
            method: 'POST',
            url: API_URLS.PETSTORE,
            body: {
                id: pet.id,
                name: pet.name,
                status: pet.status,
                photoUrls: []
            },
            failOnStatusCode: false
        });
    }

    getPetById(id) {
        return cy.request({
            method: 'GET',
            url: `${API_URLS.PETSTORE}/${id}`,
            failOnStatusCode: false
        });
    }

    updatePet(pet) {
        return cy.request({
            method: 'PUT',
            url: API_URLS.PETSTORE,
            body: {
                id: pet.id,
                name: pet.name,
                status: pet.status,
                photoUrls: []
            },
            failOnStatusCode: false
        });
    }

    findPetsByStatus(status) {
        return cy.request({
            method: 'GET',
            url: `${API_URLS.PETSTORE}/findByStatus?status=${status}`,
            failOnStatusCode: false
        });
    }
}

export default new PetService();
