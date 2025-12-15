import useIsDesktop from '../../hooks/responsive/responsive';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import './Navbar.css';
import CTAButtons from './ctaButtons/CTAButtons';
import DesktopMenu from './desktopMenu/DesktopMenu';
import MobileMenu from './mobileMenu/MobileMenu';

const Navbar = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className='flex-row space-between navbar-container'>
      <CTAButtons />
      {isDesktop ? <DesktopMenu /> : <LanguageSwitcher />}
      {/* {isDesktop ? <DesktopMenu /> : <MobileMenu />} */}
    </div>
  );
};

export default Navbar;
