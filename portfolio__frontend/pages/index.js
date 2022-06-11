import {
  MainSection,
  Article,
  Paragraph,
  LinkButton,
  Biography,
} from "../components";
import { BioYear, BioDescription } from "../components/Biography";
import { client } from "../sanity/client";
import { biographyQuery } from "../constants/queries";
import { socialLinks } from "../constants/socialLinks";

const Home = ({ biography }) => {
  return (
    <MainSection>
      <Article title="Work" delay={0.1}>
        <Paragraph textIndent="indent-4">
          I&apos;m a Frontend Developer and UI Designer that enjoys a lot
          building and designing good looking and functional websites and apps.
          These days, most of my work revolves around technologies such as
          React, NextJS, GatsbyJS and recently, React Native. Also using CSS
          technologies like Sass, Bootstrap, Material UI, TailwindCSS, etc.
          <br />
          <br />
          For my designs, Figma is my predilect design and prototyping tool.
        </Paragraph>
        <LinkButton>My portfolio</LinkButton>
      </Article>

      <Article title="Biography" delay={0.3}>
        {biography.map((item) => (
          <Biography key={item._id}>
            <BioYear>{item.year}</BioYear>
            <BioDescription>{item.description}</BioDescription>
          </Biography>
        ))}
      </Article>

      <Article title="I ❤️" delay={0.5}>
        <Paragraph>
          Playing guitar, watching Netflix, burgers, spending time with friends
          and coding.
        </Paragraph>
      </Article>

      <Article title="Find me online" delay={0.7}>
        <Paragraph>You can also check my online presence:</Paragraph>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              className="text-pink-800 dark:text-pink-600 text-2xl"
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Article>
    </MainSection>
  );
};

export async function getStaticProps() {
  const bioInfo = biographyQuery();
  const biography = await client.fetch(bioInfo);

  return {
    props: {
      biography,
    },
  };
}

export default Home;
