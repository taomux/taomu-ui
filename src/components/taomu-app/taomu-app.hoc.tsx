import { TaomuApp } from './taomu-app'

export function withTaomuApp(AppContent: React.ComponentType): React.ComponentType {
  return () => {
    return (
      <TaomuApp>
        <AppContent />
      </TaomuApp>
    )
  }
}
