"use client"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";

const CTA = () => {
  initMercadoPago("APP_USR-7c2ba65a-c502-419c-9cef-528edfc78617");
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(()=>{
    fetch('/api/createPreference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ title: 'qr generator', unit_price: 1000, quantity: 1 }] }),
    })
    .then(response => response.json())
    .then(data => {
      const preference = data.id;
      setPreferenceId(preference)
      // Usar preferenceId en tu componente CheckoutButton
    })
    .catch((error) => console.error('Error:', error));
  }, [])


  return (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-gray-800 text-3xl font-semibold sm:text-4xl"
          id="oss"
        >
          QRapidoAI es completamente GRATIS
        </h2>
        <p className="mt-3 text-gray-600">
          Ayudanos a seguir brindando mas apps como estas.
        </p>
               {preferenceId && <Wallet 
        initialization={{ preferenceId }}/>}


      </div>
    </div>
  </SectionWrapper>
)};

const SectionWrapper = ({ children, ...props }: any) => (
  <section {...props} className={`py-16 ${props.className || ''}`}>
    {children}
  </section>
);

export default CTA;
