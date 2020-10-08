'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addConstraint('users', {
            fields: ['email'],
            type: 'unique'
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('users', 'users_email_uk');
    }
};