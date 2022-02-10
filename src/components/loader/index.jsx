import React from 'react';
import './index.styles.scss';

export const DotLoader = () => {
    return (
        <div className="dot-loader">
            <div className="skeleton fl fl-c">
                <div className="skeleton-1"></div>
                <div className="skeleton-2"></div>
                <div className="skeleton-3"></div>
                <div className="skeleton-4"></div>
            </div>
        </div>
    );
};

const UserLoader = () => {
    return (
        <div className="user-header animated">
            <div className="skeleton">
                <div className="avatar-skeleton"></div>
                <div className="info-skeleton">
                    <div className="skeleton-1"></div>
                    <div className="skeleton-2"></div>
                    <div className="skeleton-3"></div>
                </div>
            </div>
        </div>
    );
};

export default UserLoader;
