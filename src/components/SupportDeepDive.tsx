import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mail, Award, CheckCircle, Activity, Radio, ChevronUp } from 'lucide-react';
import { SimulatedTicket } from '../types';

export const SupportDeepDive: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '1y'>('30d');
  const [hoveredPoint, setHoveredPoint] = useState<{ day: string; tickets: number; sla: number } | null>(null);

  // Simulated live ticket stream
  const [ticketFeed, setTicketFeed] = useState<SimulatedTicket[]>([
    { id: 'TKT-9481', timestamp: '10:34:12', channel: 'VIP', sector: 'Tier-1 Asset Mgmt', status: 'Resolved', latency: '24s', csat: '5/5' },
    { id: 'TKT-9480', timestamp: '10:33:55', channel: 'Chat', sector: 'FinTech Platform', status: 'Resolved', latency: '18s', csat: '5/5' },
    { id: 'TKT-9479', timestamp: '10:33:41', channel: 'Voice', sector: 'Enterprise SaaS', status: 'In Progress', latency: '32s', csat: 'Pending' },
    { id: 'TKT-9478', timestamp: '10:33:20', channel: 'Email', sector: 'Retail Omnichannel', status: 'Resolved', latency: '4m 10s', csat: '5/5' }
  ]);

  // Periodic simulation of new ticket ingestion
  useEffect(() => {
    const interval = setInterval(() => {
      const channels: ('Voice' | 'Chat' | 'Email' | 'VIP')[] = ['Voice', 'Chat', 'Email', 'VIP'];
      const sectors = ['Global FinTech', 'Mortgage Lending', 'Cloud SaaS', 'Aviation Desk', 'Retail Flagship'];
      const randChannel = channels[Math.floor(Math.random() * channels.length)];
      const randSector = sectors[Math.floor(Math.random() * sectors.length)];
      const randId = `TKT-${Math.floor(1000 + Math.random() * 9000)}`;

      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const newTicket: SimulatedTicket = {
        id: randId,
        timestamp: timeStr,
        channel: randChannel,
        sector: randSector,
        status: Math.random() > 0.3 ? 'Resolved' : 'In Progress',
        latency: `${Math.floor(15 + Math.random() * 30)}s`,
        csat: '5/5'
      };

      setTicketFeed((prev) => [newTicket, ...prev.slice(0, 3)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const chartPoints = [
    { day: 'Mon', x: 20, y: 62, tickets: 4820, sla: 99.8 },
    { day: 'Tue', x: 95, y: 48, tickets: 5310, sla: 99.9 },
    { day: 'Wed', x: 170, y: 52, tickets: 5120, sla: 99.7 },
    { day: 'Thu', x: 245, y: 32, tickets: 6140, sla: 99.8 },
    { day: 'Fri', x: 320, y: 42, tickets: 5890, sla: 99.9 },
    { day: 'Sat', x: 395, y: 22, tickets: 4100, sla: 100.0 },
    { day: 'Sun', x: 470, y: 26, tickets: 3950, sla: 100.0 }
  ];

  const channels = [
    {
      title: 'Voice Support',
      desc: 'Inbound & Tier-2 Resolution',
      icon: Phone,
      latency: '< 28s ASA'
    },
    {
      title: 'Live Chat',
      desc: 'Sub-45s First Response',
      icon: MessageSquare,
      latency: '< 18s ASA'
    },
    {
      title: 'Email Desk',
      desc: 'Complex Case Research',
      icon: Mail,
      latency: '< 2h Turnaround'
    },
    {
      title: 'Social & VIP',
      desc: 'Reputation & Public Desk',
      icon: Award,
      latency: '< 15m Escalation'
    }
  ];

  return (
    <section className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Deep Dive Narrative & Channels */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
              Deep Dive
            </span>
            <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
              The sovereign standard in customer experience.
            </h2>
            <p className="text-base lg:text-lg text-[#d1c5b4] leading-relaxed mb-8">
              We don't manage ticket counts. We protect enterprise customer lifetime value through empathic communication,
              institutional technical knowledge, and continuous training matrices.
            </p>

            {/* 4 Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {channels.map((chan) => {
                const Icon = chan.icon;
                return (
                  <div
                    key={chan.title}
                    className="p-4 bg-[#1c1b1e] border border-white/5 hover:border-[#c5a059]/40 flex items-start gap-3 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-sm font-semibold text-[#e5e1e4] block">
                        {chan.title}
                      </span>
                      <span className="text-xs text-[#8e9099] block mb-1">{chan.desc}</span>
                      <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">
                        {chan.latency}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Institutional Quality Assurances */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d1c5b4]">
                <CheckCircle size={16} className="text-[#e9c176] shrink-0" />
                <span>Dedicated quality assurance directors assigned per account.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d1c5b4]">
                <CheckCircle size={16} className="text-[#e9c176] shrink-0" />
                <span>Live telemetry dashboards with executive-level transparency.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d1c5b4]">
                <CheckCircle size={16} className="text-[#e9c176] shrink-0" />
                <span>Bespoke brand immersion playbooks with continuous tone certification.</span>
              </div>
            </div>
          </div>

          {/* Right: Live Telemetry Console & Real-Time Stats */}
          <div className="lg:col-span-6">
            <div className="bg-[#18191e] border border-[#c5a059]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-[#e5e1e4] uppercase tracking-wider">
                    Live Operations Floor Telemetry
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#2a2a2c] text-[10px] text-[#e9c176] uppercase tracking-wider font-mono">
                    Node: Global Tier-1 (London · Manila)
                  </span>
                </div>
              </div>

              {/* KPI Bars with Timeframe Toggle */}
              <div className="flex items-center justify-end gap-1 mb-4">
                {(['30d', '90d', '1y'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-2 py-0.5 text-[10px] uppercase font-semibold cursor-pointer transition-colors ${
                      timeRange === range
                        ? 'bg-[#c5a059] text-[#0e0e10]'
                        : 'bg-[#201f22] text-[#8e9099] hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#131315] border border-white/5 p-4">
                  <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
                    {timeRange.toUpperCase()} CSAT Adherence
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-md text-2xl sm:text-3xl text-[#e5e1e4] font-serif">
                      96.8%
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center">
                      <ChevronUp size={14} /> +1.4%
                    </span>
                  </div>
                  <div className="w-full bg-[#2a2a2c] h-1.5 mt-3 overflow-hidden">
                    <div className="bg-[#e9c176] h-full transition-all duration-700" style={{ width: '96.8%' }} />
                  </div>
                </div>

                <div className="bg-[#131315] border border-white/5 p-4">
                  <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
                    First Contact Resolution
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-md text-2xl sm:text-3xl text-[#e5e1e4] font-serif">
                      88.4%
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center">
                      <ChevronUp size={14} /> +2.1%
                    </span>
                  </div>
                  <div className="w-full bg-[#2a2a2c] h-1.5 mt-3 overflow-hidden">
                    <div className="bg-[#e9c176] h-full transition-all duration-700" style={{ width: '88.4%' }} />
                  </div>
                </div>
              </div>

              {/* Interactive Ingestion vs SLA Chart */}
              <div className="bg-[#131315] border border-white/5 p-4 mb-6">
                <div className="flex justify-between items-center mb-3 text-xs">
                  <span className="text-[#8e9099] uppercase tracking-wider text-[10px] font-semibold">
                    Ticket Ingestion vs SLA Clear (7-Day Trend)
                  </span>
                  <span className="text-[#e9c176] font-semibold text-[11px]">100% In-Band Resolution</span>
                </div>

                <div className="relative">
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 500 85" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradSupport" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#C5A059" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#C5A059" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Shaded Area */}
                    <path
                      d="M20,62 Q95,48 170,52 T320,42 T470,26 L470,85 L20,85 Z"
                      fill="url(#chartGradSupport)"
                    />

                    {/* Gold Curve */}
                    <path
                      d="M20,62 Q95,48 170,52 T320,42 T470,26"
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="2.5"
                    />

                    {/* Interactive Datapoints */}
                    {chartPoints.map((pt, i) => (
                      <g key={i}>
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={hoveredPoint?.day === pt.day ? 6 : 4}
                          fill={hoveredPoint?.day === pt.day ? '#FFFFFF' : '#E9C176'}
                          stroke="#0e0e10"
                          strokeWidth="2"
                          className="cursor-pointer transition-all"
                          onMouseEnter={() => setHoveredPoint(pt)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Tooltip */}
                  {hoveredPoint && (
                    <div className="absolute top-0 right-0 bg-[#201f22] border border-[#c5a059] px-2.5 py-1 text-[11px] shadow-lg pointer-events-none">
                      <span className="text-[#e9c176] font-semibold">{hoveredPoint.day}:</span> {hoveredPoint.tickets} tickets · {hoveredPoint.sla}% SLA
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-[10px] text-[#8e9099] mt-2 uppercase tracking-wider font-mono">
                  {chartPoints.map((p) => (
                    <span key={p.day}>{p.day}</span>
                  ))}
                </div>
              </div>

              {/* Simulated Live Ticket Activity Feed */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-[#c5a059] uppercase tracking-widest flex items-center gap-1.5">
                    <Radio size={12} className="animate-pulse text-emerald-400" />
                    Live Activity Stream (Real-Time Ingestion)
                  </span>
                  <span className="text-[10px] text-[#8e9099]">Auto-sync 4s</span>
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  {ticketFeed.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between p-1.5 bg-[#131315]/80 border border-white/5 text-[#d1c5b4]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#e9c176] font-semibold">{t.id}</span>
                        <span className="px-1 py-0.2 bg-[#2a2a2c] text-[#8e9099] text-[9px] uppercase">
                          {t.channel}
                        </span>
                        <span className="text-[#e5e1e4] hidden sm:inline">{t.sector}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-emerald-400">{t.status}</span>
                        <span className="text-[10px] text-[#8e9099]">{t.latency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
