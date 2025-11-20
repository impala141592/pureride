import "./Footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='contained footer-cta'>
				<h2>Gotowi na coś więcej?</h2>
				<p>Zróbmy razem coś, czego nikt jeszcze nie przeżył.</p>
				<a href='mailto:hello@pureride.pl'>hello@pureride.pl</a>
			</div>

			<div className='footer-bottom'>
				<p>© {new Date().getFullYear()} Pureride Studio Doświadczeń</p>
			</div>
		</footer>
	);
};

export default Footer;
