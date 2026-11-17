import React from 'react';
const reviewUrl = 'https://g.page/r/CUYqMR89zPNBEBM/review';
export default function ReviewInvitation() {
  return <section className="carplus-review" aria-labelledby="carplus-review-title">
    <div className="carplus-review-inner">
      <a className="carplus-review-art" href={reviewUrl} target="_blank" rel="noopener noreferrer" aria-label="Avaliar a Carplus Vistorias no Google (abre em nova aba)">
        <img src="/images/avalie-carplus-vistorias.png" width="1536" height="1024" loading="lazy" decoding="async" alt="Carplus Vistorias: sua opinião faz a diferença. Avalie sua experiência no Google." />
      </a>
      <div><span className="carplus-review-label">JÁ FOI ATENDIDO PELA CARPLUS?</span>
        <h2 id="carplus-review-title">Conte como foi sua experiência</h2>
        <p>Seu feedback ajuda a melhorar nosso atendimento e orienta quem procura uma vistoria automotiva. Compartilhe sua opinião sincera sobre a Carplus Vistorias.</p>
        <a className="carplus-review-cta" href={reviewUrl} target="_blank" rel="noopener noreferrer">Escrever minha avaliação no Google</a>
        <small className="carplus-review-note">O link abre o perfil da Carplus no Google em uma nova aba.</small>
      </div>
    </div>
  </section>;
}
