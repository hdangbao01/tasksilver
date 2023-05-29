import classNames from 'classnames/bind'
import styles from './JustContent.module.scss'
import { useContext } from 'react';
import { AppContext } from '~/components/AppContext';
import Load from '~/components/Load';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const { loading } = useContext(AppContext)

    return (
        <div className={cx('wrapper')}>
            {loading ? <Load /> :
                <div className={cx('container')}>
                    {children}
                </div>
            }
        </div>
    )
}

export default DefaultLayout