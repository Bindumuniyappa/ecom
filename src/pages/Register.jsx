import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link} from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
})
const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
  e.preventDefault();
  axios.post('http://localhost:6060/register',data).then(
      res => {alert(res.data);setData({
          username:'',
          email:'',
          password:'',
          confirmpassword:''
      })}
  ).catch(err=>{
    alert(err,"invalid credentials")
  })
 
} 
   

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                <input type="text" onChange={changeHandler} name="username" placeholder="User Name" />
                </div>
                <div className="form__group">
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" />
                </div>
                <div className="form__group">
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" />
                </div>
                <div className="form__group">
                <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" />
                </div>
                <input type="submit" value="Sign Up" className="addTOCart__btn"/>
                {/* <button type="submit"onClick={submitHandler} className="addTOCart__btn">
                  Sign Up
                </button> */}
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;