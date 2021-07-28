function flexRowCenter () {
  return `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `
}

function flexColumnCenter () {
  return `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
}

function onMobile (style) {
  return `
    @media (max-width: 1200px) {
      ${style}
    }
  `
}

export { flexRowCenter, flexColumnCenter, onMobile }
