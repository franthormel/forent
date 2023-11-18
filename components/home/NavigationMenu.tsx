import AuthWrapper from '../auth/AuthWrapper';
import LogoHeader from '../LogoHeader';

export default function NavigationMenu() {
    return (
        <div className='flex flex-row text-lg place-items-center'>
            <div className="grow"><LogoHeader /></div>
            <div><AuthWrapper /></div>
        </div>
    );
}