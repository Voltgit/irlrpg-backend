import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttributes {
    email: string;
    name: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;
    @Column({ type: DataType.BOOLEAN, allowNull: true })
    banReason: string;
}