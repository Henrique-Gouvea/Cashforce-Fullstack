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
      },
      paymentStatusProvider: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sponsorId: {
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
    await queryInterface.dropTable('offers');
  }
};