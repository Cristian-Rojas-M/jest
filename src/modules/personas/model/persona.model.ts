import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, NotEmpty } from 'sequelize-typescript';

@Table({tableName:"persona",timestamps:true})
 class Persona extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER
    })
    id!:number;

    @AllowNull(false)
    @NotEmpty
    @Column({
        type:DataType.STRING
    })
    name!:string;

    @AllowNull(false)
    @NotEmpty
    @Column({
        type:DataType.STRING
    })
    lastName!:string;

    @AllowNull(false)
    @NotEmpty
    @Column({
        type:DataType.INTEGER
    })
    age!:number


}
export default Persona;