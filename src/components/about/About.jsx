import { motion } from "framer-motion";
import { useScroll } from "motion/react"

import './about.css';

function About() {

    const { scrollYProgress } = useScroll()

    return(
        <>
        <div className="about">
            <div className="container about-container">
                <motion.div
                initial={{ opacity: 0, y: 50 }}         // start slightly below & hidden
                whileInView={{ opacity: 1, y: 0 }}      // animate to normal place
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}  // triggers once, 30% in view
                className="about-text"
                >
                    <h1 className="aboutme">About Me</h1>
                    <p className="abouttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequatur eius dolores, ipsum vel cum quasi laudantium vitae, dignissimos obcaecati excepturi consectetur? Nemo amet ducimus a quo voluptates assumenda quidem tenetur. Deleniti ex dicta, sit ducimus inventore suscipit neque dolores, facere ea similique voluptatibus modi quo! Voluptates aliquid porro optio, quam hic architecto officiis saepe quibusdam. Similique sed voluptates laudantium incidunt, quam eligendi! Assumenda molestiae, autem veritatis temporibus magni repellendus. Eos nihil non delectus unde aliquam aperiam maiores culpa saepe. Voluptas dolorum hic nulla sed saepe ducimus explicabo voluptates sequi. Dolore omnis eaque quisquam, iusto distinctio odio architecto dolorum animi.
                    </p>
                </motion.div>
            </div>
        </div>
        </>
    )
}

export default About;
