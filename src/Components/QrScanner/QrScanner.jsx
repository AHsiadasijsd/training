import React from "react";
import s from './QrScanner.module.scss'

import {Html5QrcodeScanner} from '../../Common/QrCodeFiles/html5-qrcode-scanner'
// import {Html5QrcodeScanner} from 'html5-qrcode'

const config = {
    fps:10,
    qrBox:250,
    disableFlip: false,
    // facingMode: { exact: "environment" },
}


class QrScanner extends React.Component {

    qrCodeSuccessCallback(mesg) {
        console.log(mesg)
    }
    qrCodeErrorCallback(error) {
        console.log(error)
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        // Success callback is required.
        if (!(this.qrCodeSuccessCallback )) {
            throw 'qrCodeSuccessCallback is required callback.';
        }

        this.html5QrcodeScanner = new Html5QrcodeScanner(
            'qr-code-full-region', config, false);

        this.html5QrcodeScanner.render(
            this.qrCodeSuccessCallback, this.qrCodeErrorCallback);
    }

    render() {
        return (
            <div className={s.scannerContainer}>
                <div className={s.scanner} id={'qr-code-full-region'}>

                </div>
            </div>
        )
    }
}

export default QrScanner
