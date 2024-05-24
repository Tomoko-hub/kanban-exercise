import React from "react";
import { Card, CardBody, Text, Box, Heading, Stack, Badge, HStack, CircleIcon} from '@chakra-ui/react';
import { Icon, createIcon } from '@chakra-ui/react'

function Task() {

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
                            Summary
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
                <CardBody padding='10px'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge colorScheme='green'>Teppo Muukalainen</Badge>
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
                <CardBody padding='10px'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading>
                        <Stack direction='row' paddingTop='5px'>
                            <Badge colorScheme='red'>Simo Suomalainen</Badge>
                            <Badge colorScheme='red'>Kaija Koo</Badge>
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
        </div>
    )
}

export default Task;