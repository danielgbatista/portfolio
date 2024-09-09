import Button from "@atoms/button";


const HomeSection = () => {
    return (
        <section 
            className="w-full h-[500px] flex justify-center items-center bg-no-repeat bg-cover bg-center" 
            style={{ backgroundImage: "url('/background-pattern.svg')"}}
        >
            <div className="w-3/4 flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col text-center gap-4">
                    <div className="flex">
                        <span className="text-2xl animate-waving-hand">👋</span> 
                        <h1 className="text-2xl font-semibold desktop:text-3xl">Olá, Seja bem-vindo! Sou Daniel Gonçalves Batista</h1>
                    </div>
                    <p className="text-xl font-semibold desktop:text-3xl">Desenvolvedor Full Stack e Designer</p>
                </div>
                <Button className="w-full desktop:w-[18%]" variant="primary" text="Explorar Projetos" href="#about-me"/>
                <div className="w-6 h-10 flex justify-center border-2 border-primary rounded-2xl py-1">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce-custom" />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;