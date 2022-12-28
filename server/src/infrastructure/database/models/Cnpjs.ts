import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { ICnpj } from "../../interfaces/database/ICnpj";

export class SequelizeCnpjs extends Model<ICnpj> {
	declare id: number;
	declare cnpj: string;
	declare companyType: string;
}

SequelizeCnpjs.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	cnpj: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	companyType: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize,
	timestamps: false,
	tableName: 'cnpjs'
})