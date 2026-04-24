'use client';
import { useState, useEffect, useCallback } from 'react';

export default function ChallengeView({ lessons, setView }) {
    const [challengeWords, setChallengeWords] = useState([]);
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [toast, setToast] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [level, setLevel] = useState(1); // Level 1: Basic, Level 2: Advanced

    const generateWords = useCallback(() => {
        let pool = [];
        if (level === 1) {
            // Level 1: First 3 lessons
            pool = lessons.slice(0, 3).flatMap(l => l.data);
        } else {
            // Level 2: Lessons 4 and onwards
            pool = lessons.slice(3).flatMap(l => l.data);
            // If pool is small, add some long words from everywhere
            if (pool.length < 20) {
                pool = lessons.flatMap(l => l.data).filter(w => w.japanese.length > 3);
            }
        }
        
        const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, 20);
        setChallengeWords(shuffled);
        setStep(0);
        setScore(0);
        setIsFinished(false);
    }, [lessons, level]);

    useEffect(() => {
        generateWords();
    }, [generateWords]);

    const handleAnswer = (selected) => {
        if (isProcessing) return;
        setIsProcessing(true);
        const correct = challengeWords[step].bangla;
        const isCorrect = selected === correct;
        if (isCorrect) setScore(prev => prev + 1);

        setToast({ isCorrect, message: isCorrect ? "চমৎকার! সঠিক হয়েছে।" : `ভুল হয়েছে! সঠিক: ${correct}` });

        setTimeout(() => {
            setToast(null);
            setIsProcessing(false);
            if (step + 1 >= 20) {
                setIsFinished(true);
            } else {
                setStep(prev => prev + 1);
            }
        }, 1500);
    };

    if (!challengeWords.length) return null;

    if (isFinished) {
        const percent = (score / 20) * 100;
        const canGoNext = score >= 18 && level === 1;

        return (
            <div className="view">
                <div className="game-container animate-slide" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '5rem' }}>{percent >= 90 ? '🔥' : '💪'}</h1>
                    <h2 style={{ color: 'var(--primary)', fontSize: '2.2rem' }}>
                        {level === 1 ? "Level 1 শেষ করেছেন!" : "Level 2 (Hard) শেষ করেছেন!"}
                    </h2>
                    <p style={{ margin: '1rem 0' }}>আপনি ২০টির মধ্যে {score}টি সঠিক উত্তর দিয়েছেন।</p>
                    <div className="result-card">
                        <div className="result-percent">{percent}%</div>
                        <div>Challenge Score</div>
                    </div>
                    
                    {canGoNext ? (
                        <button className="btn-primary" onClick={() => setLevel(2)}>
                            পরবর্তী ধাপ (Next: Hard Level) ➔
                        </button>
                    ) : (
                        <button className="btn-primary" onClick={() => setView('home')}>হোম পেজে ফিরে যান</button>
                    )}
                    
                    <button className="btn-secondary" style={{ marginTop: '1rem' }} onClick={() => generateWords()}>
                        আবার শুরু করুন (Restart)
                    </button>
                </div>
            </div>
        );
    }

    const word = challengeWords[step];
    const globalPool = lessons.flatMap(l => l.data);
    const distractors = globalPool
        .filter(w => w.id !== word.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.bangla);
    const options = [...distractors, word.bangla].sort(() => 0.5 - Math.random());

    return (
        <div className="view">
            <header>
                <h1>Global Quiz Challenge (Level {level})</h1>
                <p>{level === 1 ? "সহজ শব্দ দিয়ে শুরু করুন" : "এবার আরও জটিল শব্দগুলোর চ্যালেঞ্জ নিন"}</p>
            </header>

            {toast && (
                <div className={`toast show ${toast.isCorrect ? 'success' : 'error'}`}>
                    <span>{toast.isCorrect ? '✓' : '✗'}</span> {toast.message}
                </div>
            )}

            <div className="game-container animate-slide">
                <div className="exam-status">প্রশ্ন: {step + 1} / 20</div>
                <h2 className="question">সঠিক অর্থ কোনটি?</h2>
                <div className="jp-preview">
                    <h1>{word.japanese}</h1>
                </div>
                <div className="options-grid">
                    {options.map((opt, i) => (
                        <button 
                            key={i} 
                            className={`option-btn ${isProcessing && opt === word.bangla ? 'correct' : ''}`}
                            disabled={isProcessing}
                            onClick={() => handleAnswer(opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

