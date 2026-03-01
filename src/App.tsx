
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AdminPanel from './components/AdminPanel';
import { CONTACT_INFO } from './constants.tsx';

const Home: React.FC = () => (
  <>
    {/* Hero Section */}
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/bg-foto.jpg"
        alt="Krásná střecha"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 drop-shadow-2xl">
          Vaše střecha, <br /> naše zodpovědnost
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-lg font-light">
          Realizujeme poctivé tesařské a pokrývačské práce v Křižanovicích a okolí. 
          Střechy, které vydrží generace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#/kontakt" className="px-10 py-4 bg-amber-700 text-white font-bold rounded-full hover:bg-amber-800 transition-all shadow-xl hover:scale-105">
            Mám zájem o kalkulaci
          </a>
          <a href="#/galerie" className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-white/20 transition-all">
            Prohlédnout práce
          </a>
        </div>
      </div>
    </div>

    {/* Short About */}
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Tradiční řemeslo s moderním přístupem</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Jmenuji se Zdeněk Zeman a v oboru tesařství a pokrývačství se pohybuji již řadu let. 
            Mým cílem je dodávat stavby, které nejen skvěle vypadají, ale především stoprocentně plní svou funkci.
          </p>
          <ul className="space-y-4">
            {['Kompletní střechy na klíč', 'Tesařské konstrukce a vazby', 'Pokrývačské a klempířské práce', 'Opravy a rekonstrukce'].map(item => (
              <li key={item} className="flex items-center text-slate-800 font-medium">
                <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/krovy.jpg" className="rounded-lg shadow-md" alt="Detail práce" />
          <img src="/images/man-working-roof.jpg" className="rounded-lg shadow-md mt-8" alt="Detail práce 2" />
        </div>
      </div>
    </section>

    {/* Oblast působení - SEO */}
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Oblast působení</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Poskytujeme pokrývačské a tesařské služby v Jihomoravském kraji a přilehlých oblastech
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            'Křižanovice', 'Vyškov', 'Slavkov u Brna', 'Bučovice', 'Brno', 
            'Heršpice', 'Rousínov', 'Ivanovice na Hané', 'Vyškov - okolí',
            'Jihomoravský kraj', 'okres Vyškov', 'okres Brno-venkov'
          ].map(area => (
            <span key={area} className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm border border-slate-200 shadow-sm">
              {area}
            </span>
          ))}
        </div>

        {/* SEO text s kombinacemi klíčových slov */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Profesionální pokrývačské a tesařské služby v regionu</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">
            <div>
              <p className="mb-4">
                Hledáte kvalitního <strong>pokrývače v Křižanovicích</strong> nebo okolí? Nabízíme kompletní <strong>pokrývačské práce Vyškov</strong>, <strong>tesařství Slavkov u Brna</strong> a <strong>rekonstrukce střech Bučovice</strong>.
              </p>
              <p className="mb-4">
                Realizujeme <strong>střechy na klíč Brno</strong> a okolí včetně <strong>Rousínova</strong> a <strong>Ivanovic na Hané</strong>. Specializujeme se na <strong>stavbu střech</strong> všech typů.
              </p>
              <p>
                Naše služby zahrnují <strong>opravy střech okres Vyškov</strong>, <strong>výměnu krytiny Jihomoravský kraj</strong> a kompletní <strong>tesařské konstrukce</strong>.
              </p>
            </div>
            
            <div>
              <p className="mb-4">
                Provádíme <strong>pokládku tašky Vyškov</strong>, <strong>montáž šindele Brno</strong> i <strong>plechové střechy Slavkov u Brna</strong>. Každá <strong>rekonstrukce střechy</strong> je prováděna s maximální péčí.
              </p>
              <p className="mb-4">
                Nabízíme také <strong>tesařské práce Bučovice</strong>, <strong>klempířské práce Křižanovice</strong> a <strong>zateplení střech</strong> v celém regionu.
              </p>
              <p>
                Ať už potřebujete <strong>novou střechu Vyškov</strong>, <strong>opravu krytiny Brno</strong> nebo <strong>kompletní rekonstrukci</strong>, jsme tu pro vás.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-center text-slate-600">
              <strong className="text-slate-900">Kontaktujte nás</strong> pro nezávaznou cenovou nabídku na{' '}
              <a href="tel:+420602812440" className="text-amber-700 hover:text-amber-800 font-semibold">+420 602 812 440</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const Contact: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
    <div className="max-w-2xl w-full">
      <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-12 md:p-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Kontaktujte nás</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Máte dotaz nebo zájem o nezávaznou cenovou nabídku? Neváhejte nám zavolat nebo napsat.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-amber-700/20 p-3 rounded-xl mr-5 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="font-bold mb-1 text-sm">Adresa</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed xs:text-xs sm:text-base">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-700/20 p-3 rounded-xl mr-5 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="font-bold mb-1 text-sm">Telefon</h4>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-slate-400 hover:text-amber-500 transition-colors text-xs sm:text-base whitespace-nowrap">{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-700/20 p-3 rounded-xl mr-5 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="font-bold mb-1 text-sm">E-mail</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-amber-500 transition-colors break-words text-[11px] leading-relaxed xs:text-xs sm:text-base">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdminLoggedIn(!!user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.code === 'auth/invalid-credential') {
        alert('Nesprávný email nebo heslo!');
      } else {
        alert('Chyba při přihlašování. Zkuste to znovu.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const renderContent = () => {
    switch (route) {
      case '#/galerie':
        return <Gallery />;
      case '#/kontakt':
        return <Contact />;
      case '#/admin':
        if (!isAdminLoggedIn) {
          return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
              <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-center mb-6">Přihlášení do administrace</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
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
        }
        return <AdminPanel onLogout={handleLogout} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
