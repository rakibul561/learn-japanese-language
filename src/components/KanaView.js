'use client';
import { useState, useMemo } from 'react';
import kanaData from '@/data/kana.json';

export default function KanaView() {
    const [type, setType] = useState('Hiragana'); // 'Hiragana' or 'Katakana'
    const [group, setGroup] = useState('Seion'); // 'Seion', 'Dakuon', 'Handakuon', 'Yoon'

    // Process data into a grid-friendly format
    const processedData = useMemo(() => {
        const rows = [];
        const consonants = Object.keys(kanaData);
        
        consonants.forEach(consonant => {
            const vowels = Object.keys(kanaData[consonant]);
            vowels.forEach(vowel => {
                const charObj = kanaData[consonant][vowel];
                
                // Grouping logic
                Object.keys(charObj).forEach(cat => {
                    const data = charObj[cat];
                    rows.push({
                        ...data,
                        consonant,
                        vowel,
                        category: cat === 'ya' || cat === 'yu' || cat === 'yo' ? 'Yoon' : cat
                    });
                });
            });
        });
        return rows;
    }, []);

    const filteredData = processedData.filter(item => {
        if (group === 'Yoon') return item.category === 'Yoon';
        return item.category === group;
    });

    return (
        <div className="kana-view animated-fade-in">
            <header className="kana-header">
                <h2>জাপানিজ অক্ষর পরিচয় (Kana Chart)</h2>
                <div className="kana-controls">
                    <div className="toggle-group">
                        <button 
                            className={`toggle-btn ${type === 'Hiragana' ? 'active' : ''}`}
                            onClick={() => setType('Hiragana')}
                        >
                            Hiragana
                        </button>
                        <button 
                            className={`toggle-btn ${type === 'Katakana' ? 'active' : ''}`}
                            onClick={() => setType('Katakana')}
                        >
                            Katakana
                        </button>
                    </div>

                    <div className="filter-group">
                        <button 
                            className={`filter-btn ${group === 'Seion' ? 'active' : ''}`}
                            onClick={() => setGroup('Seion')}
                        >
                            Basic
                        </button>
                        <button 
                            className={`filter-btn ${group === 'Dakuon' ? 'active' : ''}`}
                            onClick={() => setGroup('Dakuon')}
                        >
                            Dakuon
                        </button>
                        <button 
                            className={`filter-btn ${group === 'Handakuon' ? 'active' : ''}`}
                            onClick={() => setGroup('Handakuon')}
                        >
                            Handakuon
                        </button>
                        <button 
                            className={`filter-btn ${group === 'Yoon' ? 'active' : ''}`}
                            onClick={() => setGroup('Yoon')}
                        >
                            Combo
                        </button>
                    </div>
                </div>
            </header>

            <div className="kana-grid">
                {filteredData.map((item, index) => (
                    <div key={index} className="kana-card">
                        <div className="kana-char">{item[type]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
