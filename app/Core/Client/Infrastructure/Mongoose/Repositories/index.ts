import Client from "App/Core/Client/Infrastructure/Mongoose/Model/Client"
import ClientRep from "App/Core/Client/Infrastructure/Mongoose/Repositories/ClientRepository";

const ClientRepository=new ClientRep(Client)
export default ClientRepository

//Finalmente, la línea export default ClientRepository exporta la instancia ClientRepository como el valor 
//predeterminado del módulo actual. Esto significa que cuando este módulo se importa en otro lugar, el valor que se 
//recibirá será la instancia de ClientRepository.
//En resumen, el código importa módulos locales, crea una instancia de la clase ClientRep utilizando la clase 
//Client como argumento, y exporta esa instancia como el valor predeterminado del módulo actual