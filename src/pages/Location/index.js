import classNames from 'classnames/bind'
import styles from './Location.module.scss'
import { useEffect, useState } from 'react';
import Map from '~/components/Map';
// import GoogleMapReact from 'google-map-react';
// import { IoLocationSharp } from 'react-icons/io5'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const cx = classNames.bind(styles)

function Location() {
    const [coords, setCoords] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { longitude, latitude } }) => {
            setCoords({ lat: latitude, lng: longitude })
        })
    }, [])

    return (
        <div className={cx('location-wrapper')}>
            <div className={cx('location-content')}>
                <div className={cx('location-search')}>
                    <p className={cx('location-search-title')}>Tìm kiếm địa điểm <br /> chúng tôi làm việc?</p>
                    <div className={cx('location-search-body')}>
                        <input className={cx('location-search-input')} placeholder='Nhập địa điểm của bạn...' />
                        <button className={cx('location-search-btn')}>Tìm kiếm</button>
                    </div>
                </div>
                <div className={cx('location-maps')}>
                    <Map coords={ coords } />
                </div>
            </div>
        </div>
    )
}

export default Location;