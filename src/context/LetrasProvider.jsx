import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LectrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [cargando, setCargando] = useState(false);

    const busquedaLetras = async (busqueda) => {
        setCargando(true)
        try {
            const {artista, cancion} = busqueda;

            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

            const resultado = await axios.get(url)

            setLetra(resultado.data.lyrics)
            setAlerta('')
        } catch (error) {
            setAlerta('Cancion No Encontrada')
        }

        setCargando(false)
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetras,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LectrasProvider
}

export default LetrasContext;