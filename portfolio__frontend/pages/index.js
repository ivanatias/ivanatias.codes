import React from 'react'
import MainSection from '@/components/layout/Section'
import { AnimatedArticle } from '@/components/layout/Article'
import { H2Title } from '@/components/layout/Title'
import Paragraph from '@/components/layout/Paragraph'
import LinkButton from '@/components/LinkButton'
import BiographyItem from '@/components/BiographyItem'
import Skill from '@/components/Skill'
import Social from '@/components/Social'
import { client } from '@/sanity/client'
import { biographyQuery } from '@/constants/queries'
import { skills } from '@/constants/skills'

const Home = ({ biography }) => (
  <MainSection>
    <AnimatedArticle delay={0.1}>
      <H2Title>Work</H2Title>
      <Paragraph>
        I&apos;m a Front-end Engineer and UI Designer who enjoys a lot building
        and designing good looking and functional websites and apps. These days,
        most of my work revolves around technologies such as React.js, Next.js,
        Gatsby.js and recently, React Native. I&apos;m also comfortable using
        CSS technologies such as Sass, Bootstrap, Material UI and TailwindCSS.
        For my designs, Figma is my predilect design and prototyping tool.
      </Paragraph>
      <LinkButton path='/works'>My portfolio</LinkButton>
    </AnimatedArticle>

    <AnimatedArticle delay={0.3}>
      <H2Title>Skills</H2Title>
      <Paragraph>
        These are some of the technologies and tools I&apos;m comfortable with:
      </Paragraph>
      <div className='flex flex-wrap items-center justify-center w-full gap-4 sm:justify-start md:gap-6'>
        {skills.map((skill) => (
          <Skill key={skill.skillText} {...skill} />
        ))}
      </div>
    </AnimatedArticle>

    <AnimatedArticle delay={0.5}>
      <H2Title>Biography</H2Title>
      {biography.map((item) => (
        <BiographyItem
          key={item._id}
          year={item.year}
          desc={item.description}
        />
      ))}
    </AnimatedArticle>

    <AnimatedArticle delay={0.7}>
      <H2Title>My personal blog</H2Title>
      <Paragraph>
        A space for sharing and expanding knowledge. I write about a wide
        variety of topics related to technology in this section, expressing my
        personal opinions on subjects such as web development, web performance,
        user interface design, and other miscellaneous ones. The aim of this
        blog is to document my journey as a Front-end Engineer and UI Designer
        one article at a time.
      </Paragraph>
      <LinkButton path='/blog'>See blog</LinkButton>
    </AnimatedArticle>

    <AnimatedArticle delay={0.9}>
      <H2Title>Find me online</H2Title>
      <Paragraph>You can also check my online presence:</Paragraph>
      <Social />
    </AnimatedArticle>
  </MainSection>
)

export async function getStaticProps() {
  const bioInfo = biographyQuery()
  const biography = await client.fetch(bioInfo)

  return {
    props: {
      biography
    }
  }
}

export default Home
