import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IOrders } from "../../interfaces/database/IOrders";

export class sequelizeOrders extends Model<IOrders> {
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

sequelizeOrders.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderFileName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    allowNull: true,
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
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    allowNull: true,
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
  timestamps: false,
  tableName: 'orders'
})