import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar2.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl font-montserrat lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans font: focus text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
            Laptop Soup
        </BigTitle>
        <Subtitle> We collect unwanted laptops and gadgets and distribute them to those from disadvantaged backgrounds who are learning to code. </Subtitle>
      </Hero>
      <Projects offset={1}>
      <BigTitle>
        Get Involved
      </BigTitle>
        <ProjectsWrapper>
          <ProjectCard
            title="Donate"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #63F 100%, #E9AFA3 0%)"
          >
            Find out how you can donate spare and unwanted devices..
          </ProjectCard>
          <ProjectCard
            title="Apply"
            link="https://goo.gl/forms/CON86eAHAreAygdN2"
            bg="linear-gradient(to right, #63F 100%, #ED1E79 0%)"
          >
            If you would like to make an application for a device, please complete our quick and simple application form.
          </ProjectCard>
          <ProjectCard
            title="Success Stories"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #63F 100%, #FCEE21 0%)"
          >
           Want to see some positive impact?!
          </ProjectCard>
          <ProjectCard
            title="Newsletter"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #256EFF 100%, #3A405A 0%)"
          >
            To keep up to date with all of the latest news and devices
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
      <BigTitle>
        Supporters
      </BigTitle>
      <Title> Thanks for your continuous generosity</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Bruntwood" />
          <AboutSub>
            "The office has recently gone through a refurbishment and we wanted to help re-cycle our unwanted laptops and given to a good cause."
          </AboutSub>
        </AboutHero>

        <AboutHero>
          <Avatar src={avatar} alt="Bruntwood" />
          <AboutSub>
            "The office has recently gone through a refurbishment and we wanted to help re-cycle our unwanted laptops and given to a good cause."
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <BigTitle>Get in touch</BigTitle>
          <ContactText>
            Say <a href="mailto:hellolaptopsoup@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Made with love by {' '} <a href="https://twitter.com/kirstydevlin1">Kirsty Devlin</a> & {' '}
         Shauna Devlin
          <a href=""></a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
