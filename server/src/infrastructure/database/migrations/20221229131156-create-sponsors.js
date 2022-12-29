module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cashforceTax: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responsibleName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responsibleEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responsiblePosition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responsiblePhone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responsibleMobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      complement: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bank: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankAgency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      account: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      situation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      situationDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('sponsors');
  }
};