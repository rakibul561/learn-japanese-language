'use client';
import { useState, useEffect } from 'react';
import kanjiData from '@/data/kanji.json';

export default function KanjiView() {
    const [mode, setMode] = useState('view'); // 'view' or 'practice'
    
    // Practice state
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Initialize practice mode
    useEffect(() => {
        if (mode === 'practice' && kanjiData && kanjiData.length > 0) {
            generateQuestion(0);
        }
    }, [mode]);

    const generateQuestion = (index) => {
        if (index >= kanjiData.length) {
            setShowResult(true);
            return;
        }
        
        const currentKanji = kanjiData[index];
        const kunText = Array.isArray(currentKanji.kunyomi) ? currentKanji.kunyomi.join(', ') : (currentKanji.kunyomi || '-');
        const onText = Array.isArray(currentKanji.onyomi) ? currentKanji.onyomi.join(', ') : (currentKanji.onyomi || '-');
        const correctText = `Kun: ${kunText} | On: ${onText}`;
        
        // Generate options (3 wrong + 1 correct)
        let newOptions = [correctText];
        const otherKanjis = kanjiData.filter((_, i) => i !== index);
        const shuffledOthers = [...otherKanjis].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < Math.min(3, shuffledOthers.length); i++) {
            const wrongKanji = shuffledOthers[i];
            const wKunText = Array.isArray(wrongKanji.kunyomi) ? wrongKanji.kunyomi.join(', ') : (wrongKanji.kunyomi || '-');
            const wOnText = Array.isArray(wrongKanji.onyomi) ? wrongKanji.onyomi.join(', ') : (wrongKanji.onyomi || '-');
            newOptions.push(`Kun: ${wKunText} | On: ${wOnText}`);
        }
        
        // Fill remaining options if kanjiData is small
        while (newOptions.length < 4 && newOptions.length < kanjiData.length) {
             // wait, if length < 4, just keep what we have
             break;
        }
        
        newOptions = newOptions.sort(() => Math.random() - 0.5);
        
        setOptions(newOptions);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    const handleOptionSelect = (option) => {
        if (selectedOption !== null) return;
        
        const currentKanji = kanjiData[currentQuestionIndex];
        const kunText = Array.isArray(currentKanji.kunyomi) ? currentKanji.kunyomi.join(', ') : (currentKanji.kunyomi || '-');
        const onText = Array.isArray(currentKanji.onyomi) ? currentKanji.onyomi.join(', ') : (currentKanji.onyomi || '-');
        const correctText = `Kun: ${kunText} | On: ${onText}`;
        
        setSelectedOption(option);
        const correct = option === correctText;
        setIsCorrect(correct);
        
        if (correct) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex + 1 < kanjiData.length) {
                setCurrentQuestionIndex(prev => prev + 1);
                generateQuestion(currentQuestionIndex + 1);
            } else {
                setShowResult(true);
            }
        }, 1500);
    };

    const resetPractice = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        generateQuestion(0);
    };

    // Safe render for empty data
    if (!kanjiData || !Array.isArray(kanjiData) || kanjiData.length === 0) {
        return (
            <div className="view">
                <header>
                    <h1>Kanji List Empty</h1>
                    <p>Please add some data to src/data/kanji.json</p>
                </header>
            </div>
        );
    }

    return (
        <div className="view">
            <header>
                <h1>Kanji Library</h1>
                <div className="toggle-group" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                    <button 
                        className={`toggle-btn ${mode === 'view' ? 'active' : ''}`}
                        onClick={() => setMode('view')}
                    >
                        Chart View
                    </button>
                    <button 
                        className={`toggle-btn ${mode === 'practice' ? 'active' : ''}`}
                        onClick={() => setMode('practice')}
                    >
                        Practice Kanji
                    </button>
                </div>
            </header>

            {mode === 'view' && (
                <div className="kanji-grid">
                    {kanjiData.map((k, index) => (
                        <div key={index} className="kana-card">
                            <div className="kanji-char-large">{k.kanji}</div>
                            <div className="kana-romaji" style={{ marginTop: '10px' }}>
                                {k.kunyomi && k.kunyomi.length > 0 && <div><strong>Kun:</strong> {Array.isArray(k.kunyomi) ? k.kunyomi.join(', ') : k.kunyomi}</div>}
                                {k.onyomi && k.onyomi.length > 0 && <div><strong>On:</strong> {Array.isArray(k.onyomi) ? k.onyomi.join(', ') : k.onyomi}</div>}
                                {k.meaning && <div style={{color: 'var(--primary)', marginTop: '5px'}}>{k.meaning}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {mode === 'practice' && !showResult && (
                <div className="game-container">
                    <div className="exam-status">
                        Question {currentQuestionIndex + 1} of {kanjiData.length}
                    </div>
                    
                    <div className="flashcard" style={{ padding: '4rem 2rem' }}>
                        <div className="kanji-char-huge">{kanjiData[currentQuestionIndex].kanji}</div>
                    </div>

                    <div className="question" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Select the correct Kunyomi and Onyomi:
                    </div>

                    <div className="options-grid">
                        {options.map((option, index) => {
                            let optionClass = "option-btn";
                            if (selectedOption === option) {
                                optionClass += isCorrect ? " correct" : " wrong";
                            } else if (selectedOption !== null) {
                                const currentKanji = kanjiData[currentQuestionIndex];
                                const kunText = Array.isArray(currentKanji.kunyomi) ? currentKanji.kunyomi.join(', ') : (currentKanji.kunyomi || '-');
        const onText = Array.isArray(currentKanji.onyomi) ? currentKanji.onyomi.join(', ') : (currentKanji.onyomi || '-');
        const correctText = `Kun: ${kunText} | On: ${onText}`;
                                if (option === correctText) {
                                    optionClass += " correct";
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleOptionSelect(option)}
                                    disabled={selectedOption !== null}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {mode === 'practice' && showResult && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h2>Practice Complete!</h2>
                    <div className="result-card">
                        <div className="result-percent">
                            {Math.round((score / kanjiData.length) * 100)}%
                        </div>
                        <p style={{ marginTop: '1rem', color: 'var(--light-text)' }}>
                            {score} out of {kanjiData.length} correct
                        </p>
                    </div>
                    <button className="btn-primary" onClick={resetPractice} style={{ maxWidth: '300px', margin: '2rem auto 0' }}>
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
}
