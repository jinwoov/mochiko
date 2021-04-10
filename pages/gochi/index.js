import styles from "../../styles/Home.module.scss";
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'

function Mochi() {

    return (
            <>
            < Header />
                <div className={styles.maindiv}>
                    <img 
                        className={styles.img} 
                        src="/assets/gochi.jpg" 
                        alt="mochi's picture"
                    />
                </div>
                <Footer />
            </>
    );  
}

export default Mochi;