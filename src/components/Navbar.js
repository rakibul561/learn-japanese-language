'use client';

export default function Navbar({ currentView, setView }) {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo" onClick={() => setView('home')}>
                    <span>🎌</span> Japanese Pro
                </div>
                <div className="nav-links">
                    <div 
                        className={`nav-link ${currentView === 'home' ? 'active' : ''}`} 
                        onClick={() => setView('home')}
                    >
                        Home
                    </div>
                    <div 
                        className={`nav-link ${currentView === 'challenge' ? 'active' : ''}`} 
                        onClick={() => setView('challenge')}
                    >
                        Challenge
                    </div>
                    <div 
                        className={`nav-link ${currentView === 'kana' ? 'active' : ''}`} 
                        onClick={() => setView('kana')}
                    >
                        Kana
                    </div>
                </div>
            </div>
        </nav>
    );
}
