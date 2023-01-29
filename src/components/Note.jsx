import React from 'react';

const Note = (props) => {
    function handleClick() {
        console.log(props)
    }
    return (
        <div>
            <div className="bg-amber-100 shadow h-60 text-start flex flex-col justify-between">
                <div>
                    <div className="p-2 font-sourcecodepro font-bold text-black text-sm">{props.title}</div>
                    <div className="p-2 font-sourcecodepro text-black text-sm">{props.content}</div>
                </div>
                <div>
                    <button onClick={handleClick} className="p-2 font-sourcecodepro text-amber-300 text-sm hover:underline-offset-2">delete</button>
                </div>
            </div>
        </div>
    )
}

export default Note