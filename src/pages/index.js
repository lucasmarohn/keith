import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Title, Container, Section, Hero, Button, Column, Box, Field, Label, Control, Input, Textarea } from 'rbx'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero color="light">
      <Hero.Body>
        <Container align="center" size="small">
          <Title size={1}>Your child deserves the opportunity to experience music through the ears of a musician</Title>
          <Title size={3}>Make your childs time spent at home positive and productive.</Title>
          <Button color="primary" size="large">Get Started</Button>
        </Container>
      </Hero.Body>
    </Hero>

    <Section>
      
      <Container>
        
        <Section><Title size={2} align="center">How this Works</Title></Section>
        <Column.Group gapSize={8}>
          <Column>
              <Title size={3}>1. Free Virtual Consultation</Title>
              <p>We'll sit down for a 30-minute virtual meet and greet where we can discuss your childs needs.</p> 
          </Column>
          <Column>
              <Title size={3}>2. Determine Your Schedule</Title>
              <p>Together we will determine how many days per week and what time works best for all our schedules</p>
          </Column>
          <Column>
              <Title size={3}>3. Free 1 Hour Music Lesson</Title>
              <p>A free lesson provides the opportunity to make sure that your child and I get along and have fun</p>
          </Column>
          <Column>
              <Title size={3}>4. Begin their Musical Journey</Title>
              <p>If you wish to proceed, we continue meeting weekly based on our agreed upon schedule</p>
          </Column>
        </Column.Group>
      </Container>
    </Section>

    <Section>
      <Container>
        <Box>
          <Section>
            <Column.Group gapSize={8}>
              <Column>
                <img src="" />
              </Column>
              <Column>
                <Title>Hey! I'm Keith.</Title>
                <p>I believe music is more than a hobby, it's a fundamental human experience, much like having a child.</p>
                <p>I've been playing guitar and piano for over 20 years, and I've taught at multiple public schools over the last 8 years.</p>
                <p>I've had many mentors over the years, and to this day I'm still as much a student of music as I am a teacher. I'm proud to continue the legacy of helping young musicians find their confidence and grow as individuals.</p>
                <Link to="/#get-started"><Button color="primary" size="medium">Get Started</Button></Link>
              </Column>
              
            </Column.Group>
          </Section>
        </Box>
      </Container>
    </Section>

    <Section>
      <Container>
        <Section>
          <Title size={2}>Music is more than just a hobby</Title>
          <p>It's a fundamental human experience. It's one of the few universally understood and loved passtimes that brings people together.</p>
        </Section>
        <Column.Group gapSize={8}>
          <Column>
            <Title size={3}>A place to fail gracefully</Title>
            <p>Build resilience. Music is not always easy, and you child won't always get it right the first time.</p> 
            <p>Music creates a space for your child to learn how to try again after failing.</p>
          </Column>
          <Column>
            <Title size={3}>Expand their comfort zone</Title>
            <p>Trying something new can be daunting.</p>
            <p>Music provides a wonderful venue for your child to become comfortable learning new things and starting from scratch.</p>
          </Column>
          <Column>
            <Title size={3}>Build Self Confidence</Title>
            <p>Learning to play an instrument is a wonderful skill to learn because it can be shared with others.</p>
            <p>It's like working out, it's accessible enough that other people can understand and appreciate your progress.</p>
          </Column>
          <Column>
            <Title size={3}>Create Strong Bonds</Title>
            <p>Being a musician means being part of a larger community. Being able to connect with other people through music is one of most incredible aspects of playing an instrument.</p>
          </Column>
        </Column.Group>
      </Container>
    </Section>

    <Hero color="link" id="get-started">
      <Hero.Body>
        <Container>
          <Column.Group gapSize={8}>
          <Column>
            <Title size={2}>Ready to get Started?</Title>
            <p>Perhaps you never learned an instrument, and regret that you didn't learn to play when you were younger. Or perhaps you are a musician yourself, and you want to share the magic of music with your child.</p>
            
            <p>Either way, music is a great way to:</p>
            <ul>
              <li>Enrich their life experience</li>
              <li>Build resilience by overcoming challenges</li>
              <li>Create meaningful connections with other people</li>
              <li>Flex their critical thinking and comprehension skills</li>
            </ul>

            <p>I'd love to be part of your childs growth, and help them master a craft that will provide them joy, fullfillment, and a sense of community for the rest of their life.</p>

          </Column>
          <Column>
            <Box>
              <Title size={4} style={{color: 'inherit'}}>Set up a virtual consultation</Title>
              <form name="consultation" method="POST" data-netlify="true">
                <Field>
                  <Label>Name</Label>
                  <Control>
                    <Input name="name" size="medium" placeholder="Your Name" />
                  </Control>
                </Field>

                <Field>
                  <Label>Email</Label>
                  <Control>
                    <Input name="email" size="medium" type="email" placeholder="Your Email" />
                  </Control>
                </Field>

                <Field>
                  <Label>Phone</Label>
                  <Control>
                    <Input name="phone" size="medium" placeholder="Your Phone Number" />
                  </Control>
                </Field>

                <Field>
                  <Label>Message</Label>
                  <Control>
                    <Textarea size="medium" placeholder="Optional Message" />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Button type="submit" color="primary" size="medium">Schedule a Virtual Consultation</Button>
                  </Control>
                </Field>
              </form>
            </Box>
          </Column>
          </Column.Group>
        </Container>
      </Hero.Body>
    </Hero>
    <Hero color="light">
      <Hero.Body align="center">
        <Container style={{maxWidth: 700}}>
          <Title size={3}>On the fence?</Title>
          <p>Want to share the joy of music with your child, but aren't sure if you'd like to schedule a consultation? Enter your email to download a free complementary video lesson.</p>
          <form name="newsletter" method="POST" data-netlify="true">
          <Field kind="addons" >
            <Control expanded>
              <Input name="email" size="medium" type="email" placeholder="Your Email" />
            </Control>
            <Control>
              <Button size="medium" color="link" type="submit">Send me a free video lesson</Button>
            </Control>
          </Field>
          </form>
        </Container>
      </Hero.Body>
    </Hero>
  </Layout>
)

export default IndexPage
