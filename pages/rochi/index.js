import styles from "../../styles/Home.module.scss";
import Header from '../../components/header/header'
function Mochi() {

    return (
            <>
            < Header />
                <div className={styles.maindiv}>
                    <img 
                        className={styles.img} 
                        src="/assets/rochi.jpg" 
                        alt="mochi's picture"
                    />
                </div>
            </>
    );  
}

export default Mochi;