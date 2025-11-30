import "./Footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<h2 data-aos='fade-up'>Gotowi na coś więcej?</h2>
			<div className='contained footer-cta'>
				<h4>Zróbmy razem coś, czego nikt jeszcze nie przeżył.</h4>
				<a href='mailto:hello@pureride.pl'>hello@pureride.pl</a>
			</div>

			<div className='footer-bottom'>
				<p>© {new Date().getFullYear()} Pureride Studio Doświadczeń</p>
			</div>
		</footer>
	);
};

export default Footer;
