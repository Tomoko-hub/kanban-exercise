import React from "react";
import { Button } from '@chakra-ui/react'

function AddTaskButton (){
    return (
        <div>
            <p>Add task</p>
            <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='green.500'
            >
                + Create new task
            </Button>
        </div>
    )
}

export default AddTaskButton;