import { useState } from 'react'

export function TechnologyIcon({
  slug,
  monogram,
}: {
  slug: string
  monogram: string
}) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading',
  )

  return (
    <span className="technology-icon" aria-hidden="true">
      <span>{monogram}</span>
      {status !== 'error' && (
        <img
          className={status === 'loaded' ? 'is-loaded' : undefined}
          src={`https://cdn.simpleicons.org/${slug}/111111`}
          alt=""
          width="28"
          height="28"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </span>
  )
}
