import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, Database, CalendarDays, Play, CheckCircle2 } from 'lucide-react'

const Section = ({ id, icon, title, children }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
    <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
      {children}
    </div>
  </section>
)

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
      {n}
    </div>
    <div>
      <div className="font-medium text-slate-200 mb-1">{title}</div>
      <div className="text-slate-400 text-sm">{children}</div>
    </div>
  </div>
)

export default function AdminGuide() {
  useEffect(() => {
    document.title = 'Admin Guide — Torvyn AI Documentation'
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/docs" className="hover:text-blue-400 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-slate-200">Admin Guide</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Admin Guide</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Complete reference for setting up and managing your financial close workflow on Torvyn AI.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* On-page nav */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-10">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">On This Page</p>
          <ul className="space-y-1.5 text-sm">
            {[
              ['#gl-master', 'GL Master Data Upload'],
              ['#team', 'Team & Roles Setup'],
              ['#close-calendar', 'Close Calendar'],
              ['#generate', 'Generate Tasks for a Period'],
              ['#workflow', 'Task Workflow (Maker → Checker → CFO)'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-blue-400 hover:text-blue-300 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-12">

          <Section id="gl-master" icon={<Database size={16} />} title="GL Master Data Upload">
            <p>
              The GL Master (Chart of Accounts) is the foundation. Every reconciliation task maps to a GL account.
              Upload it once at setup; update when your chart of accounts changes.
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
              <Step n={1} title="Download the Template">
                Go to <strong>Admin → GL Master Data</strong> → click <strong>"Download Template"</strong>.
                You'll get an Excel file with columns: GL Account, Description, Account Type, BS/PL, Main Head, Sub Head.
              </Step>
              <Step n={2} title="Fill In Your Chart of Accounts">
                Export your CoA from SAP (Transaction FS00 or SE16 on SKA1 table) and paste the data into the template.
                Match column formats exactly — particularly Account Type values:
                <code className="block bg-slate-950 px-3 py-2 rounded mt-2 text-xs text-green-400">
                  Revenue | Expense | Asset | Liability | Cash | Bank | Receivable | Payable | Purchase
                </code>
              </Step>
              <Step n={3} title="Upload">
                Return to <strong>Admin → GL Master Data</strong> → click <strong>"Upload GL Master"</strong> → select your filled Excel file → click <strong>"Import"</strong>.
                You should see a count of accounts imported.
              </Step>
            </div>
          </Section>

          <Section id="team" icon={<Users size={16} />} title="Team & Roles Setup">
            <p>
              Torvyn's workflow has three roles. Each person gets access only to their role's interface — makers can't see checker or CFO screens.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 pr-4 text-slate-400 font-medium">Role</th>
                    <th className="text-left py-2 pr-4 text-slate-400 font-medium">Responsibilities</th>
                    <th className="text-left py-2 text-slate-400 font-medium">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {[
                    ['Maker', 'Runs AI agent, uploads docs, writes reconciliation conclusion', 'Own tasks only'],
                    ['Checker', 'Reviews maker work, approves or returns', 'All tasks in their department'],
                    ['CFO', 'Final sign-off, analytics dashboard, chatbot', 'Full read + sign-off'],
                  ].map(([role, resp, access]) => (
                    <tr key={role}>
                      <td className="py-2 pr-4 font-medium text-slate-200">{role}</td>
                      <td className="py-2 pr-4">{resp}</td>
                      <td className="py-2 text-slate-400">{access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
              <Step n={1} title="Go to Admin → Team & Roles">
                Click <strong>"Invite Team Member"</strong>.
              </Step>
              <Step n={2} title="Fill in Name, Email, Role, Department">
                Each maker and checker must be assigned a department — tasks are routed to the right maker based on the GL account's department assignment in the master data.
              </Step>
              <Step n={3} title="Employee Receives Welcome Email">
                They get an email with a login link and temporary password. Ask them to log in and change it immediately.
              </Step>
            </div>
          </Section>

          <Section id="close-calendar" icon={<CalendarDays size={16} />} title="Close Calendar">
            <p>
              The close calendar defines due dates for each stage of the reconciliation workflow.
              Torvyn uses these to calculate SLA breaches and flag overdue tasks.
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
              <Step n={1} title="Go to Admin → Close Calendar">
                Set the <strong>Fiscal Year Start Month</strong> (April for Indian companies).
              </Step>
              <Step n={2} title="Set Due Dates Per Stage">
                For each period, set:
                <ul className="list-disc list-inside mt-1 text-slate-400 space-y-0.5">
                  <li>Maker due date (e.g., 5th of following month)</li>
                  <li>Checker due date (e.g., 8th)</li>
                  <li>CFO sign-off due date (e.g., 10th)</li>
                </ul>
              </Step>
            </div>
          </Section>

          <Section id="generate" icon={<Play size={16} />} title="Generate Tasks for a Period">
            <p>
              Task generation is the trigger that starts a financial close cycle for a given month.
              Run it once at the start of each period-end close.
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
              <Step n={1} title="Go to Admin → Setup Guide → Generate Tasks">
                Select <strong>Fiscal Year</strong> and <strong>Period</strong> (1 = April for Indian FY).
              </Step>
              <Step n={2} title="Click 'Generate Tasks'">
                Torvyn fetches the current GL balance from SAP for each reconcilable account in your master data
                and creates one reconciliation task per account.
              </Step>
              <Step n={3} title="Verify Tasks Created">
                Go to <strong>Period Monitor</strong> to see the count of tasks created per stage.
                Makers will see their assigned tasks in <strong>My Tasks</strong>.
              </Step>
            </div>
            <div className="flex items-start gap-2 p-3 bg-amber-950/40 border border-amber-800/50 rounded-lg text-amber-300 text-xs">
              <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
              <span>
                If SAP is unreachable during task generation, the process stops immediately with an error.
                No partial tasks are created. Fix the SAP connection and re-run generation.
              </span>
            </div>
          </Section>

          <Section id="workflow" icon={<CheckCircle2 size={16} />} title="Task Workflow">
            <p>Each task goes through three stages:</p>
            <div className="space-y-3">
              {[
                { stage: 'Maker', color: 'text-blue-400', desc: 'Maker opens the task overlay, clicks "Run AI Agent". The AI fetches GL transactions from SAP, runs reconciliation analysis, and writes a draft conclusion. Maker reviews, uploads any supporting documents (bank statement, invoices), edits the conclusion if needed, and clicks "Submit to Checker".' },
                { stage: 'Checker', color: 'text-purple-400', desc: 'Checker reviews the maker\'s reconciliation, AI analysis, and documents. Either approves ("Submit to CFO") or returns with comments for the maker to fix.' },
                { stage: 'CFO', color: 'text-green-400', desc: 'CFO reviews high-level summary, balance sheet impact, and risk flags. Signs off ("Close Task") or queries back. CFO also has access to the analytics dashboard and AI chatbot for close intelligence.' },
              ].map(item => (
                <div key={item.stage} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <div className={`font-semibold mb-2 ${item.color}`}>{item.stage} Stage</div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link to="/docs/sap-setup" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← SAP Setup
          </Link>
          <Link to="/docs" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Back to Docs →
          </Link>
        </div>
      </div>
    </div>
  )
}
