import Header from "@/components/header";
import InfoWithIcon from "@/components/info-with-icon";
import ContactForm from "@/components/contact-form";

export default function Contato() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-between gap-10 sm:gap-12 lg:gap-16 px-6 sm:px-10 lg:px-24 py-8 sm:py-10 lg:py-10 w-full">
        <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Entre em contato
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400">
            Quer conversar sobre um projeto ou apenas bater um papo? Entre em
            contato comigo!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-10">
          <div className="flex flex-col bg-[#1a1a1a] p-6 sm:p-8 lg:p-12 rounded-xl border border-[#2a2a2a] w-full lg:w-3/5 min-h-0 animate-fade-in-up-delay-100">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
              Envie uma mensagem
            </h1>
            <ContactForm />
          </div>

          <div className="flex flex-col items-center gap-8 w-full lg:w-2/5">
            <div className="flex flex-col gap-5 sm:gap-6 bg-[#1a1a1a] p-6 sm:p-8 lg:p-12 rounded-xl border border-[#2a2a2a] w-full animate-fade-in-up-delay-200">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Informações de contato
              </h1>
              <InfoWithIcon
                icon="mail"
                title="Email"
                content="vinicius@stephanto.com.br"
              />
              <InfoWithIcon
                icon="mapPin"
                title="Localização"
                content="São Paulo, SP, Brasil"
              />
            </div>
            <div className="flex flex-col gap-5 sm:gap-6 bg-[#1a1a1a] p-6 sm:p-8 lg:p-12 rounded-xl border border-[#2a2a2a] w-full animate-fade-in-up-delay-300">
              <h1 className="text-2xl sm:text-3xl font-bold">Redes sociais</h1>
              <div className="flex flex-row gap-4">
                <InfoWithIcon
                  icon="linkedin"
                  title="LinkedIn"
                  content="Vinicius Stephanto"
                />
              </div>
              <div className="flex flex-row gap-4">
                <InfoWithIcon
                  icon="github"
                  title="GitHub"
                  content="stephanto-dev"
                />
              </div>
              <div className="flex flex-row gap-4">
                <InfoWithIcon
                  icon="twitter"
                  title="Twitter"
                  content="@StephantoDev"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
