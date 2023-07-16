type StatusType = 'idle' | 'success' | 'error' | 'pending'

export interface RequestInfo {
  status: StatusType
  error?: string
}