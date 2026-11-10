import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Search,
  Download,
  Sparkles,
  Phone,
  Mail,
  Workflow,
  RefreshCw,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { getStoredLeads, exportLeadsToCSV, type LeadRecord } from '@/lib/leads'

export const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<LeadRecord[]>(() => getStoredLeads())
  const [search, setSearch] = useState('')
  const [programmeFilter, setProgrammeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const refreshLeads = () => {
    setLeads(getStoredLeads())
  }

  // Filter logic
  const filteredLeads = leads.filter((lead) => {
    const query = search.toLowerCase()
    const matchesSearch =
      lead.fullName.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.whatsapp.includes(query) ||
      lead.organization.toLowerCase().includes(query) ||
      lead.programme.toLowerCase().includes(query)

    const matchesProg =
      programmeFilter === 'all' || lead.programme === programmeFilter

    const matchesStatus =
      statusFilter === 'all' || lead.status === statusFilter

    return matchesSearch && matchesProg && matchesStatus
  })

  const getStatusBadgeVariant = (status: LeadRecord['status']) => {
    switch (status) {
      case 'New':
        return 'primary'
      case 'Call Scheduled':
        return 'accent'
      case 'Contacted':
        return 'neutral'
      case 'Enrolled':
        return 'success'
      default:
        return 'neutral'
    }
  }

  const handleExport = () => {
    exportLeadsToCSV(filteredLeads)
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] transition-colors duration-200">
      {/* Top Admin Header */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-30">
        <Container size="lg">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)] border border-[var(--border)] focus-ring transition-colors"
                title="Back to Landing Page"
              >
                <ArrowLeft size={18} />
              </Link>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary-tint)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-base sm:text-lg text-[var(--text)] leading-tight">
                    Lead Management Portal
                  </h1>
                  <p className="text-[11px] text-[var(--muted)]">
                    Real-time localStorage cohort submissions
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                variant="ghost"
                size="sm"
                onClick={refreshLeads}
                leftIcon={<RefreshCw size={14} />}
                className="hidden sm:inline-flex"
              >
                Refresh
              </Button>
              <ThemeToggle />
              <Link to="/">
                <Button variant="secondary" size="sm">
                  View Site
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Admin Content */}
      <main className="py-8 sm:py-12">
        <Container size="lg">
          <div className="space-y-8">
            {/* 1. Production Pipeline Architecture Card */}
            <Card
              padding="lg"
              className="border-[var(--primary)]/30 bg-[var(--surface)] relative overflow-hidden shadow-[0_2px_12px_rgba(108,122,224,0.05)]"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[var(--primary-tint)] text-[var(--primary)] flex items-center justify-center">
                      <Workflow size={16} />
                    </div>
                    <h3 className="text-sm font-bold font-heading text-[var(--text)]">
                      Planned Production Lead Orchestration (n8n / Make)
                    </h3>
                  </div>
                  <Badge variant="primary" size="sm">
                    Automated Webhook Architecture
                  </Badge>
                </div>

                <p className="text-xs text-[var(--muted)] leading-relaxed max-w-3xl">
                  In live production, every form submission fires an asynchronous webhook triggering this multi-stage lifecycle pipeline:
                </p>

                {/* Visual Pipeline Flow Steps */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 pt-2">
                  {/* Step 1 */}
                  <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--primary)] block font-semibold">STAGE 1</span>
                    <div className="text-xs font-bold text-[var(--text)]">Landing Form</div>
                    <p className="text-[10px] text-[var(--muted)]">2-Step React Captures</p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--primary)] block font-semibold">STAGE 2</span>
                    <div className="text-xs font-bold text-[var(--text)]">Google Sheets / Airtable</div>
                    <p className="text-[10px] text-[var(--muted)]">Instant Record Sync</p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-[var(--primary-tint)]/60 border border-[var(--primary)]/30 rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--primary)] block font-semibold">STAGE 3</span>
                    <div className="text-xs font-bold text-[var(--primary)]">Instant WhatsApp & Email</div>
                    <p className="text-[10px] text-[var(--primary)]/80">Syllabus PDF + Notice</p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--primary)] block font-semibold">STAGE 4</span>
                    <div className="text-xs font-bold text-[var(--text)]">Reminder Sequence</div>
                    <p className="text-[10px] text-[var(--muted)]">24h / 48h Follow-up</p>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--primary)] block font-semibold">STAGE 5</span>
                    <div className="text-xs font-bold text-[var(--text)]">Counselling Call</div>
                    <p className="text-[10px] text-[var(--muted)]">10-Min Advisor Chat</p>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-[var(--success-tint)]/60 border border-[var(--success)]/30 rounded-xl p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[var(--success)] block font-semibold">STAGE 6</span>
                    <div className="text-xs font-bold text-[#2C7A50] dark:text-[var(--success)]">Payment Link</div>
                    <p className="text-[10px] text-[var(--muted)]">Razorpay / Stripe EMI</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 2. Top Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card padding="sm" className="space-y-1 text-left">
                <span className="text-xs text-[var(--muted)] font-medium">Total Captured Leads</span>
                <p className="text-2xl font-bold font-heading text-[var(--text)]">{leads.length}</p>
              </Card>
              <Card padding="sm" className="space-y-1 text-left">
                <span className="text-xs text-[var(--muted)] font-medium">Calls Scheduled</span>
                <p className="text-2xl font-bold font-heading text-[#B45A28] dark:text-[var(--accent)]">
                  {leads.filter((l) => l.status === 'Call Scheduled').length}
                </p>
              </Card>
              <Card padding="sm" className="space-y-1 text-left">
                <span className="text-xs text-[var(--muted)] font-medium">Enrolled</span>
                <p className="text-2xl font-bold font-heading text-[var(--success)]">
                  {leads.filter((l) => l.status === 'Enrolled').length}
                </p>
              </Card>
              <Card padding="sm" className="space-y-1 text-left">
                <span className="text-xs text-[var(--muted)] font-medium">New Inquiries</span>
                <p className="text-2xl font-bold font-heading text-[var(--primary)]">
                  {leads.filter((l) => l.status === 'New').length}
                </p>
              </Card>
            </div>

            {/* 3. Search, Filter by Programme, and Export CSV */}
            <Card padding="md" className="space-y-4">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                  <Input
                    placeholder="Search by name, email, WhatsApp, or college/company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    leftIcon={<Search size={16} />}
                  />
                </div>

                {/* Filters & Export */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Filter by Programme */}
                  <div className="w-52">
                    <Select
                      value={programmeFilter}
                      onChange={(e) => setProgrammeFilter(e.target.value)}
                      options={[
                        { value: 'all', label: 'All Programmes' },
                        { value: 'AI for Students', label: 'AI for Students' },
                        { value: 'AI for Working Professionals', label: 'AI for Working Professionals' },
                        { value: 'No-Code Automation', label: 'No-Code Automation' },
                        { value: 'AI Content Creation', label: 'AI Content Creation' },
                      ]}
                    />
                  </div>

                  {/* Filter by Status */}
                  <div className="w-36">
                    <Select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      options={[
                        { value: 'all', label: 'All Statuses' },
                        { value: 'New', label: 'New' },
                        { value: 'Call Scheduled', label: 'Call Scheduled' },
                        { value: 'Contacted', label: 'Contacted' },
                        { value: 'Enrolled', label: 'Enrolled' },
                      ]}
                    />
                  </div>

                  {/* Export CSV Button */}
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleExport}
                    leftIcon={<Download size={16} />}
                    className="shrink-0 font-semibold"
                  >
                    Export CSV ({filteredLeads.length})
                  </Button>
                </div>
              </div>
            </Card>

            {/* 4. Leads Table */}
            <Card padding="none" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[var(--surface-hover)] border-b border-[var(--border)] text-[var(--muted)] uppercase font-semibold text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Candidate</th>
                      <th className="py-3.5 px-4 sm:px-6">Contact & WhatsApp</th>
                      <th className="py-3.5 px-4 sm:px-6">College / Company</th>
                      <th className="py-3.5 px-4 sm:px-6">Programme & Batch</th>
                      <th className="py-3.5 px-4 sm:px-6">Source CTA</th>
                      <th className="py-3.5 px-4 sm:px-6">Status</th>
                      <th className="py-3.5 px-4 sm:px-6">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {filteredLeads.length > 0 ? (
                      filteredLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          className="hover:bg-[var(--surface-hover)] transition-colors"
                        >
                          {/* Candidate name & ID */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="font-semibold text-[var(--text)] font-heading">
                              {lead.fullName}
                            </div>
                            <div className="text-xs text-[var(--muted)] font-mono">
                              {lead.id} • <span className="capitalize">{lead.currentStatus}</span>
                            </div>
                          </td>

                          {/* Contact & WhatsApp */}
                          <td className="py-4 px-4 sm:px-6 space-y-1">
                            <div className="flex items-center gap-1.5 text-[var(--text)]">
                              <Phone size={13} className="text-[#25D366] shrink-0" />
                              <a
                                href={`https://wa.me/91${lead.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs hover:underline text-[var(--text)]"
                              >
                                +91 {lead.whatsapp}
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5 text-[var(--muted)] text-xs">
                              <Mail size={13} className="shrink-0" />
                              <span>{lead.email}</span>
                            </div>
                          </td>

                          {/* College / Company */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="text-[var(--text)] font-medium max-w-[200px] truncate">
                              {lead.organization || '—'}
                            </div>
                            <div className="text-[11px] text-[var(--muted)]">
                              Via: {lead.referralSource || 'Direct'}
                            </div>
                          </td>

                          {/* Programme & Batch */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="text-[var(--text)] font-medium">
                              {lead.programme}
                            </div>
                            <div className="text-xs text-[var(--muted)] font-mono">
                              Batch: {lead.preferredBatch}
                            </div>
                          </td>

                          {/* Source CTA */}
                          <td className="py-4 px-4 sm:px-6">
                            <span className="px-2 py-0.5 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-xs font-mono text-[var(--muted)] inline-block">
                              {lead.sourceCTA}
                            </span>
                          </td>

                          {/* Status Badge */}
                          <td className="py-4 px-4 sm:px-6">
                            <Badge variant={getStatusBadgeVariant(lead.status)} dot size="sm">
                              {lead.status}
                            </Badge>
                          </td>

                          {/* Timestamp */}
                          <td className="py-4 px-4 sm:px-6 text-[var(--muted)] text-xs font-mono whitespace-nowrap">
                            {new Date(lead.timestamp).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-[var(--muted)]">
                          No leads matching the current filter criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </main>
    </div>
  )
}
