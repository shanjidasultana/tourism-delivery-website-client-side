import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { css } from "@emotion/react";
import { PacmanLoader } from 'react-spinners';

const PrivateRoute = ({ children, ...rest }) => {
    
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
    const { user,loading } = useAuth();
    if (loading) return  <PacmanLoader loading={loading} style={{color:'red'}} css={override} size={150} />;
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;