import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-card" key={Math.random()}>
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <div className="card-title">{title}</div>
                <p className="icon">{isActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}</p>
            </div>

            <div className="content">{isActive && <p className="card-info">{content}</p>}</div>
        </div>
    )
}

export default Accordion