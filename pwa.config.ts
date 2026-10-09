import { defineConfig } from '@/types/config';

manifest: {
  id: "/",
  name: "Radio FM Salvación 107.3",
  short_name: "FM Salvación",
  description: "Escuchá Radio FM Salvación 107.3 en vivo.",
  dir: "ltr",
  lang: "es-AR",
  background_color: "#000000",
  theme_color: "#0878cf",
  display: "standalone",
  orientation: "portrait",
  scope: "/",
  start_url: "/?utm_source=homescreen",
  prefer_related_applications: false,
  shortcuts: [
    {
      name: "Escuchar radio en vivo",
      short_name: "Escuchar radio",
      description: "Abrir el reproductor de Radio FM Salvación",
      url: "/?utm_source=homescreen&radio=1"
    }
  ]
},
pwa: {
  logs: true
},
oneSignal: {
  enabled: false,
  appId: "00000000-0000-0000-0000-000000000000",
  allowLocalhostAsSecureOrigin: false
},
origin: "https://radio.fmsalvacion.com"

  },

  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://blogger-pwa.blogspot.com',
});
