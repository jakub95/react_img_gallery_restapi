import React, { useState, useEffect } from "react";

import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App({image}) {
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        // isLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <Hero />
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
