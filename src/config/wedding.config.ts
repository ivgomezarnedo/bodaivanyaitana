import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { firstName: 'Jane', lastName: 'Doe' },
        groom: { firstName: 'John', lastName: 'Smith' }
    },
    date: {
        date: '2026-01-31',
        time: '16:30' // Optional
    },
    location: {
        title: 'Bodega Viñedos Ruiz Jiménez',
        address: 'Carretera Comarcal, LR-115, Km 43, 5, 26559 Aldeanueva de Ebro, La Rioja',
        link: 'https://maps.app.goo.gl/KQtCr3DVonad7y72A',
        latLng: '42.2228946, -1.9030969'
    }
}

export default weddingConfig