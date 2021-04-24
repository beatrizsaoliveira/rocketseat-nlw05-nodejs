import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const usersSerice = new UsersService();

        const user = await usersSerice.create(email);

        return response.json(user);
    }
}

export { UsersController };
