import { Request, Response } from 'express'
class HelloWorld {
    async handle(request: Request, response: Response) {
        try {
            return response.status(200).json({ message: 'Hello World' })
        } catch (error) {
            return response
                .status(500)
                .json({ message: 'Internal Server Error' })
        }
    }
}

export default new HelloWorld()
