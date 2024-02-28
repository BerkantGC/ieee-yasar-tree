import logo from '../logo.png';
import '../Styles/Main.scss';

import {FiCopy} from "react-icons/fi";

import {BsLinkedin, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {MdClose} from "react-icons/md"
import { useState, useRef, useEffect } from 'react';
import SlideMenu from '../Components/SlideMenu';

import {doc, getDoc, setDoc} from 'firebase/firestore';
import {firebase, storage} from '../config';


// import {
//   ref,
//   uploadBytesResumable,
//   getDownloadURL 
// } from "firebase/storage";


const LinkToNavigate = (props) => {
  return(
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <div>
      {props.title}
      </div>
    </a>
  )
}

const LinkToShare = (props) => {
  const Logo = props.Platform;

  return(
    <a href={props.link}>
            <Logo size="30" color='white'></Logo>
    </a>
  )
}
function Route(){
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);
 
  const handleViews = async() => {
     
      const docRef = doc(firebase, "views", "21070001009")
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setViews(docSnap.data().counter);

        setLoading(false);

        await setDoc(doc(firebase, "views", "21070001009"), {
        counter: docSnap.data().counter + 1

      })
      } else {
        // docSnap.data() will be undefined in this case
        setViews(0);
      }
  }
  const searchRef = useRef();

  const [isCopied, setIsCopied] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);

  const copyToClickboard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsCopied(!isCopied)
  }

  useEffect(() => {
    handleViews();
    const closeAlert = (event) => {
      if(searchRef.current && !searchRef.current.contains(event.target))
      {
        setIsCopied(false);
      }
    };
    document.body.addEventListener("click", closeAlert);

    return()=> document.body.removeEventListener('click', closeAlert);
  }, []);

  const CopiedAlert = () => {
    return(
      <div ref={searchRef}  className={`${"modal"} ${isCopied && "active"}`}>
        <div style={{width: 300, height: '100%', textAlign: 'center', alignItems: 'center', color: 'black'}}>
          <MdClose className='close-btn' onClick={()=>setIsCopied(false)} size={20}/>
          <div>Panoya Kopyalandı</div>
        </div>
      </div>
    )
  }

//   const [file, setFile] = useState("");

//   const upload = () => {
//     if (!file) {
//       alert("Please choose a file first!")
//   }

//   const storageRef = ref(storage,`/files/${file.name}`)
//   const uploadTask = uploadBytesResumable(storageRef, file);

//   uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//             const percent = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//         },
//         (err) => console.log(err),
//         () => {
//             // download url
//             getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
//               const docRef = doc(firebase, "jam", "file-links")
//               const docSnap = await getDoc(docRef);
//               const links = docSnap.data().game_link;
              
//               console.log(links)

//               if (docSnap.exists()) {
//                 await setDoc(doc(firebase, "jam", "file-links"), 
//                 {game_link: [...links, url]}
//               )
//               } else {
//                 // docSnap.data() will be undefined in this case
//                 await setDoc(doc(firebase, "jam", "file-links"), 
//                 {game_link: []})
//               }
//             });
//         }
//     );  
//   }  
//   // Handles input change event and updates state
//   function handleChange(event) {
//     setFile(event.target.files[0]);
// }
  
  const wpLink = "whatsapp://send?text=" + window.location.href;
  const twitterLink = "https://twitter.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20" + window.location.href;
  const linkedinLink = "https://www.linkedin.com/sharing/share-offsite/?url=" + window.location.href;

  const ShareLinks = [
    {
      link: twitterLink,
      Platform: BsTwitter
    },
    {
      link: wpLink,
      Platform: BsWhatsapp
    },
    {
      link: linkedinLink,
      Platform: BsLinkedin
    }
  ]
  
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
      ) : ( 
      <>
      <CopiedAlert isCopied={isCopied} setIsCopied={setIsCopied}/>

      <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      
      <div className={`${"main-container"} ${(isCopied || isMenuShown) && "active"}`}>
        <div className='header-title'>
          <img alt='logo' className='logo' src={logo} style={{height: window.innerHeight/2, marginBottom: '-40%', objectFit: 'cover'}} />
          <h3 className='views'>Ziyaretçi: {views}</h3>
        </div>
        <div className='all-links'>
          
          <LinkToNavigate title='Topluluk Kayıt Formu' link='https://forms.gle/BRR8Ur1Tqks8vNgk8'/>

          <LinkToNavigate title='Tanışma Etkinliği Kayıt Formu' link='https://forms.gle/VpLyuaEi7Umoyp797'/>

          <LinkToNavigate title='Instagram' link='https://www.instagram.com/yu.muhendisliktoplulugu/'/>

          <LinkToNavigate title='Linkedin' link='https://www.linkedin.com/company/ieee-ya%C5%9Far-%C3%B6%C4%9Frenci-kolu/about/'/>
          
          <LinkToNavigate title='Youtube' link='https://www.youtube.com/@ieeeyasaruniversitesiogren5084/featured'/>

        </div>

        <div className='share-us-title'>
          <p>Bizi paylaş!</p>
        </div>

        <div className='share-btn'>

          {ShareLinks.map(item => <LinkToShare link={item.link} Platform={item.Platform} />)}

          <FiCopy onClick={copyToClickboard} style={{cursor: 'pointer'}} size="30" color='white'></FiCopy>
        </div>
        {/* <center>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={upload}>Upload to Firebase</button>
          </center> */}

      </div>
      </>)}
    </div>
  );
}

export default Route;