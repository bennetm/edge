import './App.css';
import {SearchOutlined ,UserOutlined} from '@ant-design/icons';
import { Layout,Button } from 'antd';
import React from 'react';

import Dashboard from './dashboard/dashboard.js'
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <div>
      <Layout>
        <Header>
          <h2>Edge Dashboard</h2>
          <div className="searchTop">
            <input type="text" />
          </div><SearchOutlined  />
          
          <Button shape="circle" icon={<UserOutlined />} />
         
        </Header>
        <Content>
          <Dashboard />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
