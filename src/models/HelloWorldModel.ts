import { Response } from '../types/type'

class HelloWorldModel {
    async handle(): Promise<Response> {
        try {
            const message = 'Hello World'
            return {
                success: true,
                code: 200,
                message: message
            }
        } catch (error) {
            return {
                success: false,
                code: 500,
                message: 'Internal Server Error'
            }
        }
    }
}

export default new HelloWorldModel()
