import weddingConfig from "@/config/wedding.config"

export const getWeddingDate = (): Date => {
    const dateStr = weddingConfig.date.time ? 
        weddingConfig.date.date + 'T' + weddingConfig.date.time
        : weddingConfig.date.date

    return new Date(dateStr)
}

export const formatDate = (date: Date): string => {
    // In Spanish format we use cardinal numbers without suffix
    const day = date.getDate();
    
    const month = date.toLocaleString('es-ES', {
        month: 'long',
    });

    const year = date.getFullYear();
    const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    // Spanish format: day de month de year (e.g., "12 de abril de 2023")
    return `${day} de ${month} de ${year} a las ${time}`;
}
