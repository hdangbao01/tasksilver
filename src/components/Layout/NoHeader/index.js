import Footer from "~/components/Layout/components/Footer"
import classNames from 'classnames/bind'
import styles from './NoHeader.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                { children }
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout