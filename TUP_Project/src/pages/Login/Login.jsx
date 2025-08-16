import './Login.css';
import Button from '@mui/material/Button';

function Login(){
return(
    <>
<div className='Contenedor_Login'>
        <header className='Titulo_Login'>
        <p>Inicio de Sesión</p>
    </header>
     <div className='Contenedor_Formulario'>
        <form className="Formulario">
      <input type="email" name="Correo" id="Correo" placeholder='Correo Electronico' />
      <input type="password" name="Password" id="Password" placeholder='Contraseña' />
     <Button variant="contained" size="small" className='Boton_Login'>
          Iniciar Sesion
        </Button>
     </form>
     </div>
</div>
     
    
    </>
)
}

export default Login