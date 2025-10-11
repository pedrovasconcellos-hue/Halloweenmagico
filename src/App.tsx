import React, { useState, useEffect } from 'react';
import { Star, Clock } from 'lucide-react';

const removeFloating = () => {
  document
    .querySelectorAll(
      '[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"][style*="z-index: 2147483647"]'
    )
    .forEach(el => el.remove());
};

removeFloating();

const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 3600;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <Clock className="w-8 h-8 text-red-500" />
      <div className="flex gap-2">
        <div className="bg-red-600 px-4 py-3 rounded-lg min-w-[70px] text-center">
          <div className="text-3xl font-bold">{String(hours).padStart(2, '0')}</div>
          <div className="text-xs uppercase">Horas</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-red-600 px-4 py-3 rounded-lg min-w-[70px] text-center">
          <div className="text-3xl font-bold">{String(minutes).padStart(2, '0')}</div>
          <div className="text-xs uppercase">Min</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-red-600 px-4 py-3 rounded-lg min-w-[70px] text-center">
          <div className="text-3xl font-bold">{String(seconds).padStart(2, '0')}</div>
          <div className="text-xs uppercase">Seg</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const ctaLink = "https://pay.kiwify.com.br/KxykoTh";

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO 1 - HERO */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                O Halloween está chegando e essa é a lembrança mais criativa que você vai levar pra casa.
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-semibold">
                +100 Páginas para Colorir, de <span className="line-through">R$59,90</span> por apenas <span className="text-yellow-300">R$19,90!</span>
              </p>
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
              </a>
            </div>
            {/* Imagem do Produto */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://imgur.com/a/CtMWYzz"
                alt="Halloween Encantado - Livro de Colorir"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - VEJA COMO É */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            Veja como é o Halloween Encantado
          </h2>
          <div className="mb-12">
            <img
              src="https://photos.fife.usercontent.google.com/pw/AP1GczOwo9gR1nFbLTUgmuC07WQ2OyWtKIoLq2koMoKNgVPqjkYZ__OtAOBY=w933-h933-s-no-gm?authuser=1"
              alt="Conteúdo do Halloween Encantado"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            />
          </div>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Mais de 100 páginas temáticas com personagens encantadores de Halloween. Uma experiência completa de diversão e criatividade para todas as idades!
          </p>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
          </a>
        </div>
      </section>

      {/* SEÇÃO 3 - O QUE VEM NO HALLOWEEN ENCANTADO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            O que vem no Halloween Encantado?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 p-8 rounded-lg shadow-lg">
              <img
                src="https://photos.fife.usercontent.google.com/pw/AP1GczOJVhciT6Vto5sWarSWnu471wXTfEjOTHix6AWDxOAUNjRrd2IUxRmk=w933-h933-s-no-gm?authuser=1"
                alt="Conteúdo 1"
                className="w-full rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="bg-orange-50 p-8 rounded-lg shadow-lg">
              <img
                src="https://photos.fife.usercontent.google.com/pw/AP1GczOJVhciT6Vto5sWarSWnu471wXTfEjOTHix6AWDxOAUNjRrd2IUxRmk=w933-h933-s-no-gm?authuser=1"
                alt="Conteúdo 2"
                className="w-full rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <ul className="text-xl text-gray-700 space-y-4 mb-8">
              <li className="flex items-center justify-center gap-3">
                <span className="text-orange-600 text-2xl">✓</span>
                <span>+100 páginas para colorir com personagens fofos de Halloween</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-orange-600 text-2xl">✓</span>
                <span>3 bônus exclusivos para aumentar a diversão</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-orange-600 text-2xl">✓</span>
                <span>Ilustrações de alta qualidade prontas para imprimir</span>
              </li>
            </ul>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - PÚBLICO */}
      <section className="py-16 md:py-24 bg-orange-600 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Quem vai amar o Halloween Encantado?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Crianças</h3>
              <p>Que adoram pintar e se divertir no Halloween</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-2">Mães e Pais</h3>
              <p>Que querem criar momentos de diversão com seus filhos</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Professores</h3>
              <p>Que buscam atividades temáticas e educativas</p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎃</div>
              <h3 className="text-xl font-bold mb-2">Adultos</h3>
              <p>Que querem aproveitar o Halloween de forma criativa</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - DEPOIMENTOS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            O que nossos clientes estão dizendo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Comprei para fazer com meu filho e virou nossa rotina da noite. Ele ama pintar os desenhos!"
              </p>
              <p className="font-bold text-gray-800">Juliana S.</p>
            </div>
            {/* Depoimento 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Estou usando em sala de aula e as crianças adoram. Recomendo muito!!"
              </p>
              <p className="font-bold text-gray-800">Prof. Ana Paula</p>
            </div>
            {/* Depoimento 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-700 mb-4">
                "Achei que seria simples, mas as ilustrações são lindas. Espero que tenha edição de Natal kkkkk."
              </p>
              <p className="font-bold text-gray-800">Rodrigo M.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - OFERTA FINAL */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A magia do Halloween passa, mas as lembranças ficam.
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            O Halloween está chegando, e com ele a magia está de volta.
            Disponível por menos de R$20,00, SOMENTE AGORA!! Vai perder essa promoção?
          </p>
          <div className="mb-8">
            <p className="text-2xl mb-2">
              De <span className="line-through text-gray-400">R$59,90</span>
            </p>
            <p className="text-5xl md:text-6xl font-bold text-yellow-300">
              Por apenas R$19,90!
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xl text-red-400 font-bold mb-4">A OFERTA EXPIRA EM:</p>
            <CountdownTimer />
          </div>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            GARANTIR MINHA EDIÇÃO DE HALLOWEEN!!
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="mb-4">
            © 2025 Halloween Encantado. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
