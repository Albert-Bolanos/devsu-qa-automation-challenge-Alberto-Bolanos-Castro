class DataFactory {
    generateId() {
        return Math.floor(Math.random() * 1000000);
    }

    generatePetName(baseName = 'Pet') {
        const randomSuffix = Math.random().toString(36).substring(7);
        return `${baseName}_${randomSuffix}`;
    }
}

export default new DataFactory();
