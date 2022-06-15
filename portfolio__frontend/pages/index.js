import {
  MainSection,
  Article,
  Paragraph,
  LinkButton,
  BiographyItem,
  Skill,
} from "../components";
import { client } from "../sanity/client";
import { biographyQuery } from "../constants/queries";
import { socialLinks } from "../constants/socialLinks";

const Home = ({ biography }) => {
  return (
    <MainSection>
      <Article title="Work" delay={0.1}>
        <Paragraph>
          I&apos;m a Frontend Developer and UI Designer that enjoys a lot
          building and designing good looking and functional websites and apps.
          These days, most of my work revolves around technologies such as
          React.js, Next.js, Gatsby.js and recently, React Native. I&apos;m also
          comfortable using CSS technologies such as Sass, Bootstrap, Material
          UI, TailwindCSS, etc.
          <br />
          <br />
          For my designs, Figma is my predilect design and prototyping tool.
        </Paragraph>
        <LinkButton>My portfolio</LinkButton>
      </Article>

      <Article title="Skills" delay={0.3}>
        <Paragraph>
          These are some of the technologies and tools I&apos;m comfortable
          with:
        </Paragraph>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:justify-start md:gap-6">
          <Skill skillImage="/images/reactjs.svg" skillText="React.js" />
          <Skill skillImage="/images/nextjs.svg" skillText="Next.js" />
          <Skill skillImage="/images/gatsbyjs.svg" skillText="Gatsby.js" />
          <Skill skillImage="/images/javascript.svg" skillText="Javascript" />
          <Skill skillImage="/images/css.svg" skillText="CSS" />
          <Skill skillImage="/images/html.svg" skillText="HTML" />
          <Skill skillImage="/images/sass.svg" skillText="Sass" />
          <Skill skillImage="/images/tailwindcss.svg" skillText="TailwindCSS" />
          <Skill skillImage="/images/materialui.svg" skillText="Material UI" />
          <Skill skillImage="/images/bootstrap.svg" skillText="Bootstrap" />
          <Skill skillImage="/images/git.svg" skillText="Git" />
          <Skill skillImage="/images/figma.svg" skillText="Figma" />
        </div>
      </Article>

      <Article title="Biography" delay={0.5}>
        {biography.map((item) => (
          <BiographyItem
            key={item._id}
            year={item.year}
            desc={item.description}
          />
        ))}
      </Article>

      <Article title="Find me online" delay={0.7}>
        <Paragraph>You can also check my online presence:</Paragraph>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              className="text-2xl text-pink-800 dark:text-pink-600"
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
