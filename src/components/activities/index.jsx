import { Container } from "react-bootstrap"
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import './style.css'
import bicicleta from '../../assets/img/bicicleta.jpg'
import { usePlaces } from "../../custom-hook/googleApi"
import { useTranslation } from 'react-i18next'
import { valenciaSol, valenciaNublado, valenciaLloviendo } from '../../objects/valencia'
import { madridSol, madridNublado, madridRain } from "../../objects/madrid"

import valenciaSol1 from '../../assets/img/valencia/sol/valenciaSol1.jpg'
import valencia2Sol from '../../assets/img/valencia/sol/valenciaSol2.jpg'
import valenciaSol3 from '../../assets/img/valencia/sol/valenciaSol3.jpg'
import valenciaSol4 from '../../assets/img/valencia/sol/valenciaSol4.jpg'
import valenciaSol5 from '../../assets/img/valencia/sol/valenciaSol5.jpg'
import valenciaSol6 from '../../assets/img/valencia/sol/valenciaSol6.jpg'
import valenciaSol7 from '../../assets/img/valencia/sol/valenciaSol7.jpg'
import valenciaSol8 from '../../assets/img/valencia/sol/valenciaSol8.jpg'

import valenciaNub from '../../assets/img/valencia/nub/valenciaNub.jpg'
import valenciaNub2 from '../../assets/img/valencia/nub/valenciaNub2.jpg'
import valenciaNub3 from '../../assets/img/valencia/nub/valenciaNub3.jpg'
import valenciaNub4 from '../../assets/img/valencia/nub/valenciaNub4.jpg'
import valenciaNubPhoto from '../../assets/img/valencia/nub/valenciaNub5.jpg'
import valenciaNub6 from '../../assets/img/valencia/nub/valenciaNub7.jpg'
import valenciaNub8 from '../../assets/img/valencia/nub/valenciaNub8.jpg'
import valenciaNub5 from '../../assets/img/valencia/nub/valenciaNub6.jpg'

import valenciaRain from '../../assets/img/valencia/rain/valenciaRain.jpg'
import valenciaRain2 from '../../assets/img/valencia/rain/valenciaRain2.jpg'
import valenciaRain3 from '../../assets/img/valencia/rain/valenciaRain3.jpg'
import valenciaRain4 from '../../assets/img/valencia/rain/valenciaRain4.jpg'
import valenciaRain5 from '../../assets/img/valencia/rain/valenciaRain5.jpg'
import valenciaRain6 from '../../assets/img/valencia/rain/valenciaRain6.jpg'
import valenciaRain7 from '../../assets/img/valencia/rain/valenciaRain7.jpg'
import valenciaRain8 from '../../assets/img/valencia/rain/valenciaRain8.jpg'

import madridSol1 from '../../assets/img/madrid/sol/madridSol.jpg'
import madridSol2 from '../../assets/img/madrid/sol/madridSol2.jpg'
import madridSol3 from '../../assets/img/madrid/sol/madridSol3.jpg'
import madridSol4 from '../../assets/img/madrid/sol/madridSol4.jpg'
import madridSol5 from '../../assets/img/madrid/sol/madridSol5.jpg'
import madridSol6 from '../../assets/img/madrid/sol/madridSol6.jpg'
import madridSol7 from '../../assets/img/madrid/sol/madridSol7.jpg'
import madridSol8 from '../../assets/img/madrid/sol/madridSol8.jpg'

import madridNub1 from '../../assets/img/madrid/nub/madridNub.jpg'
import madridNub2 from '../../assets/img/madrid/nub/madridNub2.jpg'
import madridNub3 from '../../assets/img/madrid/nub/madridNub3.jpg'
import madridNub4 from '../../assets/img/madrid/nub/madridNub4.jpg'
import madridNub5 from '../../assets/img/madrid/nub/madridNub5.jpg'
import madridNub6 from '../../assets/img/madrid/nub/madridNub6.jpg'
import madridNub7 from '../../assets/img/madrid/nub/madridNub7.jpg'
import madridNub8 from '../../assets/img/madrid/nub/madridNub8.jpg'


import madridRain1 from '../../assets/img/madrid/rain/madridRain.jpg'
import madridRain2 from '../../assets/img/madrid/rain/madridRain2.jpg'
import madridRain3 from '../../assets/img/madrid/rain/madridRain3.jpg'
import madridRain4 from '../../assets/img/madrid/rain/madridRain4.jpg'
import madridRain5 from '../../assets/img/madrid/rain/madridRain5.jpg'
import madridRain6 from '../../assets/img/madrid/rain/madridRain6.jpg'
import madridRain7 from '../../assets/img/madrid/rain/madridRain7.jpg'
import madridRain8 from '../../assets/img/madrid/rain/madridRain8.jpg'

import { useState } from "react"
import { useContext } from "react"
import { GoogleContext } from "../../context/googleApiContext/google.context"
import { SearchContext } from "../../context/search.context"
import { useOneCity } from "../../custom-hook/oneCity"





