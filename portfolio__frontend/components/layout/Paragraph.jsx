const Paragraph = ({ children, pClass, semibold, underlined, centered }) => (
  <p
    className={`${pClass ?? 'normal-paragraph'} ${
      semibold ? 'font-semibold' : ''
    } ${underlined ? 'underline' : ''} ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

export default Paragraph
