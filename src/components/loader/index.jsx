import React from 'react';
import './index.styles.scss';

const UserLoader = () => {
    return (
        <div className="fl fl-d-cl shop-container">
            <div class="user-header animated">
                <div class="skeleton">
                    <div class="avatar-skeleton"></div>
                    <div class="info-skeleton">
                        <div class="skeleton-1"></div>
                        <div class="skeleton-2"></div>
                        <div class="skeleton-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLoader;
