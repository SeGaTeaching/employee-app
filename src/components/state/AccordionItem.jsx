import { useState } from "react";

export default function AccordionItem({title, children}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <h3
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: 'pointer' }}> 
            {title} {isOpen ? '-' : '+'}
            </h3>
            {isOpen ? <div>{children}</div> : null}
            {/* {isOpen && <div>{children}</div>} */}
        </div>
    )
}