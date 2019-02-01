import React,{Fragment} from 'react';
import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    width:400px;
    height:500px;
    background-color:#fa983a;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Form = styled.form`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Input = styled.input`
    all:unset;
    border-radius:20px;
    background-color:${props => (props.submit ? '#e17055' : 'white')}
    padding:20px;
    margin:15px;
    width:${props => (props.submit ? '100px' : '300px')}
    text-align:center;
    border:1px solid #2c2c54;
    margin-top:${props => (props.submit ? '30px' : '15px')}
    cursor: ${props => (props.submit ? 'pointer' : 'text') }
`;

const Register = () => {
    return (
        <Fragment>
            <Card>
                    <Form action="http://localhost:4000/topic/register" method="post">
                        <Input type="text" name="email" placeholder="email" />
                        <Input type="text" name="password" placeholder="password" />
                        <Input submit type="submit" value="Register" />
                    </Form>
            </Card>
        </Fragment>
    );
}

export default Register;