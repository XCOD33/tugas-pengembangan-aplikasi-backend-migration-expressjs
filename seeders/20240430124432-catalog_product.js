'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('catalog_products', [
            {
                name: 'Jersey Timnas Mills 2023',
                brand: 'Mills Indonesia',
                price: 1000000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('catalog_products', null, {});
    },
};
