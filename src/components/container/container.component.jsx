import React from 'react';
import './container.styles.scss'

const Container = ({ children }) => {
    return (
        <section>
            <div className='container fl fl-d-cl'>{children}</div>
        </section>
    );
};

export default Container;
