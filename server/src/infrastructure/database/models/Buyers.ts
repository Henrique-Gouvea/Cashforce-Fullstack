import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IBuyers } from "../../interfaces/database/IBuyers";


export class SequelizeBuyers extends Model<IBuyers> {
  declare id: number;
  declare name: string;
  declare type: string;
}

SequelizeBuyers.init({

}, {
  sequelize,
  timestamps: false,
  tableName: 'buyers'
})