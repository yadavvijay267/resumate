/* ============================================================
   ResuMate — auth helper (window.RM)
   ------------------------------------------------------------
   Wraps the Supabase JS client (loaded from CDN before this
   file). If config.js has no Supabase values, or the CDN
   library failed to load (offline), RM runs in demo mode:
   `configured` is false and every method is a safe no-op, so
   pages keep working without a backend.
   ============================================================ */
(function () {
  var cfg = window.RESUMATE_CONFIG || {};
  var url = (cfg.SUPABASE_URL || "").trim();
  var anonKey = (cfg.SUPABASE_ANON_KEY || "").trim();

  var client = null;
  var configured = false;

  if (url && anonKey && window.supabase && typeof window.supabase.createClient === "function") {
    try {
      client = window.supabase.createClient(url, anonKey);
      configured = true;
    } catch (e) {
      client = null;
      configured = false;
    }
  }

  /* Returns the currently signed-in user object, or null. */
  async function getUser() {
    if (!configured || !client) return null;
    try {
      var res = await client.auth.getUser();
      return (res && res.data && res.data.user) || null;
    } catch (e) {
      return null;
    }
  }

  /* Signs the current user out. Safe no-op in demo mode. */
  async function signOut() {
    if (!configured || !client) return;
    try {
      await client.auth.signOut();
    } catch (e) {
      /* ignore — nothing sensible to do offline */
    }
  }

  /*
   * Returns the signed-in user. If there is no user and
   * redirectToLogin is true (default), sends the visitor to
   * login.html first. In demo mode returns null immediately.
   */
  async function requireAuth(redirectToLogin) {
    if (redirectToLogin === undefined) redirectToLogin = true;
    var user = await getUser();
    if (!user && configured && redirectToLogin) {
      window.location.href = "login.html";
    }
    return user;
  }

  window.RM = {
    configured: configured,
    client: client,
    getUser: getUser,
    signOut: signOut,
    requireAuth: requireAuth
  };
})();
