'use client';
import { useState, useEffect, useCallback } from 'react';
import katakanaData from '@/data/katakana.json';

export default function KatakanaWordsView({ setView }) {
    const [mode, setMode] = useState('menu'); // 'menu', 'learn', 'challenge', 'result'
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [shuffledData, setShuffledData] = useState([]);
    const [examWords, setExamWords] = useState([]);
    const [examStep, setExamStep] = useState(0);
    const [toast, setToast] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialize data
    useEffect(() => {
        if (katakanaData && katakanaData.data) {
            const shuffled = [...katakanaData.data].sort(() => Math.random() - 0.5);
            setShuffledData(shuffled);
        }
    }, []);

    const showToast = (isCorrect, message) => {
        setToast({ isCorrect, message });
    };

    const startLearn = () => {
        setCurrentStep(0);
        setMode('learn');
    };

    const startChallenge = () => {
        const words = [...shuffledData].sort(() => 0.5 - Math.random()).slice(0, 20);
        setExamWords(words);
        setExamStep(0);
        setScore(0);
        setMode('challenge');
    };

    const nextLearnStep = () => {
        if (currentStep + 1 >= shuffledData.length) {
            setMode('menu');
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleAnswer = (selected, correct) => {
        if (isProcessing) return;
        setIsProcessing(true);
        
        const isCorrect = selected === correct;
        if (isCorrect) setScore(prev => prev + 1);
        
        showToast(isCorrect, isCorrect ? "চমৎকার! সঠিক হয়েছে।" : `ভুল হয়েছে! সঠিক: ${correct}`);
        
        setTimeout(() => {
            setToast(null);
            setIsProcessing(false);
            if (examStep + 1 >= examWords.length) {
                setMode('result');
            } else {
                setExamStep(prev => prev + 1);
            }
        }, 1500);
    };

    const generateMCQOptions = (correctWord) => {
        const others = shuffledData
            .filter(w => w.id !== correctWord.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.bangla);
        return [...others, correctWord.bangla].sort(() => 0.5 - Math.random());
    };

    if (!shuffledData.length) return <div className="loading">লোড হচ্ছে...</div>;

    return (
        <div className="view katakana-words-view animated-fade-in">
            {mode !== 'menu' && (
                <div className="session-header">
                    <button className="btn-close" onClick={() => setMode('menu')}>&times;</button>
                    <div className="progress-bar-container">
                        <div 
                            className="progress-bar-fill" 
                            style={{ 
                                width: `${mode === 'learn' ? (currentStep / shuffledData.length) * 100 : (examStep / examWords.length) * 100}%` 
                            }}
                        ></div>
                    </div>
                </div>
            )}

            {toast && (
                <div className={`toast show ${toast.isCorrect ? 'success' : 'error'}`}>
                    <span>{toast.isCorrect ? '✓' : '✗'}</span> {toast.message}
                </div>
            )}

            <div id="game-content">
                {mode === 'menu' && (
                    <div className="katakana-menu">
                        <header>
                            <h1>কাতাকানা শব্দ (Katakana Words)</h1>
                            <p>কাতাকানা ভোকাবুলারি শিখুন এবং চ্যালেঞ্জে অংশগ্রহণ করুন</p>
                        </header>
                        
                        <div className="menu-grid">
                            <div className="menu-card learn" onClick={startLearn}>
                                <div className="card-icon">📖</div>
                                <h3>শিখুন (Learn)</h3>
                                <p>সবগুলো কাতাকানা শব্দ একে একে শিখুন</p>
                            </div>
                            <div className="menu-card challenge" onClick={startChallenge}>
                                <div className="card-icon">🎯</div>
                                <h3>চ্যালেঞ্জ (Challenge)</h3>
                                <p>২০টি প্রশ্নের মাধ্যমে আপনার জ্ঞান যাচাই করুন</p>
                            </div>
                        </div>

                        <div className="word-list-section">
                            <h2>শব্দ তালিকা (Word List)</h2>
                            <div className="words-table-container">
                                <table className="words-table">
                                    <thead>
                                        <tr>
                                            <th>Japanese</th>
                                            <th>Romaji</th>
                                            <th>Bangla</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {katakanaData.data.map(word => (
                                            <tr key={word.id}>
                                                <td className="jp-cell">{word.japanese}</td>
                                                <td className="romaji-cell">{word.romaji}</td>
                                                <td className="bn-cell">{word.bangla}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'learn' && (
                    <div className="game-container animate-slide">
                        <div className="flashcard">
                            <span className="label">কাতাকানা শব্দ</span>
                            <h1 className="jp-text">{shuffledData[currentStep].japanese}</h1>
                            <div className="romaji-text">({shuffledData[currentStep].romaji})</div>
                            <div className="bn-text">{shuffledData[currentStep].bangla}</div>
                        </div>
                        <div className="game-controls">
                            <button className="btn-secondary" onClick={() => setMode('menu')}>থামুন (Stop)</button>
                            <button className="btn-primary" onClick={nextLearnStep}>
                                {currentStep + 1 >= shuffledData.length ? 'শেষ (Finish)' : 'পরবর্তী (Next)'}
                            </button>
                        </div>
                    </div>
                )}

                {mode === 'challenge' && (
                    <div className="game-container animate-slide">
                        <div className="exam-status">প্রশ্ন: {examStep + 1} / {examWords.length}</div>
                        <h2 className="question">সঠিক অর্থ কোনটি?</h2>
                        <div className="jp-preview">
                            <h1 className="jp-text">{examWords[examStep].japanese}</h1>
                            <div className="romaji-text">({examWords[examStep].romaji})</div>
                        </div>
                        <div className="options-grid">
                            {generateMCQOptions(examWords[examStep]).map((opt, i) => (
                                <button 
                                    key={i} 
                                    className={`option-btn ${isProcessing && opt === examWords[examStep].bangla ? 'correct' : ''}`}
                                    disabled={isProcessing}
                                    onClick={() => handleAnswer(opt, examWords[examStep].bangla)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {mode === 'result' && (
                    <div className="game-container animate-slide" style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '5rem' }}>{score >= 15 ? '🏆' : '😊'}</h1>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>
                            {score >= 15 ? "অসাধারণ হয়েছে!" : (score >= 10 ? "ভালো হয়েছে!" : "আরো চেষ্টা করতে হবে!")}
                        </h2>
                        <p style={{ margin: '1rem 0' }}>আপনি {examWords.length}টির মধ্যে {score}টি সঠিক উত্তর দিয়েছেন।</p>
                        <div className="result-card">
                            <div className="result-percent">{Math.round((score / examWords.length) * 100)}%</div>
                            <div>Score</div>
                        </div>
                        <button className="btn-primary" onClick={() => setMode('menu')}>ফিরে যান</button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .katakana-words-view {
                    padding: 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .katakana-menu h1 {
                    text-align: center;
                    margin-bottom: 0.5rem;
                    color: var(--primary);
                }
                .katakana-menu p {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #666;
                }
                .menu-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }
                .menu-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border: 2px solid transparent;
                }
                .menu-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    border-color: var(--primary);
                }
                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .romaji-text {
                    font-size: 1.2rem;
                    color: #888;
                    margin-bottom: 1rem;
                    font-style: italic;
                }
                .word-list-section {
                    margin-top: 3rem;
                }
                .word-list-section h2 {
                    margin-bottom: 1rem;
                }
                .words-table-container {
                    background: white;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .words-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .words-table th, .words-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #eee;
                }
                .words-table th {
                    background: #f9f9f9;
                    font-weight: 600;
                }
                .jp-cell {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: var(--primary);
                }
                .game-controls {
                    display: flex;
                    gap: 1rem;
                    margin-top: 2rem;
                    justify-content: center;
                }
                @media (max-width: 600px) {
                    .menu-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
