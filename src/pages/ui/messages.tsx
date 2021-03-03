import * as React from 'react';
import { Card,message,Button } from 'antd';
interface IMessagePageProps {
}

const MessagePage: React.FunctionComponent<IMessagePageProps> = (props) => {
  let handleOpen = (type:'success'|'info'|'warning'|'error') => {
    message[type](`来自${type}的提示信息`)
  }
  return <div className="MessagePage">
      <Card>
      <div className="card_content">
          <Button style={{background:'#52C41A',color:'#fff'}} onClick={()=>{handleOpen('success')}}>Success</Button>
          <Button type="primary" onClick={()=>{handleOpen('info')}}>Info</Button>
          <Button onClick={()=>{handleOpen('warning')}}>Warning</Button>
          <Button type="danger" onClick={()=>{handleOpen('error')}}>Error</Button>
      </div>
      </Card>
  </div>;
};

export default MessagePage;
