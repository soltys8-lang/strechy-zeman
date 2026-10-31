import React, { useState, useEffect, Suspense } from 'react';

// Firebase se načítá až tady, ať nezdržuje veřejné stránky
const AdminPanel = React.lazy(() => import('./AdminPanel'));

const AdminRoute: React.FC = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    let unsubscribe = () => {};
    let cancelled = false;

    const listen = async () => {
      const [{ onAuthStateChanged }, { auth }] = await Promise.all([
        import('firebase/auth'),
        import('../firebaseAuth'),
      ]);
      if (cancelled) return;
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAdminLoggedIn(!!user);
        setIsLoading(false);
      });
    };

    listen().catch(() => setIsLoading(false));
    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const [{ signInWithEmailAndPassword }, { auth }] = await Promise.all([
        import('firebase/auth'),
        import('../firebaseAuth'),
      ]);
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.code === 'auth/invalid-credential') {
        alert('Nesprávný e-mail nebo heslo!');
      } else {
        alert('Chyba při přihlašování. Zkuste to znovu.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const [{ signOut }, { auth }] = await Promise.all([
        import('firebase/auth'),
        import('../firebaseAuth'),
      ]);
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isAdminLoggedIn) {
    return (
      <Suspense fallback={<div className="text-center py-20 text-slate-400">Načítám...</div>}>
        <AdminPanel onLogout={handleLogout} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h1 className="text-2xl font-bold text-center mb-6">Přihlášení do administrace</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="admin@zeman-strechy.cz"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Heslo</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="Zadejte heslo"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Přihlašuji...' : 'Přihlásit se'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRoute;
