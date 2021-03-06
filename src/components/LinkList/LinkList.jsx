import React from 'react';
import Link from '../Link/Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  //   const linksToRender = [
  //     {
  //       id: 'link-id-1',
  //       description: 'Prisma gives you a powerful database toolkit 😎',
  //       url: 'https://prisma.io',
  //     },
  //     {
  //       id: 'link-id-2',
  //       description: 'The best GraphQL client',
  //       url: 'https://www.apollographql.com/docs/react/',
  //     },
  //   ];
  const { data, loading, error } = useQuery(FEED_QUERY);

  return (
    <div>
      {/* {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))} */}
      {loading && <span>Loading items!</span>}
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
