import React,{ Component,Fragment } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const Card = styled.div`
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    width:400px;
    height:500px;
    background-color:#fa983a;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Span = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
    font-size:50px;
`;

class UserOnly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged:true
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
        const USER_ONLY = (
            <Card>
                <Span>USER ONLY</Span>
            </Card> 
        );
        return (
            <Fragment>
                {this.state.isLogged === true ? USER_ONLY : <Redirect to={"/"} />}
            </Fragment>
        );
    }
}

export default UserOnly;