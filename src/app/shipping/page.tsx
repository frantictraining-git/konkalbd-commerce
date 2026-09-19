export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 capitalize">{page}</h1>
      <p className="text-gray-600">Content for this page will be updated by the store admin via Sanity CMS.</p>
    </div>
  )
}
