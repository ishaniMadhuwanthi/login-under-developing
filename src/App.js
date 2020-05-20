import React from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>    
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>


  );
}

export default App;
