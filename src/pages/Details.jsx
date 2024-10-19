import DetailsContent from "../components/layout/DetailsContent/DetailsContent"
import DetailsHero from "../components/layout/DetailsHero/DetailsHero"
import DetailsInfo from "../components/layout/DetailsInfo/DetailsInfo"
import Lets from "../components/layout/Lets/Lets"
import OtherWorks from "../components/layout/OtherWorks/OtherWorks"
import Quote from "../components/layout/Quote/Quote"

const Details = () => {
    return (
        <>
            <DetailsHero />
            <DetailsInfo />
            <DetailsContent />
            <Quote />
            <OtherWorks />
            <Lets />
        </>
    )
}

export default Details