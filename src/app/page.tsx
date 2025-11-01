import CheckoutButton from '@/components/CheckoutButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-green-600">Receitas Saudáveis</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            E-book: Receitas Saudáveis para uma Vida Melhor
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra mais de 50 receitas deliciosas e nutritivas que vão transformar sua alimentação.
            Aprenda a cozinhar pratos saudáveis que são fáceis de preparar e incrivelmente saborosos.
          </p>
          <div className="mb-8">
            <CheckoutButton />
          </div>
          <div className="bg-green-100 p-6 rounded-lg inline-block">
            <p className="text-lg font-semibold text-green-800">Preço Especial: R$ 29,90</p>
            <p className="text-green-600">Acesso imediato após a compra</p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Por que escolher nosso e-book?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Receitas Deliciosas</h4>
              <p className="text-gray-600">Pratos que combinam saúde e sabor, perfeitos para toda a família.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fáceis e Rápidas</h4>
              <p className="text-gray-600">Instruções simples e tempos de preparo acessíveis para o dia a dia corrido.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Conteúdo Completo</h4>
              <p className="text-gray-600">Dicas de nutrição, substituições saudáveis e muito mais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Pronto para transformar sua alimentação?</h3>
          <p className="text-xl mb-8">Adquira agora e comece sua jornada para uma vida mais saudável!</p>
          <CheckoutButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Receitas Saudáveis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}