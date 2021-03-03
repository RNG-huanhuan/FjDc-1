import React,{ useState } from 'react';
import { Card,Input,Form,Icon,Radio,Select,Switch, DatePicker, Checkbox, Upload,Button, message } from 'antd';
import { FormComponentProps,FormItemProps } from 'antd/lib/form';
import Moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

const FormItem  = Form.Item;
const Option = Select;
interface IRegPageProps extends FormComponentProps{
}

const RegPage: React.FunctionComponent<IRegPageProps> = (props) => {

  //上传图片之后的图片编码
  const [ imgSrc,setImg ] = useState<string>('');
  const { getFieldDecorator,getFieldsValue,validateFields } = props.form;
  const formLayout:FormItemProps = {
      wrapperCol:{
          lg:6,
          sm:24
      },
      labelCol:{
          lg:6,
          sm:24
      }
  } 

  const getBase64 = (img:File,callback:Function) => {
      const reader = new FileReader();
      reader.addEventListener('load',()=>{
          //读取的返回结果
          callback(reader.result)
      })
      reader.readAsDataURL(img);
  }
  //图片上传调用的回调函数
  const handleChange = (info:any) => {
      //info 是个对象
      //file 表示当前上传的文件
      //fileList 表示当前上传的文件列表
    console.log("info",info);
    getBase64(info.file.originFileObj,(base64:any) => {
        setImg(base64);
    })
  }

  //设置表单提交的回调函数
  let handleSubmit = async () => {
    try{
        await validateFields();
        console.log({...getFieldsValue(),imgSrc});
        message.success('表单提交成功 !');
    }catch(e){
        message.info('表单有问题，请重试 ！');
    }
  }
  return <div className="RegPage">
      <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...formLayout}>
                {
                    getFieldDecorator('userName',{
                        rules:[
                            {
                                required:true,
                                message:"用户名不能为空 !"
                            }
                        ]
                    })(<Input type="text" placeholder="userName" prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                }
            </FormItem>
            <FormItem label="密码" {...formLayout}>
                {
                    getFieldDecorator('password',{
                        rules:[
                            {
                                required:true,
                                message:"密码不能为空 !"
                            }
                        ]
                    })(<Input type="password" placeholder="password" prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                }
            </FormItem>
            <FormItem label="年龄" {...formLayout}>
                {
                    getFieldDecorator('age',{
                        rules:[
                            {
                                required:true,
                            }
                        ],
                        initialValue:20
                    })(<Input type="number" style={{color:'rgba(0,0,0,.25)',width:150}} min={18} max={60}/>)
                }
            </FormItem>
            <FormItem label="性别" {...formLayout}>
                {
                    getFieldDecorator('sex',{
                        rules:[
                            {
                                required:true,
                            }
                        ]
                    })(<Radio.Group>
                        <Radio value="男">男</Radio>
                        <Radio value="女">女</Radio>
                    </Radio.Group>)
                }
            </FormItem>                    
            <FormItem label="权限等级" {...formLayout}>
                {
                    getFieldDecorator('auth_level',{
                        initialValue:'1'
                    })(<Select>
                        <Option value="1">Lv1</Option>
                        <Option value="2">Lv2</Option>
                        <Option value="3">Lv3</Option>
                        <Option value="4">Lv4</Option>
                    </Select>)
                }
            </FormItem>
            <FormItem label="爱好" {...formLayout}> 
                {
                    getFieldDecorator('hobby',{
                        initialValue:['4','5']
                    })(<Select mode="multiple">
                        <Option value='1'>听歌</Option>
                        <Option value='2'>旅游</Option>
                        <Option value='3'>蹦迪</Option>
                        <Option value='4'>LOL</Option>
                        <Option value='5'>花钱</Option>
                    </Select>)
                }
            </FormItem> 
            <FormItem label="婚否" {...formLayout}>
                {
                    getFieldDecorator('isMarry',{
                        valuePropName:'checked',
                        initialValue:false
                    })(<Switch/>)
                }
            </FormItem>
            <FormItem label="生日" {...formLayout}>
                {
                    getFieldDecorator('birthday',{
                        initialValue:Moment(+ new Date())
                        // 必须是moment 对象
                        // + new Date() <=> new Date().getTime()
                    })(<DatePicker showTime={true} format="YYYY-MM-DD"/>)
                }
            </FormItem>
            <FormItem label="联系地址" {...formLayout}>
                {
                    getFieldDecorator('address',{
                        initialValue:'',
                        rules:[
                            {
                                required:true,
                                message:"地址不能为空 !"
                            }
                        ]
                    })(<TextArea rows={3}/>)
                }
            </FormItem>
            <FormItem label={' '} {...formLayout} colon={false}>
                {
                    getFieldDecorator('agree',{
                        valuePropName:'checked',
                        initialValue:true
                    })(<Checkbox/>)
                }
                <span style={{marginLeft:"10px"}}>我已阅读协议</span>
            </FormItem>
            <FormItem label={' '} {...formLayout} colon={false}>
                <Upload listType="picture-card"
                        showUploadList={false}
                        onChange={handleChange}
                >
                {
                    imgSrc ? <img src={imgSrc} style={{width:'100%'}} alt="上传的图片"/>:<Icon type="plus"/>
                }
                </Upload>
            </FormItem>
            <FormItem {...formLayout} label={' '} colon={false}>
                <Button onClick={()=>{handleSubmit()}}>登录</Button>
            </FormItem>
          </Form>
      </Card>
  </div>;
};

export default Form.create()(RegPage);
//高阶组件封装