import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const DemoAccessContext = createContext(null)

export function DemoAccessProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openDemoAccess = useCallback(() => setOpen(true), [])
  const closeDemoAccess = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openDemoAccess, closeDemoAccess }),
    [open, openDemoAccess, closeDemoAccess],
  )

  return <DemoAccessContext.Provider value={value}>{children}</DemoAccessContext.Provider>
}

export function useDemoAccess() {
  const context = useContext(DemoAccessContext)
  if (!context) {
    throw new Error('useDemoAccess precisa estar dentro de DemoAccessProvider')
  }
  return context
}
