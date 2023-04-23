import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('content')}>
            <div className={cx('header-content')}>Header</div>
            <div className={cx('body-content')}>Body</div>
        </div>
    )
}

export default Home;