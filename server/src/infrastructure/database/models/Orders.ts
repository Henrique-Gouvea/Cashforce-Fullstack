import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IOrders } from "../../interfaces/database/IOrders";
import { SequelizeCnpjs } from "./Cnpjs";
import { SequelizeUsers } from "./Users";
import { SequelizeBuyers } from "./Buyers";
import { SequelizeProviders } from "./Providers";

export class SequelizeOrders extends Model<IOrders> {
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath: string;
  declare orderFileName: string;
  declare orderOriginalName: string;
  declare emissionDate: string;
  declare pdfFile: string;
  declare emitedTo: string;
  declare nNf: string;
  declare CTE: string;
  declare value: string;
  declare cnpjId: number;
  declare userId: number;
  declare buyerId: number;
  declare providerId: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: string;
}

SequelizeOrders.init({
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
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
}, {
  sequelize,
  timestamps: true,
  tableName: 'orders'
})

SequelizeOrders.belongsTo(SequelizeCnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
SequelizeOrders.belongsTo(SequelizeUsers, { foreignKey: 'userId', as: 'user' });
SequelizeOrders.belongsTo(SequelizeBuyers, { foreignKey: 'buyerId', as: 'buyer' });
SequelizeOrders.belongsTo(SequelizeProviders, { foreignKey: 'providerId', as: 'provider' });