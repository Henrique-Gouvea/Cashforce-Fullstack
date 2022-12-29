module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE'
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