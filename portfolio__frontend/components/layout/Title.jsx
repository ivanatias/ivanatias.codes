const Title = ({ children, titleClass, semibold, titleTag }) => {
  const TitleTag = titleTag ?? 'h1'

  return (
    <TitleTag
      className={`${titleClass ?? 'xl-title'} ${
        semibold ? 'font-semibold' : 'font-bold'
      }`}
    >
      {children}
    </TitleTag>
  )
}

export default Title
