import { useNavigate } from "react-router-dom"
import BackButton from "../Components/BackButton"

import SlideMenu from "../Components/SlideMenu";
import { useState } from "react";

import "../Styles/AboutUs.scss";
 
const AboutUs = () => {
    const navigate =  useNavigate();
    const [isMenuShown, setMenuShown] = useState(false);

    return(
        <div className="about-us-container">
            <SlideMenu isMenuShown={isMenuShown} setMenuShown={setMenuShown} navigate={navigate}/>
            <div className={`${"about-us-main-container"} ${(isMenuShown) && "active"}`}>
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <BackButton navigate={navigate}/>
                </div>
                <h1 style={{fontSize: 30}}>2010 <br></br>Yılında Kurulan Yaşar Üniversitesi Öğrenci Topluluğu</h1>
                <h3>Amacımız</h3>
                <p>
                IEEE, kendisini teknolojiyi insanlık yararına geliştirmek için adamış bünyesindeki 39 teknik topluluk, 160’dan fazla ülkedeki yaklaşık 430,000 üyesi ile kar amacı gütmeyen, dünyanın en büyük profesyonel teknik kuruluşudur. Aynı zamanda yayınladığı aktif olarak kullanılan 1300 teknoloji standardı ve geliştirilmekte olan 600 standart ile dünyanın en aktif teknoloji kuruluşudur. Halihazırda dünya üzerinde yayınlanmakta olan teknoloji odaklı yayınların tek başına %30’unu yayınlamaktadır. Yapısı içerisinde barındırdığı Robotik & Otomasyon, Güç & Enerji, Haberleşme, Bilgisayar Bilimleri, Sağlık & Biyoloji’de Mühendislik başta olmak üzere birçok alanda teknolojik araştırmalar ve çalışmalar yapar. IEEE tarafından oluşturulan ve modere edilen “ Xplore ” dijital kütüphanesi barındırdığı 4 milyon doküman ile dünyanın en büyük dijital kütüphanesi ünvanını da elinde tutmaktadır. 
                </p>
                <h3>Öğrenci Kolu</h3>
                <p>
                    IEEE YAŞAR ÜNİVERSİTESİ ÖĞRENCİ KOLU 2010 yılında kurulduğu andan itibaren çeşitli eğitimler, teknik geziler, etkinler ve mühendislik alanında proje çalışmaları yapmıştır.
                    Yapısı içerisinde bulunan ‘Robotik & Otomasyon’, ’Güç & Enerji’, ‘Bilgisayar Bilimleri’, ‘Havacılık & Elektronik Sistemler’ teknik alt komiteleri ile Mühendislik başta olmak üzere birçok alanda teknolojik araştırmalar ve çalışmalar yapar.
                    Topluluğumuzun barındırdığı projeler kapsamında sadece Teknoloji ve Mühendislik alanlarında aktivite göstermiyor olup öğrencilerin birbirleri ile tanışıp kaynaşmasını sağlamanın yanında Türkiye’nin dört bir yanındaki mühendis ve mühendislik adaylarıyla tecrübe aktarımı yapıp kendi ağlarını (Network) oluşturma imkanı sağlıyor.
                </p>
                <h3>Mottomuz</h3>
                <p>
                    Mottomuz ‘Bir Yaşar Üniversitesi Mühendislik Fakültesi mezunu nasıl ise biz de öyleyiz.’ Bu bizim için önce kendimizi sonra bütün üyelerimizi geliştirmenin bize görev olduğu ve bu alanda çalışarak teknolojinin gelişiminde pay sahibi olmak istememizi yansıtır. 
                </p>                
            </div>
        </div>
    )
}

export default AboutUs;