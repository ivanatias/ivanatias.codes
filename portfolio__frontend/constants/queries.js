export const biographyQuery = () => {
  const query = `*[_type == "biography"] | order(_createdAt asc) {
    _id,
    year,
    description
  }`;

  return query;
};

export const worksQuery = () => {
  const query = `*[_type == "work"] | order(_createdAt asc) {
    _id,
    title,
    overview,
    slug,
    thumbNail  {
    asset -> {
    url
  }
  }
  }`;

  return query;
};

export const workQuery = (slug) => {
  const query = `*[_type == "work" && slug.current == "${slug}"] {
    _id,
    title,
    projectUrl,
    githubUrl,
    description,
    thumbNail  {
    asset -> {
    url
  }
  },
  stack[] {
    ... {
      tech,
      _key
    }
  },
  additionalImages[] {
    ... {
    asset -> {
    url,
    _id  
       }
    }
   }
  
  
  }`;

  return query;
};
