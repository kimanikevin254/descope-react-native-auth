// Utility function to extract and validate the session token
export const extractAndValidateToken = async (req, descopeClient) => {
    // Extract session token from request headers
    const sessionToken = req.headers.authorization.split(' ')[1]
  
    // Validate the session token
    const authInfo = await descopeClient.validateSession(sessionToken);
  
    return authInfo
  }