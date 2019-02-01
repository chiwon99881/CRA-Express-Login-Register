import React,{ Component,Fragment } from 'react';
import styled from 'styled-components';


const Card = styled.div`
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    width:400px;
    height:500px;
    background-color:#fa983a;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const Span = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
    font-size:50px;
    color:white;
`;

const Anchor = styled.a`
    all:unset;
    border-radius:20px;
    background-color:#e17055;
    padding:20px;
    margin:15px;
    width:100px;
    text-align:center;
    border:1px solid #2c2c54;
    margin-top:30px;
    cursor:pointer;
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

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    componentDidMount() {
        this._apiFromState();
    }

    _apiFromState = async() => {
        const state = await this._getApi();
        console.log(state.isLogged);
        this.setState({
            isLogged : state.isLogged
        })
    }

    _getApi = () => {
        return fetch('http://localhost:4000/topic/islogged')
                .then(res => res.json())
                .catch(err => console.log(err))
    }




    render() {

        const loginForm = (
            <Card>
                <Form action="http://localhost:4000/topic/loginprocess" method="post">
                    <Input type="text" name="email" placeholder="email" />
                    <Input type="text" name="password" placeholder="password" />
                    <Input submit type="submit" value="Login" />
                </Form>
            </Card>
        );

        const logoutForm = (
            <Card>
                    <Span>LOG-OUT</Span>
                    <Anchor href="http://localhost:4000/topic/logout">LOG-OUT</Anchor>
            </Card>
        );

        return (
            <Fragment>
                {this.state.isLogged ? logoutForm : loginForm}
            </Fragment>
        );
    }
}

export default Login;