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
import GeneralArch from '../assets/general.svg'
import Build from '../assets/build.svg'
import ChristmasArch from '../assets/arch.svg'

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

const grpcServiceExample = `
service HelloService {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string greeting = 1;
}

message HelloResponse {
  string reply = 1;
}
`

const grpcUnary = `
rpc SayHello(HelloRequest) returns (HelloResponse){
}`

const grpcServerStreaming = `
rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse){
}
`

const grpcClientStreaming = `
rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse) {
}
`

const gRPCBidirectionalStreaming = `
rpc BidiHello(stream HelloRequest) returns (stream HelloResponse){
}
`

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
            gRPC-Web: A primer
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
            <ListItem>What is gRPC?</ListItem>
            <ListItem>What is gRPC-web?</ListItem>
            <ListItem>Closer look at gRPC-web</ListItem>
            <ListItem>Example gRPC-web project</ListItem>
            <ListItem>gRPC-web</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={5} textColor='secondary' caps>What is gRPC?</Heading>
          <List>
            <ListItem>Remote Procedure Call framework</ListItem>
            <ListItem>Streaming, Bidirectional streaming</ListItem>
            <ListItem>Built-in security and authentication</ListItem>
            <ListItem>Rich Ecosystem: Tracing, balancing, tooling</ListItem>
            <ListItem>Uses HTTP/2 for transport</ListItem>
            <ListItem>Support on all major languages</ListItem>
            <ListItem>Uses Protocol Buffers by default</ListItem>
          </List>
          <Image padding={'20px 0px'} src={WhatIsGrpcImage} height={300} />
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>What are Protobufs?</Heading>
          <List>
            <ListItem>Interface description language</ListItem>
            <ListItem>Strongly-typed</ListItem>
            <ListItem>Serialization format (binary)</ListItem>
            <ListItem>Compact</ListItem>
            <ListItem>Forward- and Backward-compatible</ListItem>
          </List>
          <CodePane
            lang='go'
            source={protobufExample}
          />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            gRPC Basics
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Services</Heading>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types.</Text>
          <CodePane
            lang='go'
            source={grpcServiceExample}
          />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={6} textColor='secondary' caps>Service Methods</Heading>
          <List>
            <ListItem>
              Unary RPCs
              <CodePane lang='go' source={grpcUnary} />
            </ListItem>
            <ListItem>
              Server streaming RPCs
              <CodePane lang='go' source={grpcServerStreaming} />
            </ListItem>
            <ListItem>
              Client streaming RPCs
              <CodePane lang='go' source={grpcClientStreaming} />
            </ListItem>
            <ListItem>
              Bidirectional streaming RPCs
              <CodePane lang='go' source={gRPCBidirectionalStreaming} />
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Using these methods</Heading>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>Starting from a service definition in a .proto file, gRPC provides protocol buffer compiler plugins that generate client- and server-side code. gRPC users typically call these APIs on the client side and implement the corresponding API on the server side.</Text>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>The server waits for incoming rpc calls implements a service then performs operations and sends messages back to the client.</Text>
          <Text textAlign={'left'} padding={'10px 0px'} textSize={24} textColor='secondary'>The client sends rpc calls to the gRPC server and then waits for the messages back from the gRPC server.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading size={6} textColor='secondary' caps>Other important concepts</Heading>
          <List>
            <ListItem>Deadlines/Timeouts</ListItem>
            <ListItem>RPC Termination</ListItem>
            <ListItem>Cancelling RPCs</ListItem>
            <ListItem>Metadata</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            gRPC-Web
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>What is gRPC WEb?</Heading>
          <BlockQuote>
            <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>gRPC web is a library that allows browsers to run gRPC</Text>
            <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>It providers a Code Generator Plugin for protoc that outputs browser ready code.</Text>
            <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>Check it out on github.com/gRPC/gRPC-web</Text>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>What does it generate?</Heading>
          <BlockQuote>
            <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>{`{service}/_pub.js}`} The compiled client code.</Text>
            <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>{`{service}/web_pub.js}`} The compiled requests code.</Text>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Architecture</Heading>
          <Image padding={'20px 0px'} src={GeneralArch} height={400} />
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Using gRPC with React</Heading>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>Make sure your webpack build supports commonjs modules.</Text>
          <Image padding={'20px 0px'} src={Build} height={200} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Warning</Heading>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px 10px 0px'} textColor='primary'>gRPC needs access HTTP/2 trailers, which is not supported in browsers today. This means some form of proxy is required.</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>More Info Here</Text>
          <Text textAlign={'left'} textSize={24} padding={'2px 0px'} textColor='primary'>github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md</Text>
          <Text textAlign={'left'} textSize={24} padding={'2px 0px'} textColor='primary'>github.com/grpc/grpc-web/issues/347</Text>
          <Text textAlign={'left'} textSize={24} padding={'2px 0px'} textColor='primary'>github.com/grpc/grpc/issues/2786</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Example Project</Heading>
          <Text textAlign={'left'} textSize={36} padding={'5px 0px'} textColor='secondary'>github.com/JacobTheEvans/christmas-cards</Text>
          <Image padding={'20px 0px'} src={ChristmasArch} height={370} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Group Discussion
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>RPC Use</Heading>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>Who has used RPCs before?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>What RPC frameworks did you use?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>How do you feel about RPC as a solution?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>What contexts are you using it in?</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>gRPC Use</Heading>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>Who is using gRPC?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>What contexts are you using it in?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>Who is using gRPC-web?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='primary'>What contexts are you using it in?</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Web Interface Solution</Heading>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>What do you think of using gRPC-web as a frontend solution?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>What do you think of using gRPC as a backend solution?</Text>
          <Text textAlign={'left'} textSize={32} padding={'5px 0px'} textColor='secondary'>What do you think of using gRPC in combination with GraphQL?</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Free Discussion
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='secondary'>
          <Heading size={5} textColor='secondary' caps>Thanks for your time</Heading>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Jacob Evans (@jacobtheevans)
          </Text>
          <Text textAlign={'left'} padding={'20px 0px'} textSize={30} textColor='secondary'>
          Cornelio Hopmann (@chopmann)
          </Text>
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
