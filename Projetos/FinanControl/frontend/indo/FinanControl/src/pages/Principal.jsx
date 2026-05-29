import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Principal() {

    const [dadosLogin, setDadosLogin] = useState(null)
    const navigate = useNavigate();

    useEffect( () => {
        async function buscarUsuario(){
            const usuarioLogado = await localStorage.getItem(`UsuarioLogado`)
            if (usuarioLogado){
                setDadosLogin(JSON.parse(usuarioLogado))
            }
        }
        buscarUsuario()
    }, []);

    function botaoLogout (){
        localStorage.removeItem(`UsuarioLogado`)
        setDadosLogin(null)
        navigate(`/`)
    }

    return (
        <div>
            <div style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px', borderBottom: '1px solid #ccc'
            }}>
                <p style={{fontSize: '18px'}}>Usuário: {dadosLogin?.usuario?.nome || ''}</p>
                <p style={{fontSize: '18px'}}>Email: {dadosLogin?.usuario?.email || ''}</p>
                <button onClick={botaoLogout} >Sair</button> 
            </div>
            <h2>Principal</h2>
        </div>
    )
}