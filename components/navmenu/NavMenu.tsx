import AuthButton from '../auth-buttons/AuthButton';
import HeaderLogo from '../header-logo/HeaderLogo';

export default function NavMenu() {
    return (
        <div className='flex flex-row text-3xl place-items-center'>
            <div className="grow"><HeaderLogo /></div>
            <div className='text-base'><AuthButton /></div>
        </div>
    );
}
