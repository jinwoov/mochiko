import styles from "../../styles/Home.module.scss";
import Header from '../../components/header/header.component'
import Footer from "../../components/footer/footer.component";

function Mochi() {
    // Boolean that will wage, which pic will be showing to the public
    let changePic = true; //TODO: change this if you want different doggo

    return (
            <>
            < Header />
                <div className={styles.maindiv}>
                    { changePic ? ( <img 
                        className={styles.img} 
                        src="/assets/rochi2.jpg" // pic 2
                        alt="mochi's picture"
                    /> ) : ( 
                <img 
                        className={styles.img} 
                        src="/assets/rochi1.png" // pic 1
                        alt="mochi's picture"
                    /> )}
                </div>
                <Footer />
            </>
    );  
}

export default Mochi;