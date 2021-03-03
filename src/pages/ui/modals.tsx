import React,{ useState } from 'react';
import { Card,Modal,Button } from 'antd'
import './style.less';
interface IModalPageProps {
}

const ModalPage: React.FunctionComponent<IModalPageProps> = (props) => {
    const [ modalVisible,setVisible ] = useState({
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false
    });
    let { modal1,modal2,modal3,modal4 } = modalVisible;

    let handleOpen = (modalName:'modal1'|'modal2'|'modal3'|'modal4') => {
        let config = {
            modal1:false,
            modal2:false,
            modal3:false,
            modal4:false
        }
        config[modalName] = true;
        setVisible(config);
    }
    let handleClose = () => {
        let config = {
            modal1:false,
            modal2:false,
            modal3:false,
            modal4:false
        }
        setVisible(config);
    }
    let handleStateOpen = (state:"success"|"info"|"warning"|"error") => {
        Modal[state]({title:state,content:state+"出现了"});
    }
  return <div className="ModalPage">
      <Card>
          <div className="card_content">
            <Button onClick={()=>{handleOpen('modal1')}}>模态框显示</Button>
            <Button onClick={()=>{handleOpen('modal2')}}>没有页脚的模态框</Button>
            <Button onClick={()=>{handleOpen('modal3')}}>自定义确定取消的模态框</Button>
            <Button onClick={()=>{handleOpen('modal4')}}>距顶部20px的模态框</Button>
          </div>
      </Card>
      <Card>
          <div className="card_content">
            <Button onClick={()=>{handleStateOpen('success')}}>成功success</Button>
            <Button type='primary' onClick={()=>{handleStateOpen('info')}}>信息info</Button>
            <Button onClick={()=>{handleStateOpen('warning')}}>警告warning</Button>
            <Button type="danger" onClick={()=>{handleStateOpen('error')}}>错误error</Button>
          </div>
      </Card>
      <Modal title='壹号模态框' 
             visible={modal1}
             onCancel={()=>{handleClose()}}>
                 不忘初心 自律 
      </Modal>
      <Modal title='贰号模态框' 
             visible={modal2}
             onCancel={()=>{handleClose()}}
             footer={null}
             >
                 不忘初心 努力
      </Modal>
      <Modal title='叁号模态框' 
             visible={modal3}
             onCancel={()=>{handleClose()}}
             okText={'成功了😀'}
             cancelText={'👴觉得不行'}
             >
                 不忘初心 勤奋
      </Modal>
      <Modal title='肆号模态框' 
             style={{top:20}}
             visible={modal4}
             onCancel={()=>{handleClose()}}
             okText={'确定'}
             cancelText={'取消'}
             >
                 不忘初心 坚持
      </Modal>
  </div>;
};

export default ModalPage;
