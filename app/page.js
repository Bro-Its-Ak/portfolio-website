"use client"
import Image from "next/image";
import { useEffect , useState,useCallback} from "react";
import Navbar from "./components/navbar";
import Homescreen from "./components/homescreen";
import Shutter from "./components/shutter";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Threedot from "./components/threedot";
import Navigation from "./components/navigation";


export default function Home() {
  const [iziToast, setiziToast] = useState(null)
  
  useEffect(() => {
    const loadizitoast = async () => {
      const izitoastmodule = (await import("izitoast")).default;
      setiziToast(izitoastmodule);
  };
  loadizitoast()
  }, [])
  
  const orionsubmit = async(data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: "follow"
    };

   let a = await fetch("/newcontact", requestOptions)
   let response = await a.json()
   console.log(response)
   if(response.error == false){if (iziToast) {
    iziToast.success({
        title: "Success",
        message: "Your message has been sent.",
    });
} else {
    console.error("iziToast is not loaded.");
}}
else{
if (iziToast) {
  iziToast.error({
      title: "Error",
      message: "Something went wrong.",
  });
} else {
  console.error("iziToast is not loaded.");
}
}
        console.log(data)
}
  return (
    <main className="relative overflow-x-hidden bg-white">
      <Shutter/>
      <Navbar />
      <Homescreen/>
      <About orionsubmita={orionsubmit}/>
      <Experience/>
      <Projects/>
      <Blogs/>
      <Contact orionsubmita={orionsubmit}/>
      <Threedot orionsubmita={orionsubmit}/>
    <div className="blackscreen absolute w-full opacity-0 transition-opacity z-[-10] bg-black/50 h-full top-0 left-0 "></div>
    <Navigation/>
    
    </main>
  );
}
