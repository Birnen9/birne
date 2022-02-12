import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to 詹毅的网站 !</h1>
      <Link to="/about">来吧</Link>
      <p>才开始做的网站</p>
    </main>
  )
}

export default IndexPage