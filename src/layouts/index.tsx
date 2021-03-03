import * as React from 'react';
import { Layout } from 'antd'

import NavLeft from '@/component/NavLeft'
import NavHeader from '@/component/NavHeader'
import './loading.less'
//@ ./src
const { Sider,Header,Content,Footer } = Layout;
//const Sider = Layout.Sider
interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
            <Sider style={{height: '100vh'}} 
                    width={200}
                    collapsedWidth={0}
                    breakpoint={"lg"}
            >
                <NavLeft/>
            </Sider>
            {/* 根据路由加载的页面 /home */}
            <Content style={{maxHeight:'100vh',overflow:'scroll'}}>
                <NavHeader/>
                <Content style={{minHeight:'60vh',border:'1px solid #000'}}>
                    {props.children}
                </Content>
               
                <Footer style={{textAlign:'center',background:'#ccc'}}>建议使用 Chrome 打开 &copy;2021 Feng Jun | Bu Liang Shuai</Footer>
            </Content>
        </Layout>
  ;
};

export default _layout;

