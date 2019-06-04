import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({
    modelName: 'npc'
})
export default class Npc extends Model<Npc>{
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    level1_rate: number;

    @Column
    level2_rate: number;

    @Column
    level3_rate: number;

    @Column
    quality: number;

    @Column
    quality_level1_rate: number;

    @Column
    quality_level2_rate: number;

    @Column
    quality_level3_rate: number;
}