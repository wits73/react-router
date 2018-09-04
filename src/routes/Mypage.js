import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const Mypage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="/login"/>
            }
            마이페이지
        </div>
    );
};

export default Mypage;