'use client';
import { useState, useEffect, useCallback } from 'react';

export default function LessonView({ lesson, onClose }) {
    const [mode, setMode] = useState('learn'); // 'learn', 'builder', 'match', 'exam', 'result'
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [examWords, setExamWords] = useState([]);
    const [examStep, setExamStep] = useState(0);
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [shuffledData, setShuffledData] = useState([]);
    const [toast, setToast] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialize lesson data (shuffle once)
    useEffect(() => {
        if (lesson) {
            const shuffled = [...lesson.data].sort(() => Math.random() - 0.5);
            setShuffledData(shuffled);
        }
    }, [lesson]);

    const speak = useCallback((text) => {
        // Audio disabled per user request
    }, []);

    // Speak on learn mode change or step change
    useEffect(() => {
        if (mode === 'learn' && shuffledData[currentStep]) {
            speak(shuffledData[currentStep].japanese);
        }
    }, [mode, currentStep, shuffledData, speak]);

    const showToast = (isCorrect, message) => {
        setToast({ isCorrect, message });
    };

    const nextStep = () => {
        setToast(null);
        setIsProcessing(false);
        if (mode === 'learn') {
            setMode('builder');
        } else if (mode === 'builder') {
            if (currentStep + 1 >= shuffledData.length) {
                setMode('match');
                setCurrentStep(0);
            } else {
                setCurrentStep(prev => prev + 1);
                setMode('learn');
            }
        } else if (mode === 'exam') {
            if (examStep + 1 >= 10) {
                setMode('result');
            } else {
                setExamStep(prev => prev + 1);
            }
        }
    };

    const startExam = () => {
        const words = [...shuffledData].sort(() => 0.5 - Math.random()).slice(0, 10);
        setExamWords(words);
        setMode('exam');
        setExamStep(0);
        setScore(0);
    };

    const handleAnswer = (selected, correct, isExam = false) => {
        if (isProcessing) return;
        setIsProcessing(true);
        const isCorrect = selected === correct;
        if (isCorrect && isExam) setScore(prev => prev + 1);
        
        showToast(isCorrect, isCorrect ? "চমৎকার! সঠিক হয়েছে।" : `ভুল হয়েছে! সঠিক: ${correct}`);
        setTimeout(nextStep, 1500);
    };

    const handleMatch = (id, type, text) => {
        if (matches.includes(id)) return;
        if (type === 'jp') speak(text);

        if (!selectedMatch) {
            setSelectedMatch({ id, type });
            return;
        }

        if (selectedMatch.type !== type && selectedMatch.id === id) {
            const newMatches = [...matches, id];
            setMatches(newMatches);
            setSelectedMatch(null);
            if (newMatches.length === Math.min(shuffledData.length, 5)) {
                setTimeout(startExam, 1000);
            }
        } else {
            setSelectedMatch({ id, type });
        }
    };

    const generateMCQOptions = (correctWord) => {
        const others = shuffledData
            .filter(w => w.id !== correctWord.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.bangla);
        return [...others, correctWord.bangla].sort(() => 0.5 - Math.random());
    };

    if (!shuffledData.length) return null;

    const totalLearn = shuffledData.length;
    const maxSteps = (totalLearn * 2) + 11; // learn + practice + match + 10 exam + result
    let progress = 0;
    if (mode === 'learn') progress = (currentStep * 2 / maxSteps) * 100;
    else if (mode === 'builder') progress = ((currentStep * 2 + 1) / maxSteps) * 100;
    else if (mode === 'match') progress = ((totalLearn * 2) / maxSteps) * 100;
    else if (mode === 'exam') progress = ((totalLearn * 2 + 1 + examStep) / maxSteps) * 100;
    else if (mode === 'result') progress = 100;

    const currentWord = shuffledData[currentStep];

    return (
        <div className="view">
            <div className="session-header">
                <button className="btn-close" onClick={onClose}>&times;</button>
                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            {toast && (
                <div className={`toast show ${toast.isCorrect ? 'success' : 'error'}`}>
                    <span>{toast.isCorrect ? '✓' : '✗'}</span> {toast.message}
                </div>
            )}

            <div id="game-content">
                {mode === 'learn' && (
                    <div className="game-container animate-slide">
                        <div className="flashcard">
                            <span className="label">জাপানিজ শব্দ</span>
                            <h1 className="jp-text">{currentWord.japanese}</h1>
                            <div className="bn-text">{currentWord.bangla}</div>
                        </div>
                        <button className="btn-primary" onClick={nextStep}>পরবর্তী (Next)</button>
                    </div>
                )}

                {mode === 'builder' && (
                    <div className="game-container animate-slide">
                        <h3 className="exam-status">সঠিক অর্থ বেছে নিন (Practice):</h3>
                        <div className="jp-preview">
                            <h1>{currentWord.japanese}</h1>
                        </div>
                        <div className="options-grid">
                            {generateMCQOptions(currentWord).map((opt, i) => (
                                <button 
                                    key={i} 
                                    className={`option-btn ${isProcessing && opt === currentWord.bangla ? 'correct' : ''}`}
                                    disabled={isProcessing}
                                    onClick={() => handleAnswer(opt, currentWord.bangla)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {mode === 'match' && (
                    <div className="game-container animate-slide">
                        <h2 className="question">মিল করুন (Match the Pairs)</h2>
                        <div className="match-dual-columns">
                            <div className="match-column">
                                {shuffledData.slice(0, 5).sort((a, b) => a.id - b.id).map(w => (
                                    <button 
                                        key={w.id}
                                        className={`match-item ${matches.includes(w.id) ? 'matched' : ''} ${selectedMatch?.id === w.id && selectedMatch?.type === 'jp' ? 'selected' : ''}`}
                                        onClick={() => handleMatch(w.id, 'jp', w.japanese)}
                                    >
                                        {w.japanese}
                                    </button>
                                ))}
                            </div>
                            <div className="match-column">
                                {shuffledData.slice(0, 5).sort((a, b) => b.id - a.id).map(w => (
                                    <button 
                                        key={w.id}
                                        className={`match-item ${matches.includes(w.id) ? 'matched' : ''} ${selectedMatch?.id === w.id && selectedMatch?.type === 'bn' ? 'selected' : ''}`}
                                        onClick={() => handleMatch(w.id, 'bn', w.bangla)}
                                    >
                                        {w.bangla}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'exam' && (
                    <div className="game-container animate-slide">
                        <div className="exam-status">প্রশ্ন: {examStep + 1} / 10</div>
                        <h2 className="question">সঠিক অর্থ কোনটি?</h2>
                        <div className="jp-preview">
                            <h1>{examWords[examStep].japanese}</h1>
                        </div>
                        <div className="options-grid">
                            {generateMCQOptions(examWords[examStep]).map((opt, i) => (
                                <button 
                                    key={i} 
                                    className={`option-btn ${isProcessing && opt === examWords[examStep].bangla ? 'correct' : ''}`}
                                    disabled={isProcessing}
                                    onClick={() => handleAnswer(opt, examWords[examStep].bangla, true)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {mode === 'result' && (
                    <div className="game-container animate-slide" style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '5rem' }}>{score >= 8 ? '🏆' : '😊'}</h1>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>
                            {score >= 8 ? "অসাধারণ হয়েছে!" : (score >= 5 ? "ভালো হয়েছে!" : "আরো চেষ্টা করতে হবে!")}
                        </h2>
                        <p style={{ margin: '1rem 0' }}>আপনি ১০টির মধ্যে {score}টি সঠিক উত্তর দিয়েছেন।</p>
                        <div className="result-card">
                            <div className="result-percent">{score * 10}%</div>
                            <div>Score</div>
                        </div>
                        <button className="btn-primary" onClick={onClose}>হোম পেজে ফিরে যান</button>
                    </div>
                )}
            </div>
        </div>
    );
}
