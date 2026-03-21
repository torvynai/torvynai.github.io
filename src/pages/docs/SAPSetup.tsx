import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, AlertCircle, Terminal, Shield } from 'lucide-react'

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-slate-950 border border-slate-700 rounded-lg p-4 text-sm text-green-400 overflow-x-auto font-mono whitespace-pre-wrap">
    {code}
  </pre>
)

const Note = ({ type = 'info', children }: { type?: 'info' | 'warn'; children: React.ReactNode }) => (
  <div className={`flex gap-3 p-4 rounded-lg border text-sm ${
    type === 'warn'
      ? 'bg-amber-950/40 border-amber-800/50 text-amber-300'
      : 'bg-blue-950/40 border-blue-800/50 text-blue-300'
  }`}>
    <AlertCircle size={16} className="shrink-0 mt-0.5" />
    <div>{children}</div>
  </div>
)

export default function SAPSetup() {
  useEffect(() => {
    document.title = 'SAP S/4HANA Setup — Torvyn AI Documentation'
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/docs" className="hover:text-blue-400 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-slate-200">SAP S/4HANA Setup</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">SAP S/4HANA Connection Guide</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Connect Torvyn AI to SAP S/4HANA Cloud via OData REST API.
            Estimated time: 45–60 minutes with SAP Basis support.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* Which SAP */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Which SAP Do You Have?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">Product</th>
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">Method</th>
                  <th className="text-left py-2 text-slate-400 font-medium">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ['SAP S/4HANA Cloud (SaaS)', 'OData REST API', '✅ Easy'],
                  ['SAP S/4HANA On-Premise', 'OData REST or RFC/BAPI', '⚠️ Medium'],
                  ['SAP ECC On-Premise', 'RFC/BAPI (SAP NW RFC SDK)', '⚠️ Medium'],
                  ['SAP Business One (B1)', 'Service Layer REST API', '✅ Easy'],
                ].map(([product, method, diff]) => (
                  <tr key={product}>
                    <td className="py-3 pr-4 text-slate-200 font-medium">{product}</td>
                    <td className="py-3 pr-4 text-slate-400">{method}</td>
                    <td className="py-3 text-slate-400">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono bg-blue-600/20 text-blue-400 px-2 py-1 rounded">STEP 1</span>
            <h2 className="text-xl font-semibold text-white">Create a Communication User in SAP</h2>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Torvyn needs a dedicated read-only SAP user. Do not use a personal user account.
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>1. Open <strong>SAP Fiori Launchpad</strong> → search <code className="bg-slate-800 px-1 rounded">Communication Users</code></p>
            <p>2. Create user: <code className="bg-slate-800 px-1 rounded">TORVYN_API</code></p>
            <p>3. Set a strong password (min. 12 chars, mixed case + special char)</p>
            <p>4. Assign Communication Arrangement: <code className="bg-slate-800 px-1 rounded">SAP_COM_0002</code> (Finance - General Ledger)</p>
          </div>
          <Note type="warn">
            <strong>Security note:</strong> The TORVYN_API user should have <strong>read-only</strong> access.
            Do not assign any posting authorizations (BKPF_BUK with activity 02 or 03).
          </Note>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono bg-blue-600/20 text-blue-400 px-2 py-1 rounded">STEP 2</span>
            <h2 className="text-xl font-semibold text-white">Get Your OData Base URL</h2>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            The OData base URL is your SAP tenant URL + the OData service path.
          </p>
          <CodeBlock code={`# SAP S/4HANA Cloud format:
https://<your-tenant>.s4hana.ondemand.com/sap/opu/odata/sap/

# Example:
https://mycompany.s4hana.ondemand.com/sap/opu/odata/sap/`} />
          <p className="text-slate-400 text-sm mt-4 mb-2">
            Verify the OData service is accessible — paste this in a browser while on the corporate network:
          </p>
          <CodeBlock code={`https://<your-tenant>.s4hana.ondemand.com/sap/opu/odata/sap/API_GL_ACCOUNT_BALANCE_SRV/$metadata`} />
          <Note>
            You should see an XML metadata document. If you see a login screen, your TORVYN_API user credentials are not set up correctly.
          </Note>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono bg-blue-600/20 text-blue-400 px-2 py-1 rounded">STEP 3</span>
            <h2 className="text-xl font-semibold text-white">Configure in Torvyn Admin</h2>
          </div>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>1. Log into Torvyn as Admin → <strong>Admin → ERP Connection</strong></p>
            <p>2. Select <strong>Connection Mode: OData REST</strong></p>
            <p>3. Fill in:</p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">Field</th>
                  <th className="text-left py-2 text-slate-400 font-medium">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {[
                  ['Host / Base URL', 'https://mycompany.s4hana.ondemand.com'],
                  ['OData Base URL', 'https://mycompany.s4hana.ondemand.com/sap/opu/odata/sap/'],
                  ['Client Number', '100 (your SAP Mandant)'],
                  ['Username', 'TORVYN_API'],
                  ['Password', '(set in Step 1)'],
                ].map(([field, val]) => (
                  <tr key={field}>
                    <td className="py-2 pr-4 font-medium text-slate-200">{field}</td>
                    <td className="py-2 font-mono text-xs text-slate-400">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-4">4. Click <strong>Save Settings</strong> → <strong>Test Connection</strong></p>
          <p className="text-slate-400 text-sm">Expected result: green checkmark and "Connection successful"</p>
        </section>

        {/* Required permissions */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Required SAP Permissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 pr-4 text-slate-400 font-medium">SAP Object</th>
                  <th className="text-left py-2 text-slate-400 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {[
                  ['FI General Ledger', 'GL balances, GL line items'],
                  ['FI Accounts Payable', 'Vendor invoices, AP aging'],
                  ['FI Accounts Receivable', 'Customer invoices, AR aging'],
                  ['MM Purchasing', 'Purchase orders, GRN (3-way match)'],
                  ['LO-MD-BP', 'Vendor & customer master'],
                ].map(([obj, purpose]) => (
                  <tr key={obj}>
                    <td className="py-2 pr-4 font-medium text-slate-200">{obj}</td>
                    <td className="py-2 text-slate-400">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            For OData: Authorization object <code>S_SERVICE</code> with the service IDs above. All read-only (activity 01).
          </p>
        </section>

        {/* Security */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Security Notes</h2>
          </div>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" /> Torvyn connects outbound from AWS Mumbai to your SAP Cloud. No inbound ports needed.</li>
            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" /> All data in transit is encrypted via HTTPS (TLS 1.2+).</li>
            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" /> SAP GL data is fetched live at reconciliation time — Torvyn does NOT store a copy in its database.</li>
            <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" /> Credentials are stored encrypted in AWS Parameter Store (not in the application database).</li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting</h2>
          <div className="space-y-3">
            {[
              { error: '"Connection refused" or timeout', fix: 'Check that the SAP OData service URL is correct. Confirm the SAP instance is running and reachable from the internet.' },
              { error: '"401 Unauthorized"', fix: 'TORVYN_API user credentials are wrong or the communication arrangement is not activated. Re-check Step 1.' },
              { error: '"Service not found" or 404', fix: 'The OData service path is incorrect. Ask your SAP Basis team for the exact API_GL_ACCOUNT_BALANCE_SRV endpoint path.' },
              { error: '"No data returned" for test period', fix: 'The fiscal year / period has no postings in SAP for that GL account. Try a period you know has transactions.' },
            ].map(item => (
              <div key={item.error} className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Terminal size={14} className="text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-amber-300 text-sm font-medium mb-1">{item.error}</div>
                    <div className="text-slate-400 text-sm">{item.fix}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nav */}
        <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link to="/docs/getting-started" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← Getting Started
          </Link>
          <Link
            to="/docs/admin-guide"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Admin Guide →
          </Link>
        </div>
      </div>
    </div>
  )
}
