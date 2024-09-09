import express from 'express'
import { body, validationResult, ContextRunner, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'

// can be reused by many routes
export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // sequential processing, stops running validations chain if one fails.
    await validations.run(req)
    // for (const validation of validations) {
    //   const result = await validation.run(req);
    //   if (!result.isEmpty()) {
    //     return res.status(400).json({ errors: result.array() });
    //   }
    // }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() })
    }

    next()
  }
}
