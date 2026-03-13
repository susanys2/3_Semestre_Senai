/** @type {{ [key: string]: import('react').CSSProperties }} */

export const estilos = {
    tituloModulo: {
        color: '#783434',
        fontWeight: 'bold'
    },
    descricaoModulo: {
        fontStyle: 'italic'
    },
    fundo: {
        backgroundColor:'#d0d0d0',
        minHeight: '100vh'
    },
    conteudo: {
        maxHeight: 1200,
        margin: '0 auto',
        padding: 24
    },
    lista_aulas: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16

    },
    cardAula: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '100%', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },

    quadrado:{
        width: 100,
        height: 100,
    },

    tituloLogin:{
        fontSize: '30px',
        padding: '5px',
        color: '#be0b0b',

    },
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#d0d0d0',
        padding: '20px',
        margin: '10px auto',
        width: '300px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px',
    
        
    },

    
}