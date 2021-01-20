import React from 'react'
import 'antd/dist/antd.css';
import About from "../Component/About"
import { Layout } from 'antd';
import {Link} from "react-router-dom"
const { Header, Footer, Sider, Content,button } = Layout;

function LayerComp() {
  return (
    <>


    <Layout>
      {/* <Sider>Sider</Sider> */}
      <Layout>
        <Header
        style={{
          color:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >
<Link to ="/pay"><button
         style={{
          color:"white",
          height:"50px",
          width:"100px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >Donate</button></Link>
       </Header>
        {/* <Content>Content</Content>
        <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  </>
  )
}

export default LayerComp
