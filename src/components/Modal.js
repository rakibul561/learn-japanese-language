'use client';

export default function Modal({ isOpen, message, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <div className="modal-actions">
                    <button className="btn-primary" onClick={onConfirm}>হ্যাঁ</button>
                    <button className="btn-secondary" onClick={onCancel}>না</button>
                </div>
            </div>
        </div>
    );
}
