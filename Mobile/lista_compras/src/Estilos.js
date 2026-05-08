import { StyleSheet } from "react-native";

export const corPrincipal = '#56b6ff';
export const corSecundaria = '#706ef9';
export const corTextos = '#f2f2f2';
export const corFundo = '#0d0d0d';
export const corFundo2 = '#262626';
export const corPlaceHolder = '#808080';

const Estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: corFundo
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20
    },
    logo: {
        width: 300,
        height: 40
    },
    input_container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        flex: 1,
        width: 50,
        backgroundColor: corFundo2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: corPrincipal,
        marginRight: 6,
        paddingHorizontal: 10,
        color: corTextos,
        fontSize: 16
    },
    botao: {
        width: 50,
        borderRadius: 6,
        backgroundColor: corSecundaria,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        color: corTextos,
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 5
    },
    corpo: {
        flex: 1,
        paddingHorizontal: 20
    },
    botaoItem: {
        backgroundColor: corFundo2,
        borderRadius: 8,
        marginBottom: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: corPlaceHolder
    },
    textoBotaoItem: {
        fontSize: 16,
        color: corTextos
    },
    textoBotaoItemComprado: {
        fontSize: 16,
        color: corPlaceHolder,
        textDecorationColor: 'line-through',
    },
    viewContadores:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
    },
    contador1:{
        fontWeight: 'bold',
        color: corPrincipal,
    },
    contador2:{
        fontWeight: 'bold',
        color: corSecundaria,
    },
    numero:{
        color: corTextos,
        backgroundColor: corFundo2,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        borderRadius: 50,

    }

});

export default Estilos;