import React from 'react'
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <section class="testimonials-section">
            <h2>What Our Users Say</h2>

            <div class="testimonial">
                <p class="testimonial-text">"AI Wizardry transformed my story ideas into a beautiful, illustrated book. The process was incredibly intuitive and fun!"</p>
                <h3 class="user-name">- Alex Smith, Aspiring Author</h3>
            </div>

            <div class="testimonial">
                <p class="testimonial-text">"As a teacher, I found AI Wizardry to be an invaluable tool for creating engaging educational content for my students."</p>
                <h3 class="user-name">- Sarah Johnson, Elementary School Teacher</h3>
            </div>

            <div class="testimonial">
                <p class="testimonial-text">"Never thought I could make a children's book so easily. The text-to-speech feature brought my characters to life!"</p>
                <h3 class="user-name">- Emily White, Parent and Storyteller</h3>
            </div>
        </section>
    )
}

export default Testimonials 