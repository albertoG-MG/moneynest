import { DataTypes, Model } from 'sequelize';
import DbConfig from "../config/dbConfig";

const sequelize = new DbConfig().getSequelize();

interface UserAttributes{
    id?: number,
    username: string,
    nombre: string,
    apellido_pat: string,
    apellido_mat: string,
    correo: string,
    password?: string,
    departamento_id?: number,
    roles_id?: number,
    subrol_id?: number,
    nombre_foto?: string,
    foto?: string
}

class UserModel extends Model<UserAttributes> implements UserAttributes {
    public id?: number;
    public username!: string;
    public nombre!: string;
    public apellido_pat!: string;
    public apellido_mat!: string;
    public correo!: string;
    public departamento_id?: number;
    public roles_id?: number;
    public subrol_id?: number;
    public nombre_foto?: string;
    public foto?: string;

    public static async getAllUsers() {
        const users = await UserModel.findAll();
        return users.map(user => user.toJSON());
    }


}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido_pat: {
            type: DataTypes.STRING
        },
        apellido_mat: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING,
            unique: true
        },
        departamento_id:{
            type: DataTypes.INTEGER
        },
        roles_id:{
            type: DataTypes.INTEGER
        },
        subrol_id: {
            type: DataTypes.INTEGER
        },
        nombre_foto: {
            type: DataTypes.STRING
        },
        foto: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        tableName: 'Usuarios'
    }
);

export default UserModel;