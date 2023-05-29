import classNames from 'classnames/bind'
import styles from './Location.module.scss'
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '~/components/AppContext';
import Map from '~/components/Map';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const cx = classNames.bind(styles)

function Location() {
    const {listUser} = useContext(AppContext)

    const [coords, setCoords] = useState(null)
    const [ipLocation, setIpLocation] = useState('')
    const [checkAvailbe, setCheckAvailbe] = useState(1)

    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        str = str.replace(/ + /g," ");
        str = str.trim();
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        return str;
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { longitude, latitude } }) => {
            setCoords({ lat: latitude, lng: longitude })
        })
    }, [])

    const handleFind = () => {
        setCheckAvailbe(listUser.some(itemUser => (
            removeVietnameseTones(itemUser.address).toLowerCase().includes(removeVietnameseTones(ipLocation.toLowerCase()))
        )))

        const getCoords = async () => {
            const results = await geocodeByAddress(ipLocation) 
            const latLng = await getLatLng(results[0])
            setCoords(latLng)
        }

        getCoords()
    }

    return (
        <div className={cx('location-wrapper')}>
            <div className={cx('location-content')}>
                <div className={cx('location-search')}>
                    <p className={cx('location-search-title')}>Tìm kiếm địa điểm <br /> chúng tôi làm việc?</p>
                    <div className={cx('location-search-body')}>
                        <input className={cx('location-search-input')} placeholder='Nhập địa điểm của bạn...' 
                            value={ipLocation} onChange={e => setIpLocation(e.target.value)}
                        />
                        <button className={cx('location-search-btn')} onClick={handleFind}>Tìm kiếm</button>
                    </div>
                    {checkAvailbe === 1 ? <></> 
                    : (checkAvailbe ? <p className={cx('availbe')}>Có người giúp việc trong khu vực</p>
                    : <p className={cx('not-availbe')}>Không có người giúp việc trong khu vực</p>)
                    }
                </div>
                <div className={cx('location-maps')}>
                    <Map coords={ coords } />
                </div>
            </div>
        </div>
    )
}

export default Location;