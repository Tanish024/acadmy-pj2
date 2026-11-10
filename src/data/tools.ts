export interface ToolItem {
  id: string
  name: string
  category: string
  badge?: string
}

export const TOOLS: ToolItem[] = [
  { id: 'chatgpt', name: 'ChatGPT', category: 'LLMs & Reasoning' },
  { id: 'claude', name: 'Claude', category: 'Coding & Analysis' },
  { id: 'gemini', name: 'Gemini', category: 'Multimodal AI' },
  { id: 'canva', name: 'Canva', category: 'AI Visuals & Design' },
  { id: 'lovable', name: 'Lovable', category: 'AI Web Apps' },
  { id: 'n8n', name: 'n8n', category: 'Autonomous Agents' },
  { id: 'make', name: 'Make', category: 'Workflow Automation' },
]
