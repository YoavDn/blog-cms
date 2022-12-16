import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'
const config = useRuntimeConfig()
export default NuxtAuthHandler({
  secret: 'f;lj3fkjd999d10',

  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
    }),
  ],
})
