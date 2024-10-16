export default function RootLayout({
  children,
  modalForgotPassword,
}: {
  children: React.ReactNode
  modalForgotPassword: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-primary">
      {children}
      {modalForgotPassword}
    </div>
  )
}
