/* ============================================================
   ResuMate — auth helper (window.RM)
   ------------------------------------------------------------
   Demo mode only: there is no backend on this site. Resumes
   are stored in the visitor's own browser (localStorage),
   and every method below is a safe no-op that keeps the
   pages working without an account system.
   ============================================================ */
(function () {
  /* No signed-in user exists in demo mode. */
  async function getUser() {
    return null;
  }

  /* Safe no-op in demo mode. */
  async function signOut() {
    return;
  }

  /*
   * Returns the signed-in user (always null in demo mode).
   * Never redirects.
   */
  async function requireAuth() {
    return null;
  }

  window.RM = {
    configured: false,
    client: null,
    getUser: getUser,
    signOut: signOut,
    requireAuth: requireAuth
  };
})();
