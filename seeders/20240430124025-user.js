'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                name: 'Rico Aditya',
                profession: 'Student',
                avatar: 'https://domain.com/img/profile/rico-aditya',
                role: 'admin',
                email: 'rico@email.com',
                pass: 'pass-rico',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    },
};
