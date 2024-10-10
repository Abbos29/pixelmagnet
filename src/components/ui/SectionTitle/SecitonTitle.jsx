import s from './SectionTitle.module.scss'

const SecitonTitle = ({ children }) => {
    return (
        <>
            <h2 className={s.title}>
                {children}
            </h2>
        </>
    )
}

export default SecitonTitle