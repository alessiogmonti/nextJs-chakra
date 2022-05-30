import NextLink from 'next/link'
import { Container, Image, Box, Heading, useColorModeValue, Link, Icon, List, ListItem, Button, SimpleGrid } from '@chakra-ui/react'
import { NextURL } from 'next/dist/server/web/next-url'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

import thumbYoutube from "../public/images/luna1.png"
import thumbProd from "../public/images/luna1.png"
import thumbModels from "../public/images/luna1.png"

// import Image from 'next/image'


const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200' )} p={3} mb={6} align="center">
                    Hello, I'm a freelance vibe manager based in Milan, Italy.
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            NAME NAME
                        </Heading>
                        <p> Graphic Assets (Communications/Branding/Constructor of Cool)</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/image/image.jpg" alt="profile image" />
                    </Box>
                </Box>
                <Section delay = {0.1}>
                    <Heading as="h3" variant = "section-title">
                        Work
                    </Heading>
                    <Paragraph> Design is all about creating things that last and work well.
                        To do this, they need to be prototyped over and over again until they're perfect.
                        The more we make things, the better we get at making them. This is a process that takes
                        time and resources. The more experienced the designer, the less time and resources it takes, and
                        the more future-proof the final product. We can't account for every possibility, but the craft of 
                        a designer is to create an extensible, flexible and modular product that can be adapted to multiple
                        use cases. Here's an example {""}
                        <NextLink href = "/works/project">
                            <Link> Project </Link>
                        </NextLink>
                    </Paragraph>
                    <Box align = "center" my = {4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Schio (VI), Italy.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed BFA in Architectural Design.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2022 </BioYear>
                        Founded AEREA Lab, offering graphics and branding services for organizations looking for
                        modern, elegant, cutting-edge communications material.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        {''}
                        <NextLink href= "/works/photography">
                            <Link>Photography </Link>
                        </NextLink>, 
                        Music,
                        Call of Duty
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/alessiogmonti" target="_blank">
                                <Button variant="ghost" colorScheme="teal" lefIcon={<Icon as={IoLogoGithub} />}>
                                   @github_
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/monti_alessio" target="_blank">
                                <Button variant="ghost" colorScheme="teal" lefIcon={<Icon as={IoLogoInstagram} />}>
                                   @insta_
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/alessiogmonti" target="_blank">
                                <Button variant="ghost" colorScheme="teal" lefIcon={<Icon as={IoLogoTwitter} />}>
                                   @twitter_
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.com/alessiogmonti" target="_blank">
                                <Button variant="ghost" colorScheme="teal" lefIcon={<Icon as={IoLogoDiscord} />}>
                                   @discord_
                                </Button>
                            </Link>
                        </ListItem>
                    </List>        
                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem 
                            href="https://www.youtube.com/mychannel" 
                            title="Codes" 
                            thumbnail={thumbYoutube}
                        >
                                My Youtube Channel 
                        </GridItem>
                        <GridItem 
                            href="https://www.myproductivityapp" 
                            title="ProdApp" 
                            thumbnail={thumbProd} 
                        > 
                            My Productivity App 
                        </GridItem>
                        <GridItem 
                            href="https://www.my3dmodels" 
                            title="3DModels" 
                            thumbnail={thumbModels} 
                        > 
                            My 3D models 
                        </GridItem>
                    </SimpleGrid>   
                </Section>
            </Container>
        </Layout>
    )
}

export default Page