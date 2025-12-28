import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const adminEmail = process.env.ADMIN_EMAIL
                const adminPassword = process.env.ADMIN_PASSWORD

                if (
                    credentials.email === adminEmail &&
                    credentials.password === adminPassword
                ) {
                    return { id: '1', name: 'Admin', email: adminEmail }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
            }
            return session
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnAdmin = nextUrl.pathname.startsWith('/admin')
            const isOnLogin = nextUrl.pathname.startsWith('/admin/login')

            if (isOnAdmin && !isOnLogin) {
                if (isLoggedIn) {
                    // Redirect /admin or /admin/ to /admin/dashboard
                    if (nextUrl.pathname === '/admin' || nextUrl.pathname === '/admin/') {
                        return Response.redirect(new URL('/admin/dashboard', nextUrl))
                    }
                    return true
                }
                return false // Redirect unauthenticated users to login page
            } else if (isOnLogin && isLoggedIn) {
                return Response.redirect(new URL('/admin/dashboard', nextUrl))
            }

            return true
        },
    },
    secret: process.env.AUTH_SECRET || "fallback_dev_secret_key_123",
})
