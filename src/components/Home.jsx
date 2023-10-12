import React from 'react'
import { motion } from 'framer-motion'
import Typerwriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/me-removebg.png'

export default function Home() {
    const animation = {
        h1: {
            initial: {
                x: '-100%',
                opacity: '0'
            },
            whileInView: {
                x: '0',
                opacity: '1'
            }
        },
        button: {
            initial: {
                y: '-100%',
                opacity: '0'
            },
            whileInView: {
                y: '0',
                opacity: '1'
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi, I'm  <br /> Vikalp Mishra
                    </motion.h1>

                    <Typerwriter options={{ strings: ['A Developer', 'A Designer', 'A Deep Learner Engineer', 'MERN Stack Developer'], autoStart: true, loop: true, wrapperClassName: 'typewriterpara', cursor: '' }} />
                    <div>
                        <a href="mailto:mishravikalp896@gmail.com">Hire Me</a>
                        <a href="#work">Project <BsArrowUpRight /></a>
                    </div>
                    <article data-special>
                        <p>Contact</p>
                        <span>mishravikalp896@gmail.com</span>
                    </article>
                </div>
            </section>
            <section>
                <img src={me} alt="" />
            </section>
            <BsChevronDown/>
        </div>
    )
}
