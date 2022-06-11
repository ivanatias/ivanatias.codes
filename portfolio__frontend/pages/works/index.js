import React from "react";
import { MainSection, Article, Paragraph, Grid } from "../../components";
import { worksQuery } from "../../constants/queries";
import { client } from "../../sanity/client";

const Works = ({ works }) => {
  return (
    <MainSection title="Works">
      <Article title="Works" delay={0.1}>
        <Paragraph>
          These are some of my favorite projects that I have built, each one of
          them taught me different things through out their development process.
        </Paragraph>
      </Article>
      <Grid data={works} />
    </MainSection>
  );
};

export async function getStaticProps() {
  const worksInfo = worksQuery();
  const works = await client.fetch(worksInfo);

  return {
    props: {
      works,
    },
  };
}

export default Works;
