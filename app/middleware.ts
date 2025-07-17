import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Páginas que requerem autenticação
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token
        }
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return token?.role === 'ADMIN' || token?.role === 'SUPER_ADMIN'
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
}