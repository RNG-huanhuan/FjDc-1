import * as React from 'react';
import { Form,Input,Button,Icon,Card, message, Checkbox } from 'antd'; 
import { FormComponentProps } from 'antd/lib/form'
import './style.less'
interface ILoginPageProps extends FormComponentProps {
}

const { Item } = Form;
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

  const { getFieldDecorator,getFieldsValue,validateFields } = props.form;
    //获取表单项的值 getFieldDecorator
    //获取表单的值 getFieldValue

  let handleSubmit = async() => {
      try{
          let a1 = await validateFields();
          let data = getFieldsValue();
          message.success(`用户名: ${data.userName}  密码: ${data.password}`);
      }catch(e){
          message.info('表单不对哦，再检查一下吧');
      }
      
  } 
  return <div className="LoginPage">
      <Card title="内联表单">
        <Form layout="inline">
            <Item>
               {
                   getFieldDecorator('userName',{
                       rules:[
                           {required:true,message:'用户名不能为空 !'}
                       ]
                   })(
                    <Input type="text" placeholder="userName" prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}/>
                   )
               }
            </Item>
            <Item>
                {
                    getFieldDecorator('password',{
                        rules:[
                            {required:true,message:'密码不能为空 !'}
                        ]
                    })(
                        <Input type="password" placeholder="password" prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>} />
                    )
                }
            </Item>
            <Item>
            <Button type="primary" onClick={handleSubmit}>Login</Button>
            </Item>
        </Form>
      </Card>
      <Card title="普通登录框" style={{width:"400px"}}>
        <Form>
            <Item label="用户名">
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
            </Item>
            <Item label="密码">
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
            </Item>
            <Item>
                {
                    getFieldDecorator('remember',{
                        valuePropName:'checked',
                        initialValue:true
                    })(<Checkbox/>)
                } 记住我
                <a href="javascript:;" className="login-form-forget">忘记密码</a>
            </Item>
            <Item>
                <Button type="primary" className="login-form-button">登录</Button>
            </Item>
        </Form>
      </Card>
  </div>;
};

export default Form.create()(LoginPage);
//高阶组件封装