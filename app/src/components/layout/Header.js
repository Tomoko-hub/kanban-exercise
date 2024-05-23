import React from "react";

import { Heading } from '@chakra-ui/react'


const Header =()=>{
   return(

      <Heading 
         as='h4' 
         size='lg'
         color="purple.900"
         padding='0.75rem'
         backgroundColor="green.50"
      >Kanban board</Heading>
   
   ) 
}

export default Header;