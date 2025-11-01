export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-4xl font-bold text-green-600">Compra Realizada com Sucesso!</h1>
      <p className="text-xl text-muted-foreground text-center">
        Obrigado por adquirir o E-book: Receitas Saudáveis para uma Vida Melhor.
      </p>
      <p className="text-lg text-center">
        Você receberá um email com o link para download do e-book em breve.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Voltar ao Início
      </a>
    </div>
  );
}