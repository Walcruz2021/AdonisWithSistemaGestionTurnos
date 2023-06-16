export default interface ClientsRepositoryContracts{
findOne<T>(query:T):Promise<any>
findAll<T>(query:T, populate:T):Promise<any[]>
count<T>(query:T):Promise<number>
updateMany<T>(query:T,querySet:T):Promise<any>
findOneAndUpdate<T>(query:T,querySet:T):Promise<any>
}
//Esta interfaz define los métodos que debe implementar el repositorio de clientes.
//La letra "T" en este contexto es un parámetro de tipo genérico. En TypeScript, puedes usar letras como "T" 
//para representar tipos genéricos, lo que permite crear funciones o interfaces que sean flexibles en cuanto al 
//tipo de datos que pueden recibir o devolver.