import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Grid, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsNow } from "../redux/ProductsStore/productsAction";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

export default function Products() {
  const filterData=[
    {title:'Gender',options:['Men','Unisex']},
    {title:'Sizes',options:['M','L','XL']},
    {title:'Brand',options:['Bewakoof®','Rigo','Adro','Dillinger','Mad Over Print','Door 74','Difference Of Opinion','Threadcurry']}
    ]
    
    const store=useSelector((store)=>{
      return (store.productsReducer.data);
    })
    const dispatch=useDispatch();
  
  // products card
  function productsCard(id,image,name,description,price,rating){
    return <Link to={`/products/${id}`} ><Box key={id} data-id={id} >
      <Image _hover={{transform:'scale(1.01)'}} src={`${image}`} alt={name}/>
      <Text as='b'>{name}</Text>
      <Text noOfLines={1}>{description}</Text>
      <Text as={'b'}>₹{price}</Text>
      {rating>0? <Text>{rating}</Text>:'\n'}
      <Button data-id={id}>ADD</Button>
    </Box> </Link>
  }

  // filters
  function filters(title,options){
    return <AccordionItem>
      <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {options.map((el)=>{
        return <Text>{el}</Text>
      })}
    </AccordionPanel>
      </AccordionItem>
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
    <Grid gridTemplateColumns={'20% 75%'} gap={'1%'}>
        <VStack>
        <Accordion allowToggle w={'80%'}>
          <h3>FILTERS</h3>
          {filterData.map((el)=>{
            return filters(el.title,el.options);
          })}
        </Accordion>
        </VStack>
        <Grid gridTemplateColumns={{base:'repeat(1,98%)',sm:'repeat(2,45%)',md:'repeat(3,25%)'}} m={'auto'} gap={'1%'}>
          {store.map((el)=>{
            return productsCard(el.id,el.image[0],el.name,el.description,el.price,el.rating,el);
          })}
        </Grid>
    </Grid>
  </Box>
}
