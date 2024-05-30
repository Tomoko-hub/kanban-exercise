import React, {useEffect} from "react";

import BoardAPI from './api/board';
import UserAPI from './api/user';

import Header from "./components/layout/Header.jsx";
import Example1 from './containers/Example1';
import Example2 from './containers/Example2';

import {
  Routes,
  Route
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import Task from "./components/Task.jsx";
import { boardColumns } from "./api/mockData.js";

const App = () => {

  //this function is for showing the available mocked Rest API,
  //remove this function when starting the exercise
    const exampleOfMockAPI = async () => {
    let res = await BoardAPI.getBoardColumns();
    console.log("get board columns", res);
    console.log("res.data:", res.data);
    console.log('boardColums',boardColumns);

    const columnNames = boardColumns.map(column => column.name);
    console.log('columns names:',columnNames);

    const backlogBoardData = boardColumns.find(column => column.id === 'e38bba16-6c80-4ac3-9102-5dbb6aeb7c19');
    console.log(backlogBoardData.name);

    if(!boardColumns){
      return <div>Column does not found</div>
  }

    /* res = await UserAPI.getUsers();
    console.log("get users", res);

    await BoardAPI.editTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52', {
              name: 'Infrastructure acc',
              assigned: [
                '76fbd508-3cb6-4b1a-a574-9046367fc3ac'
              ],
              importance: 1,
              description: 'Example description changed'
            })

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after edit", res);

    await BoardAPI.deleteTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52');

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after delete", res);

    await BoardAPI.createTask('e38bba16-6c80-4ac3-9102-5dbb6aeb7c19', {
      name: 'Example',
      assigned: [],
      importance: 2,
      description: 'Example description'
    }) 

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after create", res);
    */
  } 


  /* useEffect(() => {
    exampleOfMockAPI();
  }, [])  */ 

 

  return (
    <div className="app">
      <ChakraProvider>
      {/*create your own containers and components*/}
      {/* <Routes>
        <Route path="/" element={<Example1 />}/>
        <Route path="/example2" element={<Example2 />} />
      </Routes> */}
        <Header />
        <Grid margin='1rem 3rem' templateColumns='repeat(4, 1fr)' gap={6}>
          <GridItem w='100%' h='100vh' bg='gray.100'>
            Backlog
            <Task />
          </GridItem>
          <GridItem w='100%' h='100vh' bg='gray.100'>In progress</GridItem>
          <GridItem w='100%' h='100vh' bg='gray.100'>In testing</GridItem>
          <GridItem w='100%' h='100vh' bg='gray.100'>Done</GridItem>
        </Grid>
      </ChakraProvider>
    </div>
  );
}

export default App;
