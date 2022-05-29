import { ColorModeScript} from '@chakra-ui/react'
import NextDocument, { HTML, Head, Main, NextScript} from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument{
    render() {
        return(
            <HTML lang ="en">
                <Head />
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                < Main/>
                <NextScript />
            </body>
            </HTML>
            )
        
    }
}