import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({
    modelName: 'random_layout'
})
export default class RandomLayout extends Model<RandomLayout>{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    npc_count: number;

    @Column
    total_cost: number;

    @Column
    layout_str: string;
}