// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food 😋</p>
                </div>

                <p className="mid">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cumque aperiam quidem voluptate deleniti quibusdam cum sapiente, placeat eligendi consectetur accusantium laborum fugit fugiat vero id facere excepturi atque assumenda, quos nostrum soluta rerum unde similique explicabo? Nesciunt cumque, itaque non dolorem expedita perspiciatis dolorum unde! Quam accusamus aspernatur earum.
                </p>

                <Link to={"/"}>
                    Explore Menu{" "}
                    <HiOutlineArrowNarrowRight />
                </Link>
            </div>

            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About