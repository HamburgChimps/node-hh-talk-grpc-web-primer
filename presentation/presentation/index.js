import React, { Component } from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  CodePane
} from 'spectacle'
import WhatIsGrpcImage from '../assets/grpc.svg'

// move to other files
const protobufExample = `// The greeter service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}`

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
            <ListItem>What is grpc?</ListItem>
            <ListItem>What is grpc-web?</ListItem>
            <ListItem>Closer look at grpc-web</ListItem>
            <ListItem>Example grpc-web project</ListItem>
            <ListItem>Discuss grpc-web</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>What is grpc?</Heading>
          <BlockQuote>
            <Quote textSize={24}>In gRPC a client application can directly call methods on a server application on a different machine as if it was a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. On the server side, the server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.</Quote>
          </BlockQuote>
          <Image padding={'20px 0px'} src={WhatIsGrpcImage} height={300} />
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Quick thought on Protobufs</Heading>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>By default gRPC uses protocol buffers, Google’s mature open source mechanism for serializing structured data (although it can be used with other data formats such as JSON).</Text>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.</Text>
          <CodePane
            lang='go'
            source={protobufExample}
          />
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
