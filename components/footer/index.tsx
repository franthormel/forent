import FooterText from "./text";

export default function Footer() {
    return (
        <ul className='mt-20 flex flex-wrap gap-x-14 p-20 text-center'>
            <li><FooterText value='About' dataCy='footer-text-about' /></li>
            <li><FooterText value='Privacy' dataCy='footer-text-privacy' /></li>
            <li><FooterText value='Accessibility' dataCy='footer-text-a11y' /></li>
            <li><FooterText value='Sitemap' dataCy='footer-text-sitemap' /></li>
        </ul>
    )
}
