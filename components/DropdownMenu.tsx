import { useState } from "react";

export default function DropdownMenu() {
    const [visible, setVisible] = useState(false);
    return <>
        <div className="relative inline-block bg-cyan-300 shadow-md rounded-md cursor-pointer  transition-all"
            onClick={() => setVisible(!visible)} onMouseLeave={() => setVisible(false)}>
            <div className="px-5 py-3">Menu</div>
            <div className={`${visible ? 'block' : 'invisible'} absolute shadow-md overflow-auto p-5 rounded-md`}>
                <a className="block">Sign out</a>
                <a className="block">ItemItemItemItemItemItemItemItem</a>
                <a className="block">ItemItemItemItemItemItemItemItem</a>
            </div>
        </div >
    </>;
}