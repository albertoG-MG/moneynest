import { Request, Response } from 'express';
import UserModel from '../models/UserModel';



class UserController {
    static async getAllUsers(req: Request, res: Response): Promise<void>{
        try{
            const obtenerUsuarios = await UserModel.getAllUsers();

            if(!obtenerUsuarios || obtenerUsuarios.length === 0){
                console.error("Error al obtener usuarios");
                res.status(500).json( { error: "Error al obtener usuarios" });
                return;
            }

            res.status(200).json(obtenerUsuarios);
        }catch(error: unknown){
            if(error instanceof Error){
                res.status(500).json({ error: `Error en la conexión de la API ${ error.message }` });
            }else{
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }
}

export default UserController;
