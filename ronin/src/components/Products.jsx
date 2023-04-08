import { Container } from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import {db} from '../firebase/firebase';
import { collection, doc,getDoc, onSnapshot, setDoc} from 'firebase/firestore';

export default function Products() {

    function main(){
        const data=collection(db,'products');
        console.log(data);
        const mainData= onSnapshot(data,(res)=>{
            console.log(res);
        })
    }

    main();
    
  return 0
}
