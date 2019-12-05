import React from 'react';
import { useRoutes } from 'raviger';

export const routes = {
  '/': () => <p>Home</p>,
  '/about': () => <p>About</p>,
  '/products/:id': ({ id }) => <p>The id is {id}</p>
};

export default () => {
  // This will run on each request
  const routeResult = useRoutes(routes);
  return routeResult;
};
