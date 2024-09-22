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
  return { formInstance }
}
