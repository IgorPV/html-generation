import { Temas } from "./Temas"
import { User } from "./User"

export class Postagens{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public tema: Temas
    public criadoPor: User
}