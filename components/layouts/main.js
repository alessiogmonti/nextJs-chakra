import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import {Box, Container} from '@chakra-ui/react'
import Jet from '../jet.js'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> NAME NAME - Homepage</title> 
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg.md" pt={14}>
                <NoSsr>
                    <Jet/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main