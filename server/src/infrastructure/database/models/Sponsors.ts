import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { ISponsors } from "../../interfaces/database/ISponsors";

export class sequelizeSponsors extends Model<ISponsors> {
  declare id: number;
  declare name: string;
  declare tradingName: string;
  declare cashforceTax: string;
  declare responsibleName: string;
  declare responsibleEmail: string;
  declare responsiblePosition: string;
  declare responsiblePhone: string;
  declare responsibleMobile: string;
  declare website: string;
  declare postalCode: string;
  declare address: string;
  declare number: string;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare bank: string;
  declare bankAgency: string;
  declare account: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare cnpjId: number;
  declare email: string;
}

sequelizeSponsors.init({
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
}, {
  sequelize,
  timestamps: false,
  tableName: 'sponsors'
})