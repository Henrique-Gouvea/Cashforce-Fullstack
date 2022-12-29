module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {

    })
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};