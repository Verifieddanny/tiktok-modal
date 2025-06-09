import TikTokPopup from "@/components/tiktok-popup"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Gainsty Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample dashboard cards */}
          <div className="rounded-xl border border-[#dee5ee] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Instagram Growth</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your Instagram account is growing steadily with 150+ new followers this week.
            </p>
          </div>

          <div className="rounded-xl border border-[#dee5ee] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Rate</h3>
            <p className="mt-2 text-sm text-gray-600">Your posts are getting 25% more engagement than last month.</p>
          </div>

          <div className="rounded-xl border border-[#dee5ee] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
            <p className="mt-2 text-sm text-gray-600">View detailed insights about your social media performance.</p>
          </div>
        </div>
      </div>

      <TikTokPopup />
    </div>
  )
}
