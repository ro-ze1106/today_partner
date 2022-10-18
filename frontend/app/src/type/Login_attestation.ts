export type SignUpParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type SignInParams = {
  email: string
  password: string
}

export type User = {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  image?: string
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}