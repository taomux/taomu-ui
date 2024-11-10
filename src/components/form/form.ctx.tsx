import React from 'react'

import type { FormInstance } from './form.hook'
import type { FormItemTransferProps } from './form-item'

export interface FormContextProps extends FormItemTransferProps {
  formInstance?: FormInstance
}

export const FormContext = React.createContext<FormContextProps>({})
