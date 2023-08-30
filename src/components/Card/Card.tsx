import QRCode from '../QRCode/QRCode';
import './Card.scss';

const Card = () => {
    return (
        <div className='card'>
            <QRCode pathToQRCodeImage='/assets/image-qr-code.png' />
            <p className={'title'} role='heading' aria-level={1}>
                Improve your front-end skills by building projects
            </p>
            <p className={'description'}>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
            </p>
        </div>
    );
};

export default Card;
