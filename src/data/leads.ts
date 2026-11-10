export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  role: 'Student' | 'Professional' | 'Career Switcher' | 'Founder'
  preferredTrack: string
  status: 'New' | 'Contacted' | 'Demo Booked' | 'Enrolled'
  createdAt: string
  notes?: string
}

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'LD-101',
    name: 'Aarav Mehta',
    email: 'aarav.mehta@example.com',
    phone: '+91 98765 43210',
    role: 'Student',
    preferredTrack: 'Generative AI & Automation',
    status: 'Demo Booked',
    createdAt: '2026-11-08',
    notes: 'Interested in AI agents and building SaaS prototypes.',
  },
  {
    id: 'LD-102',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98111 22334',
    role: 'Professional',
    preferredTrack: 'Full-Stack AI Engineering',
    status: 'New',
    createdAt: '2026-11-09',
    notes: 'Product designer wanting to automate workflows with n8n and Claude.',
  },
  {
    id: 'LD-103',
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    phone: '+91 97234 56789',
    role: 'Career Switcher',
    preferredTrack: 'Applied AI for Business',
    status: 'Contacted',
    createdAt: '2026-11-07',
    notes: 'Switching from sales operations to AI solutions consultant.',
  },
  {
    id: 'LD-104',
    name: 'Ananya Verma',
    email: 'ananya.v@example.com',
    phone: '+91 99887 76655',
    role: 'Student',
    preferredTrack: 'Generative AI & Automation',
    status: 'Enrolled',
    createdAt: '2026-11-06',
    notes: 'Final year engineering student; booked weekend cohort.',
  },
  {
    id: 'LD-105',
    name: 'Devansh Kulkarni',
    email: 'devansh.k@example.com',
    phone: '+91 94567 89012',
    role: 'Founder',
    preferredTrack: 'Full-Stack AI Engineering',
    status: 'New',
    createdAt: '2026-11-10',
    notes: 'Looking to train internal team of 4 engineers.',
  },
]
