import { Request, Response } from 'express'

import HelloWorldModel from '../models/HelloWorldModel'

class helloWorldController {
    async handle(request: Request, response: Response) {
        try {
            const repository = await HelloWorldModel.handle()
            const { message } = repository

            return response.status(200).json({ message: 'Hello World' })
        } catch (error) {
            return response
                .status(500)
                .json({ message: 'Internal Server Error' })
        }
    }
}

export default new helloWorldController()
