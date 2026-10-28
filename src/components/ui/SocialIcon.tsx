export type SocialNetwork = 'linkedin' | 'github' | 'dribbble'

export function SocialIcon({ network }: { network: SocialNetwork }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {network === 'linkedin' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="7.5" cy="8" r="1" fill="currentColor" stroke="none" />
          <path d="M7.5 11v6M11 11v6m0-3.5c0-3.5 6-3.5 6 0V17" />
        </>
      )}
      {network === 'github' && (
        <path
          fill="currentColor"
          stroke="none"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      )}
      {network === 'dribbble' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M7 4.5c4 4.5 7 10 8.5 15.5M3.2 10.5c7 .6 12.6-1.7 16-6M5 18c3-6 9-8.5 16-6" />
        </>
      )}
    </svg>
  )
}
