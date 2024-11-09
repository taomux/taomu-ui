import { useForm as reactHookFormUseForm, type UseFormProps, type FieldValues, type UseFormReturn } from 'react-hook-form'

export type FormInstance<
  FieldValuesType extends FieldValues = FieldValues,
  Context = any,
  TransformedValues extends FieldValues | undefined = undefined
> = UseFormReturn<FieldValuesType, Context, TransformedValues>

export function useForm<
  FieldValuesType extends FieldValues = FieldValues,
  Context = any,
  TransformedValues extends FieldValues | undefined = undefined
>(props?: UseFormProps<FieldValuesType, Context>) {
  const formInstance: FormInstance<FieldValuesType, Context, TransformedValues> = reactHookFormUseForm(props)
  return { formInstance, clearFormAllValues: () => clearFormAllValues(formInstance) }
}

/** 清空表单所有值 */
export function clearFormAllValues<
  FieldValuesType extends FieldValues = FieldValues,
  Context = any,
  TransformedValues extends FieldValues | undefined = undefined
>(formInstance: FormInstance<FieldValuesType, Context, TransformedValues>) {
  const values = formInstance.getValues()

  for (const key in values) {
    const val = values[key]
    const valueType = typeof val

    let nullValue: any = undefined

    switch (valueType) {
      case 'string':
        nullValue = ''
        break

      case 'object':
        if (val === null) {
          nullValue = null
          break
        }

        if (Array.isArray(val)) {
          nullValue = []
        } else {
          nullValue = {}
        }
        break

      case 'boolean':
        nullValue = false
        break

      case 'number':
        nullValue = 0
        break
    }

    formInstance.setValue(key as any, nullValue)
  }
}
