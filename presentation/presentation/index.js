import React, { Component } from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

class Presentation extends Component {
  render () {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            GRPC-Web: A primer
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            By Cornelio Hopmann and Jacob Evans
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={5} textColor='primary' caps>Who we are</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Jacob Evans and Cornelio Hopmann are NodeJS developers currently
          working at Cybus on Industrial IoT topics. We are both members of an
          OpenSource group called HamburgChimps where we explore and discuss
          tech concepts.
          </Text>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Jacob Evans (@jacobtheevans) is a Developer, board game nerd and lover of learning.
          </Text>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Cornelio Hopmann (@chopmann) is a Developer, Tropico Expert and Designer of systems.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={4} textColor='secondary' caps>What will be covered</Heading>
          <List>
            <ListItem>What is grpc-web?</ListItem>
            <ListItem>Closer look at grpc-web</ListItem>
            <ListItem>Example grpc-web project</ListItem>
            <ListItem>Discuss grpc-web</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
