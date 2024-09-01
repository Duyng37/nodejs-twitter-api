import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import userService from '~/services/users.services'

export const loginController = (req: any, res: any) => {
  const { email, password } = req.body
  if (email === 'duyyng37@gmail.com' && password === '123456') {
    return res.status(200).json({ token: 'token' })
  }
  return res.status(401).json({ error: 'Unauthorized' })
}

export const registerController = async (req: any, res: any) => {
  const { email, password } = req.body
  try {
    const result = await userService.register({ email, password })

    return res.json({ message: 'Register successfully', result })
  } catch (error) {
    return res.status(400).json({ error: 'Register failed' })
  }
}
