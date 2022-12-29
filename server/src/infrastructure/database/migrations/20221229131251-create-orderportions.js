module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      availableToMarket: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable('orderportions');
  }
};