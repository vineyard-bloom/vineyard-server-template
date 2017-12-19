import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
import {Id, NewPizza, Pizza} from "../model-types"

@Entity({name: 'pizzas'})
export class PizzaRecord implements Pizza {
  @PrimaryGeneratedColumn('uuid')
  id: Id

  @Column('string')
  name: string

  @Column()
  size: number

  static createFromNewPizza(input: NewPizza) {
    let result = new PizzaRecord()
    result.name = input.name
    result.size = input.size
    return result
  }
}