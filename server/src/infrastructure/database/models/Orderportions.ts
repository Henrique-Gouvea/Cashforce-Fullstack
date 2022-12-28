import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IOrderportions } from "../../interfaces/database/IOrderportions";

export class SequelizeOrderportions extends Model<IOrderportions> {
  declare id: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket: number;
  declare orderId: number;
}

SequelizeOrderportions.init({
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
}, {
  sequelize,
  timestamps: false,
  tableName: 'orderportions'
})