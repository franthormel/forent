import FooterText from "./text";

export default function Footer() {
    return (
        <ul className='mt-20 flex flex-wrap gap-x-14 border-t-2 border-gray-200 p-20 text-center'
            data-cy="footer">
            <li><FooterText value='About' dataCy='footer-text-about' /></li>
            <li><FooterText value='Privacy' dataCy='footer-text-privacy' /></li>
            <li><FooterText value='Accessibility' dataCy='footer-text-a11y' /></li>
            <li><FooterText value='Sitemap' dataCy='footer-text-sitemap' /></li>
        </ul>
    )
}
