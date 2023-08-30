import './QRCode.css';

type QRCodeProps = {
    pathToQRCodeImage: string;
};

const QRCode = ({ pathToQRCodeImage }: QRCodeProps) => {
    return <img className='qrCode' src={pathToQRCodeImage} alt='QR Code' />;
};

export default QRCode;
