import styles from './Button.module.css'
export default function Button() {
    return (
        <button
            type="button"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            //className={styles.error}
        >
    Button Test
        </button >
    )

}