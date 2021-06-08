import React, {useState, useEffect} from 'react';
import styles from "./style.module.css";
import { LoremIpsum } from "lorem-ipsum";
export default function Projects() {

    const [images, setimages] = useState([])
    useEffect(() => {
        fetch("https://picsum.photos/v2/list?limit=6")
        .then(resp=> resp.json())
        .then(images=>setimages(images))
     
    }, [])

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 10,
          min: 4
        }
      });


    return (
        <div className={styles.projects}>
        {images.map(image=>(

         <figure key={image.id}>
        <img src={image.download_url} alt={lorem.generateSentences(1)} />
        <figcaption>{lorem.generateSentences(1)}</figcaption>
        </figure>


        ))}
  


        </div>
    )
}
