import Header from '../header';
import HeaderLogo from '../header-logo';

export default function NavigationMenu() {
    return (
        <div className='flex justify-between p-20'>
            <HeaderLogo />
            <div className='grid auto-cols-max grid-flow-col content-center gap-x-20'>
                {/* TODO: Create HeaderLink */}
                <Header value='Create Listing' />
                {/* TODO: Create HeaderButton */}
                <Header value='Sign In' />
            </div>
        </div>
    );
}
