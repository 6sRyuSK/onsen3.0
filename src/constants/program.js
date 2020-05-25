import gql from 'graphql-tag'

export const ALL_PROGRAM = gql`
  query {
    programs {
      url
      title
      thumbnailPath
      moviePath
      personality
      update
      schedule
      copyright
      count
    }
  }
  `
