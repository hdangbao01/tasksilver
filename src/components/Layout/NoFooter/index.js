import Header from "~/components/Layout/components/Header";
import classNames from 'classnames/bind'
import styles from './NoHeader.module.scss'
import { useContext } from 'react';
import { AppContext } from '~/components/AppContext';
import Load from '~/components/Load';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const { loading } = useContext(AppContext)

    return (
        <div className={cx('wrapper')}>
            {loading ? <Load /> : <>
                <Header />
                <div className={cx('container')}>
                    {children}
                </div>
            </>}
        </div>
    )
}

export default DefaultLayout