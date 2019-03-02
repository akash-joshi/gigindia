import styled from "styled-components";
import React from 'react';
import Head from "next/head";

const Link = styled.a`
  margin-right: 15
`;

const HeaderWrapper = styled.div`
margin: 40px;
  display: flex;
  justify-content: space-around;
`;

const Header = () => (
  <HeaderWrapper>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GigIndia</title>
      <link href="/static/min.css" rel="stylesheet" />
    </Head>
    <Link href="/">Home</Link>
    <div>
      <Link href="/student">Student</Link>
      &nbsp;&nbsp;| &nbsp;&nbsp;
      <Link href="/bussiness">Bussiness</Link>
    </div>
  </HeaderWrapper>
);

export default Header;
