import styles from "../../styles/Home.module.scss";
import Header from '../../components/header/header.component'
import Footer from "../../components/footer/footer.component";

function Mochi() {

    let changePic = true;
    return (
            <>
            < Header />
                <div className={styles.maindiv}>
                    { changePic ? ( <img 
                        className={styles.img} 
                        src="/assets/rochi.jpg" 
                        alt="mochi's picture"
                    /> ) : ( 
                <img 
                        className={styles.img} 
                        src="/assets/mochi-seal.png" 
                        alt="mochi's picture"
                    /> )}
                </div>
                <Footer />
            </>
    );  
}

export default Mochi;