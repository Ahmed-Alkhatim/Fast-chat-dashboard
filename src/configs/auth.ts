import { apiURL } from "src/services/config"

apiURL
export default {
  meEndpoint: '/auth/me',
  loginEndpoint: `${apiURL}/login`,
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
