import * as React from 'react';
import { Card,Button,notification} from 'antd';
import { IconType, NotificationPlacement } from 'antd/lib/notification';
import './style.less';
interface INotifyPageProps {
}

const NotifyPage: React.FunctionComponent<INotifyPageProps> = (props) => {
  let notifyOpen = (type:IconType) => {
      notification[type]({
          message:"notification title"
      })
  }
  let notifyPlaceOpen = (type:IconType,placement:NotificationPlacement) => {
      notification[type]({
          message:"notification title",
          placement
      })
  }
  return <div className="NotifyPage">
      <Card title="不带位置的通知">
      <div className="card_content">
          <Button onClick={()=>{notifyOpen('success')}} style={{background:"#52C41A",color:"#fff"}}>Success</Button>
          <Button onClick={()=>{notifyOpen('info')}} type="primary">Info</Button>
          <Button onClick={()=>{notifyOpen('warning')}}>Warning</Button>
          <Button onClick={()=>{notifyOpen('error')}} type="danger">Error</Button>
          <Button onClick={()=>{notifyOpen('warning')}}>Warning</Button>
          <Button onClick={()=>{notifyOpen('error')}} type="danger">Error</Button>
      </div>
      </Card>
      <Card title="带位置的通知">
      <div className="card_content">
          <Button onClick={()=>{notifyPlaceOpen('success','topRight')}} style={{background:"#52C41A",color:"#fff"}}>Success</Button>
          <Button onClick={()=>{notifyPlaceOpen('info','topLeft')}} type="primary">Info</Button>
          <Button onClick={()=>{notifyPlaceOpen('warning','bottomLeft')}}>Warning</Button>
          <Button onClick={()=>{notifyPlaceOpen('error','bottomRight')}} type="danger">Error</Button>
      </div>
      </Card>
  </div>;
};

export default NotifyPage;
