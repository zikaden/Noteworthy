import React, { useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:justify-between">
            <div>
                <div className=" font-sourcecodepro  text-black text-xl">Hi, this is a simple note-taking app. Feel free to add and delete notes!</div>
            </div>
            <div></div>
            <div className="bg-amber-100 shadow h-60">
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" className=" bg-amber-100 p-2 font-sourcecodepro font-bold w-full text-black text-sm" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="8" className="bg-amber-100 w-full p-2 font-sourcecodepro text-black text-sm" />
                <button onClick={submitNote} className=" bg-amber-400 rounded-full w-10 h-10 hover:bg-amber-500 text-white text-base font-sourcecodepro font-bold" >Add</button>
            </div>
        </div>

    )
}

export default CreateNote