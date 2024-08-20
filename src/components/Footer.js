import footerLogo from '../img/HeaderLogo.png';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__info">
          <h1 className="footer__info__header">About Fall's Footy Predictor</h1>
          <p className="footer__info__blurb">
            F.F.P. is a porject designed and implmented solely by myself, Graeme
            Fall. I am a BSc(Hons) Computing and IT (Software) graduate, having
            studied at the Open Uni. <br />
            The porpose of the application is to work on Web Development and IT
            skills and showcase what I have learned. <br />
            If anyone would like to use elements of the code then feel free to
            get in touch and I can send the code over. <br />
            <br />
            If you have any questions about F.F.P. then emailed me at
            graemefall@gmail.com <br />
            <br />I hope you all enjoy the game and fingers crossed we all do
            better than I did in the Euro predictor!!
            <br />
            <br />
            Thanks for your support,
            <br />
            Graeme
          </p>
        </div>

        <div className="footer__imgbox">
          <img src={footerLogo} alt="" className="footer__logo" />
        </div>
      </footer>
    </>
  );
}
