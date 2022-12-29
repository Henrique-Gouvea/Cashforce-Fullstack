import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IUsers } from "../../interfaces/database/IUsers";

export class SequelizeUsers extends Model<IUsers> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: string;
  declare cashforceAdm: number;
}

SequelizeUsers.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  departament: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  verificationCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailChecked: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cashforceAdm: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'users'
})