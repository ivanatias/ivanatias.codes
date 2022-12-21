import { Suspense } from 'react'
import Loading from '@/components/Loading'
import { useNearScreen } from '@/hooks/useNearScreen'

const NearScreenSuspense = ({
  children,
  loadingMessage,
  threshold,
  rootMargin
}) => {
  const { isNearScreen, fromRef } = useNearScreen(threshold, rootMargin)
  return (
    <div ref={fromRef}>
      {isNearScreen ? (
        <Suspense fallback={<Loading message={loadingMessage} />}>
          {children}
        </Suspense>
      ) : (
        <Loading message={loadingMessage} />
      )}
    </div>
  )
}

export default NearScreenSuspense
