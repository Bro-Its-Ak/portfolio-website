import React from "react";
import Everyblog from "../components/everyblog";
import { notFound } from "next/navigation";

// Static paths (pre-rendering) for dynamic routes using 'keyword'
export async function generateStaticParams() {
  const blogs = [
    {
      title: "My Own Portfolio", no_of_comment: 0, date: "October 23, 2024", keyword: "portfolio", content: `<div style="
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 1.5rem;
margin-bottom: 2rem;
color: #a2a2a2;
font-weight: 500;
">
            <p>Creating my own website has been a completely different experience compared to working on other websites. This time, I am the client. I've put in significant effort to develop it, even though it doesn't have many functions. The purpose of this site is to serve as my introduction. I've also completed more complex projects that are currently available online, and you can view them at any time.</p>
            <p>I am actively seeking freelance opportunities to showcase my knowledge and skills to others, making it easier for potential clients to reach out to me. Additionally, having a visible portfolio serves as proof of my legitimacy, as I have previously lost two freelance opportunities due to a lack of trust between clients and me. Ultimately, I aim to be listed on Google so that different people can discover my work, similar to my idol, CodeWithHarry.</p>
            <p>He is the person from whom I learned web development and other skills. He has a YouTube channel that was incredibly helpful for me personally. Additionally, he taught me how to use my precious time wisely and avoid distractions. This channel played a significant role in my early days, and because of it, I am now standing here and writing my blog!</p>
            <h1 class='text-4xl font-bold text-white py-4'>At the end</h1>
            <p>At the end, i hope that i could get enough clients to work with so that their problems could be solved easily and i could also earn some money to learn newer skills and use paid ai tools and also play games on ps5.Also if you like my efforts you can promote me and talk about me with your friends and family so that my reach could be increased and i will be able to get customers that needs me.</p>
            <p>If you would like to learn more about me, you can reach out using the contact details provided on my website. Additionally, you can visit the "About" section of https://getmeachaibyyash.vercel.app to find my full information. If you're a kind person, I would appreciate your help in promoting me. Thank you!</p>
        </div>`},
    {
      title: "Innovative Linktree clone", content: `<div style="
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 1.5rem;
margin-bottom: 2rem;
color: #a2a2a2;
font-weight: 500;
">
<p>Building a Linktree clone has been a remarkable experience, showcasing my expertise in web development and my ability to bring practical solutions to life. This project was created as a streamlined platform for users to organize and share multiple links in one visually appealing and functional interface. Leveraging my skills in HTML, CSS, and Tailwind CSS, I was able to create a responsive, modern design that looks fantastic on any device while maintaining an intuitive user experience.</p>

<p>On the technical side, the project utilizes powerful frameworks and libraries, including React.js and Next.js, which provided a seamless foundation for developing dynamic components and achieving exceptional performance. I implemented state management effectively and optimized routing to ensure the application operates efficiently and feels fast. Using JavaScript, I brought interactivity to the platform, enabling users to personalize their link pages and view updates in real-time.</p>

<p>The backend of this project highlights my proficiency in Node.js and Express.js. To manage and store user data securely, I integrated MongoDB as the database, using Mongoose for schema modeling and database interaction. This combination ensured the platform was robust, scalable, and capable of handling complex data relationships. By creating a well-structured API, I facilitated smooth communication between the frontend and backend, resulting in a cohesive and reliable user experience.</p>

<h1 style="font-size: 2rem; font-weight: bold; color: white; margin-top: 1rem;">At the end</h1>
<p>At the end of this journey, the Linktree clone stands as a reflection of my skills and dedication to delivering polished and effective web solutions. This project demonstrates my ability to combine modern technologies with practical design to create applications that are both functional and user-focused. It also showcases my problem-solving skills, as I tackled challenges like ensuring responsive layouts, implementing efficient data storage, and optimizing load times.</p>

<p>Looking ahead, I envision expanding the capabilities of this Linktree clone by adding advanced features such as analytics, enhanced customization options, and integrations with external tools or platforms. With this project, I have proven my ability to create meaningful solutions using technologies like MongoDB, React.js, Tailwind CSS, and Node.js, all while focusing on user satisfaction.</p>

<p>If this project resonates with you, or if you are looking for a developer skilled in HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, MongoDB, Mongoose, and Node.js, feel free to reach out. I am eager to collaborate, take on new challenges, and help bring your ideas to life. Your support and feedback are always appreciated!</p>
</div>`
      , no_of_comment: 0, date: "October 23, 2024", keyword: "bittree"
    },
    {
      title: "Advanced Linktree Clone", content: `<div style="
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 1.5rem;
margin-bottom: 2rem;
color: #a2a2a2;
font-weight: 500;
">
<p>The Advanced Linktree Clone represents a leap forward in creating user-focused, modern web applications. This project is not just a link management tool; it’s an innovative platform that incorporates advanced features like an AI-powered chatbot and a robust authentication system. By combining cutting-edge technologies with my core skills in web development, I created a solution that is both highly functional and secure.</p>

<p>One of the standout features of this project is the AI chatbot, built using **Copilot Kit**. The chatbot enhances user interaction by providing instant responses, assisting users in navigating the platform, and offering personalized suggestions for better utilization of their link pages. Integrating this AI-powered feature required in-depth knowledge of **JavaScript**, **React.js**, and backend integration to ensure smooth communication and responsiveness.</p>

<p>Another significant feature is the **authentication system**, which provides secure login and registration functionality. Using **Next.js's built-in API routes**, **MongoDB**, and **Mongoose**, I implemented a robust authentication flow with features like hashed passwords, session management, and user role handling. This ensures user data remains safe while maintaining a seamless user experience.</p>

<p>On the design front, I utilized **HTML**, **CSS**, and **Tailwind CSS** to craft a visually appealing, responsive interface. This ensures the platform performs exceptionally well on various devices, from desktops to smartphones. The dynamic front-end features, powered by **React.js** and **Next.js**, offer an engaging experience for users, whether they are managing their links or interacting with the AI chatbot.</p>

<h1 style="font-size: 2rem; font-weight: bold; color: white; margin-top: 1rem;">At the end</h1>
<p>At the end of this journey, the Advanced Linktree Clone has become more than just a project—it’s a demonstration of my ability to integrate modern technology into functional, user-friendly platforms. From utilizing AI with Copilot Kit to implementing a secure authentication system, this project reflects my expertise in creating advanced web solutions that address real-world needs.</p>

<p>Future enhancements may include deeper AI integration, advanced analytics, and even more customization options for users. If you’re looking for a developer skilled in **HTML**, **CSS**, **Tailwind CSS**, **JavaScript**, **React.js**, **Next.js**, **Node.js**, **MongoDB**, **Mongoose**, and AI integrations, I’d love to hear from you. Let’s collaborate to create innovative solutions together. Your feedback and support are always appreciated!</p>
</div>`
      , no_of_comment: 0, date: "October 23, 2024", keyword: "advanced-bittree"
    },
  ]

  // Generate the static params (each param will be pre-rendered)
  return blogs.map(blog => ({
    keyword: blog.keyword,
  }));
}


