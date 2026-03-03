import { HTTP_STATUS } from '../constants/index';

class ApiAssertions {
    validateStatusCode(response, expectedStatus = HTTP_STATUS.OK) {
        expect(response.status).to.eq(expectedStatus);
    }

    validateValue(actual, expected) {
        expect(actual).to.eq(expected);
    }

    validateInList(actualList, expectedValue) {
        expect(actualList).to.include(expectedValue);
    }

    validateSchemaKeys(responseBody, expectedKeys) {
        expectedKeys.forEach(key => {
            expect(responseBody).to.have.property(key);
        });
    }

    validateResponseTime(response, maxTime = 1000) {
        expect(response.duration).to.be.lessThan(maxTime);
    }
}

export default new ApiAssertions();
