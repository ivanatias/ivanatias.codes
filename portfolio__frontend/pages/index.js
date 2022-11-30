import React from 'react'
import MainSection from '@/components/layout/Section'
import { AnimatedArticle } from '@/components/layout/Article'
import { LargeTitle } from '@/components/layout/Title'
import Paragraph from '@/components/layout/Paragraph'
import LinkButton from '@/components/LinkButton'
import BiographyItem from '@/components/BiographyItem'
import Skill from '@/components/Skill'
import Social from '@/components/Social'
import { client } from '@/sanity/client'
import { biographyQuery } from '@/constants/queries'

const Home = ({ biography }) => {
  return (
    <MainSection>
      <AnimatedArticle delay={0.1}>
        <LargeTitle titleTag='h2'>Work</LargeTitle>
        <Paragraph>
          I&apos;m a Front-End Engineer and UI Designer that enjoys a lot
          building and designing good looking and functional websites and apps.
          These days, most of my work revolves around technologies such as
          React.js, Next.js, Gatsby.js and recently, React Native. I&apos;m also
          comfortable using CSS technologies such as Sass, Bootstrap, Material
          UI, TailwindCSS, etc.
          <br />
          <br />
          For my designs, Figma is my predilect design and prototyping tool.
        </Paragraph>
        <LinkButton path='/works'>My portfolio</LinkButton>
      </AnimatedArticle>

      <AnimatedArticle delay={0.3}>
        <LargeTitle titleTag='h2'>Skills</LargeTitle>
        <Paragraph>
          These are some of the technologies and tools I&apos;m comfortable
          with:
        </Paragraph>
        <div className='flex flex-wrap items-center justify-center w-full gap-4 sm:justify-start md:gap-6'>
          <Skill skillImage='/images/reactjs.svg' skillText='React.js' />
          <Skill skillImage='/images/nextjs.svg' skillText='Next.js' />
          <Skill skillImage='/images/gatsbyjs.svg' skillText='Gatsby.js' />
          <Skill skillImage='/images/javascript.svg' skillText='JavaScript' />
          <Skill skillImage='/images/typescript.svg' skillText='TypeScript' />
          <Skill skillImage='/images/nodejs.svg' skillText='Node.js' />
          <Skill skillImage='/images/mongodb.svg' skillText='MongoDB' />
          <Skill skillImage='/images/css.svg' skillText='CSS' />
          <Skill skillImage='/images/html.svg' skillText='HTML' />
          <Skill skillImage='/images/sass.svg' skillText='Sass' />
          <Skill skillImage='/images/tailwindcss.svg' skillText='TailwindCSS' />
          <Skill skillImage='/images/materialui.svg' skillText='Material UI' />
          <Skill skillImage='/images/bootstrap.svg' skillText='Bootstrap' />
          <Skill skillImage='/images/git.svg' skillText='Git' />
          <Skill skillImage='/images/figma.svg' skillText='Figma' />
        </div>
      </AnimatedArticle>

      <AnimatedArticle delay={0.5}>
        <LargeTitle titleTag='h2'>Biography</LargeTitle>
        {biography.map((item) => (
          <BiographyItem
            key={item._id}
            year={item.year}
            desc={item.description}
          />
        ))}
      </AnimatedArticle>

      <AnimatedArticle delay={0.7}>
        <LargeTitle titleTag='h2'>My personal blog</LargeTitle>
        <Paragraph>
          A space for sharing and expanding knowledge. I write about a wide
          variety of topics related to technology in this section, expressing my
          personal opinions on subjects such as web development, web
          performance, user interface design, and other miscellaneous ones. The
          aim of this blog is to document my journey as a Front-End Engineer and
          UI Designer one article at a time.
        </Paragraph>
        <LinkButton path='/blog'>See blog</LinkButton>
      </AnimatedArticle>

      <AnimatedArticle delay={0.9}>
        <LargeTitle titleTag='h2'>Find me online</LargeTitle>
        <Paragraph>You can also check my online presence:</Paragraph>
        <Social />
      </AnimatedArticle>
    </MainSection>
  )
}

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
