import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item"

import thumbInkdrop from "../public/images/luna1.png"
// import Head from "next/head";

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6} >
                <Section>
                    <WorkGridItem id="proj1" title="Proj1" thumbnail={thumbInkdrop}>
                        A sample image for my stuff
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="somethingelse" title="anotherTitle" thumbnail={thumbInkdrop}>
                        Another image goes here
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="somethingelse" title="anotherTitle" thumbnail={thumbInkdrop}>
                        Another image goes here
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="somethingelse" title="anotherTitle" thumbnail={thumbInkdrop}>
                        Another image goes here
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="somethingelse" title="anotherTitle" thumbnail={thumbInkdrop}>
                        Another image goes here
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Works
                    </Heading>
            </Section>
        </Container>
    )
}

export default Works