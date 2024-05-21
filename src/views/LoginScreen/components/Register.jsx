export function Register () {
  return (
    <form >
      <h1>Únete a Pecoto</h1>
      <input
        type='text'
        placeholder='Nombre'
        autoComplete='username'
        required
      />
      <input
        type='password'
        placeholder='Contraseña'
        autoComplete='new-password'
        required
      />
      <input
        type='password'
        placeholder='Confirmar contraseña'
        autoComplete='new-password'
        required
      />
      <button
        type="submit"
      >
        Registrarse
      </button>
    </form>
  )
}
