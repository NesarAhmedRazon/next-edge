import { gql } from "@apollo/client";

export const menuNodeL3 = `

  nodes {
    id
      uri
      path
      label
      title
      target
      cssClasses
      description      
  }

`;
export const menuNodeL2 = `

  nodes {
    id
      uri
      path
      label
      title
      target
      cssClasses
      description
      childItems(where: {parentId: "2"}) {
        ${menuNodeL3}
      }
  }

`;
export const menuNodeL1 = `
  nodes {
    id
      uri
      path
      label
      title
      target
      cssClasses
      description
      childItems(where: {parentId: "1"}) {
        ${menuNodeL2}
      }
  }
`;

export const lThreeFragment = `
fragment MenuItemToMenuItemConnectionFragment1 on MenuItemToMenuItemConnection {
  edges {
    node {
      id
      uri
      url
      path
      label
      title
      target
      cssClasses
      description
    }
  }
}
`;
export const LTwoFragment = `fragment MenuItemToMenuItemConnectionFragment on MenuItemToMenuItemConnection {
  edges {
    node {
      id
      uri
      url
      path
      label
      title
      target
      cssClasses
      description
      childItems(where: {parentId: "2"}) {
        ...MenuItemToMenuItemConnectionFragment1
      }
    }
  }
} ${lThreeFragment}`;

export const LOneFragment = `
fragment MenuToMenuItemConnectionFragment on MenuToMenuItemConnection {
  edges {
    node {
      id
      uri
      path
      label
      title
      target
      cssClasses
      description
      childItems(where: {parentId: "1"}) {
        ...MenuItemToMenuItemConnectionFragment
      }
    }
  }
}
${LTwoFragment}
`;

export const ALLNAVS = gql`
  query MainNav {
    menus(first: 10) {      
      nodes {
        id
        name
        slug
        menuItems(where: { parentId: "0" }) {
          ${menuNodeL1}
        }
      }
    }
  }
  ${LOneFragment}
`;
export const MenuItemData = `fragment RootQueryToMenuConnectionFragment on RootQueryToMenuConnection {
  nodes {
    id
    name
    slug
    menuItems {
      nodes {
        id
        path
        label
        target
        cssClasses
        description
        childItems {
          nodes {
            id
            path
            label
            target
            cssClasses
            description
            childItems {
              nodes {
                id
                path
                label
                target
                cssClasses
                description
              }
            }
          }
        }
      }
    }
  }
}`;

export const get_menus = `
  menus(first: 10) {      
      nodes {
        id
        name
        slug
        menuItems(where: { parentId: "0" }) {
          ${menuNodeL1}
        }
      }
    }    
  `;
