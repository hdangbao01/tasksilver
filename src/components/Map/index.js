import GoogleMapReact from 'google-map-react';
import React, { memo } from "react";
import classNames from 'classnames/bind'
import styles from './Map.module.scss'
import { IoLocationSharp } from 'react-icons/io5'

const cx = classNames.bind(styles)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ coords }) {
    return (
        <div className={cx('location-maps')}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_MAP }}
                defaultCenter={coords}
                defaultZoom={12}
                center={coords}
            >
                <AnyReactComponent
                    lat={coords?.lat}
                    lng={coords?.lng}
                    text={<IoLocationSharp color='red' size={32} />}
                />
            </GoogleMapReact>
        </div>
    )
}

export default memo(Map)