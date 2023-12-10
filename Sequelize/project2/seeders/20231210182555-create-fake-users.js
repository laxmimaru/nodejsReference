'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      "uuid": "52771f6f-80c2-45ab-b135-101fa123a3df",
      "name": "john123",
      "email": "john123@con.com",
      "role": "developer",
      "createdAt": "2023-12-10T11:25:12.052Z",
      "updatedAt": "2023-12-10T11:25:12.052Z",

       },
       {
       "uuid": "52771f6f-80c2-45ab-b135-101fa456a3df",
       "name": "john456",
       "email": "john456@con.com",
       "role": "developer",
       "createdAt": "2023-12-10T11:25:12.052Z",
       "updatedAt": "2023-12-10T11:25:12.052Z"
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
