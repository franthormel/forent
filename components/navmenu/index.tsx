import ButtonAuth from '../button-auth';
import HeaderLogo from '../header-logo';

export default function NavMenu() {
    return (
        <div className='flex flex-row text-3xl place-items-center'>
            <div className="grow"><HeaderLogo /></div>
            <div className='text-base'><ButtonAuth /></div>
        </div>
    );
}
