import React from 'react'
import './App.css'

export default function Carousel() {

        const carouselSlide = document.querySelector('.carousel-slide')
        const carouselImages = document.querySelectorAll('.carousel-slide img');

        //buttons
        const prevbtn = document.querySelector('#prevbtn');
        const nextbtn = document.querySelector('#nextbtn');

        //counter
        let counter = 1;
        const size = carouselImages[0].clientWidth;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        //button listeners

        nextbtn.addEventListener('click', () => {
        if(counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
        });

        prevbtn.addEventListener('click', () => {
        if(counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
        });

        carouselSlide.addEventListener('transitionend', () =>{
        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if(carouselImages[counter].id === 'firstClone') {
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        });


    return (
        
        <div className='carousel-container'>

            <div className='carousel-slide'>

                <img className="five" src="\images\horizon1.jpg" alt="" id="lastClone"/>

                <img className="one" src="\images\man-dog.jpg" alt=""/>

                <img className="two" src="\images\horizon2.jpg" alt=""/>

                <img className="three" src="\images\moon-lake.jpg" alt=""/>

                <img className="four" src="\images\horizon3.png" alt=""/>

                <img className="five" src="\images\horizon1.jpg" alt=""/>

                <img className="one" src="\images\man-dog.jpg" alt="" id="firstClone"/>

            </div>

            <img src="prevbtn.png" id="prevbtn"/>
            <img src="nextbtn.png" id="nextbtn"/>
        </div>

    )
}