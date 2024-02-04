import AuthWrapper from '../auth/AuthWrapper';
import LogoHeader from '../LogoHeader';

export default function NavigationMenu() {
    return (
        <div className='flex flex-row text-3xl place-items-center'>
            <div className="grow"><LogoHeader /></div>
            <div className='text-base'><AuthWrapper /></div>
        </div>
    );
}
