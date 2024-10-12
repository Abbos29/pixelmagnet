import SecitonTitle from '../../ui/SectionTitle/SecitonTitle'
import s from './Team.module.scss'
import TeamData from './TeamData.js'

const Team = () => {
    return (
        <section className={s.team}>
            <div className="container">
                <div className={s.title}>
                    <SecitonTitle>meet Our core team</SecitonTitle>
                </div>


                <div className={s.wrap}>
                    <img className={s.banner} src="/team-banner.jpg" alt="img" />

                    <div className={s.grid}>

                        {TeamData.map(item => (
                            <div className={s.card} key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.prof}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team