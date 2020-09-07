import * as React from 'react';
import styled from 'styled-components';
import toArray from 'rc-util/lib/Children/toArray';

export interface BreadcrumbsProps {
  separator?: '/' | '|' | '>';
  className?: string;
  style?: React.CSSProperties;
}

const Nav = styled('nav')`
  display: block;
`;

const Ol = styled('ol')`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ separator = '/', children, ...rest }) => {
  const crumbs = toArray(children).map((element, index) => {
    return React.cloneElement(element, {
      separator,
      key: index,
      ...rest,
    });
  });

  return (
    <Nav>
      <Ol {...rest}> {crumbs} </Ol>
    </Nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
