const navigation = [
  { name: 'About', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Terms and Conditions', href: '#' }
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-gray-400">&copy; TR Cleaning Solutions, All right reserved.</p>
      </div>
    </footer>
  )
}
