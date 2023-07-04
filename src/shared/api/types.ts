export interface BaseResponse {
  success: boolean
  reason: string
}

type StatusType = 'idle' | 'success' | 'error' | 'pending'

export interface RequestInfo {
  status: StatusType
  error?: string
}