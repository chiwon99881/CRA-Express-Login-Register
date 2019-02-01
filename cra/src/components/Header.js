import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
    display:table;
    background-color:#fa983a;
    table-layout:fixed;
    width:100%;
`;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged:false
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
        return (
            <Container>
                <Link to={"/"} className="item">HOME</Link>
                <Link to={"/useronly"} className="item">USER-ONLY</Link>
                <Link to={"/login"} className="item">{this.state.isLogged ? 'LOG-OUT' : 'LOG-IN'}</Link>
                <Link to={"/register"} className="item">REGISTER</Link>
            </Container>
        );
    }
}

export default Header;