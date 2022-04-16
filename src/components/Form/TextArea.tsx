import { Textarea as ChakraTextArea, FormLabel, FormControl, TextareaProps as ChakraTextareaProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'

interface TextareaProps extends ChakraTextareaProps{
  name: string;
  label?: string;
  error?: FieldError;
}


const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
         {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
           <ChakraTextArea name={name} id={name} focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{
           bg: 'gray.900'
         }}
         size="lg" ref={ref} {...rest}/>
         {!!error && (
         <FormErrorMessage>
           {error.message}
         </FormErrorMessage>)}
         </FormControl>
  );
}

export const TextArea = forwardRef(TextAreaBase)