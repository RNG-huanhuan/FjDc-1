import React,{ useState } from 'react';
import { Card,Button } from 'antd'
import './style.less'

//解构出按钮组
  const ButtonGroup = Button.Group;
interface IButtonProps {
}

const ButtonPage: React.FunctionComponent<IButtonProps> = (props) => {

  //判断按钮加载状态
  const [ btn_loading,setLoading ] = useState<boolean>(true); 

  //判断按钮尺寸
  const [ btn_size,setSize] = useState<'large'|'small'|'default'|undefined>('default')

  return <div className="ButtonPage">
      <Card title="基础按钮">
        <div className="card_content">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        </div>
      </Card>
      <Card title="图标按钮">
        <div className="card_content">
        <Button type="primary" icon="github">不良帅</Button>
        <Button icon="chrome">不良帅</Button>
        <Button type="dashed" icon="wechat">不良帅</Button>
        <Button type="danger" icon="alipay-circle">不良帅</Button>
        <Button type="link" icon="zhihu">不良帅</Button>
        </div>
      </Card>
      <Card title="加载按钮">
        <div className="card_content">
        <Button type="primary" loading={btn_loading}>带loading的按钮</Button>
        <Button loading={btn_loading}>带loading的按钮</Button>
        <Button type="dashed" loading={btn_loading}>带loading的按钮</Button>
        <Button type="danger" loading={btn_loading}>带loading的按钮</Button>
        <Button type="link" loading={btn_loading}>带loading的按钮</Button>
        <Button type="link" onClick={()=>{setLoading(!btn_loading)}}>切换按钮状态</Button>
        </div>
      </Card>
      <Card title="按钮组">
        <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        </ButtonGroup>
      </Card>
      <Card title="按钮尺寸">
        <ButtonGroup>
        <Button size={btn_size} onClick={()=>{setSize('large')}}>large</Button>
        <Button size={btn_size} onClick={()=>{setSize('small')}}>small</Button>
        <Button size={btn_size} onClick={()=>{setSize('default')}}>default</Button>
        </ButtonGroup>
      </Card>
  </div>
  ;
};

export default ButtonPage;