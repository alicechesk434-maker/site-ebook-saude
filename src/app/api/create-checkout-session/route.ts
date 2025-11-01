import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'E-book: Receitas Saudáveis para uma Vida Melhor',
              description: 'Descubra mais de 50 receitas deliciosas e nutritivas para transformar sua alimentação.',
              images: ['https://example.com/ebook-cover.jpg'], // Substitua por URL real
            },
            unit_amount: 2990, // R$ 29,90
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}