import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, transition } from '@chakra-ui/react'
import { NextURL } from 'next/dist/server/web/next-url'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
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
            </Container>
        </Layout>
    )
}

export default Page