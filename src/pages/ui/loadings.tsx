import React,{ useState } from 'react';
import { Card,Spin,Alert,Switch,Icon } from 'antd';
interface ILoadingPageProps {
}

const LoadingPage: React.FunctionComponent<ILoadingPageProps> = (props) => {

    const [ spinState,setSpin ] = useState<boolean>(false);

  return <div className="LoadingPage">
      <Card title="Spin展示">
        <Spin size="small"/>
        <Spin size="default"/>
        <Spin size="large"/>
        <Spin indicator={<Icon type="loading"/>}/>
      </Card>

      <Card title={ <span>Spin加载设置<Switch checked={spinState} onChange={(checked:boolean)=>{setSpin(checked)}}/></span>}>
        <Spin tip="正在加载" spinning={spinState}>
        <Alert type="success" message="alert message Title" description="不要假装努力,结果不会陪你演戏"/>
        </Spin>
        <Spin tip="正在加载" spinning={spinState}>
        <Alert type="warning" message="alert message Title" description="不要假装努力,结果不会陪你演戏"/>
        </Spin>
        <Spin tip="正在加载" spinning={spinState}>
        <Alert type="error" message="alert message Title" description="不要假装努力,结果不会陪你演戏"/>
        </Spin>
        <Spin tip="正在加载" spinning={spinState}>
        <Alert type="info" message="alert message Title" description="不要假装努力,结果不会陪你演戏"/>
        </Spin>
      </Card>
  </div>;
};

export default LoadingPage;
