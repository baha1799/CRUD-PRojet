
import Ligne from "./composant/ligne"; 
import {Box, Button, Container, FormControl, Input, InputGroup, InputLeftElement, Text, Tab, Drawer } from "@chakra-ui/react"
import { AddIcon, SearchIcon} from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/global";
import DrawerExample from "./composant/drawer";

function App() {
  const{FetchProd,prod,Search, onOpen, isOpen, onClose} = useContext(GlobalContext);
  const[query,setQuery]= useState('');
  useEffect(( )=>{FetchProd(); } , [])
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
    SearchHandler();
  };
  return ( 
    <div className="App">

      <Container maxW={'full'} p="4" fontSize={'30px'}>
                <Box  p="4"  boxShadow="base"   borderRadius='lg' >
                   
                <Box mt="2" gap={'2'} mb="4" display={'flex'}>


<FormControl>

<InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input type='text' placeholder='recherche' onChange={onchangeHandler}   />
  </InputGroup>
              
            </FormControl>
                  </Box>
                </Box>
                <Box mt="5" rounded={'lg'} boxShadow="base" >

                  <Box p="4" display={'flex'} justifyContent="space-between">
                  <Text fontSize="xl" fontWeight="bold">
              Liste de produit
            </Text>
            <Button onClick={onOpen}
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW="150px"
              leftIcon={<AddIcon fontSize={'20px'} 
              
              />}
      
            >
             ajouter produit
            </Button>


                  </Box>
                  <TableContainer>
  <Table variant='simple'>
    <TableCaption>Tableau des Produits</TableCaption>
    <Thead>
      <Tr>
        <Th>nom</Th>
        <Th>prix(Dt)</Th>
        <Th isNumeric>Quantité</Th>
        <Th>modifier</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      
   {

    prod?.map(({_id,nom,prix,qt}) =>{
    return ( <Ligne id={_id}  nom={nom} prix={prix} qt={qt}/>) ;  })}
   
    </Tbody>

  </Table>
</TableContainer>
                </Box>
<DrawerExample />   
      </Container>
    </div>
  );
}

export default App;
