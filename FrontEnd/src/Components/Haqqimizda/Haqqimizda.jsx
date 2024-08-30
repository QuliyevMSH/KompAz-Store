import React from 'react'
import styles from './Haqqimizda.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Haqqimizda = () => {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                <h1>KompAz Store - Texnologiyanın zirvəsinə açılan qapınız :)</h1>
                <div className={styles.box}>
                    <h1>· Haqqımızda ·</h1>
                    <p>KompAz Store, müştərilərimizin ehtiyaclarını qarşılamaq üçün ən yüksək keyfiyyətdə kompüter hissələri və noutbuklar təklif edən, etibarlı və peşəkar bir mağazadır. Azərbaycanda texnologiya həvəskarlarının və peşəkarlarının üstünlük verdiyi bir mərkəz olan KompAz Store, müştərilərinə geniş məhsul çeşidi, rəqabətədavamlı qiymətlər və mükəmməl müştəri xidməti ilə fərqlənir.</p>
                </div>
                <div className={styles.box}>
                    <h1>· Bizim Missiyamız ·</h1>
                    <p>Bizim əsas missiyamız, müştərilərimizə ən son texnologiya məhsullarını əlçatan etməkdir. KompAz Store olaraq, müştərilərimizin texnoloji ehtiyaclarını qarşılamaq və onları ən müasir cihazlarla təmin etmək üçün durmadan çalışırıq. Yüksək keyfiyyətli məhsullarımızla müştərilərimizin məmnuniyyətini və etibarını qazanmaq bizim əsas prioritetimizdir.</p>
                </div>
                <div className={styles.box}>
                    <h1>· Bizim Məhsullarımız ·</h1>
                    <p>KompAz Store-da siz müxtəlif marka və modellərdə kompüter hissələri, noutbuklar, periferik cihazlar və aksessuarlar tapa bilərsiniz. Mağazamızda təklif olunan məhsullar arasında: <span><br /> ·Kompüter Hissələri: Ana platalar, prosessorlar, RAM, sərt disklər, SSD-lər, qrafik kartlar, və digər komponentlər. <br /> ·Noutbuklar: Müxtəlif marka və modellərdə noutbuklar, iş üçün və oyun üçün xüsusi noutbuklar. <br /> ·Periferik Cihazlar: Klaviaturalar, siçanlar, monitorlar, printerlər və s. <br /> ·Aksessuarlar: Çantalar, kabellər, adapterlər və digər lazımlı aksessuarlar.</span></p>
                </div>
                <div className={styles.box}>
                    <h1>· Niyə Biz? ·</h1>
                    <p> <b>·Məhsul Keyfiyyəti:</b> Bütün məhsullarımız dünya miqyasında tanınan və etibar olunan markalardan seçilir və yüksək keyfiyyətə malikdir. <br /> <b>·Müştəri Xidməti:</b> Peşəkar və səmimi müştəri xidmətimiz hər zaman sizin suallarınıza cavab verməyə və ehtiyaclarınıza uyğun həllər təklif etməyə hazırdır. <br /> <b>·Rəqabətədavamlı Qiymətlər:</b> KompAz Store olaraq, müştərilərimizə ən sərfəli qiymətləri təklif etmək üçün daim çalışırıq. <br /> <b>·Sürətli Çatdırılma:</b> Sifarişləriniz ən qısa müddətdə və təhlükəsiz şəkildə ünvanınıza çatdırılır. <br /> <b>·Texniki Dəstək:</b> Məhsullarımızla bağlı hər hansı bir texniki dəstəyə ehtiyacınız olduqda, bizim mütəxəssis komandamız həmişə yanınızdadır.</p>
                </div>
                <div className={styles.box}>
                    <h1>· Bizim Hekayəmiz ·</h1>
                    <p>KompAz Store, texnologiya dünyasında uzun illərin təcrübəsinə sahib olan peşəkarlar tərəfindən təsis edilmişdir. Mağazamızın yaranma məqsədi, Azərbaycanda texnologiya sevərlərə və peşəkar istifadəçilərə etibarlı və keyfiyyətli xidmət göstərməkdir. İllər ərzində qazandığımız etibar və müştəri məmnuniyyəti ilə fəxr edirik və bu yolda irəliləməyə davam edirik.</p>
                </div>
                <div className={styles.box}>
                    <h1>· Bizimlə Əlaqə ·</h1>
                    <p>Əgər sizin hər hansı bir sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Sizə kömək etməkdən məmnun olarıq.</p>
                    <div className={styles.contactBtns}></div>
                </div>
                <h2>KompAz Store - Texnologiyanın zirvəsinə birlikdə qalxaq!</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Haqqimizda
