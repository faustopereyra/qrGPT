import { NextRequest } from 'next/server';
import mercadopago from 'mercadopago';

export async function POST(request: NextRequest) {
    const reqBody = (await request.json()) 
  try {
    if(!process.env.MERCADOPAGO_ACCESS_TOKEN) {
        return new Response(JSON.stringify({ error: 'Missing MercadoPago Access Token' }), {
            status: 500
        })
    }
    // Configura tus credenciales
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
    });

    //const preferenceData = JSON.parse(await request.text());
    const preference = await mercadopago.preferences.create(reqBody);

    return new Response(JSON.stringify({ id: preference.body.id }), {
        status: 200
    })

  } catch (error) {
    console.error('Error creating preference: ', error);
    return new Response(JSON.stringify({ error: 'Error creating preference' }), {
        status: 500
    })
  }
}