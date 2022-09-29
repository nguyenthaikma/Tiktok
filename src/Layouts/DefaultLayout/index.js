import React from 'react'
import { Header } from '../components'
import Sidebar from './Sidebar'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <Sidebar />
                    <div className={cx('content')}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
