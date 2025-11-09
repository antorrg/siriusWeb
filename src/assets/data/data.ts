

export interface Solutions {
    title:string
    text:string
    secondText: string
    items : string[]
    iconColor: string
    iconItemColor: string
}
export interface Methodologies extends Omit<Solutions, 'secondText'>{}

 const dataSolutions: Solutions[] = [
 {  
    title:'Diseño UI/UX estratégico',
    text: 'Diseñamos e implementamos experiencias digitales centradas en el usuario que maximizan conversiones.',
    secondText:'Creamos interfaces intuituvas y atractivas basadas en la investigación de usuarios y mejores prácticas de la industria.',
    items : ['Landing pages optimizadas', 'Diseño basado en usuarios', 'Metodología UDC'],
    iconColor: 'primary',
    iconItemColor: 'myblue'
},{   
    title:'IA y Automatización',
    text: 'Diseñamos e implementamos experiencias digitales centradas en el usuario que maximizan conversiones.',
    secondText:'Implementamos inteligencia artificial para automatizar interacciones y personalizar la experiencia de cada usuario.',
    items : ['ChatBots inteligentes', 'Recomendaciones personalizadas', 'Integración WhatsApp Businness'],
    iconColor: 'purple',
    iconItemColor: 'myblue'
},{ 
    title:'E-Commerce avanzado',
    text: 'Diseñamos e implementamos experiencias digitales centradas en el usuario que maximizan conversiones.',
    secondText:'Desarrollamos tiendas online minimalistas y funcionales que convierten visitantes ocasionales en compradores leales.',
    items : ['Diseño personalizado', 'UX optimizada para ventas', 'Integración de pagos segura.'],
    iconColor: 'success',
    iconItemColor: 'myblue'
}]
const dataMetodogies: Methodologies[] = [
 {  
    title:'Investigación y Análisis',
    text: 'Realizamos un análisis profundo de tu negocio, competencia y audiencia objetivo para identificar oportunidades únicas de inversión y crecimiento.',
    items : ['Analisis competitivo', 'Investigación de usuarios', 'Definición de KPIs'],
    iconColor: 'danger',
    iconItemColor: 'myblue'
},{   
    title:'Estrategia y Diseño',
    text: 'Creamos wireframes, prototipos interactivos y arquitectura de información utilizando tecnología IBM Desing thinking centrada en el usuario.',
    items : ['Wireframes', 'Prototipos', 'Sistemas de diseño'],
    iconColor: 'orange',
    iconItemColor: 'myblue'
},{ 
    title:'Desarrollo e Integración',
    text: 'Implementamos el diseño con tecnologías modernas, integrando IA, automatización, CRM y todas las herramientas necesarias para tu éxito.',
    items : ['Desarrollo frontend', 'Integraciones', 'Testing QA.'],
    iconColor: 'purple',
    iconItemColor: 'myblue'
},{ 
    title:'Lanzamiento y Optimización',
    text: 'Monitoreamos resultados en tiempo real, analizamos A B testing continuo y optimizamos cada elemento para maximizar conversiones.',
    items : ['Lanzamiento', 'Monitoreo', 'Optimización continua'],
    iconColor: 'primary',
    iconItemColor: 'myblue'
}]
export default {
    dataSolutions,
    dataMetodogies
}