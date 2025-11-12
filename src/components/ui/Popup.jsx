import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

/**
 * Donation popup that appears at the bottom of the screen.
 * - auto-shows after `delay` ms (default 10s)
 * - closing persists in localStorage (no expiry)
 * - `donateUrl` opens in a new tab
 */
const Popup = ({ delay = 10000, donateUrl = 'https://gofund.me/42fa71eb9' }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    try {
      const closedAt = localStorage.getItem('donationPopupClosed')
      if (closedAt) {
        return // don't show ever after closed (no expiry)
      }
    } catch {
      // ignore localStorage errors
    }

    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setVisible(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = (persist = true) => {
    setVisible(false)
    if (persist) {
      try {
        localStorage.setItem('donationPopupClosed', String(Date.now()))
      } catch {
        // ignore
      }
    }
  }


  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Donation prompt"
      className="fixed z-20 bottom-6 right-6 sm:bottom-8 sm:right-8 md:right-12 max-w-xs sm:max-w-sm w-[90%] sm:w-auto shadow-lg"
    >
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 shadow-lg">
        <div className="bg-white dark:bg-gray-900 rounded-[inherit] p-4 flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 flex items-center justify-center text-white font-bold"><FaHeart color='red' /></div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Support CET's E-Baja Team for 2026-2027</p>
            <div className="mt-3 flex gap-2">
              <a
                href={donateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg shadow-sm"
              >
                Donate
              </a>
            </div>
          </div>
          <FaX
            onClick={() => close(true)}
            className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label="Close donation prompt"
          />
        </div>
      </div>
    </div>
  )
}

export default Popup