import { TaomuProvider } from './taomu-provider'

export function withTaomuProvider(
  AppContent: React.ComponentType
): React.ComponentType {
  return () => {
    return (
      <TaomuProvider>
        <AppContent />
      </TaomuProvider>
    )
  }
}
