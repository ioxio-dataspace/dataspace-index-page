// @flow

const theme = {
  mixins: {
    flexRowCenter: `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
    flexColumnCenter: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  },
  media: {
    onMobile: "@media (max-width: 1200px)",
  },
}

export default theme
