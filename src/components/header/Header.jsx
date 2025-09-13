import './Header.css'
import * as motion from "motion/react-client"
import { useRef } from "react"
import pic1 from '../../assets/pic1.jpeg';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.jpg';
import pic5 from '../../assets/pic5.jpeg';
import pic6 from '../../assets/pic6.png';
import pic7 from '../../assets/pic7.jpeg';
import pic8 from '../../assets/pic8.jpeg';
import { vh } from 'motion';



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
                    style={picone}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={pictwo}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picthree}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picfour}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picfive}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picsix}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picseven}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={piceight}
                />

            </motion.div>





            {/* <div className="container-mail">lynahutchi@mail.com</div> */}
        </div>
        </>
    )
}

export default Header;


const constraints = {
  width: '100vw',   // full viewport width
  height: '100vh',  // full viewport height
  backgroundColor: 'var(--hue-1-transparent)',
  overflow: 'hidden',       // optional: hides overflow
  position: 'relative'      // important for drag constraints
};

const picone = {
  width: 200,
  height: 220,
  backgroundImage: `url(${pic1})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const pictwo = {
  width: 170,
  height: 170,
  backgroundImage: `url(${pic2})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '45%',
  left: '65%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picthree = {
  width: 120,
  height: 170,
  backgroundImage: `url(${pic3})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '30%',
  left: '90%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picfour = {
  width: 200,
  height: 200,
  backgroundImage: `url(${pic4})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '35%',
  left: '10%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picfive = {
  width: 150,
  height: 170,
  backgroundImage: `url(${pic5})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '15%',
  left: '60%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picsix = {
  width: 100,
  height: 200,
  backgroundImage: `url(${pic6})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '15%',
  left: '1%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picseven = {
  width: 200,
  height: 150,
  backgroundImage: `url(${pic7})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '22%',
  left: '20%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const piceight = {
  width: 200,
  height: 100,
  backgroundImage: `url(${pic8})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '77%',
  left: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 10,
};