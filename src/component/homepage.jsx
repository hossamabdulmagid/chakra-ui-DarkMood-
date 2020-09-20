import React, { Fragment } from 'react';
import { Button, Flex, useToast, useColorMode, Input, FormControl } from '@chakra-ui/core';
const HomePage = () => {

    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();





    return (

        <Fragment>
            <Flex align="center" justify="center" height="100vh" direction="column">
                <Button size='lg' onClick={() => toggleColorMode()}>Swith To Dark Mood</Button>
                <FormControl mt='20px'>
                    <Input placeholder="E-Mail-address" size="lg" />
                </FormControl>

                <FormControl mt='20px'>
                    <Input placeholder="Password" size="lg" type="password" />
                </FormControl>
                <Button mt='20px' variantColor='green' size="lg" onClick={() => toast({
                    isClosable: false,
                    title: 'Login Success',
                    description: 'you are logged in',
                    duration: 5000,
                    position: 'bottom-right',
                    status: "success"
                })}>
                    Login
                </Button>
            </Flex>
        </Fragment>
    )
};


export default HomePage;