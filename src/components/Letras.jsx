import useLetras from "../hooks/useLetras";

const Letras = () => {

    const {letra, cargando} = useLetras()

    return ( 
        cargando ? 'Cargando...' : <div className="letra">{letra}</div>
     );
}
 
export default Letras;