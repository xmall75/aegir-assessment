export interface PaymentSchema {
  id: number
  sort: string[] | null
  user_created: string
  date_created: string
  user_updated: string | null
  date_updated: string | null
  payment_id: string
  currency: string
  rate: number
  payment_date: string
  package: number
}
