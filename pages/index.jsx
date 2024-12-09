/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from "react"

// Componets
import { Header, Banner, BannerColumns, Footer, Cards } from '../src/components';

// Const 
import Const from '../utils/const'

export default () => {
    return (
        <main className="main-container-root">
            <Header />
            <Banner {...Const.confBanner} />
            <Cards />
            <BannerColumns data={Const.confBannerColumns} />
            <Banner {...Const.confBannerSecundary} />
            <Footer />
        </main>
    )
}