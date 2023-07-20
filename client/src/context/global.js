import { createContext, useState } from "react";
import axios from "axios"
import { useDisclosure, useToast } from "@chakra-ui/react";
export const GlobalContext = createContext();
export default function Wrapper({children}){
    const [prod,setprod] = useState([]);
    const [prod1,setprod1] = useState([]);
    const [errors, setErrors] = useState({});
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const FetchProd =() =>{
        axios.get('/produits')
        .then(res=>{setprod(res.data)})
        .catch((err) => {
            console.log(err.reponse.data);
          });
    
    }   


    const Search = (query) => {
        axios
          .post(`/produits/search?key=${query}`)
          .then((res) => {
            setprod(res.data);
          })
          .catch((err) => {
            console.log(err.reponse.data);
          });
      };

      const Delete = (id) => {
        axios
          .delete(`/produits/${id}`)
          .then((res) => {
            setprod(prod.filter((u) => u._id != id));
            toast({
              title: 'produit supprimé',
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log(err.reponse.data);
          });
      };
      
      const Ajouter = (form, setForm) => {
        
        axios
          .post('/produits', form)
          .then((res) => {
            setprod([...prod, res.data]);
            toast({
              title: 'Produit ajouté',
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
            setErrors({});
            setForm({});
            onClose();
          })
          .catch((err) => {
            setErrors(err.response.data.error);
          });
      };


      const FindOne = async (id) => {
        await axios
          .get(`/produits/${id}`)
          .then((res) => {
            setprod1(res.data);
          })
          .catch((err) => {
            setErrors(err.response.data.error);
          });
      };

      
  const Update = (form, setForm, id) => {

    console.log(form)
    axios
      .put(`/produits/${id}`, form)
      .then((res) => {
        toast({
          title: 'Produit modifié',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        FetchProd();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };
    return ( <GlobalContext.Provider value={{errors,setErrors,
      FetchProd,prod,Search,Delete,onOpen,isOpen,
      onClose,Ajouter,FindOne,prod1,setprod1,Update}}>{children}</GlobalContext.Provider>);
}