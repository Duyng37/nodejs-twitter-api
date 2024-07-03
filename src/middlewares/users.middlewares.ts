export const loginValidator = (req: any, res: any, next: any) => {
  const { email, password } = req.body
  console.log('🚀 ~ req.body:', req.body)
  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }
  if (!password) {
    return res.status(400).json({ error: 'Password is required' })
  }
  next()
}
