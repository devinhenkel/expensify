// Higher Order Component - a component that renders another component
// Code reuse is objective - use render hijacking, prop manipulation, and abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This info is privileged. Please don't share.</p>} 
            < WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                <p>This info is privileged. Please don't share.</p>
                < WrappedComponent {...props}/>
                </div>
            ) : (
                <p>please authenticate.</p>
            )
            
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="What the hey!?!"/>, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="What the hey!?!"/>, document.getElementById('app'));