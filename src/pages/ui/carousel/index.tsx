import React,{ useState } from 'react';
import { Carousel,Card,Button } from 'antd';
import './carousel.less';
import { DotPosition } from 'antd/lib/carousel';
interface ICarouselPageProps {
}

const CarouselPage: React.FunctionComponent<ICarouselPageProps> = (props) => {
  const [ dotPosition,setPosition ] = useState<DotPosition>('bottom');
  
  return <div className="CarouselPage">
      <Card title="轮播组件">
        <Carousel>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
      </Card>
      <Card title={<span>轮播组件 渐变切换
          <Button.Group style={{marginLeft:10}}>
            <Button onClick={()=>{setPosition('top')}}>top</Button>
            <Button onClick={()=>{setPosition('right')}}>right</Button>
            <Button onClick={()=>{setPosition('bottom')}}>bottom</Button>
            <Button onClick={()=>{setPosition('left')}}>left</Button>
          </Button.Group>
      </span>}>
        <Carousel dotPosition={dotPosition} effect="fade" autoplay={true}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
      </Card>
      <Card title="图片轮播">
        <Carousel autoplay={true}>
            <div><img src="./asset/1.png" alt=""/></div>
            <div><img src="./asset/2.png" alt=""/></div>
            <div><img src="./asset/3.png" alt=""/></div>
            <div><img src="./asset/4.png" alt=""/></div>
        </Carousel>
      </Card>
  </div>;
};

export default CarouselPage;
