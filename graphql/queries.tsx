// lib/queries.ts
import { gql } from '@apollo/client';

export const GET_MEDIA = gql`
  query GetMedia($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
      pageInfo {
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
