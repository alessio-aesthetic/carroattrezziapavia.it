export const site = {
  domain: 'carroattrezziapavia.it',
  template: 'pavia-signature',
  description: 'Carroattrezzi a Pavia e soccorso stradale 24 ore: recupero auto, traino, assistenza moto e trasporto veicoli in città e provincia.',
  tel: '3508922659',
  city: 'Pavia',
  name: 'Carroattrezzi Pavia',
  address: 'Pavia e provincia',
  title: 'Carroattrezzi Pavia 24H | Soccorso stradale',
  phone: '350 892 2659',
  email: 'assistenza@carroattrezziapavia.it',
} as const

const serviceText = (service: string) => ({
  detail: `Quando un veicolo si ferma, ogni minuto può diventare più difficile. Per ${service.toLowerCase()} a Pavia raccogliamo prima posizione, condizioni del mezzo e destinazione desiderata, così da organizzare il recupero con indicazioni chiare e senza passaggi inutili.`,
  text: `Il servizio di ${service.toLowerCase()} a Pavia viene organizzato partendo dalla situazione reale: mezzo, posizione, accessi e punto di consegna. Le informazioni essenziali aiutano a preparare un intervento adatto.`,
})

export const services = [
  { title: 'Soccorso stradale 24 ore', slug: 'soccorso-stradale-24-ore', ...serviceText('soccorso stradale 24 ore'), text: "Un guasto non sceglie il momento. Comunica dove sei e cosa è successo per verificare la disponibilità di intervento." },
  { title: 'Traino auto', slug: 'traino-auto', ...serviceText('traino auto'), text: "Trasporto del veicolo non marciante verso l’officina o la destinazione concordata, con modalità di carico adeguate." },
  { title: 'Recupero auto incidentata', slug: 'recupero-auto-incidentata', ...serviceText('recupero auto incidentata'), text: "Valutazione di danni, ruote e accessi per organizzare con attenzione il recupero dopo un sinistro." },
  { title: 'Carroattrezzi moto', slug: 'carroattrezzi-moto', ...serviceText('carroattrezzi per moto'), text: "Recupero e trasporto di moto e scooter con fissaggi adatti alle due ruote e alle condizioni del mezzo." },
  { title: 'Assistenza batteria scarica', slug: 'assistenza-batteria-scarica', ...serviceText('assistenza per batteria scarica'), text: "Problemi di avviamento? Descrivi i segnali del veicolo per valutare l’assistenza o il trasferimento in officina." },
  { title: 'Recupero auto in panne', slug: 'recupero-auto-in-panne', ...serviceText('recupero auto in panne'), text: "Avarie, spie o un motore che non parte: organizziamo il recupero senza forzare il veicolo a proseguire." },
  { title: 'Soccorso in autostrada', slug: 'soccorso-in-autostrada', ...serviceText('soccorso in autostrada'), text: "Comunica tratta, direzione e riferimento chilometrico. Il soccorso sulla tratta è subordinato alle autorizzazioni necessarie." },
] as const

export const zones = [
  {
    "title": "Carroattrezzi a Pavia",
    "name": "Pavia",
    "slug": "pavia"
  },
  {
    "title": "Carroattrezzi a San Martino Siccomario",
    "name": "San Martino Siccomario",
    "slug": "san-martino-siccomario"
  },
  {
    "title": "Carroattrezzi a San Genesio ed Uniti",
    "name": "San Genesio ed Uniti",
    "slug": "san-genesio-ed-uniti"
  },
  {
    "title": "Carroattrezzi a Cava Manara",
    "name": "Cava Manara",
    "slug": "cava-manara"
  },
  {
    "title": "Carroattrezzi a Travacò Siccomario",
    "name": "Travacò Siccomario",
    "slug": "travaco-siccomario"
  },
  {
    "title": "Carroattrezzi a Certosa di Pavia",
    "name": "Certosa di Pavia",
    "slug": "certosa-di-pavia"
  },
  {
    "title": "Carroattrezzi a Borgarello",
    "name": "Borgarello",
    "slug": "borgarello"
  },
  {
    "title": "Carroattrezzi a Bereguardo",
    "name": "Bereguardo",
    "slug": "bereguardo"
  },
  {
    "title": "Carroattrezzi a Garlasco",
    "name": "Garlasco",
    "slug": "garlasco"
  },
  {
    "title": "Carroattrezzi a Vigevano",
    "name": "Vigevano",
    "slug": "vigevano"
  },
  {
    "title": "Carroattrezzi a Voghera",
    "name": "Voghera",
    "slug": "voghera"
  },
  {
    "title": "Carroattrezzi a Stradella",
    "name": "Stradella",
    "slug": "stradella"
  }
] as const

export const networkSites = [
  { name: 'Carroattrezzi Reggio Emilia Pro', city: 'Reggio Emilia', url: 'https://carroattrezzireggioemiliapro.it/', description: 'Soccorso stradale e recupero veicoli a Reggio Emilia.' },
  { name: 'Carroattrezzi Ravenna 24H', city: 'Ravenna', url: 'https://carroattrezziravenna24h.it/', description: 'Assistenza stradale e traino attivo a Ravenna.' },
  { name: 'Carroattrezzi Bari', city: 'Bari', url: 'https://carroattrezzibari.it/', description: 'Recupero auto e soccorso stradale a Bari.' },
  { name: 'Carroattrezzi Pavia', city: 'Pavia', url: 'https://carroattrezziapavia.it/', description: 'Traino e assistenza veicoli a Pavia.' },
] as const

export const faqs = [
  { question: 'Quanto costa un carroattrezzi a Pavia?', answer: 'Il costo dipende da posizione, tipo di veicolo, condizioni del recupero, distanza e destinazione. Prima di organizzare l’intervento raccogliamo i dati essenziali per darti un’indicazione chiara.' },
  { question: 'Fate soccorso stradale a Pavia e provincia?', answer: 'Sì, il servizio è organizzato in città, nelle zone produttive, sulle strade provinciali e nei comuni vicini, valutando accessi e caratteristiche del mezzo.' },
  { question: 'Posso scegliere dove portare l’auto?', answer: 'Sì. Puoi indicare officina, carrozzeria, deposito, abitazione o un altro indirizzo concordato prima del recupero.' },
  { question: 'Intervenite anche per moto e furgoni?', answer: 'Sì, valutiamo auto, moto, scooter e furgoni leggeri. Durante la richiesta chiediamo peso, dimensioni e posizione per preparare il mezzo adatto.' },
  { question: 'Cosa devo comunicare durante la richiesta?', answer: 'Servono posizione, tipo di veicolo, problema riscontrato, eventuali danni e destinazione. Queste informazioni aiutano a organizzare il soccorso in modo più preciso.' },
] as const
