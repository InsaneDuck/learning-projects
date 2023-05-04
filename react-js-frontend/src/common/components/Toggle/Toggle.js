import styles from "./Toggle.module.css"

const Toggle = ({type, name, label, value, onChange}) => {
    return (
        <label className={styles.switch} htmlFor={name}>
            {label}
            <input name={name} id={name} type={"checkbox"} value={value} onChange={onChange}/>
            <span className={`${styles.slider} ${type === "round" ? styles.round : ""}`}></span>
        </label>
    )
}

export default Toggle