// Generate dynamic metadata based on params
export async function generateMetadata({ params }) {
  // Await params to make sure you're correctly retrieving it in latest Next.js
  const { keyword } = await params;  // Here we await params
  const blogs = [
    { title: "My Own Portfolio", no_of_comment: 0, date: "October 23, 2024", keyword: "portfolio" },
    { title: "Innovative Linktree clone", no_of_comment: 0, date: "October 23, 2024", keyword: "bittree" },
    { title: "Advanced Linktree clone", no_of_comment: 0, date: "October 23, 2024", keyword: "advanced-bittree" },
  ];

  // Find the blog based on the awaited keyword
  const curblog = blogs.find(item => item.keyword === keyword);
  if (curblog) {
    return {
      title: `${curblog.title} - Yash Dwivedi | Portfolio Website`,
      description: `Hey, you are reading about ${curblog.title}, keep it up!`,
    };
  }
  else {
    return {
      title: `Blog not found`,
    };
  }
}

// Page component
const Page = async ({ params }) => {
  // Await params to use keyword in page
  const { keyword } = await params;  // Await params here as well

  const blogs = [
    {
      title: "My Own Portfolio", no_of_comment: 0, date: "October 23, 2024", keyword: "portfolio", content: `<div style="
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    color: #a2a2a2;
    font-weight: 500;
">
                <p>Creating my own website has been a completely different experience compared to working on other websites. This time, I am the client. I've put in significant effort to develop it, even though it doesn't have many functions. The purpose of this site is to serve as my introduction, and I’ve incorporated artificial intelligence-driven features to enhance user experience. I’ve also completed more complex projects that are currently available online, and you can view them at any time.</p>

<p>I am actively seeking freelance opportunities to showcase my knowledge and skills to others, making it easier for potential clients to reach out to me. Additionally, having a visible portfolio, powered by AI technologies, serves as proof of my legitimacy, as I have previously lost two freelance opportunities due to a lack of trust between clients and me. Ultimately, I aim to be listed on Google so that different people can discover my work, similar to my idol, CodeWithHarry.</p>

<p>He is the person from whom I learned web development and other skills. He has a YouTube channel that was incredibly helpful for me personally. Additionally, he taught me how to use my precious time wisely and avoid distractions. This channel played a significant role in my early days, and because of it, I am now standing here and writing my blog, incorporating insights about AI to stay ahead of trends!</p>

<h1 class='text-4xl font-bold text-white py-4'>At the end</h1>

<p>At the end, I hope to get enough clients to work with so that their problems could be solved easily, aided by AI tools, and I could also earn money to learn newer skills, use paid AI tools, and even play games on PS5. Also, if you like my efforts, you can promote me and talk about me with your friends and family so that my reach could be increased, and I will be able to get customers who need my AI-driven solutions.</p>

<p>If you would like to learn more about me, you can reach out using the contact details provided on my website. Additionally, you can visit the "About" section of https://getmeachaibyyash.vercel.app to find my full information. If you're a kind person, I would appreciate your help in promoting me. Thank you!</p>

            </div>` },
    {
      title: "Innovative Linktree clone", no_of_comment: 0, date: "October 23, 2024", keyword: "bittree", content: `<div style="
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    color: #a2a2a2;
    font-weight: 500;
">
  <p>Building a Linktree clone has been a remarkable experience, showcasing my expertise in web development and my ability to bring practical solutions to life. This project was created as a streamlined platform for users to organize and share multiple links in one visually appealing and functional interface. Leveraging my skills in HTML, CSS, and Tailwind CSS, I was able to create a responsive, modern design that looks fantastic on any device while maintaining an intuitive user experience, enhanced by artificial intelligence-driven features.</p>
  
<p>On the technical side, the project utilizes powerful frameworks and libraries, including React.js and Next.js, which provided a seamless foundation for developing dynamic components and achieving exceptional performance. I implemented state management effectively and optimized routing to ensure the application operates efficiently and feels fast. Using JavaScript and incorporating AI-driven interactivity, I brought new capabilities to the platform, enabling users to personalize their link pages and view updates in real-time.</p>
  
<p>The backend of this project highlights my proficiency in Node.js and Express.js. To manage and store user data securely, I integrated MongoDB as the database, using Mongoose for schema modeling and database interaction. This combination ensured the platform was robust, scalable, and capable of handling complex data relationships. With AI-enhanced optimizations, I created a well-structured API, facilitating smooth communication between the frontend and backend for a cohesive and reliable user experience.</p>
  
<h1 style="font-size: 2rem; font-weight: bold; color: white; margin-top: 1rem;">At the end</h1>
<p>At the end of this journey, the Linktree clone stands as a reflection of my skills and dedication to delivering polished, AI-enhanced web solutions. This project demonstrates my ability to combine modern technologies with practical design, creating applications that are both functional and user-focused. It also showcases my problem-solving skills, as I tackled challenges like ensuring responsive layouts, implementing efficient data storage, and optimizing load times with the help of AI tools.</p>
  
<p>Looking ahead, I envision expanding the capabilities of this Linktree clone by adding advanced features such as AI-driven analytics, enhanced customization options, and integrations with external tools or platforms. With this project, I have proven my ability to create meaningful solutions using technologies like MongoDB, React.js, Tailwind CSS, Node.js, and artificial intelligence, all while focusing on user satisfaction.</p>
  
<p>If this project resonates with you, or if you are looking for a developer skilled in HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, MongoDB, Mongoose, Node.js, and AI integrations, feel free to reach out. I am eager to collaborate, take on new challenges, and help bring your ideas to life. Your support and feedback are always appreciated!</p>` },
    {
      title: "Advanced Linktree Clone", no_of_comment: 0, date: "October 23, 2024", keyword: "advanced-bittree", content: `<div style="
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    color: #a2a2a2;
    font-weight: 500;
">
  <p>The Advanced Linktree Clone represents a leap forward in creating user-focused, modern web applications powered by artificial intelligence. This project is not just a link management tool; it’s an innovative platform that incorporates advanced features like an AI-powered chatbot and a robust authentication system. By combining cutting-edge technologies and artificial intelligence with my core skills in web development, I created a solution that is both highly functional and secure.</p>

<p>One of the standout features of this project is the AI chatbot, built using **Copilot Kit**. This artificial intelligence-powered chatbot enhances user interaction by providing instant responses, assisting users in navigating the platform, and offering personalized suggestions for better utilization of their link pages. Integrating this AI-powered feature required in-depth knowledge of **JavaScript**, **React.js**, and backend integration to ensure smooth communication and responsiveness.</p>

<p>Another significant feature is the **authentication system**, which provides secure login and registration functionality. By employing artificial intelligence techniques and using **Next.js's built-in API routes**, **MongoDB**, and **Mongoose**, I implemented a robust authentication flow with features like hashed passwords, session management, and user role handling. This ensures user data remains safe while maintaining a seamless user experience.</p>

<p>On the design front, I utilized **HTML**, **CSS**, and **Tailwind CSS** to craft a visually appealing, responsive interface. This ensures the platform performs exceptionally well on various devices, from desktops to smartphones. The dynamic front-end features, powered by **React.js**, **Next.js**, and AI-driven optimizations, offer an engaging experience for users, whether they are managing their links or interacting with the AI chatbot.</p>

<h1 style="font-size: 2rem; font-weight: bold; color: white; margin-top: 1rem;">At the end</h1>
<p>At the end of this journey, the Advanced Linktree Clone has become more than just a project—it’s a demonstration of my ability to integrate modern technology and artificial intelligence into functional, user-friendly platforms. From utilizing AI with Copilot Kit to implementing a secure authentication system, this project reflects my expertise in creating advanced web solutions that address real-world needs.</p>

<p>Future enhancements may include deeper AI integration, advanced analytics powered by artificial intelligence, and even more customization options for users. If you’re looking for a developer skilled in **HTML**, **CSS**, **Tailwind CSS**, **JavaScript**, **React.js**, **Next.js**, **Node.js**, **MongoDB**, **Mongoose**, and AI integrations, I’d love to hear from you. Let’s collaborate to create innovative solutions together. Your feedback and support are always appreciated!</p>

</div>`},
  ]

  const curblog = blogs.find(item => item.keyword === keyword);
  if (!curblog) {
    return notFound();  // Handle the case when the blog is not found
  }

  return <Everyblog currblog={curblog} />;
};

export default Page;
