import { gql } from "@apollo/client";
import { get_menus, LOneFragment } from "./NavMenu";

const common = `
  id
  uri
  slug
  databaseId
  title(format: RENDERED)
  content(format: RENDERED)
  template {
    templateName
  }
  redirect{
    redirectStatus
    redirectTo
  }
  likeArchive {
    isArchive
  }
`;
const authorData = `
author {
                node {
                  id
                  url
                  uri
                  name
                  avatar {
                    url
                  }
                }
              }`;
const comments = `
commentCount
comments (first:100,where: {orderby: COMMENT_DATE}){
  nodes {
    id
    date
    dateGmt
    databaseId
    content(format: RENDERED)
    author {
                node {
                  id
                  url
                  name
                  avatar {
                    url
                  }
                }
              }
  }
}`;
const seo = `seo {
          focuskw
          fullHead
        }`;
const categories = `categories(first: 10) {
        nodes {
          id
          slug
          uri
          name
          children(first: 5) {
            edges {
              node {
                id
              }
            }
          }
          posts(last: 2) {
            nodes {
              id
              title(format: RENDERED)
              uri
            }
          }
        }
      }`;
const genQuery = `
      ${common}
      author {
        node {
          id
          uri
          name
          avatar {
            url
          }
        }
      }
      seo {
        focuskw
        fullHead
      }
`;

export const SINGLE_FAQ = gql`
  query FAQs($id: ID = "") {
    fAQ(id: $id, idType: SLUG) {
      ${genQuery}
    }
    ${get_menus}
  }
  ${LOneFragment}
`;
export const SINGLE_BLOGPAGE = gql`
  query BlogPage($id: ID = "703") {
    page(id: $id, idType: DATABASE_ID) {
      ${genQuery}
    }
    ${get_menus}
  }
  ${LOneFragment}
`;
export const SINGLE_TIMELINE = gql`
  query TimeLine($id: ID = "") {
    timeline(id: $id, idType: SLUG) {
      ${genQuery}
    }
    ${get_menus}
  }
  ${LOneFragment}
`;

export const SINGLE = gql`
  query Singles(
    $uri: String = "/"
  ) {
    nodeByUri(uri: $uri) {
      id
      ... on Page {        
        ${common}
        allCmbMeta {
                heading
                padding{
                  top
                  bottom
                }
              }
        excerpt(format: RENDERED)
        children(first: 100) {
          nodes {
            ... on Page {              
              id
              uri
              slug
              databaseId
              title(format: RENDERED)              
              excerpt(format: RENDERED)
              videoLink {
              videoLink
            }
              ${authorData}
            }
          }
        }
        ${seo}
      }
      ... on Post {
        postStyles {
        undeline
        commenting
      }       
        ${common}
        ${categories}
        ${authorData}
        ${comments}
        ${seo}
        
      }
      ... on Timeline {
      ${common}
      ${authorData}
      ${seo}
    }
    ... on FAQ {
      ${common}
      ${authorData}
      ${seo}
    }
  }
  ${get_menus}
  }
  
`;
