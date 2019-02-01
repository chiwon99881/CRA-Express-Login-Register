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

const Span = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: 'Ubuntu', sans-serif;
    font-size:50px;
`;

const Home = () => {
    return (
        <Fragment>
            <Card>
                <Span>HOME</Span>
            </Card>
        </Fragment>
    );
}

export default Home;