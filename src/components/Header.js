import bigLogo from '../img/HeaderLogo.png';

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={bigLogo} alt="" className="header__logo" />
      </header>
    </>
  );
}
