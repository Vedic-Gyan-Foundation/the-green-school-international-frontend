import React from 'react'
import { highlights } from '../../data/highlights'
import styles from './Highlights.module.css'
import Swal from 'sweetalert2'

const Highlights = () => {
  const readMoreHandler = (item) => {
    Swal.fire({
      title: `<strong>${item.title}</strong>`,
      html: `
        <p style="font-size: 15px; text-align: justify;">${item.fulldesc}</p>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Okay!
      `,
    });

  }
  return (
    <div className={styles.home_highlights} data-aos="fade-up" data-aos-once>
          <h2>Highlights</h2>
          <div className={styles.highlights_cards}>

            {highlights.map((item,index)=> (
              <div className={styles.highlight_card}>
              <div className={styles.hightlight_card_icon}>
                <img src={item.icon} alt=""  loading='lazy' />
                <h4>{item.title}</h4>
              </div>
              <div className={styles.highlight_card_desc}>
                <p>{item.desc}</p>
                <button className={styles.readMoreBtn} onClick={()=>readMoreHandler(item)}>Read More</button>
              </div>
            </div>
            ))}
            
          
            
          </div>
        </div>
  )
}

export default Highlights