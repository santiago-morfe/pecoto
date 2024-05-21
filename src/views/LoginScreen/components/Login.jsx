export function Login () {
  return (
    <form >
      <h1>Iniciar Sesión</h1>
      <input
        type='text'
        placeholder='Nombre'
        autoComplete='username'
      />
      <input
        type='password'
        placeholder='Contraseña'
        autoComplete='current-password'
      />
      <button
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}
