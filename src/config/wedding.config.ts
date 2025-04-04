import { WeddingConfigType } from "@/interfaces/config"

const weddingConfig: WeddingConfigType = {
    people: {
        bride: { firstName: 'Aitana', lastName: 'Parra' },
        groom: { firstName: 'Iván', lastName: 'Gómez' }
    },
    date: {
        date: '2025-07-05',
        time: '13:00' // Optional
    },
    location: {
        title: 'Bodega Viñedos Ruiz Jiménez',
        address: 'Carretera Comarcal, LR-115, Km 43, 5, Aldeanueva de Ebro',
        link: 'https://maps.app.goo.gl/KQtCr3DVonad7y72A',
        latLng: '42.2228946, -1.9030969'
    }
}

export default weddingConfig