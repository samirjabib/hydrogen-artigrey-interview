//making types for blogs from scratch beacuse the store api generator wrong bad with this query

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
};

type Articles = {
  edges: Array<{
    node: {
      id: string;
      title: string;
      handle: string;
      image: {
        altText: string;
        src: string;
      };
      tags: string[];
      publishedAt: string;
    };
  }>;
};

type Seo = {
  title: string;
  description: string;
};

type Edges = {
  cursor: string;
  node: {
    id: string;
    handle: string;
    title: string;
    articles: Articles;
    seo?: Seo;
  };
};

export type BlogsQuery = {
  blogs: {
    pageInfo: PageInfo;
    edges: Array<Edges>;
  };
};

export const GET_BLOGS_QUERY = `
  query GetBlogs(
    $first: Int = 10
    $sortKey: BlogSortKeys = ID
    $reverse: Boolean = false
    $after: String
  ) {
    blogs(first: $first, sortKey: $sortKey, reverse: $reverse, after: $after) {
      edges {
        cursor
        node {
          id
          handle
        
          title
          articles(first: 5) {
            edges {
              node {
                id
                title
                handle
                tags
                image {
                  src
                  altText
                }
                publishedAt
                
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
` as const;
