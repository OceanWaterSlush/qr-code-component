type QRCodeProps = {
    pathToQRCodeImage: string;
};

const QRCode = ({ pathToQRCodeImage }: QRCodeProps) => {
    return (
        <div>
            <img src={pathToQRCodeImage} alt='QR Code' />
        </div>
    );
};

export default QRCode;
