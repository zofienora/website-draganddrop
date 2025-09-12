import './Header.css'
import * as motion from "motion/react-client"
import { useRef } from "react"
import pic2 from '../../assets/pic2.png';



function Header() {
    const constraintsRef = useRef(null)

    return(
        <>
        <div className="header">
            <div className="header-container">
                <p className="header-name">Lyna Hutchi</p>
                <p className="header-job">Designer & Creative Director</p>
            </div>



            <motion.div className="drag-container" ref={constraintsRef} style={constraints}>
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
  backgroundImage: `url(${pic2})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
  // temporary for debugging so you can see it even if the image fails:
  border: '1px solid #ccc'
};