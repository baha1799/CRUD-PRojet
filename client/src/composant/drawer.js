import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    Stack,
  } from '@chakra-ui/react';

  import { useContext, useEffect, useState } from 'react';
  import { GlobalContext } from '../context/global';
  import React from 'react';
import InputG from './input';


 function DrawerExample() {
    const { onOpen, isOpen, onClose ,Ajouter,errors, setErrors,prod1,Update} =
    useContext(GlobalContext);
    const[form,setForm]= useState({});
    const onChangeHandler =(e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
    };
    const onAdd = () => {
        
        Ajouter(form, setForm);

      };
    const onupdate = () => {
      
        Update(form, setForm , form._id);

      };
      useEffect(() => {
        setForm(prod1);
      }, [prod1]);
  
    return (
      <>
  
        <Drawer isOpen={isOpen} placement='right'   onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton 
            onClick={() => {
                onClose();
                setErrors({});
                setForm({});
              }}/>
            <DrawerHeader>Ajouter Un Produit</DrawerHeader>
  
            <DrawerBody>
             <Stack spacing={"24px"}>
                    <InputG name="Nom" target="nom" value={form?.nom} onChangeHandler={onChangeHandler} errors={errors?.nom}/>
                    <InputG name="Prix" target="prix" value={form?.prix} onChangeHandler={onChangeHandler} errors={errors?.prix}/>
                    <InputG name="Quantité" target="qt" value={form?.qt} onChangeHandler={onChangeHandler} errors={errors?.qt}/>
                    
             </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3}    onClick={() => {
                onClose();
                setErrors({});
                setForm({});
              }}>
                Cancel
              </Button>
              <Button colorScheme='blue'  onClick={() => (form._id ? onupdate() : onAdd())}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  export default  DrawerExample