module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
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
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sponsors',
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
    await queryInterface.dropTable('offers');
  }
};