import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
  } from '@chakra-ui/react';

function InputG({name,target,onChangeHandler,errors,value}) {
  return (
    <FormControl isInvalid={errors}>
  <FormLabel>{name}</FormLabel>
  <Input name={target} type='text' onChange={onChangeHandler} value={value}/>
  {errors &&
        errors?.map((err) => {
          return <FormErrorMessage>{err}</FormErrorMessage>;
        })}
</FormControl>
  );
};

export default InputG
