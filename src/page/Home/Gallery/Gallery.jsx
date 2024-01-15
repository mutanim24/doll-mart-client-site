import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'aos/dist/aos.css';
import fashion from '../../../assets/fashion-fun.jpg';
import doll1 from '../../../assets/doll-1.jpg';
import doll2 from '../../../assets/doll-2.jpg';
import doll3 from '../../../assets/doll-3.jpg';
import doll4 from '../../../assets/doll-4.jpg';
import doll5 from '../../../assets/doll-5.jpg';
import doll6 from '../../../assets/doll-6.jpg';
import doll7 from '../../../assets/doll-7.jpg';
import doll8 from '../../../assets/doll-8.jpg';
import doll9 from '../../../assets/doll-9.jpg';
import doll10 from '../../../assets/doll-10.jpg';
import doll11 from '../../../assets/doll-11.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PhotoAlbum from "react-photo-album";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const Gallery = () => {
    const images = [doll10, doll11, doll9, doll7, fashion, doll1, doll8];
    return (
        <div className='md:px-14 my-16'>
            <SectionTitle
                title="Dolls Gallery"
                subtitle="A Captivating Showcase of Exquisite Dolls"
            ></SectionTitle>




            <div data-aos="zoom-in" className='p-4 md:p-8 border-dotted rounded border-pink-500 border-8'>

                <ResponsiveMasonry>
                    <Masonry gutter="10px">
                        {
                            images.map((item, index) => <div>
                                <img key={index} src={item} alt="" />
                            </div>)
                        }
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        </div>
    );
};

export default Gallery;