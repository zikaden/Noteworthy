import React, { useState } from "react";
import Navbar from './Nav';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';


const Home = () => {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="p-10 space-y-5 md:space-y-7">
                <CreateNote onAdd={addNote} />
                <div className="space-y-7 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
                    {notes.map((noteItem, index) => {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                onDelete={deleteNote}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home