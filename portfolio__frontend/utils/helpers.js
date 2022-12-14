const dateFormat = (date) => {
  return new Date(date).toDateString()
}

const readingTimeFormat = (readingTime) => {
  const readingTimeText =
    readingTime > 1
      ? `${readingTime} minutes read`
      : `${readingTime} minute read`

  return readingTimeText
}

const calculateIconTransition = (position, multiplicator) => {
  return `top 0.2s ${position * multiplicator}ms, left 0.2s ${
    position * multiplicator
  }ms, opacity 0.2s ${position * multiplicator}ms`
}

const calculateIconLeftPosition = (position, multiplicator) => {
  return `calc(${
    (-1) ** position * Math.ceil(position / 2) * multiplicator
  }px + 6px)`
}

export {
  dateFormat,
  readingTimeFormat,
  calculateIconTransition,
  calculateIconLeftPosition
}
