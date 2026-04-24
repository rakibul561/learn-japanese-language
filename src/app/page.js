'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import LessonGrid from '@/components/LessonGrid';
import LessonView from '@/components/LessonView';
import ChallengeView from '@/components/ChallengeView';
import KanaView from '@/components/KanaView';
import Modal from '@/components/Modal';
import { lessonsData } from '@/data/lessons';

export default function Home() {
    const [view, setView] = useState('home'); // 'home', 'challenge', 'lesson'
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingView, setPendingView] = useState(null);

    const handleSetView = (newView) => {
        if (view === 'lesson') {
            setPendingView(newView);
            setShowConfirm(true);
        } else {
            setView(newView);
        }
    };

    const confirmSwitch = () => {
        setShowConfirm(false);
        setView(pendingView);
        setSelectedLesson(null);
    };

    const cancelSwitch = () => {
        setShowConfirm(false);
        setPendingView(null);
    };

    const handleSelectLesson = (lessonId) => {
        const lesson = lessonsData.find(l => l.id === lessonId);
        setSelectedLesson(lesson);
        setView('lesson');
    };

    return (
        <main>
            <Navbar currentView={view} setView={handleSetView} />

            {view === 'home' && (
                <div className="view">
                    <header>
                        <h1>জাপানিজ শিখুন (বাংলায়)</h1>
                        <p>সবচেয়ে সহজ উপায়ে জাপানিজ ভোকাবুলারি আয়ত্ত করুন</p>
                    </header>
                    <LessonGrid lessons={lessonsData} onSelectLesson={handleSelectLesson} />
                </div>
            )}

            {view === 'challenge' && (
                <ChallengeView lessons={lessonsData} setView={setView} />
            )}

            {view === 'kana' && (
                <KanaView />
            )}

            {view === 'lesson' && selectedLesson && (
                <LessonView 
                    lesson={selectedLesson} 
                    onClose={() => handleSetView('home')} 
                />
            )}

            <Modal 
                isOpen={showConfirm}
                message="আপনি কি নিশ্চিত যে এই লেসনটি ছেড়ে যেতে চান?"
                onConfirm={confirmSwitch}
                onCancel={cancelSwitch}
            />
        </main>
    );
}
