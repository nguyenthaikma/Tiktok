import classNames from 'classnames/bind';
import React from 'react';
import LogoImage from '../../images/LogoImage';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <LogoImage />
                <div className={cx('search')}>
                    Search
                </div>
                <div className={cx('personal')}>
                    Personal
                </div>
            </div>
        </header>
    )
}
