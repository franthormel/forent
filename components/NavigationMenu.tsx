import AuthenticationWrapper from './AuthenticationWrapper';
import LogoHeader from './LogoHeader';

export default function NavigationMenu() {
    return (
        <div className='flex items-center'>
            <div className='flex-auto'>
                <LogoHeader />
            </div>
            <AuthenticationWrapper />
        </div>
    );
}