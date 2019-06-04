import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({
    modelName: 'layout'
})
export default class Layout extends Model<Layout> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    layout_str: string;

    @Column
    random_win: number;

    @Column
    list_win: number;
}