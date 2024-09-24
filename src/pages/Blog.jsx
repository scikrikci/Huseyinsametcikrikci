import { useEffect } from 'react';
import anime from 'animejs';

function Blog() {
    useEffect(() => {
        anime({
            targets: "#p1-orbit path",
            d: [
                {
                    value: "M20.9,-26.2C27.3,-19.4,33,-13.1,35.3,-5.4C37.7,2.3,36.7,11.5,33.1,20.4C29.5,29.3,23.2,37.9,14.7,41.5C6.2,45.1,-4.6,43.7,-12.7,39C-20.8,34.2,-26.2,26.3,-30.8,18C-35.4,9.7,-39.1,1.1,-37.8,-6.8C-36.6,-14.6,-30.4,-21.7,-23.2,-28.4C-16.1,-35,-8.1,-41.2,-0.4,-40.6C7.2,-40.1,14.4,-33,20.9,-26.2Z",
                },
                {
                    value: "M25.9,-32.4C31.9,-25.8,34.1,-16.1,36.2,-6.1C38.3,3.9,40.4,14.2,36.4,20.8C32.4,27.4,22.2,30.3,12.8,32.6C3.4,34.8,-5.2,36.5,-13.6,34.6C-22.1,32.8,-30.2,27.5,-34.1,20.1C-38,12.6,-37.6,3,-36.3,-6.8C-35,-16.6,-32.8,-26.6,-26.6,-33.2C-20.5,-39.8,-10.2,-42.9,-0.2,-42.8C9.9,-42.6,19.8,-39,25.9,-32.4Z",
                },
                {
                    value: "M22.4,-24.7C30.3,-20.1,38.8,-14.2,41.3,-6.4C43.8,1.5,40.3,11.4,35.1,20.2C29.9,29,23.1,36.9,14.9,39.1C6.7,41.3,-2.9,37.8,-12.1,34.1C-21.3,30.4,-30.1,26.4,-36,19.3C-42,12.1,-45.1,1.8,-43.9,-8.2C-42.6,-18.1,-37,-27.7,-28.9,-32.3C-20.9,-36.8,-10.4,-36.3,-1.6,-34.4C7.3,-32.5,14.5,-29.2,22.4,-24.7Z",
                },
                {
                    value: "M26.2,-31.8C32.5,-25.9,35.2,-16.3,35.8,-7.1C36.5,2.1,35.2,10.8,31.3,18.5C27.4,26.2,20.9,32.8,13.1,35.4C5.3,38,-3.7,36.6,-11.9,33.3C-20.1,30.1,-27.4,25.1,-31.1,18.2C-34.8,11.3,-34.9,2.6,-34.4,-7.1C-33.9,-16.7,-32.8,-27.3,-27,-33.3C-21.2,-39.3,-10.6,-40.6,-0.3,-40.2C9.9,-39.8,19.9,-37.7,26.2,-31.8Z",
                },
            ],
            loop: true,
            duration: 10000,
            easing: "linear",
            direction: "alternate",
        },

        );
    }, []);

    const particleStyle = {
        position: 'relative',
        height: '16rem',
        width: '16rem',
        fontSize: '8rem',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        animation: 'orbit 0.5s linear infinite alternate',
    };



    return (
        <section className="flex flex-col items-center mt-32 pb-10 gap-[28px]">
            <div className="flex items-center w-[900px]">
                <span className="pr-6">Git Abort Merge - How to cancel a merge in Git</span>
                <span className="h-px flex-1 bg-white"></span>
                <span className="pl-6">Dec.18</span>
            </div>

            <div style={particleStyle}>
                <svg
                    id="p1-orbit"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgba(58, 190, 249, 1)', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: 'rgba(20, 60, 150, 1)', stopOpacity: 0.4 }} />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#gradient1)"
                        d="M26.3,-31.6C34.1,-24.9,40.4,-16.5,41.1,-7.9C41.8,0.7,36.9,9.6,31.4,17.1C25.8,24.7,19.7,30.9,12,34.3C4.3,37.6,-4.9,38.1,-13.1,35.4C-21.3,32.6,-28.6,26.7,-33.6,19C-38.6,11.2,-41.3,1.7,-40.2,-7.6C-39.2,-17,-34.5,-26.3,-27.2,-33.2C-19.9,-40,-9.9,-44.5,-0.3,-44.1C9.3,-43.7,18.5,-38.4,26.3,-31.6Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                    ></path>
                </svg>
            </div>


            <div class="w-full lg:w-1/2 lg:p-8"><div class="flex justify-center"><div class="w-[600px] h-[500px]"><svg class="BgAnimation__svg" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.15"><path fill-rule="evenodd" clip-rule="evenodd" d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z" stroke="url(#paint0_radial)" id="path_0"></path><path d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z" stroke="url(#paint1_radial)" id="path_1"></path><path d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z" stroke="url(#paint2_radial)" id="path_2"></path></g><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint3_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#46737"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint7_linear)"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint4_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="382.164" cy="155.029" rx="1.07433" ry="1.07306" transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)" fill="#F46737"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M381.81 154.669L356.057 128.885" transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)" stroke="url(#paint5_linear)"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="333.324" cy="382.691" rx="1.07306" ry="1.07433" transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)" fill="#F46737"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></ellipse><path d="M333.667 382.335L359.42 356.551" transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)" stroke="url(#paint6_linear)"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></path><ellipse cx="165.524" cy="93.9596" rx="1.07306" ry="1.07433" transform="translate(-165.524 -93.9596)" fill="#F46737"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M165.182 94.3159L139.429 120.1" transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)" stroke="url(#paint7_linear)"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#13ADC7"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint11_linear)"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint8_linear" x1="414.367" y1="301.156" x2="439.435" y2="276.118" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint9_linear" x1="515.943" y1="288.238" x2="541.339" y2="291.454" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint10_linear" x1="117.001" y1="230.619" x2="117.36" y2="258.193" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient></defs></svg></div></div></div>
        </section>

    );
}

export default Blog;