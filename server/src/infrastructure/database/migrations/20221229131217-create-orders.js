module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      orderNfId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderPath: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      orderFileName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      orderOriginalName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      emissionDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pdfFile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emitedTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nNf: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CTE: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Cnpjs',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      buyerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Buyers',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Providers',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      orderStatusBuyer: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
      },
      orderStatusProvider: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
      },
      deliveryReceipt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cargoPackingList: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deliveryCtrc: {
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
    await queryInterface.dropTable('orders');
  }
};