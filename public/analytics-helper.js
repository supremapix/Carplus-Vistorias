/**
 * Carplus Vistorias - Universal Analytics Helper & Global Click Listener
 * GA4 (G-VKE1G7W3LW) + Google Ads / Meta Pixel / Bing UET mirroring & conversions.
 */

window.trackEvent = function(name, params = {}) {
  try {
    params.page_path = location.pathname;
    params.send_to = 'G-VKE1G7W3LW';
    
    // GA4 gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    } else if (window.dataLayer) {
      window.dataLayer.push({ event: name, ...params });
    }

    // Google Ads conversion helper if exists
    if (['whatsapp_click', 'phone_click', 'generate_lead'].includes(name)) {
      if (typeof window.gtag_report_conversion === 'function') {
        try { window.gtag_report_conversion(); } catch(e) {}
      }
    }

    // Mirror to Meta Pixel (fbq) & Bing UET (uetq) if exist
    if (['whatsapp_click', 'phone_click'].includes(name)) {
      if (typeof window.fbq === 'function') {
        try { window.fbq('track', 'Contact'); } catch(e) {}
      }
      if (window.uetq && typeof window.uetq.push === 'function') {
        try { window.uetq.push('event', 'contact', { event_category: 'lead' }); } catch(e) {}
      }
    }
    if (name === 'generate_lead') {
      if (typeof window.fbq === 'function') {
        try { window.fbq('track', 'Lead'); } catch(e) {}
      }
      if (window.uetq && typeof window.uetq.push === 'function') {
        try { window.uetq.push('event', 'generate_lead', {}); } catch(e) {}
      }
    }
  } catch (err) {
    console.error('Analytics error:', err);
  }
};

window.trackFormSubmission = function(formName, serviceName, vehicleType, contactMethod) {
  window.trackEvent('generate_lead', {
    form_name: formName || 'formulario_contato',
    service_name: serviceName || 'Vistoria Cautelar',
    vehicle_type: vehicleType || 'carro',
    contact_method: contactMethod || 'formulario',
    currency: 'BRL',
    value: 0
  });
};

// Global click delegation listener
document.addEventListener('click', function(e) {
  try {
    const el = e.target.closest('a, button, [data-track-click]');
    if (!el) return;

    const href = el.getAttribute('href') || el.getAttribute('data-href') || '';
    const textContent = (el.innerText || el.getAttribute('aria-label') || el.getAttribute('title') || '').trim();
    const button_text = textContent.substring(0, 100);

    // Find click_location
    let locationEl = el.closest('[data-track-location]');
    let click_location = locationEl ? locationEl.getAttribute('data-track-location') : 'outro';

    // Find service_name & vehicle_type
    let serviceEl = el.closest('[data-service]');
    let service_name = serviceEl ? serviceEl.getAttribute('data-service') : undefined;

    let vehicleEl = el.closest('[data-vehicle-type]');
    let vehicle_type = vehicleEl ? vehicleEl.getAttribute('data-vehicle-type') : undefined;

    // Detect type of link/click
    if (href.includes('wa.me') || href.includes('api.whatsapp.com') || href.includes('web.whatsapp.com') || href.startsWith('whatsapp://')) {
      window.trackEvent('whatsapp_click', {
        click_location,
        button_text,
        link_url: href,
        service_name,
        vehicle_type,
        contact_method: 'whatsapp'
      });
    } else if (href.startsWith('tel:')) {
      window.trackEvent('phone_click', {
        click_location,
        button_text,
        link_url: href,
        service_name,
        vehicle_type,
        contact_method: 'telefone'
      });
    } else if (href.startsWith('mailto:')) {
      window.trackEvent('email_click', {
        click_location,
        button_text,
        link_url: href,
        service_name,
        vehicle_type,
        contact_method: 'email'
      });
    } else if (href.includes('google.com/maps') || href.includes('maps.app.goo.gl') || href.includes('waze.com')) {
      window.trackEvent('directions_click', {
        click_location,
        button_text,
        link_url: href,
        service_name,
        vehicle_type,
        contact_method: 'maps'
      });
    } else if (href.includes('instagram.com') || href.includes('facebook.com') || href.includes('youtube.com') || href.includes('tiktok.com') || href.includes('linkedin.com') || href.includes('twitter.com') || href.includes('x.com')) {
      let social_network = 'outro';
      if (href.includes('instagram')) social_network = 'instagram';
      else if (href.includes('facebook')) social_network = 'facebook';
      else if (href.includes('youtube')) social_network = 'youtube';
      else if (href.includes('tiktok')) social_network = 'tiktok';
      else if (href.includes('linkedin')) social_network = 'linkedin';
      else if (href.includes('twitter') || href.includes('x.com')) social_network = 'twitter';

      window.trackEvent('social_click', {
        click_location,
        button_text,
        link_url: href,
        social_network,
        service_name,
        vehicle_type
      });
    }
  } catch (err) {
    console.error('Click tracking error:', err);
  }
});
