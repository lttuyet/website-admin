/* eslint-disable jsx-a11y/label-has-associated-control */

import React,{PureComponent} from 'react';
import { Redirect } from 'react-router-dom';

import './App.css';

class Login extends PureComponent {

  constructor(){
    super();
    this.username = '';
    this.password = '';
    this.err = '';
  }


  render() {
    const st = this.props;
    
    if(st.isLogin){
      return <Redirect to="/" />;
  }


    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">ĐĂNG NHẬP</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Enter Username..."
                            
                            onChange = {(e)=>{
                              this.username = e.target.value;
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            
                            onChange = {(e)=>{
                              this.password = e.target.value;
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div><label className=" col-form-label-sm ml-md-1 text-danger">{st.errorInfo}</label></div>
                        <button
                          type = "button"
                          className="btn btn-info btn-user btn-block"
                          onClick = {(e)=>{
                            e.preventDefault();
                            st.login(this.username,this.password);
                            console.log(this.username,this.password);
                          }}
                        >
                          Login
                        </button>
                      </form>
                    
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
