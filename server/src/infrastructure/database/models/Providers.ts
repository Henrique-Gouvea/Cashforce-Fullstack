import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IProviders } from "../../interfaces/database/IProviders";

export class sequelizeProviders extends Model<IProviders> {
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

sequelizeProviders.init({
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
    documents: {
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
    tableName: 'providers'
})