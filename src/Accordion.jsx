import { useState } from "react"


const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <section className="accordion-card">
            <div className={isActive ? "header border" : "header"} onClick={() => { setIsActive(!isActive) }}>
                <div>{title}</div>
                <p className="icon">{isActive ? "-" : "+"}</p>
            </div>

            <div className="content">
                {isActive && <p className="card-info">{content}</p>}
            </div>
        </section>
    )
}

export default Accordion