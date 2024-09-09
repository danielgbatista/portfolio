import Link from "@atoms/link";

const Header = () => {
    return (
        <header className="w-full flex justify-start desktop:justify-between items-center px-4 desktop:px-20 py-4 border-b-2 border-[#F8F7FF]">
            <div className="flex items-center gap-2">
                <img src="/logo-icon.svg" alt="logotipo" />
                <span className="font-black text-lg">db@goncalves</span>
            </div>
            <ul className="hidden desktop:flex items-center gap-6 font-medium">
                <li>
                  <Link openNewTab={false} href="/#about-me"  label="Sobre Mim"/>
                </li>
                <li>
                  <Link openNewTab={false} href="/#about-me"  label="Serviços"/>
                </li>   
                <li>
                  <Link openNewTab={false} href="/#about-me"  label="Projetos"/>
                </li>
            </ul>
            <div className="hidden desktop:flex items-center gap-2 font-medium">
                <Link openNewTab href="https://www.linkedin.com/in/daniel-gon%C3%A7alves-batista-6228a9197" label="LinkedIn" />
                <span>/</span>
                <Link openNewTab href="https://github.com/danielgbatista" label="Github" />
                <span>/</span>
                <Link openNewTab href="https://github.com/danielgbatista" label="Behance" />
            </div>
        </header>
    );
}

export default Header;