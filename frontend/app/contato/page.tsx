import Header from "@/components/header";
import InfoWithIcon from "@/components/info-with-icon";

export default function Contato() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-between gap-16 px-6 sm:px-10 lg:px-24 py-8 sm:py-10 lg:py-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold">Entre em contato</h1>
          <p className="text-xl text-slate-400">
            Quer conversar sobre um projeto ou apenas bater um papo? Entre em
            contato comigo!
          </p>
        </div>

        <div className="flex justify-center items-stretch gap-8">
          <div className="flex flex-col flex-1 bg-[#1a1a1a] p-12 rounded-xl border border-[#2a2a2a] w-3/5 min-h-0">
            <h1 className="text-3xl font-bold">Envie uma mensagem</h1>
            <form className="flex flex-1 flex-col gap-6 min-h-0">
              <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-1 flex-col gap-2 min-w-0">
                  <label
                    htmlFor="nome"
                    className="text-sm font-medium text-slate-400"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="bg-background border border-[#2a2a2a] rounded-xl p-3 w-full "
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 min-w-0">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background border border-[#2a2a2a] rounded-xl p-3 w-full "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assunto"
                  className="text-sm font-medium text-slate-400"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Assunto da mensagem"
                  className="bg-background border border-[#2a2a2a] rounded-xl p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensagem"
                  className="text-sm font-medium text-slate-400"
                >
                  Mensagem
                </label>
                <textarea
                  placeholder="Escreva sua mensagem aqui..."
                  className="bg-background border border-[#2a2a2a] rounded-xl p-3 resize-none flex-1 min-h-56"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-black font-bold px-4 py-2 rounded-xl w-full hover:cursor-pointer hover:bg-primary/80 transition-all duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-6 bg-[#1a1a1a] p-12 rounded-xl border border-[#2a2a2a] w-full">
              <h1 className="text-3xl font-bold">Informações de contato</h1>
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
            <div className="flex flex-col gap-6 bg-[#1a1a1a] p-12 rounded-xl border border-[#2a2a2a] w-full">
              <h1 className="text-3xl font-bold">Redes sociais</h1>
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
