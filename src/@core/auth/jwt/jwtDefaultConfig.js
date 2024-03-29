export default {
  // Endpoints
  loginEndpoint: '/token/',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/token/refresh/',
  logoutEndpoint: '/jwt/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'access',
  storageRefreshTokenKeyName: 'refresh',
}
