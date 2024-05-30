import React from "react";
import { Card, CardBody, Text, Box, Heading, Stack, Badge, HStack, CircleIcon} from '@chakra-ui/react';
import { Icon, createIcon } from '@chakra-ui/react'
import{ boardColumns,users } from '../api/mockData';

function Task(/* {userName} */) {

    const simo = users.find(user => user.id === 'd8c81180-9d65-48c3-9f04-67a2b5495015');
    const kaija = users.find(user => user.id === '4629d47f-17d1-4de5-aca4-42154cf3bd4c');
    const teppo = users.find(user => user.id === '3fa175b8-bc47-4e92-befc-4b4b02d5421c');
    const pekka = users.find(user => user.id === '76fbd508-3cb6-4b1a-a574-9046367fc3ac');
    const liisa = users.find(user => user.id=== '0a0247cc-c351-45d7-85f0-a3b303ed2e48');
    const raimo = users.find(user => user.id === '256de3b2-ca7d-427a-b890-aa3176707df0');

    // error handler:user
    const user = users.find(user => user.id === user.id);

     if(!user){
        return <div>User not found</div>
    }

    
    const CircleIcon = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      )
      
    return (
        <div className="task">
            <Card margin='10px'>
                <CardBody padding='10px'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            {}
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge>Importance</Badge>
                            <Badge colorScheme='green'>Importance</Badge>
                            <Badge colorScheme='red'>Importance</Badge>
                            <Badge colorScheme='purple'>Importance</Badge>
                        </Stack>
                        <HStack>
                            {/* The default icon size is 1em (16px) */}
                            <CircleIcon />

                            {/* Use the `boxSize` prop to change the icon size */}
                            <CircleIcon boxSize={6} />

                            {/* Use the `color` prop to change the icon color */}
                            <CircleIcon boxSize={6} color='red.500' />
                            <CircleIcon boxSize={6} color='yellow.300' />
                            <CircleIcon boxSize={6} color='green.500' />
                        </HStack>
                        <Text>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
           
            <Card margin='10px'>
                <CardBody padding='10px' borderLeft="0.5rem solid red">
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge colorScheme='red'>{simo.name}</Badge>
                            <Badge colorScheme='red'>{kaija.name}</Badge>
                            <CircleIcon boxSize={6} color='red.500' />
                        </Stack>
                        <Text>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
            <Card margin='10px'>
                <CardBody padding='10px' borderLeft="0.5rem solid yellow">
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge colorScheme='yellow'>{raimo.name}</Badge>
                            <Badge colorScheme='yellow'>{liisa.name}</Badge>
                            <CircleIcon boxSize={6} color='yellow.300' />
                        </Stack>
                        <Text>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
            <Card margin='10px'>
                <CardBody padding='10px' borderLeft="0.5rem solid green">
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge colorScheme='green'>{pekka.name}</Badge>
                            <Badge colorScheme='green'>{teppo.name}</Badge>
                            {/* <CircleIcon boxSize={6} color='green.500' /> */}
                        </Stack>
                        <Text>
                            View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>
        </div>
    )
}

export default Task;