module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tariff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adValorem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      float: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iof: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Orders',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      sponsorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Sponsors',
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