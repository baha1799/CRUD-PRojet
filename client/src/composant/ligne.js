import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Td, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/global'

 function Ligne({id,nom,prix,qt}) {
    const {Delete,onOpen,FindOne} =useContext(GlobalContext);
  return (
    <Tr>
    <Td>{nom}</Td>
    <Td>{prix}</Td>
    <Td isNumeric>{qt}</Td>
    <Td>
        <Box display="flex" gap="1">
            <Button colorScheme='green' onClick={() => {onOpen(); FindOne(id);}  } > <EditIcon/></Button>
            <Button colorScheme='red' onClick={() => Delete(id)} > <DeleteIcon/></Button>
        </Box>
    </Td>
  </Tr>
  )
}

export default Ligne