const Button = ({ onClick, color = '#FF9F43' }) => {
  return (
    <button 
      className="fortune-button" 
      onClick={onClick}
      style={{
        backgroundColor: color,
        transition: 'all 0.3s ease'
      }}
    >
      Probar mi suerte
    </button>
  )
}

export default Button