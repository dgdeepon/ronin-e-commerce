import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Grid, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsNow } from "../redux/ProductsStore/productsAction";

export default function Products() {
  const store=useSelector((store)=>{
    return store.productsReducer.data;
  })
  const dispatch=useDispatch();

  // console.log(store);
  
  // products card
  function productsCard(id,image,name,description,price,rating){
    return <Box key={id}>
      <Image src={`${image}`} alt={name}/>
      <Text as='b'>{name}</Text>
      <Text noOfLines={2}>{description}</Text>
      <Text as={'b'}>{price}</Text>
      {rating>0? <Text>{rating}</Text>:''}
      <Button data-id={id}>ADD</Button>
    </Box>
  }



  useEffect(()=>{
    dispatch(getProductsNow);
  },[])


  return store.length<=0? <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      />
    : <Box mt={'5%'}>
    <Grid gridTemplateColumns={'10% 80%'} m={'auto'} gap={'10%'}>
        <VStack>
          <Text>Filters</Text>
        </VStack>
        <Grid gridTemplateColumns={{base:'repeat(1,98%)',sm:'repeat(2,45%)',md:'repeat(3,25%)'}} m={'auto'} gap={'1%'}>
          {store.map((el)=>{
            return productsCard(el.id,el.image[0],el.name,el.description,el.price,el.rating);
          })}
        </Grid>
    </Grid>
  </Box>
}
