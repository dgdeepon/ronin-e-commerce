import { Container } from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import {db} from '../firebase/firebase';
import { collection, doc,getDoc} from 'firebase/firestore';

export default function Products() {

    async function main(){
        const data=collection(db,'products');
        console.log(data);
        const mainData=getDoc(data);
        console.log(mainData);
    }

    main();
    
  return 0
}
