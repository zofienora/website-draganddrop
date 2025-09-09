import './Header.css'
import * as motion from "motion/react-client"
import { useRef } from "react"

function Header() {
    const constraintsRef = useRef(null)

    return(
        <>
        <div className="header">
            <div className="header-container">
                <p className="header-name">Lyna Hutchi</p>
                <p className="header-job">Designer & Creative Director</p>
            </div>



            <motion.div className="drag-container" ref={constraintsRef}>
                <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                style={box}
            />
            </motion.div>





            {/* <div className="container-mail">lynahutchi@mail.com</div> */}
        </div>
        </>
    )
}

export default Header;


const constraints = {
    width: 300,
    height: 300,
    backgroundColor: "var(--hue-1-transparent)",
    borderRadius: 10,
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 10,
}