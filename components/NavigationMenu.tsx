import AuthWrapper from './AuthWrapper';
import HeaderLogo from './HeaderLogo';

export default function NavigationMenu() {
    return (
        <div className='flex flex-row text-3xl place-items-center'>
            <div className="grow"><HeaderLogo /></div>
            <div className='text-base'><AuthWrapper /></div>
        </div>
    );
}
