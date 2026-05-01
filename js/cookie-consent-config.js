/**
 * EffiNova – Cookie Consent Konfiguration
 * Basis: vanilla-cookieconsent v3
 * Sprache: Deutsch (Sie-Form), konsistent mit der Website
 */
(function () {
  if (!window.CookieConsent) return;

  // Pfad-Präfix: von /blog/ eine Ebene hoch, sonst leer
  var basePath = location.pathname.indexOf('/blog/') !== -1 ? '../' : '';
  var linkDatenschutz = basePath + 'datenschutz.html';
  var linkImpressum = basePath + 'impressum.html';

  /**
   * Google Consent Mode v2 — Update-Funktion
   * Mappt Cookie-Banner-Kategorien auf Google Consent-Typen
   */
  function updateGoogleConsent() {
    if (typeof gtag !== 'function') return;

    var analytics = CookieConsent.acceptedCategory('analytics');
    var marketing = CookieConsent.acceptedCategory('marketing');
    var functional = CookieConsent.acceptedCategory('functional');

    gtag('consent', 'update', {
      'ad_storage': marketing ? 'granted' : 'denied',
      'ad_user_data': marketing ? 'granted' : 'denied',
      'ad_personalization': marketing ? 'granted' : 'denied',
      'analytics_storage': analytics ? 'granted' : 'denied',
      'functionality_storage': functional ? 'granted' : 'denied',
      'personalization_storage': functional ? 'granted' : 'denied'
    });
  }

  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'cloud',
        position: 'bottom center',
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    root: 'body',
    autoShow: true,
    disablePageInteraction: false,
    hideFromBots: true,
    mode: 'opt-in',
    revision: 0,

    cookie: {
      name: 'effinova_consent',
      domain: location.hostname,
      path: '/',
      sameSite: 'Lax',
      expiresAfterDays: 182
    },

    onConsent: function () {
      updateGoogleConsent();
    },

    onChange: function () {
      updateGoogleConsent();
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      functional: {},
      analytics: {},
      marketing: {}
    },

    language: {
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: 'Privatsphäre-Einstellungen',
            description:
              'Wir verwenden Cookies und ähnliche Technologien, um unsere Website bestmöglich zu gestalten. Einige sind technisch notwendig, andere helfen uns, das Angebot für Sie zu verbessern. Sie entscheiden selbst, welche Kategorien Sie zulassen. Details finden Sie in unserer <a href="' + linkDatenschutz + '" target="_blank" rel="noopener">Datenschutzerklärung</a>.',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Alle ablehnen',
            showPreferencesBtn: 'Einstellungen',
            footer: '<a href="' + linkImpressum + '" target="_blank" rel="noopener">Impressum</a> · <a href="' + linkDatenschutz + '" target="_blank" rel="noopener">Datenschutz</a>'
          },
          preferencesModal: {
            title: 'Individuelle Privatsphäre-Einstellungen',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Alle ablehnen',
            savePreferencesBtn: 'Auswahl speichern',
            closeIconLabel: 'Schließen',
            serviceCounterLabel: 'Services',
            sections: [
              {
                title: 'Cookies und ähnliche Technologien',
                description:
                  'Wir nutzen Cookies und vergleichbare Technologien, um grundlegende Funktionen bereitzustellen und – mit Ihrer Einwilligung – das Angebot kontinuierlich zu verbessern. Sie können Ihre Einwilligung jederzeit über den Button „Privatsphäre-Einstellungen" unten links anpassen oder widerrufen.'
              },
              {
                title: 'Essenziell',
                description:
                  'Essenzielle Services sind für die grundlegende Funktionalität der Website erforderlich. Sie enthalten nur technisch notwendige Services. Diese können nicht abgewählt werden.',
                linkedCategory: 'necessary',
                services: {
                  cookie_consent: {
                    label: 'Cookie-Einwilligung',
                    onAccept: function () {},
                    cookieTable: {
                      headers: {
                        name: 'Name',
                        domain: 'Anbieter',
                        desc: 'Zweck',
                        exp: 'Laufzeit'
                      },
                      body: [
                        {
                          name: 'effinova_consent',
                          domain: 'effi-nova.de',
                          desc: 'Speichert die Einwilligungsentscheidung der Besucher.',
                          exp: '6 Monate'
                        }
                      ]
                    }
                  },
                  font_awesome: {
                    label: 'Font Awesome (Icons)',
                    cookieTable: {
                      headers: {
                        name: 'Service',
                        domain: 'Anbieter',
                        desc: 'Zweck',
                        exp: 'Laufzeit'
                      },
                      body: [
                        {
                          name: 'Font Awesome Icons',
                          domain: 'cdnjs.cloudflare.com',
                          desc: 'Lädt Icon-Font zur Darstellung grafischer Symbole. Es werden keine Cookies gesetzt.',
                          exp: 'Session'
                        }
                      ]
                    }
                  }
                }
              },
              {
                title: 'Funktional',
                description:
                  'Funktionale Services sind notwendig, um über die wesentliche Funktionalität der Website hinausgehende Features bereitzustellen. Komfortfunktionen wie eingebettete Videos oder Schriftarten werden dadurch möglich.',
                linkedCategory: 'functional'
              },
              {
                title: 'Statistik',
                description:
                  'Statistik-Services werden benötigt, um pseudonymisierte Daten über die Besucher der Website zu sammeln. Die Daten ermöglichen es uns, die Nutzung der Website besser zu verstehen und das Angebot zu verbessern.',
                linkedCategory: 'analytics',
                services: {
                  google_tag_manager: {
                    label: 'Google Tag Manager',
                    cookieTable: {
                      headers: {
                        name: 'Name',
                        domain: 'Anbieter',
                        desc: 'Zweck',
                        exp: 'Laufzeit'
                      },
                      body: [
                        {
                          name: '_ga, _ga_*',
                          domain: 'effi-nova.de',
                          desc: 'Erfasst anonymisierte Statistiken zur Website-Nutzung via Google Analytics (über GTM eingebunden).',
                          exp: '2 Jahre'
                        }
                      ]
                    }
                  }
                }
              },
              {
                title: 'Marketing',
                description:
                  'Marketing-Services werden von uns und Dritten genutzt, um das Verhalten einzelner Nutzer aufzuzeichnen, die gesammelten Informationen zu verarbeiten und an Dritte weiterzugeben. Die Daten werden häufig für personalisierte Werbung genutzt.',
                linkedCategory: 'marketing',
                services: {
                  google_ads: {
                    label: 'Google Ads & Conversion-Tracking',
                    cookieTable: {
                      headers: {
                        name: 'Name',
                        domain: 'Anbieter',
                        desc: 'Zweck',
                        exp: 'Laufzeit'
                      },
                      body: [
                        {
                          name: '_gcl_au',
                          domain: 'effi-nova.de',
                          desc: 'Speichert Conversion-Daten für Google Ads Kampagnen.',
                          exp: '90 Tage'
                        },
                        {
                          name: '_gcl_aw',
                          domain: 'effi-nova.de',
                          desc: 'Verknüpft Website-Besuche mit Google Ads Klicks.',
                          exp: '90 Tage'
                        }
                      ]
                    }
                  }
                }
              },
              {
                title: 'Weitere Informationen',
                description:
                  'Bei Fragen zu Ihrer Einwilligung oder zur Verarbeitung personenbezogener Daten wenden Sie sich bitte an uns unter <a href="mailto:mail@effi-nova.de">mail@effi-nova.de</a>. Weitere Informationen finden Sie in unserer <a href="' + linkDatenschutz + '" target="_blank" rel="noopener">Datenschutzerklärung</a> und im <a href="' + linkImpressum + '" target="_blank" rel="noopener">Impressum</a>.'
              }
            ]
          }
        }
      }
    }
  });

  window.openCookiePreferences = function () {
    if (window.CookieConsent && typeof window.CookieConsent.showPreferences === 'function') {
      window.CookieConsent.showPreferences();
    }
  };
})();