function Activities() {


    const [place, updatePlace] = useContext(GoogleContext)
    const [valencia, updateValencia] = useState(valenciaSol)
    const [valenNub, updateValenciaNub] = useState(valenciaNublado)
    const [valenRain, updateValenRain] = useState(valenciaLloviendo)
    const [search, updateSearch] = useContext(SearchContext)
    const [madrid, updateMadrid] = useState(madridSol)
    const [madNub, updateMadNub] = useState(madridNublado)
    const [madRain, updateMadRain] = useState(madridRain)

    const {cityOne} = useOneCity()

    const handleImgAct = (img) => {
        switch (img) {
            case 'valenciaSol': return valenciaSol1
            case 'valencia2Sol': return valencia2Sol
            case 'valenciaSol3': return valenciaSol3
            case 'valenciaSol4': return valenciaSol4
            case 'valenciaSol5': return valenciaSol5
            case 'valenciaSol6': return valenciaSol6
            case 'valenciaSol7': return valenciaSol7
            case 'valenciaSol8': return valenciaSol8

            case 'valenciaNub': return valenciaNub
            case 'valenciaNub2': return valenciaNub2
            case 'valenciaNub3': return valenciaNub3
            case 'valenciaNub4': return valenciaNub4
            case 'valenciaNub5': return valenciaNubPhoto
            case 'valenciaNub6': return valenciaNub5
            case 'valenciaNub7': return valenciaNub6
            case 'valenciaNub8': return valenciaNub8

            case 'valenciaRain': return valenciaRain
            case 'valenciaRain2': return valenciaRain2
            case 'valenciaRain3': return valenciaRain3
            case 'valenciaRain4': return valenciaRain4
            case 'valenciaRain5': return valenciaRain5
            case 'valenciaRain6': return valenciaRain6
            case 'valenciaRain7': return valenciaRain7
            case 'valenciaRain8': return valenciaRain8

            case 'madridSol': return madridSol1
            case 'madridSol2': return madridSol2
            case 'madridSol3': return madridSol3
            case 'madridSol4': return madridSol4
            case 'madridSol5': return madridSol5
            case 'madridSol6': return madridSol6
            case 'madridSol7': return madridSol7
            case 'madridSol8': return madridSol8

            case 'madridNub': return madridNub1
            case 'madridNub2': return madridNub2
            case 'madridNub3': return madridNub3
            case 'madridNub4': return madridNub4
            case 'madridNub5': return madridNub5
            case 'madridNub6': return madridNub6
            case 'madridNub7': return madridNub7
            case 'madridNub8': return madridNub8

            case 'madridllu': return madridRain1
            case 'madridllu2': return madridRain2
            case 'madridllu3': return madridRain4
            case 'madridllu4': return madridRain5
            case 'madridllu5': return madridRain6
            case 'madridllu6': return madridRain7
            case 'madridllu7': return madridRain8
            case 'madridllu8': return madridRain3
        }
    }

    const filterCard = e => {
        const filterVal = valencia.filter(v => v.tag === e.target.value)
        const filterValNub = valenNub.filter(v => v.tag === e.target.value)
        const filterValRain = valenRain.filter(v => v.tag === e.target.value)
        const filterMad = madrid.filter(v => v.tag === e.target.value)
        const filterMadNub = madNub.filter(v => v.tag === e.target.value)
        const filterMadRain = madRain.filter(v => v.tag === e.target.value)
        if (e.target.value === 'museum') {
            updateValencia(filterVal)
            updateValenciaNub(filterValNub)
            updateValenRain(filterValRain)
            updateMadrid(filterMad)
            updateMadNub(filterMadNub)
            updateMadRain(filterMadRain)
            updatePlace(e.target.value)
        } else if (e.target.value === 'night_club') {
            updateValencia(filterVal)
            updateValenciaNub(filterValNub)
            updateValenRain(filterValRain)
            updateMadrid(filterMad)
            updateMadNub(filterMadNub)
            updateMadRain(filterMadRain)
            updatePlace(e.target.value)
        } else if (e.target.value === 'restaurant') {
            updateValencia(filterVal)
            updateValenciaNub(filterValNub)
            updateValenRain(filterValRain)
            updateMadrid(filterMad)
            updateMadNub(filterMadNub)
            updateMadRain(filterMadRain)
            updatePlace(e.target.value)
        } else if (e.target.value === 'outdoors') {
            updateValencia(filterVal)
            updateValenciaNub(filterValNub)
            updateValenRain(filterValRain)
            updateMadrid(filterMad)
            updateMadNub(filterMadNub)
            updateMadRain(filterMadRain)
            updatePlace(e.target.value)
        } else if (e.target.value === 'gym') {
            updateValencia(filterVal)
            updateValenciaNub(filterValNub)
            updateValenRain(filterValRain)
            updateMadrid(filterMad)
            updateMadNub(filterMadNub)
            updateMadRain(filterMadRain)
            updatePlace(e.target.value)
        }
    }
    const filterBack = e => {

        if (e.target.value === 'show') {
            updateValencia(valenciaSol)
            updateValenciaNub(valenciaNublado)
            updateValenRain(valenciaLloviendo)
            updateMadrid(madridSol)
            updateMadNub(madridNublado)
            updateMadRain(madridRain)
        }
    }


    const [t] = useTranslation("activities")
    const { restaurant } = usePlaces()
    const [city] = useContext(SearchContext)
    const verifyVal = search.some(e => e.name.includes('Valencia'))
    const verifyMad = search.some(e => e.name.includes('Sol') || e.name.includes('Madrid') )
  

    const veriNub = city.some(e => e.weather.some(r => r.description.includes('nub' )))
    const veriRain = city.some(e => e.weather.some(r => r.description.includes('llu')))
    const veriSol = city.some(e => e.weather.some(r => r.description.includes('des', 'cli')))


    const handleimgCLick = e => {
      
    }


    function handleImg(ram){
        switch(ram){
            case 'restaurant': return valenciaNub6;
            case 'museum': return madridRain1
            case 'night_club': return madridRain5
            case 'outdoors': return madridSol7
            case 'gym': return valenciaRain6
        }
    }



    return (
        <Container className="container-activities" >

            <Container >
                <Row>
                    <Col >
                        <h2 style={{ display: 'flex', gap: '5px', fontSize: '26px', fontWeight: 'bold' }} className="title-activities">{t("activities.button7")} <p className="city-title">{city.length===0 ? cityOne.map(e => e.name) : city.map(e => e.name)}</p></h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}>
                        <ButtonGroup style={{ display: 'flex', gap: '1rem' }}>
                            <Button value='museum' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button1")}</Button>
                            <Button value='night_club' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button2")}</Button>
                            <Button value='restaurant' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button3")}</Button>
                            <Button value='outdoors' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button4")}</Button>
                            <Button value='gym' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button5")}</Button>
                            <Button value='show' onClick={filterBack} style={{ borderRadius: '20px' }} variant="outline-danger">Show All </Button>
                        </ButtonGroup>
                    </Col>

                </Row>
            </Container>

            <Container>

                <Container style={{ marginTop: '10px' }}>
                    <Row>
                        <Col lg={12} className='experiences-near'>{t("activities.button6")}</Col>

                    </Row>
                </Container>

            </Container>
            <Container className="activities-container">
                <Row >
                    <Col lg={12}>
                        <section className="section-activities-filter">


                            {veriNub  && verifyVal === true ? (
                                valenNub?.map(e => (
                                    <article >
                                        <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                            <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                        </Card>
                                        <footer className="footer-card">
                                            <p>{e.val}({e.res})</p>
                                            <p>{e.desc}</p>
                                            <p>{e.price}</p>
                                        </footer>
                                    </article>
                                ))
                            ) : console.log('no')}

                            {veriRain && verifyVal === true ? (
                                valenRain?.map(e => (
                                    <article >
                                    <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                        <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                    </Card>
                                    <footer className="footer-card">
                                        <p>{e.val}({e.res})</p>
                                        <p>{e.desc}</p>
                                        <p>{e.price}</p>
                                    </footer>
                                </article>
                                ))
                            ) : ''}

                            {veriSol && verifyVal === true ? (
                                valencia?.map(e => (
                                    <article >
                                        <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                            <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                        </Card>
                                        <footer className="footer-card">
                                            <p>{e.val}({e.res})</p>
                                            <p>{e.desc}</p>
                                            <p>{e.price}</p>
                                        </footer>
                                    </article>
                                ))

                            ) : ''}

                            {veriSol && verifyMad  === true ? (
                                madrid?.map(e => (
                                    <article >
                                        <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                            <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                        </Card>
                                        <footer className="footer-card">
                                            <p>{e.val}({e.res})</p>
                                            <p>{e.desc}</p>
                                            <p>{e.price}</p>
                                        </footer>
                                    </article>
                                ))

                            ) : ''}

                            {veriNub && verifyMad === true ? (
                                madNub?.map(e => (
                                    <article >
                                        <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                            <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                        </Card>
                                        <footer className="footer-card">
                                            <p>{e.val}({e.res})</p>
                                            <p>{e.desc}</p>
                                            <p>{e.price}</p>
                                        </footer>
                                    </article>
                                ))

                            ) : ''}

                            {veriRain && verifyMad === true ? (
                                madRain?.map(e => (
                                    <article >
                                    <Card  style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                        <img onClick={() => handleimgCLick(window.open(e.link))} src={handleImgAct(e.img)}></img>
                                    </Card>
                                    <footer className="footer-card">
                                        <p>{e.val}({e.res})</p>
                                        <p>{e.desc}</p>
                                        <p>{e.price}</p>
                                    </footer>
                                </article>
                                ))

                            ) : ''}

                            
                            {restaurant.map(e => e.results.map(r => (
                                <article >
                                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                        <Card.Img variant="top" className="img-acti" src={handleImg(place)} />
                                    
                                    </Card>
                                    <footer className="footer-card">
                                       <div className="card-rating"> <p>{r.rating}</p>
                                        <p>({r.user_ratings_total})</p>
                                        </div>
                                        <p>{r.name}</p>
                                        {/* <p>{r.price_level}</p> */}
                                    </footer>
                                </article>
                            )))}


                        </section>
                    </Col>
                </Row>
            </Container>


        </Container>
    )
}

export default Activities
