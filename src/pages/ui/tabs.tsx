import React,{ useState } from 'react';
import { Card,Tabs,Icon, message } from 'antd';
const { TabPane } = Tabs;
interface ITabsPageProps {
}

const TabsPage: React.FunctionComponent<ITabsPageProps> = (props) => {
  const [ targetKey,setTargetKey ] = useState(1);
  const [ tabPane,setTabPane ] = useState([
      {
        title:"题目1",
        content:"好好学习 天天向上",
        key:'1'
      },
      {
        title:"题目2",
        content:"致我们终将逝去的青春",
        key:'2'
      },
      {
        title:"题目3",
        content:"没有什么是不劳而获的",
        key:'3'
      }
]);

  let addPane = () => {
    const targetkey = new Date().toString();
    tabPane.push({
        title:'new tab',
        content:'this is content message',
        key:targetkey
    })
    setTabPane(tabPane.slice());
  }
  let deletePane = (targetKey:any) => {
    let newPane;
    if(tabPane.length <=1){
        message.info('别点啦 只剩一个啦');
    }
     newPane = tabPane.filter(pane=>{
        return pane.key !== targetKey;
    })
    setTabPane(newPane);
  }
  return <div className="TabsPage">
      <Card title="Tab页签">
        <Tabs defaultActiveKey='1'>
            <TabPane tab={'tab1'} key='1'>不忘初心 自律</TabPane>
            <TabPane tab={'tab2'} key='2'>不忘初心 坚持</TabPane>
            <TabPane tab={'tab3'} key='3'>不忘初心 努力</TabPane>
        </Tabs>
      </Card>
      <Card title="带图的页签">
        <Tabs defaultActiveKey='1'>
            <TabPane tab={<span><Icon type="caret-left"/>tab1</span>} key='1'>遇到优秀的人 自律</TabPane>
            <TabPane tab={<span><Icon type="caret-right"/>tab2</span>} key='2'>遇到优秀的人 坚持</TabPane>
            <TabPane tab={<span><Icon type="vertical-right"/>tab3</span>} key='3'>遇到优秀的人 努力</TabPane>
        </Tabs>
      </Card>
      <Card title="可编辑的页签">
        <Tabs defaultActiveKey='1' type="editable-card" tabPosition="left"
            onEdit={(targetKey,action)=>{
                if( action == 'add'){
                    addPane();
                }
                if( action == 'remove'){
                    deletePane(targetKey);
                }
            }}
        >
            {
                tabPane.map(item=>{
                    return <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                })
            }
        </Tabs>
      </Card>
  </div>;
};

export default TabsPage;
