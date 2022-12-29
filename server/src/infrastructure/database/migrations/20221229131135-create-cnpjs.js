module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      companyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('cnpjs');
  }
};