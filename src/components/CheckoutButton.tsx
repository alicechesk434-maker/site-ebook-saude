'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Validação da chave pública do Stripe
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY não está definida');
}

const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    // Verificar se o Stripe está configurado
    if (!stripePublishableKey) {
      alert('Configuração do Stripe não encontrada. Entre em contato com o suporte.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao criar sessão de checkout');
      }

      const { sessionId } = await response.json();

      const stripe = await stripePromise;
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
      } else {
        throw new Error('Erro ao inicializar o Stripe');
      }
    } catch (error) {
      console.error('Erro no checkout:', error);
      alert('Erro ao processar o pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
    >
      {loading ? 'Processando...' : 'Comprar Agora - R$ 29,90'}
    </button>
  );
}