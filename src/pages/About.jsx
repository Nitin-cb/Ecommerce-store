import React from 'react';
import Title from '../components/Title/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/HomePage/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolores beatae repellat esse repellendus recusandae consequatur,
            fugiat accusantium cupiditate. Consequatur, sit officiis. Temporibus
            enim velit cumque, sunt laboriosam incidunt culpa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nesciunt nostrum autem accusamus aliquid, similique eaque. Eius,
            quod dolorem quos ipsam sed, maiores dolor voluptatum, tenetur esse
            facere ut delectus?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            enim veniam? Obcaecati nulla natus ratione adipisci odio dignissimos
            accusamus officia ipsa suscipit maiores culpa aut ad earum, id, sint
            quas.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Asurance: </b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
