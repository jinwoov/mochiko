import styles from '../styles/Home.module.scss'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      < Header />
            <div className={styles.maindiv}>
                  <img 
                      className={styles.img} 
                      src="/assets/mochi.jpg" 
                      alt="mochi's picture"
                  />
              </div>
    </>
  )
}
