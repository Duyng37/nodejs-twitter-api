import userService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import { RegisterReqBody } from '~/models/request/User.requests'

export const loginController = (req: any, res: any) => {
  const { email, password } = req.body
  if (email === 'duyyng37@gmail.com' && password === '123456') {
    return res.status(200).json({ token: 'token' })
  }
  return res.status(401).json({ error: 'Unauthorized' })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await userService.register(req.body)

    return res.json({ message: 'Register successfully', result })
  } catch (error) {
    return res.status(400).json({ error: 'Register failed' })
  }
}
