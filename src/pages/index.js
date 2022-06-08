import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/page.scss'
const IndexPage = () => {
  return (
    <main className='main'>
        <Header></Header>
        <main className='middleMain'>中间内容</main>
        <Footer></Footer>
    </main>
  );
};

export default IndexPage;
