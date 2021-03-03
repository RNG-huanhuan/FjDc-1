import React,{ useState } from 'react';
import { Card,Row,Col,Modal } from 'antd';

const { Meta } = Card;
interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {

    const [ isVisible,setVisible ] = useState<boolean>(false);
    const [ imgSrc,setImg] = useState<string>('');

    const colLayou = {
        lg:6,
        sm:24
    }
    const imgs = [
        ['1.png','2.png','3.png','4.png','5.png'],
        ['6.png','7.png','8.png','9.png','10.png'],
        ['11.png','12.png','13.png','14.png','15.png'],
        ['16.png','17.png','18.png','19.png','20.png']
    ]

    //模态框打开的逻辑
    let handleClick = (imgSrc:string) => {
        setVisible(true);
        setImg(imgSrc);
    }

  return <div className="Gallery">
          <Row gutter={10}>
              {
                  imgs.map((item,index)=>{
                      return <Col {...colLayou} key={index}>
                          {
                              item.map((pic,index)=>{
                                  return <Card key={index} style={{marginTop: 10}} cover={<img src={'./asset/'+pic}/>} onClick={()=>{handleClick('./asset/'+pic)}}>
                                      <Meta 
                                        title={pic}
                                        description={`来自${pic}的描述`}
                                      />
                                  </Card>
                              })
                          }
                      </Col>
                  })
              }
          </Row>
          <Modal visible={isVisible}
                 onCancel={()=>{setVisible(false)}}
                 footer={null}
          >
               <img src={imgSrc} style={{paddingTop:20,width:'100%'}} alt=""/>
          </Modal>
  </div>;
};

export default Gallery;
