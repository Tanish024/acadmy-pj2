export interface LeadRecord {
  id: string
  fullName: string
  whatsapp: string
  email: string
  currentStatus: 'student' | 'professional' | 'freelancer'
  organization: string
  programme: string
  preferredBatch: string
  referralSource: string
  sourceCTA: string
  timestamp: string
  status: 'New' | 'Contacted' | 'Call Scheduled' | 'Enrolled'
}

export type NewLeadInput = Omit<LeadRecord, 'id' | 'timestamp' | 'status'> & {
  status?: LeadRecord['status']
}

export const LEADS_STORAGE_KEY = 'ai_academy_leads'

export const INITIAL_LEADS: LeadRecord[] = [
  {
    id: 'LD-9021',
    fullName: 'Aarav Mehta',
    whatsapp: '9876543210',
    email: 'aarav.mehta@gmail.com',
    currentStatus: 'student',
    organization: 'IIT Bombay (Final Year B.Tech)',
    programme: 'AI for Students',
    preferredBatch: 'Nov 24, 2026',
    referralSource: 'LinkedIn',
    sourceCTA: 'Hero Register Now',
    timestamp: '2026-11-09T14:32:00.000Z',
    status: 'Call Scheduled',
  },
  {
    id: 'LD-9022',
    fullName: 'Priya Sharma',
    whatsapp: '9822334455',
    email: 'priya.sharma@razorpay.com',
    currentStatus: 'professional',
    organization: 'Razorpay (Senior Product Designer)',
    programme: 'AI for Working Professionals',
    preferredBatch: 'Nov 24, 2026',
    referralSource: 'Twitter/X',
    sourceCTA: 'Navbar Register Now',
    timestamp: '2026-11-09T18:15:00.000Z',
    status: 'New',
  },
  {
    id: 'LD-9023',
    fullName: 'Rohan Gupta',
    whatsapp: '9765432109',
    email: 'rohan.gupta@growthcurve.io',
    currentStatus: 'freelancer',
    organization: 'GrowthCurve Agency',
    programme: 'No-Code Automation',
    preferredBatch: 'Dec 15, 2026',
    referralSource: 'Friend/Colleague',
    sourceCTA: 'Pricing Register Now',
    timestamp: '2026-11-10T08:20:00.000Z',
    status: 'Contacted',
  },
  {
    id: 'LD-9024',
    fullName: 'Ananya Verma',
    whatsapp: '9988776655',
    email: 'ananya.v@deloitte.com',
    currentStatus: 'professional',
    organization: 'Deloitte Consulting',
    programme: 'AI Content Creation',
    preferredBatch: 'Nov 24, 2026',
    referralSource: 'Google Search',
    sourceCTA: 'Final CTA Register Now',
    timestamp: '2026-11-10T09:45:00.000Z',
    status: 'Enrolled',
  },
  {
    id: 'LD-9025',
    fullName: 'Devansh Kulkarni',
    whatsapp: '9456789012',
    email: 'devansh.k@bits-pilani.ac.in',
    currentStatus: 'student',
    organization: 'BITS Pilani',
    programme: 'AI for Students',
    preferredBatch: 'Jan 12, 2027',
    referralSource: 'Instagram',
    sourceCTA: 'Mobile Bottom CTA',
    timestamp: '2026-11-10T10:10:00.000Z',
    status: 'New',
  },
]

export function getStoredLeads(): LeadRecord[] {
  if (typeof window === 'undefined') return INITIAL_LEADS
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS))
      return INITIAL_LEADS
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_LEADS
  } catch (err) {
    console.error('Error reading leads from localStorage:', err)
    return INITIAL_LEADS
  }
}

export function saveLead(newLead: NewLeadInput): LeadRecord {
  const existing = getStoredLeads()
  const randomId = Math.floor(1000 + Math.random() * 9000)
  const fullRecord: LeadRecord = {
    ...newLead,
    id: `LD-${randomId}`,
    timestamp: new Date().toISOString(),
    status: newLead.status || 'New',
  }

  const updated = [fullRecord, ...existing]
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated))
  } catch (err) {
    console.error('Error saving lead to localStorage:', err)
  }

  return fullRecord
}

export function exportLeadsToCSV(leads: LeadRecord[]): void {
  const headers = [
    'Lead ID',
    'Full Name',
    'WhatsApp Number',
    'Email Address',
    'Current Status',
    'College or Company',
    'Programme',
    'Preferred Batch',
    'Referral Source',
    'Source CTA',
    'Submitted At',
    'Lead Status',
  ]

  const rows = leads.map((l) => [
    `"${l.id}"`,
    `"${l.fullName.replace(/"/g, '""')}"`,
    `"${l.whatsapp}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.currentStatus}"`,
    `"${(l.organization || '').replace(/"/g, '""')}"`,
    `"${l.programme.replace(/"/g, '""')}"`,
    `"${l.preferredBatch.replace(/"/g, '""')}"`,
    `"${(l.referralSource || '').replace(/"/g, '""')}"`,
    `"${l.sourceCTA.replace(/"/g, '""')}"`,
    `"${new Date(l.timestamp).toLocaleString('en-IN')}"`,
    `"${l.status}"`,
  ])

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `ai_academy_leads_${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
