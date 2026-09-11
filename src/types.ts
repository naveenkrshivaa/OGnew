export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  eyebrow: string;
  badge: string;
  desc: string;
  features: string[];
  metrics: { label: string; val: string }[];
}

export interface IndustryItem {
  id: string;
  sector: string;
  title: string;
  desc: string;
  bullets: string[];
  stat1: string;
  stat1Text: string;
  stat2: string;
  stat2Text: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}

export interface LiveTelemetryNode {
  city: string;
  country: string;
  tz: string;
  time: string;
  status: 'OPTIMAL' | 'HIGH_TRAFFIC' | 'NOMINAL';
  activeAnalysts: number;
  slaAdherence: number;
  avgHandlingTime: string;
  activeTickets: number;
}

export interface SimulatedTicket {
  id: string;
  timestamp: string;
  channel: 'Voice' | 'Chat' | 'Email' | 'VIP';
  sector: string;
  status: 'Resolved' | 'In Progress' | 'Escalated';
  latency: string;
  csat: string;
}
