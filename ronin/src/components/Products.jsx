import { Container } from '@chakra-ui/react';
import axios from 'axios'
import React from 'react'
import {db} from '../firebase/firebase';
import { collection,getDocs, onSnapshot, addDoc} from 'firebase/firestore';
import { getDatabase, ref, child, get,set } from "firebase/database";

export default function Products() {

    async function main(){
        console.log(db);
        const id=1; //I have to make unique id's every time 
        get(ref(db)).then((res)=>{
            console.log(res.val());
        })
        set(ref(db, `products/${id}/`), {
            username: 'n',
            email: 'email',
            profile_picture : 'imageUrl'
          });
        
    }

    // main();
    
  return 0
}
