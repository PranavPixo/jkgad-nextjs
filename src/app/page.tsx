'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/* ============================================================
   TOP UTILITY BAR
   ============================================================ */
function TopUtilityBar() {
  const [accessOpen, setAccessOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div style={{
      background: '#F3F3F3', borderBottom: '1px solid #ccc', fontSize: '12px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '4px 10px', flexWrap: 'wrap', gap: '4px',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href="#main-content" style={{ color: '#333', textDecoration: 'underline', fontSize: '11px' }}>
          SKIP TO MAIN CONTENT
        </a>
        <span style={{ color: '#aaa' }}>|</span>
        <span style={{ color: '#333' }}>जम्मू और कश्मीर सरकार</span>
        <span style={{ color: '#aaa' }}>|</span>
        <span style={{ color: '#333' }}>Government of Jammu and Kashmir</span>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
        {/* Search */}
        <a href="#" title="Search Officers" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/img/search-icon.png" alt="Search" width={18} height={18} style={{ objectFit: 'contain' }} />
        </a>

        {/* Accessibility */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => { setAccessOpen(!accessOpen); setLangOpen(false); }}
            style={{
              background: 'none', border: '1px solid #ccc', cursor: 'pointer',
              padding: '2px 6px', fontSize: '11px', borderRadius: '3px',
              display: 'flex', alignItems: 'center', gap: '4px'
            }}>
            <Image src="/img/accessibility.png" alt="Accessibility" width={14} height={14} style={{ objectFit: 'contain' }} />
            Accessibility
          </button>
          {accessOpen && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, background: '#fff',
              border: '1px solid #ccc', zIndex: 1000, minWidth: '170px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
            }}>
              {['Font Size Increase', 'Normal Font', 'Font Size Decrease', 'High Contrast', 'Normal Contrast'].map((item, i) => (
                <div key={i} onClick={() => setAccessOpen(false)} style={{
                  padding: '5px 10px', cursor: 'pointer', fontSize: '11px',
                  background: (item === 'Normal Font' || item === 'Normal Contrast') ? '#e0e0e0' : '#fff',
                  fontWeight: (item === 'Normal Font' || item === 'Normal Contrast') ? 'bold' : 'normal',
                  borderBottom: '1px solid #eee'
                }}>{item}{(item === 'Normal Font' || item === 'Normal Contrast') ? ' ✓' : ''}</div>
              ))}
            </div>
          )}
        </div>

        {/* Language */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => { setLangOpen(!langOpen); setAccessOpen(false); }}
            style={{
              background: '#333', color: '#fff', border: 'none', cursor: 'pointer',
              padding: '3px 10px', fontSize: '11px', borderRadius: '3px'
            }}>
            English ▼
          </button>
          {langOpen && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, background: '#fff',
              border: '1px solid #ccc', zIndex: 1000, minWidth: '100px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
            }}>
              {[{ label: 'हिन्दी' }, { label: 'اُردُو' }].map((lang, i) => (
                <div key={i} style={{ padding: '6px 12px', cursor: 'pointer', fontSize: '13px', borderBottom: '1px solid #eee' }}>
                  <a href="#" style={{ color: '#333', textDecoration: 'none' }}>{lang.label}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN HEADER
   ============================================================ */
function MainHeader() {
  return (
    <div style={{
      background: '#fff', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '8px 16px', borderBottom: '2px solid #35409A',
    }}>
      {/* Left: Emblem + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Image src="/img/emblem.png" alt="Emblem of India — सत्यमेव जयते" width={60} height={90}
          style={{ objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <div style={{ color: '#FF0000', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Arial, sans-serif' }}>
            सामान्य प्रशासन विभाग
          </div>
          <h1 style={{
            color: '#000', fontWeight: 'bold', fontSize: '18px', margin: '3px 0',
            textTransform: 'uppercase', letterSpacing: '0.3px', fontFamily: 'Arial, sans-serif'
          }}>
            General Administration Department
          </h1>
          <div style={{ color: '#008000', fontWeight: 'bold', fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>
            عمومی انتظامی محکمہ
          </div>
        </div>
      </div>

      {/* Right: Partner logos */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="https://swachhbharat.mygov.in/" target="_blank" rel="noreferrer">
          <Image src="/img/swach-bharat.png" alt="Swachh Bharat" width={95} height={80}
            style={{ objectFit: 'contain', display: 'block' }} />
        </a>
        <a href="http://digitalindia.gov.in/" target="_blank" rel="noreferrer">
          <Image src="/img/digital-india.jpg" alt="Digital India" width={95} height={80}
            style={{ objectFit: 'contain', display: 'block' }} />
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   MARQUEE (CSS animated)
   ============================================================ */
function Marquee({ text, speed = 40 }: { text: string; speed?: number }) {
  const duration = Math.max(10, text.length / speed * 10);
  const uid = useRef(`mq-${Math.random().toString(36).slice(2)}`).current;
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
      <style>{`
        @keyframes ${uid} { 0%{transform:translateX(100%)} 100%{transform:translateX(-100%)} }
        .${uid} { display:inline-block; white-space:nowrap; animation:${uid} ${duration}s linear infinite; padding-left:8px; font-size:12px; color:#000; }
      `}</style>
      <div className={uid}>{text}</div>
    </div>
  );
}

/* ============================================================
   FLASH TICKER
   ============================================================ */
function FlashTicker() {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', height: '24px' }}>
      <div style={{
        width: '16%', background: '#CD7F32', color: '#fff', fontWeight: 'bold',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '12px', flexShrink: 0,
      }}>Flash</div>
      <div style={{ width: '84%', background: '#B8D5FF', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Marquee text="" />
      </div>
    </div>
  );
}

/* ============================================================
   PUBLIC NOTICE TICKER
   ============================================================ */
function PublicNoticeTicker() {
  const text = `General Public can reach out to the Administrative Secretaries and other officers of the departments by registering their request through these telephone numbers 0194-2506144/ 0194-2506115/ 0194-2506102/ 0194-2506111/ 0194-2506112 between 10.A.M to 5.00 P. M. on each working day`;
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', height: '24px' }}>
      <div style={{
        width: '16%', background: '#008000', color: '#fff', fontWeight: 'bold',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '12px', flexShrink: 0,
      }}>Public Notice</div>
      <div style={{ width: '84%', background: '#B8D5FF', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Marquee text={text} />
      </div>
    </div>
  );
}

/* ============================================================
   NAV BAR
   ============================================================ */
const navItems = [
  { label: 'Home', href: '#' },
  {
    label: 'Employees Corner', href: '#', children: [
      'Former Chief Secretaries', 'Former Adm. Secretaries', 'Civil List-IAS', 'JKAS',
      'Common Pool Officers', 'Under/Private Secretaries', 'Officers in GAD', 'SOs/HAs/SAs/JAs/MTS',
    ]
  },
  { label: 'Orders', href: '#', children: ['Orders', 'Statutory Rules'] },
  { label: 'Ministers/Advisors', href: '#', children: ['Council of Ministers', 'Advisors'] },
  {
    label: 'RTI/PSG/Awards', href: '#', children: [
      'Right To Information', "Lieutenant Governor's Address", 'Public Service Guarantee',
      'Publication', 'Recipients of various Awards',
    ]
  },
];

const moreItems = [
  { section: 'Administrative Departments/Divcoms/DCs', items: ['Administrative Departments', 'Subjects Assigned to GAD', 'Organization Chart', 'Divisional/Deputy Commissioners'] },
  { section: 'Prosecution/PRS', items: ['Accord of Prosecution Sanction', 'Property Statement Archive'] },
  { section: 'Directory/Forms', items: ['Telephone Directory', 'Email Directory', 'Useful Links', 'Forms'] },
  { section: 'Speeches', items: ["Lieutenant Governor's Address"] },
  { section: 'Others', items: ['Vacancy Notifications in GoI', 'Citizen Charter', 'BAS Report for Civil Secretariat', 'Apply Online PAN Card', 'Download App'] },
];

function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  return (
    <nav style={{ background: '#35409A', position: 'relative', zIndex: 100 }}>
      <style>{`
        .nav-link { color:#fff; padding:10px 14px; display:block; white-space:nowrap; font-size:13px; font-family:Arial,sans-serif; cursor:pointer; }
        .nav-link:hover { background:#2a3480; }
        .drop-item { color:#333; padding:7px 14px; display:block; font-size:12px; white-space:nowrap; text-decoration:none; }
        .drop-item:hover { background:#EFF3FB; color:#35409A; }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
        {navItems.map(item => (
          <div key={item.label} style={{ position: 'relative' }}
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}>
            <a href={item.href} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
              {item.label}{item.children ? ' ▾' : ''}
            </a>
            {item.children && openMenu === item.label && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, background: '#fff',
                border: '1px solid #ccc', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                minWidth: '220px', zIndex: 200,
              }}>
                {item.children.map(child => (
                  <a key={child} href="#" className="drop-item">{child}</a>
                ))}
              </div>
            )}
          </div>
        ))}
        {/* More */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}>
          <div className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>☰ More</div>
          {showMore && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, background: '#fff',
              border: '1px solid #ccc', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              minWidth: '280px', zIndex: 200, maxHeight: '70vh', overflowY: 'auto',
            }}>
              {moreItems.map(section => (
                <div key={section.section}>
                  <div style={{ background: '#35409A', color: '#fff', padding: '6px 14px', fontWeight: 'bold', fontSize: '12px' }}>
                    {section.section}
                  </div>
                  {section.items.map(item => <a key={item} href="#" className="drop-item">{item}</a>)}
                </div>
              ))}
              <div style={{ textAlign: 'right', padding: '5px 10px', borderTop: '1px solid #ddd' }}>
                <button onClick={() => setShowMore(false)} style={{
                  background: '#35409A', color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '3px 10px', fontSize: '11px', borderRadius: '3px'
                }}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO BANNER CAROUSEL  (real images)
   ============================================================ */
const slides = [
  { src: '/slider/Civil_sect.jpeg',          alt: 'Civil Secretariat Jammu & Kashmir' },
  { src: '/slider/Dal_lake.jpg',             alt: 'Dal Lake House Boat' },
  { src: '/slider/Bahufort.jpeg',            alt: 'Bahu Fort' },
  { src: '/slider/Janbhagidari_banner.jpg',  alt: 'Janbhagidari' },
  { src: '/slider/land_record.jpg',          alt: 'Land Records' },
  { src: '/slider/har_ghar_tiranga.jpeg',    alt: 'Har Ghar Tiranga - Amrit Mahotsav' },
  { src: '/slider/Amrit_banner.jpg',         alt: 'Amrit Mahotsav' },
  { src: '/slider/RAS.png',                  alt: 'Rehabilitation Assistance Scheme' },
  { src: '/slider/G20.jpg',                  alt: 'G20' },
  { src: '/slider/MMM3.jpeg',                alt: 'Government Initiative' },
  { src: '/slider/MMM4.jpeg',                alt: 'Government Initiative' },
  { src: '/slider/MMM5.jpeg',                alt: 'Government Initiative' },
  { src: '/slider/MMM6.jpeg',                alt: 'Government Initiative' },
  { src: '/slider/MMM7.jpeg',                alt: 'Government Initiative' },
  { src: '/slider/AarogyaSetu.jpg',          alt: 'Aarogya Setu' },
];

function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing]);

  return (
    <div style={{ position: 'relative', height: '225px', overflow: 'hidden', background: '#000' }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
        }}>
          <Image src={slide.src} alt={slide.alt} fill
            style={{ objectFit: 'cover' }} priority={i === 0} />
        </div>
      ))}

      {/* Controls */}
      <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} style={{
        position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', cursor: 'pointer',
        padding: '7px 12px', fontSize: '16px', borderRadius: '3px', zIndex: 10,
      }}>&lt;&lt;</button>

      <button onClick={() => setCurrent(c => (c + 1) % slides.length)} style={{
        position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', cursor: 'pointer',
        padding: '7px 12px', fontSize: '16px', borderRadius: '3px', zIndex: 10,
      }}>&gt;&gt;</button>

      <button onClick={() => setPlaying(p => !p)} style={{
        position: 'absolute', right: '54px', bottom: '10px',
        background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', cursor: 'pointer',
        padding: '3px 9px', fontSize: '14px', borderRadius: '3px', zIndex: 10,
      }}>{playing ? '⏸' : '►'}</button>

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: 8, height: 8, borderRadius: '50%', cursor: 'pointer',
            background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(255,255,255,0.6)',
          }} />
        ))}
      </div>

      {/* Blue bottom accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '5px', background: '#35409A', zIndex: 10 }} />
    </div>
  );
}

/* ============================================================
   ORDERS TABLE
   ============================================================ */
const ordersData = [
  { date: '24/11/2026', type: 'Circular', subject: 'Celebration of the Constitution Day on 26th November 2026 instructions thereof' },
  { date: '20/11/2026', type: 'Order',    subject: 'Promotion to the Super Time Scale of the Jammu and Kashmir Administrative Service JKAS' },
  { date: '20/11/2026', type: 'Order',    subject: 'Promotion to the Selection Grade of the Jammu and Kashmir Administrative Service JKAS' },
  { date: '20/11/2026', type: 'Order',    subject: 'Promotion to the Special Scale of the Jammu and Kashmir Administrative Seruice JKAS' },
  { date: '18/11/2026', type: 'Order',    subject: 'Tentative common Seniority list of members of the Jammu and Kashmir Private Secretaries to Head of Departments Gazetted Service as on 01-09-2026' },
  { date: '17/11/2026', type: 'Order',    subject: 'Posting of officer from Union territory of Jammu and Kashmir to the Union territory of Ladakh - Transfer and posting thereof' },
  { date: '16/11/2026', type: 'Order',    subject: 'Constitution of District level committees for Jammu Samba and Kathua districts for implementing City Gas Distribution Policy 2026 and facilitating availability of Natural Gas to end consumers' },
  { date: '16/11/2026', type: 'Circular', subject: 'Timely clearance of Electricity dues of Government Departments' },
  { date: '16/11/2026', type: 'Circular', subject: 'Onboarding of 2O9 Government Services on JKGRAS Portal for Digital Remittance of Government Receipts' },
  { date: '16/11/2026', type: 'Circular', subject: 'Mandatory Capturing of Government Receipt Number GRN for All Government Receipts and Integration of Revenue Collection Services with JKGRAS and TreasuryNet Portals under JKIFMS' },
  { date: '16/11/2026', type: 'Order',    subject: 'Grant of Defined Pension Scheme Old Pension Scheme in favour of eligible members of JK Secretariat Subordinate Service' },
  { date: '13/11/2026', type: 'Order',    subject: 'Grant of Selection Grade Non-functional in favour of the Junior Scale members of the Jammu and Kashmir Administrative Service' },
  { date: '13/11/2026', type: 'Order',    subject: 'Grant of Defined Pension Scheme Old Pension Scheme in favour of eligible members of Jammu and Kashmir Administrative Service' },
  { date: '13/11/2026', type: 'Order',    subject: 'Pomotion of Class-IV employees of the JK Secretariat Subordinate Service' },
  { date: '12/11/2026', type: 'Circular', subject: 'Instruction for recording/forwarding of PARs of IAS officers for the period April-October 2O26' },
];

function OrdersTable() {
  return (
    <div>
      <table style={{
        width: '100%', borderCollapse: 'collapse', border: '1px solid #000',
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '13px',
      }}>
        <thead>
          <tr style={{ background: '#35409A', color: '#fff' }}>
            <th style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'left', fontFamily: 'Verdana,sans-serif', fontWeight: 'bold', whiteSpace: 'nowrap', width: '120px' }}>Date/Type</th>
            <th style={{ padding: '6px 8px', border: '1px solid #000', textAlign: 'left', fontFamily: 'Verdana,sans-serif', fontWeight: 'bold' }}>Order Subject</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#EFF3FB' : '#fff' }}>
              <td style={{ padding: '5px 8px', border: '1px solid #ccc', color: '#35409A', whiteSpace: 'nowrap', fontSize: '12px', verticalAlign: 'top' }}>
                <div>{row.date}</div>
                <div style={{ fontStyle: 'italic' }}>{row.type}</div>
              </td>
              <td style={{ padding: '5px 8px', border: '1px solid #ccc', color: '#35409A', fontSize: '12px', lineHeight: '1.4' }}>
                <a href="#" style={{ color: '#35409A', textDecoration: 'none' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}>
                  {row.subject}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ background: '#35409A', color: '#fff' }}>
            <td colSpan={2} style={{ padding: '6px 8px', textAlign: 'center', fontSize: '12px' }}>
              <a href="#" style={{ color: '#fff', marginRight: '10px' }}>Archive</a>
              <span style={{ color: '#ccc' }}>|</span>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}>Search Orders</a>
              <span style={{ color: '#ccc' }}>|</span>
              <a href="#" style={{ color: '#fff', marginLeft: '10px' }}>Previous</a>
              <span style={{ color: '#ccc', margin: '0 4px' }}>|</span>
              <a href="#" style={{ color: '#fff' }}>Next</a>
            </td>
          </tr>
        </tfoot>
      </table>
      <div style={{ color: '#35409A', fontStyle: 'italic', fontWeight: 'bold', fontSize: '12px', marginTop: '5px', textAlign: 'right' }}>
        Last Order Upload On : 25 Nov 2026 11:00
      </div>
    </div>
  );
}

/* ============================================================
   CALENDAR WIDGET
   ============================================================ */
const calendarWeeks = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
];

const holidays: Record<number, { title: string; color: string; bg: string }> = {
  8:  { title: 'Diwali', color: '#000', bg: '#ffe082' },
  10: { title: 'Urs Shah Asrar-ud-Din Sahib (Kishtwar, Doda & Ramban Districts only)*', color: '#fff', bg: '#0000FF' },
  24: { title: "Guru Nanak Dev Ji's Birthday", color: '#fff', bg: '#FF0000' },
};

function CalendarWidget() {
  const today = 25;
  return (
    <div style={{ border: '1px solid #000', background: '#fff', fontFamily: 'Calibri, sans-serif' }}>
      <div style={{ background: '#35409A', color: '#fff', padding: '5px 8px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold' }}>CALENDER</h2>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontWeight: 'bold', fontSize: '12px' }}>
        <thead>
          <tr>
            <td colSpan={7} style={{ textAlign: 'center', padding: '4px 2px', borderBottom: '1px solid #ccc' }}>
              <span style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }}>◀ Oct</span>
              <span style={{ color: '#0000FF', fontWeight: 'bold' }}>November 2026</span>
              <span style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}>Dec ▶</span>
            </td>
          </tr>
          <tr style={{ background: '#EFF3FB' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <th key={d} style={{ padding: '3px 2px', textAlign: 'center', fontSize: '10px', border: '1px solid #ddd' }}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((day, di) => {
                const h = day ? holidays[day] : undefined;
                const isToday = day === today;
                return (
                  <td key={di} title={h?.title} style={{
                    textAlign: 'center', padding: '3px 2px', border: '1px solid #eee',
                    background: h ? h.bg : isToday ? '#E6ECFF' : '#fff',
                    color: h ? h.color : isToday ? '#35409A' : '#333',
                    cursor: day ? 'pointer' : 'default', fontSize: '11px', fontWeight: 'bold',
                  }}>{day ?? ''}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================
   NOTICE BOARD  (smooth JS scroll)
   ============================================================ */
const notices = [
  'Observance of Vigilance Awareness Week 2026',
  'Verification of Character and Antecedents',
  'Preparation of Budget Estimates of 2027-28 and Revised Estimates 2026-27',
  'Authorization of further funds under Revenue Budget out of BE 2026-27',
  'Celebration of Independence Day 2026-Taking of Salute thereof',
  'ADVERTISEMENT NOTIFICATION',
  'Deputation of Senior Assistants/Junior Assistants for undergoing JK Secretariat Assistants Training Course',
];

function NoticeBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    let raf: number;
    const step = () => {
      posRef.current -= 0.5;
      if (Math.abs(posRef.current) >= content.scrollHeight / 2) posRef.current = 0;
      content.style.transform = `translateY(${posRef.current}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ border: '1px solid #000', background: '#E6ECFF', marginTop: '10px' }}>
      <div style={{
        background: '#35409A', color: '#fff', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', padding: '5px 8px',
      }}>
        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Notice Board</span>
        <a href="#" style={{ color: '#fff', fontSize: '11px' }}>Read More</a>
      </div>
      <div ref={containerRef} style={{ height: '160px', overflow: 'hidden', padding: '4px' }}>
        <div ref={contentRef}>
          {[...notices, ...notices].map((n, i) => (
            <div key={i} style={{ padding: '5px 4px', borderBottom: '1px solid #ccc' }}>
              <a href="#" style={{ color: '#35409A', textDecoration: 'none', fontSize: '12px', lineHeight: '1.4', display: 'block' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}>
                🔹 {n}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   QUICK LINKS  (real circular images)
   ============================================================ */
const quickLinks = [
  { label: 'JANBHAGIDHARI', href: 'https://janbhagidari.jk.gov.in/',  img: '/quicklinks/janbhagidari.jpg' },
  { label: 'She Box',       href: 'https://shebox.wcd.gov.in/',        img: '/quicklinks/shebox.jpg' },
  { label: 'LRIS',          href: 'https://landrecords.jk.gov.in/',    img: '/quicklinks/land_record.jpg' },
  { label: 'HRMS',          href: 'https://hrms.jk.gov.in/',           img: '/quicklinks/jkhrms.png' },
  { label: 'PRS',           href: 'https://prs.jk.gov.in/',            img: '/quicklinks/PRS_GAD.jpg' },
  { label: 'JK Samadhan',   href: 'https://samadhan.jk.gov.in/login',  img: '/quicklinks/SamadhanR.png' },
];

function QuickLinks() {
  return (
    <div>
      <h4 style={{
        textAlign: 'center', margin: 0, padding: '8px 0',
        background: '#fff', fontWeight: 'bold', fontSize: '14px',
        border: '1px solid #ddd', borderTop: '3px solid #35409A',
      }}>QUICK LINKS</h4>
      <div style={{
        background: '#424E9E', padding: '16px 10px',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '18px',
      }}>
        {quickLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', overflow: 'hidden',
              background: '#fff', border: '3px solid rgba(255,255,255,0.7)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)', position: 'relative',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 14px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'; }}>
              <Image src={link.img} alt={link.label} fill style={{ objectFit: 'cover' }} />
            </div>
            <span style={{ color: '#fff', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', maxWidth: '90px' }}>
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   IMPORTANT SITES CAROUSEL  (real logos)
   ============================================================ */
const importantSites = [
  { label: 'PMINDIA',        href: 'http://www.pmindia.gov.in/en/',              img: '/sites/pmindia.png' },
  { label: 'JK Samadhan',    href: 'https://singlewindow.jk.gov.in/e_samadhan', img: '/quicklinks/SamadhanR.png' },
  { label: 'PMNRF',          href: 'https://www.pmnrf.gov.in/',                  img: '/sites/PMNRF.png' },
  { label: 'data.gov.in',    href: 'https://data.gov.in/',                       img: '/sites/Gov.png' },
  { label: 'MyGov',          href: 'https://www.mygov.in/',                      img: '/sites/Mygov.png' },
  { label: 'Incredible India',href: 'https://incredibleindia.org/',               img: '/sites/Incred_india.png' },
  { label: 'Make in India',  href: 'http://www.makeinindia.com/',                 img: '/sites/makeinindia.png' },
];

function ImportantSites() {
  const [start, setStart] = useState(0);
  const visible = 5;
  const shown = importantSites.slice(start, start + visible);

  return (
    <div style={{ background: '#fff', borderTop: '3px solid #35409A' }}>
      <div style={{ textAlign: 'center', padding: '5px 0', background: '#f9f9f9', borderBottom: '1px solid #ddd', fontSize: '12px', color: '#555', fontWeight: 'bold' }}>
        Other Important Links
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 0' }}>
        <button onClick={() => setStart(s => Math.max(0, s - 1))} disabled={start === 0} style={{
          background: '#35409A', color: '#fff', border: 'none', cursor: 'pointer',
          padding: '5px 12px', borderRadius: '3px', fontSize: '16px', opacity: start === 0 ? 0.4 : 1,
        }}>‹</button>
        <div style={{ display: 'flex', borderLeft: '1px solid #ddd' }}>
          {shown.map(site => (
            <a key={site.label} href={site.href} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: 130, height: 80, borderRight: '1px solid #ddd', textDecoration: 'none',
                color: '#333', fontSize: '11px', fontWeight: 'bold', gap: '6px',
                background: '#fff', padding: '4px',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#f5f5f5')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#fff')}>
              <div style={{ position: 'relative', width: 60, height: 40 }}>
                <Image src={site.img} alt={site.label} fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ textAlign: 'center', lineHeight: '1.2' }}>{site.label}</span>
            </a>
          ))}
        </div>
        <button onClick={() => setStart(s => Math.min(importantSites.length - visible, s + 1))}
          disabled={start >= importantSites.length - visible} style={{
            background: '#35409A', color: '#fff', border: 'none', cursor: 'pointer',
            padding: '5px 12px', borderRadius: '3px', fontSize: '16px',
            opacity: start >= importantSites.length - visible ? 0.4 : 1,
          }}>›</button>
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '12px 10px', fontSize: '12px', lineHeight: '1.9' }}>
      <div>Website Designed, Developed and Hosted by National Informatics Centre, Jammu &amp; Kashmir</div>
      <div>Content Provided and Maintained by General Administration Department, Government of Jammu &amp; Kashmir</div>
      <div>
        You are Visitor No :&nbsp;
        {['3', '7', '7', '1', '0', '2', '9', '7'].map((d, i) => (
          <span key={i} style={{
            display: 'inline-block', background: '#333', color: '#fff', fontWeight: 'bold',
            fontSize: '12px', padding: '1px 4px', border: '1px solid #666', marginRight: '1px',
          }}>{d}</span>
        ))}
      </div>
      <div style={{ marginTop: '4px' }}>
        <mark style={{ background: '#FFFF00', color: '#000', fontStyle: 'italic', padding: '1px 6px' }}>
          Best Viewed in Crome and Firefox
        </mark>
      </div>
    </footer>
  );
}

/* ============================================================
   PAGE ROOT
   ============================================================ */
export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', maxWidth: '1280px', margin: '0 auto' }}>
      <TopUtilityBar />
      <MainHeader />
      <FlashTicker />
      <NavBar />
      <PublicNoticeTicker />
      <HeroBanner />

      {/* Main two-column content */}
      <div id="main-content" style={{ background: '#E6ECFF', padding: '12px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 68%', minWidth: 0 }}>
            <OrdersTable />
          </div>
          <div style={{ flex: '0 0 30%', minWidth: 0 }}>
            <CalendarWidget />
            <NoticeBoard />
          </div>
        </div>
      </div>

      <QuickLinks />
      <ImportantSites />
      <Footer />
    </div>
  );
}
