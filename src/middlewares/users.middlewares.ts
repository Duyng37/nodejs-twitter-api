import { checkSchema } from 'express-validator'
import userService from '~/services/users.services'
import { validate } from '~/utils/validation'

export const loginValidator = (req: any, res: any, next: any) => {
  const { email, password } = req.body
  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }
  if (!password) {
    return res.status(400).json({ error: 'Password is required' })
  }
  next()
}

export const registerValidator = validate(
  checkSchema({
    name: {
      notEmpty: true,
      isLength: {
        options: { min: 1, max: 100 }
      },
      trim: true
    },
    email: {
      notEmpty: true,
      isEmail: true,
      trim: true,
      custom: {
        options: async (value: any, { req }: any) => {
          const isExistEmail = await userService.checkEmailExist(value)
          if (isExistEmail) {
            return Promise.reject('Email already exists')
          }
          return true
        }
      }
    },
    password: {
      notEmpty: true,
      isString: true,
      isLength: {
        options: { min: 6, max: 50 }
      },
      isStrongPassword: {
        errorMessage: 'Password is not strong enough',
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      }
    },
    confirm_password: {
      notEmpty: true,
      isString: true,
      isLength: {
        options: { min: 6, max: 50 }
      },
      isStrongPassword: {
        errorMessage: 'Password is not strong enough',
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      },
      custom: {
        options: (value: any, { req }: any) => {
          if (value !== req.body.password) {
            throw new Error('Passwords do not match')
          }
          return true
        }
      }
    },
    date_of_birth: {
      notEmpty: true,
      isISO8601: {
        options: { strict: true, strictSeparator: true }
      }
    }
  })
)
