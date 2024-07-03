export const loginController = (req: any, res: any) => {
  const { email, password } = req.body
  if (email === 'duyyng37@gmail.com' && password === '123456') {
    return res.status(200).json({ token: 'token' })
  }
  return res.status(401).json({ error: 'Unauthorized' })
}
