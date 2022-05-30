import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'

import thumbnail1 from '../public/images/luna1.png'

const Posts = () => (
    <Layout title = "Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title="My post1"
                        thumbnail={thumbnail1}
                        href="linkgoeshere"
                    />
                     <GridItem
                        title="My post2"
                        thumbnail={thumbnail1}
                        href="linkgoeshere"
                    />
                     <GridItem
                        title="My post3"
                        thumbnail={thumbnail1}
                        href="linkgoeshere"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts