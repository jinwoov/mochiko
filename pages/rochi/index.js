import styles from "../../styles/Home.module.scss";
import Header from '../../components/header/header.component'
import Footer from "../../components/footer/footer.component";

function Mochi() {
    let changePic = false; // Boolean that will wage, which pic will be showing to the public

    return (
            <>
            < Header />
                <div className={styles.maindiv}>
                    { changePic ? ( <img 
                        className={styles.img} 
                        src="/assets/rochi2.jpg" // More rascal pic
                        alt="mochi's picture"
                    /> ) : ( 
                <img 
                        className={styles.img} 
                        src="/assets/rochi1.png" // Less rascal pic
                        alt="mochi's picture"
                    /> )}
                </div>
                <Footer />
            </>
    );  
}

export default Mochi;