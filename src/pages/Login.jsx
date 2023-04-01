import React, { useState,useContext } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link,Navigate } from "react-router-dom";
import axios from 'axios';
import {store} from '../routes/Routers';

const Login = () => {
  const [token,setToken] = useContext(store)
  const [data,setData] = useState({
      email:'',
      password:'',
  })

  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:6060/login',data).then(
        res => setToken(res.data.token)
    )
}
if(token){
   return <Navigate to='/home' />
}

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    required
                    
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={changeHandler}
                    required
                    
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;