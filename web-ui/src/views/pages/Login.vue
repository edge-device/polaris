<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup class="mb-4">
                    <CButton @click="gotoGithub" color="dark" class="px-4">
                      <h4>
                        <CIcon icon="cib-github" size="xxl" /> Login with GitHub
                      </h4>
                    </CButton>
                  </CInputGroup>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-dark py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Sign up using your GitHub email address. For logging in, you
                    will be redirected to GitHub and automatically returned.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import auth from '@/helpers/auth'
//import { useStore } from 'vuex'

export default {
  name: 'Login',
  methods: {
    gotoGithub() {
      window.location.href =
        'https://github.com/login/oauth/authorize?client_id=d46f377df25a400e9c03'
      // Github callback returns to https://polaris.westus3.cloudapp.azure.com/signin/
    },
  },
  mounted: function () {
    //const store = useStore()
    console.log('Yo, from Login.vue')
    auth.logMessage('hey Mike on login page')

    // TODO: might have to catch if no 'code' in query
    const authCode = this.$route.query.code
    if (!authCode) {
      console.log('no code, must not be callback')
      return
    }

    console.log('code:' + authCode)
    // TODO: redirect to logged in home if valid tokens, otherwise clear tokens

    // redirect to login page if no token, or invalid refresh token
    // if (!auth.isTokenValid(store.state.refreshToken)) {
    //   this.$router.push('/pages/login')
    // }
  },
}
</script>
