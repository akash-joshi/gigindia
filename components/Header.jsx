import styled from 'styled-components'
import Head from 'next/head';

const Link = styled.a`
marginRight: 15;
`
const headerStyle = {
  margin: 40,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const Header = () => (
  <div style={headerStyle}>
    <Head>
      <title>GigIndia</title>
      <link href="/static/min.css" rel="stylesheet" />
    </Head>
    <Link href="/">
      Home
        </Link>
    <Link href="/about">
      About
        </Link>

  </div>
)

export default Header