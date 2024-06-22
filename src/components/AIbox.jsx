// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AIButton from "./AIButton";

export default function AIbox() {
    const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [showAIBox, setShowAIBox] = useState(false);

    useEffect(() => {
        if (browserSupportsSpeechRecognition) {
            SpeechRecognition.startListening();
            console.log("mic on");
        } else {
            console.log("Browser does not support speech recognition.");
        }
    }, [browserSupportsSpeechRecognition]);

    const handleClick = () => {
        setShowAIBox(true);
        SpeechRecognition.stopListening();
        console.log("box closed, mic off");
    };

    return (
        <>
            <div className={`bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-6 fixed h-32 rounded-t-3xl bottom-[70px] w-full ${showAIBox ? "hidden" : ""}`}>
                <div className="flex justify-between">
                    <div>Speak to book</div>
                    <button onClick={handleClick}>close</button>
                </div>
                <p>{listening ? 'Listening....' : 'Listening off'}</p>
                <p>{transcript}</p>
            </div>
            {showAIBox && <AIButton />}
        </>
    );
}