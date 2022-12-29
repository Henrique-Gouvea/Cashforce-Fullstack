module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pdfFile: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0,
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('orders');
  }
};