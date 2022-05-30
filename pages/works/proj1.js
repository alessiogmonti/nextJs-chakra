import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title = "Proj1">
            <Container>
                <Title>
                    Proj1 <Badge> 2022</Badge>
                </Title>
                <P>
                    A sample page for where projects will go
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Website </Meta>
                        <Link href="https://www.alessiogmonti.github.io"> 
                            www.alessiomonti.tech
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Another project</Meta> 
                        <span> Like a photography gallery </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack </Meta>
                        <span> NodeJS, Electron, React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta> Blogpost </Meta>
                        <Link href = "posts">
                            Read my thoughts on .. <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/imagesgohere" alt="althere" />
                <WorkImage src="/imagesgohere" alt="althere" />
                <WorkImage src="/imagesgohere" alt="althere" />

            </Container>
        </Layout>
    )
}

export default Work
// export { getServerSideProps} from '../components/chakra'