<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import auth from '@/helpers/auth'
import { useStore } from 'vuex'

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
  mounted: function () {
    const store = useStore()
    console.log('Yo, from DefaultLayout.vue!')
    auth.logMessage('hey Mike')
    console.log('Refresh token from DefaultLayout: ' + store.state.refreshToken)

    // TODO: uncomment this to enable checking for valid auth tokens
    // If access token valid, then return and skip the remaining checks
    if (
      auth.isTokenValid(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MTMyMjEyMTR9.pMMAgWisa0G45wDvGLAr2rirtqj1sLP0a2DBKky_ZI8',
      )
    ) {
      console.log('access token valid') // TODO: remove this debug message and replace token above with stored token
      return
    }
    // redirect to login page if no token, or invalid refresh token
    if (!auth.isTokenValid(store.state.refreshToken)) {
      this.$router.push('/pages/login')
    }

    /*     const payload = {
      accessToken: 'this-is-my-access-token',
      refreshToken: 'this-is-my-refresh-token',
      userName: 'john.doe@example.com',
    }
    store.commit('updateAuthTokens', payload) */
  },
}
</script>
