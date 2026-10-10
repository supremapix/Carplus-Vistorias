/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function trackEvent(name: string, params: Record<string, any> = {}) {
  try {
    const fullParams = {
      ...params,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      send_to: 'G-VKE1G7W3LW'
    };

    if (typeof window !== 'undefined') {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', name, fullParams);
      } else if ((window as any).dataLayer) {
        (window as any).dataLayer.push({ event: name, ...fullParams });
      }

      // Google Ads conversion helper if exists
      if (['whatsapp_click', 'phone_click', 'generate_lead'].includes(name)) {
        if (typeof (window as any).gtag_report_conversion === 'function') {
          try { (window as any).gtag_report_conversion(); } catch (e) {}
        }
      }

      // Mirror to Meta Pixel (fbq) & Bing UET (uetq) if exist
      if (['whatsapp_click', 'phone_click'].includes(name)) {
        if (typeof (window as any).fbq === 'function') {
          try { (window as any).fbq('track', 'Contact'); } catch (e) {}
        }
        if ((window as any).uetq && typeof (window as any).uetq.push === 'function') {
          try { (window as any).uetq.push('event', 'contact', { event_category: 'lead' }); } catch (e) {}
        }
      }
      if (name === 'generate_lead') {
        if (typeof (window as any).fbq === 'function') {
          try { (window as any).fbq('track', 'Lead'); } catch (e) {}
        }
        if ((window as any).uetq && typeof (window as any).uetq.push === 'function') {
          try { (window as any).uetq.push('event', 'generate_lead', {}); } catch (e) {}
        }
      }
    }
  } catch (err) {
    console.error('Analytics trackEvent error:', err);
  }
}
