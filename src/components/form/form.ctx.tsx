import React from 'react'

import type { FormInstance } from './form.hook'

export interface FormContextProps {
  formInstance?: FormInstance
  updateCount?: number
}

export const FormContext = React.createContext<FormContextProps>({})
